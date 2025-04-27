import type { PageServerLoad } from './$types';

interface Post {
	title: string;
	date: string;
	slug: string;
}

interface PostModule {
	metadata: {
		title: string;
		date: string;
	};
}

export const load: PageServerLoad = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob<PostModule>('/src/posts/*.md')).map(
			async ([path, resolver]) => {
				const post = await resolver();
				const slug = path.split('/').pop()?.replace('.md', '') ?? '';
				return { ...post.metadata, slug };
			}
		)
	);

	return {
		posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
};

import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

interface PostModule {
	default: ComponentType;
	metadata: {
		title: string;
		date: string;
	};
}

export const load: PageLoad = async ({ params }) => {
	try {
		const post = (await import(`../../../posts/${params.slug}.md`)) as PostModule;
		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch {
		throw new Error(`Could not find post ${params.slug}`);
	}
};

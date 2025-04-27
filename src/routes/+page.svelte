<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Vinicius</title>
	<meta property="og:title" content="Vinicius" />
</svelte:head>

<main class="max-w-prose mx-auto px-4 py-8 flex flex-col">
	<div class="space-y-8">
		{#each data.posts as post}
			<article>
				<h3 class="text-2xl font-normal mb-1">
					<a href="/blog/{post.slug}" class="text-gray-800 hover:text-gray-600 transition-colors"
						>{post.title}</a
					>
				</h3>
				<time datetime={post.date} class="text-gray-500 text-sm"
					>{new Date(post.date).toISOString().split('T')[0]}</time
				>
			</article>
		{/each}
	</div>
</main>

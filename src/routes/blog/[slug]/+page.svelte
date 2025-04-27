<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const {
		content,
		metadata: { title, date }
	} = data;
</script>

<svelte:head>
	<title>{title} - Vinicius</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article class="post">
	<header>
		<h1>{title}</h1>
		<time datetime={date}
			>{new Date(date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}</time
		>
	</header>

	<div class="content">
		<svelte:component this={content} />
	</div>
</article>

<style>
	.post {
		width: 100%;
	}

	header {
		margin-bottom: 2rem;
		text-align: center;
	}

	h1 {
		font-weight: 400;
		margin-bottom: 0.5rem;
	}

	time {
		color: var(--color-text-light);
		font-size: 0.9em;
	}

	.content :global(h2) {
		font-weight: 400;
		margin-top: 2rem;
	}

	.content :global(pre) {
		margin: 1rem 0;
	}

	.content :global(ul) {
		line-height: 1.5;
		padding-left: 1.2em;
	}

	.content :global(li) {
		margin: 0.5rem 0;
	}
</style>

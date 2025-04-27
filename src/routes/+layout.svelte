<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import Tabs from './Tabs.svelte';
	import { onMount } from 'svelte';

	export let data: LayoutData; // noqa

	let theme = 'light';

	onMount(() => {
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
		document.documentElement.setAttribute('data-theme', theme);
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}
</script>

<svelte:head>
	<meta name="description" content="Personal blog and notes" />
</svelte:head>

<div class="layout">
	<header>
		<Tabs />
		<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
			{#if theme === 'light'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line
						x1="12"
						y1="21"
						x2="12"
						y2="23"
					></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line
						x1="18.36"
						y1="18.36"
						x2="19.78"
						y2="19.78"
					></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"
					></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line
						x1="18.36"
						y1="5.64"
						x2="19.78"
						y2="4.22"
					></line></svg
				>
			{/if}
		</button>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	:root {
		--font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		--color-bg: #fafbfc;
		--color-text: #23272f;
		--color-border: #e0e4ea;
		--color-accent: #007aff;
		--header-height: 3.5rem;
		--max-width: 700px;
		--tab-bg-active: #f4f4f5; /* light: zinc-100 */
		--tab-text-active: #18181b; /* light: zinc-900 */
		--tab-text: #52525b; /* light: zinc-600 */
		--tab-text-hover: #18181b; /* light: zinc-900 */
	}

	:root[data-theme='dark'] {
		--color-bg: #1a1a1a;
		--color-text: #e0e0e0;
		--color-border: #2d2d2d;
		--color-accent: #0a84ff;
		--tab-bg-active: #23272f; /* dark: a bit lighter than bg */
		--tab-text-active: #e0e0e0; /* dark: light text */
		--tab-text: #a1a1aa; /* dark: zinc-400 */
		--tab-text-hover: #fafbfc; /* dark: near white */
	}

	.layout {
		font-family: var(--font-main);
		background: var(--color-bg);
		color: var(--color-text);
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 0 10px;
		font-size: 0.95rem;
	}

	header {
		height: var(--header-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1.5px solid var(--color-border);
		box-shadow: 0 1px 0 0 var(--color-border);
		margin-bottom: 2.5rem;
		background: var(--color-bg);
		padding: 0 1rem;
	}

	.theme-toggle {
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s;
	}

	.theme-toggle:hover {
		background-color: var(--color-border);
	}

	main {
		flex: 1;
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding-bottom: 2rem;
		font-size: 0.97rem;
		line-height: 1.7;
	}

	@media (max-width: 600px) {
		.layout {
			padding: 0 0.5rem;
			font-size: 0.92rem;
		}
		main {
			font-size: 0.93rem;
		}
	}
</style>

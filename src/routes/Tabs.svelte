<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="flex space-x-4">
	<a
		href="/blog"
		class="tab-link"
		class:active-tab={$page.url.pathname.startsWith('/blog') || $page.url.pathname === '/'}
	>
		Blog
	</a>
	<a
		href="/notes"
		class="tab-link disabled-tab"
		class:active-tab={$page.url.pathname.startsWith('/notes')}
		aria-disabled="true"
		tabindex="-1"
		on:click|preventDefault
	>
		Notes
	</a>
</nav>

<style>
	.tab-link {
		padding: 0.5rem 1rem;
		border-radius: 0.75rem;
		font-size: 1.125rem;
		transition:
			background 0.2s,
			color 0.2s;
		color: var(--tab-text);
		background: none;
		text-decoration: none;
		opacity: 0.8;
	}
	.tab-link.active-tab {
		background: var(--tab-bg-active);
		color: var(--tab-text-active);
		opacity: 1;
	}
	.tab-link:hover:not(.disabled-tab):not(.active-tab) {
		color: var(--tab-text-hover);
		opacity: 1;
	}
	.disabled-tab {
		cursor: not-allowed;
		opacity: 0.5;
		pointer-events: none;
	}
</style>

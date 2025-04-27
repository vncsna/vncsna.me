// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	module '*.md' {
		import type { ComponentType } from 'svelte';

		export const metadata: {
			title: string;
			date: string;
		};

		const component: ComponentType;
		export default component;
	}
}

export {};

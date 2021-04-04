<script context="module" lang="ts">
	import type IShowcase from './_showcase';
	export async function load({ fetch }) {
		const response = await fetch(`/showcase.json`)

		if (response.ok) {
			return {
				props: {
					showcase: await response.json()
				}
			}
		}
	}
</script>

<style>
	#photos {
		/* Prevent vertical gaps */
		line-height: 0;
		column-count: 4;
		column-gap: 0px;
	}
	.photo {
		width: 100%;
		height: auto;
	}
	.photo img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 1000px) {
		#photos {
			-moz-column-count:    3;
			-webkit-column-count: 3;
			column-count:         3;
		}
	}
	@media (max-width: 800px) {
		#photos {
			-moz-column-count:    2;
			-webkit-column-count: 2;
			column-count:         2;
		}
	}
	@media (max-width: 400px) {
		#photos {
			-moz-column-count:    1;
			-webkit-column-count: 1;
			column-count:         1;
		}
	}
</style>

<svelte:head>
	<title>Showcase</title>
</svelte:head>

<script lang="ts">
	export let showcase: IShowcase[];
</script>
<section id="photos">
	{#each showcase as showcaseLoop}
		<div class="photo">
			<img src="/showcase/{showcaseLoop.slug}.webp" alt={showcaseLoop.description}/>
		</div>
	{/each}
</section>
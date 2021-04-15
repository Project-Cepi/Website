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

<style lang="scss">
	#photos {
		line-height: 0;
		column-count: 3;
		column-gap: 0px;
	}
	.photo {
		width: 100%;
		height: auto;

		.photo-description {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center; /** Y-axis align **/
			justify-content: center; /** X-axis align **/
			color: rgba(0,0,0,0);
			transition: 200ms background, 200ms color;
			font-size: 1rem;

			&:hover {
				background: rgba(255, 255, 255, 0.5);
				color: rgba(0,0,0,1);
			}
		}

		img {
			width: 100%;
			height: auto;
			z-index: 0;
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
			<div class="photo-description">
				<p>{showcaseLoop.description}</p>
			</div>
		</div>
	{/each}
</section>
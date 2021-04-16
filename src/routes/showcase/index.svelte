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
		display: grid;
		gap: 0px;

		grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
		grid-auto-flow: dense;
		grid-auto-rows: auto 1fr;
	}

	@keyframes photoCreation {
		from {
			opacity: 0;
			transform: scale(0.2);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.photo {
		width: 100%;
		height: auto;
		position: relative;
		animation: photoCreation 600ms ease-out;
		animation-fill-mode: backwards;
		display: flex;

		.photo-description {
			position: absolute;
			top: 0;
			width: calc(100%);
			height: calc(100%);
			display: grid;
			place-items: center;
			color: rgba(0,0,0,0);
			transition: 200ms background, 200ms color;
			text-align: center;

			&:hover {
				background: rgba(66, 135, 245, 0.5);
				color: rgba(255,255,255,1);
			}
		}

		img {
			width: 100%;
			height: auto;
			z-index: 0;
			object-fit: cover;

		}

	}

	@for $i from 1 through 11 {
		.photo:nth-child(#{$i}) {
			animation-delay: calc(30ms * #{$i});
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
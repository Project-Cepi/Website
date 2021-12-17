<svelte:head>
	<title>About Cepi</title>
</svelte:head>

<script context="module" lang="ts">
	export async function load({ fetch }) {
		const response = await fetch(`/about.json`)

		if (response.ok) {
			return {
				props: {
					about: await response.text()
				}
			}
		}
	}
</script>

<script>
	import Container from '$lib/Container.svelte'

	import marked from "marked";

	export let about
</script>

<Container>
	{@html marked(about)}
</Container>
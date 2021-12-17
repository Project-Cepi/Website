<script lang="ts">
	import DiscordLogo from "./DiscordLogo.svelte";

	interface Social {
		url: string,
		component: any
	}

	const socialLinks: Social[] = [{
		url: "https://discord.cepi.world",
		component: DiscordLogo
	}]
</script>

<div id="main" class="bg-gradient-to-r from-cyan-400 to-green-300 w-screen h-screen justify-evenly content-around flex flex-col items-center text-center">
	<h1 class="font-extrabold text-body drop-shadow-lg text-9xl text-white">cepi.world</h1>
	<iframe title="Cepi Trailer" class="h-1/2 aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/2VJqyIaiUD8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	{#each socialLinks as {url, component}}
		<a href={url} class="drop-shadow-lg"><svelte:component this={component}/></a>
	{/each}
</div>
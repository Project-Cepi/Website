<script lang="ts">
	import DiscordLogo from "$lib/DiscordLogo.svelte";
	import YoutubeLogo from "$lib/YoutubeLogo.svelte";
	import TwitterLogo from "$lib/TwitterLogo.svelte";
	import InstagramLogo from "$lib/InstagramLogo.svelte"

	interface Social {
		url: string,
		component: any
	}

	const socialLinks: Social[] = [
		{
			url: "https://discord.cepi.world",
			component: DiscordLogo
		},
		{
			url: "https://youtube.cepi.world",
			component: YoutubeLogo
		},
		{
			url: "https://twitter.cepi.world",
			component: TwitterLogo
		},
		{
			url: "https://instagram.cepi.world",
			component: InstagramLogo
		}
	]
</script>

<div id="main" class="animate-gradient-x bg-gradient-to-r from-cyan-300 to-green-300 w-screen h-screen justify-evenly content-around flex flex-col items-center text-center">
	<h1 class="font-extrabold text-body drop-shadow-lg text-9xl text-white">cepi<span class="text-black">.</span>world</h1>
	<iframe title="Cepi Trailer" class="h-1/2 aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/2VJqyIaiUD8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<div id="socials" class="flex h-12">
		{#each socialLinks as {url, component}}
			<a class="m-1" href={url}><svelte:component this={component}/></a>
		{/each}
	</div>
</div>
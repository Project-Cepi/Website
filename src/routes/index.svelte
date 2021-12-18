<script lang="ts">
	import GithubLogo from "$lib/GithubLogo.svelte"
	import DiscordLogo from "$lib/DiscordLogo.svelte";
	import YoutubeLogo from "$lib/YoutubeLogo.svelte";
	import TwitterLogo from "$lib/TwitterLogo.svelte";
	import InstagramLogo from "$lib/InstagramLogo.svelte"

	interface Social {
		url: string,
		component: any
	}

	interface Link {
		name: string,
		url: string
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
		},
		{
			url: "https://github.cepi.world",
			component: GithubLogo
		}
	]

	const normalLinks: Link[] = [
		{
			name: "yard",
			url: "https://project-cepi.github.io"
		},
		{
			name: "dev",
			url: "https://cepi.world/dev"
		}
	]

	const copyText = (str: string) => navigator.clipboard.writeText(str)
</script>

<div id="main" class="animate-gradient-x bg-gradient-to-r from-cyan-300 to-green-300 w-screen h-screen justify-evenly content-around flex flex-col items-center text-center">
	<h1
		class="font-extrabold text-body drop-shadow-lg text-9xl text-white"
		on:click={() => copyText("cepi.world")}
	>cepi.world</h1>
	<p class="bg-white text-black px-4 py-2 rounded-xl shadow-lg drop-shadow-lg">
		<span on:click={() => copyText("build.cepi.world")}>build.cepi.world</span>
		|
		<span on:click={() => copyText("dev.cepi.world")}>dev.cepi.world</span>
	</p>
	<iframe title="Cepi Trailer" class="h-1/2 aspect-video rounded-lg shadow-lg border-8 border-white" src="https://www.youtube.com/embed/2VJqyIaiUD8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<div id="socials" class="flex h-12">
		{#each socialLinks as {url, component}}
			<a class="m-1" href={url}><svelte:component this={component}/></a>
		{/each}
	</div>
	<div id="links" class="flex h-12 drop-shadow-xl">
		{#each normalLinks as {name, url}, i}
			<a class="font-bold text-white text-3xl" href={url}>{name}</a>
			{#if normalLinks.length - 1 !== i}
				<span class="text-white text-3xl mx-5">|</span>
			{/if}
		{/each}
	</div>
</div>
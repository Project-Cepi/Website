<script>
	import Container from '$lib/Container.svelte'
</script>

<style lang="scss">

	@use "../lib/colors.scss";

	h1 {
		font-size: 4.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: center;
		background: linear-gradient(90deg, colors.$first 0%, colors.$second, colors.$first);
		background-clip: text;
		background-size: 200% auto;
		background-repeat: repeat;
		text-align: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		padding-bottom: 30px;
		border-bottom: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to right,  colors.$first, colors.$second);
	}
	p {
		margin: 1em auto;
		font-size: 1.8em;
		text-align: center;
		color: #858585;
	}
	
</style>

<svelte:head>
	<title>Cepi</title>
</svelte:head>

<Container>
	<h1>Taking MINECRAFT MMOs to the next level</h1>
	<p>We're a group of talented people working together to make a multiplayer & exploration focused MMORPG </p>
</Container>
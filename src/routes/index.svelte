<script>
	import Container from '../components/Container.svelte'
</script>

<style>
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: center;
		background: linear-gradient(90deg, rgba(41,214,78,1) 0%, rgba(0,185,255,1) 50%, rgba(41,214,78,1) 100%);
		background-clip: text;
		background-size: 200% auto;
		background-repeat: repeat;
		text-align: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	p {
		margin: 1em auto;
	}
	
</style>

<svelte:head>
	<title>Cepi</title>
</svelte:head>

<Container>
	<h1>Taking MINECRAFT MMOs to the next level.</h1>
	<p>We're a team of builders, writers, game desginers, and developers, working together to make a MMORPG that is truly playable by you and your friends. </p>
</Container>
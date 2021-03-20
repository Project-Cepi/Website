<script>
	import Container from '../components/Container.svelte'
</script>

<style>
	h1 {
		font-size: 4.8em;
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
		padding-bottom: 30px;
		border-bottom: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to right,  rgba(41,214,78,1), rgba(0,185,255,1));
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
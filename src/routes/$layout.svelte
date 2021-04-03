<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	export let segment: string;
	import '../app.scss';
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer></Footer>
<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment: string;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer></Footer>
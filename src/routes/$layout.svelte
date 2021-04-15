<script lang="ts">

	import { page } from '$app/stores';

	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.scss';
	import PageTransition from '$lib/PageTransition.svelte';
</script>

<Nav segment={$page.path}/>
<PageTransition refresh={$page.path}>
	<main>
		<slot></slot>
	</main>
</PageTransition>

<Footer></Footer>
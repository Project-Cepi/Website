<script lang="ts">

	import { page } from '$app/stores';

	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.scss';
</script>

<Nav segment={$page.path}/>
<main>
	<slot></slot>
</main>

<Footer></Footer>
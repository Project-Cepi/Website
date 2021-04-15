<script lang="ts">
	export let segment: string;
</script>

<style lang="scss">
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	ul {
		margin: 0;
		padding: 0;

		// Clearfix
		&::after {
			content: '';
			display: block;
			clear: both;
		}

	}

	li {
		display: block;
		float: left;
	}

	.page {
		position: relative;
		display: inline-block;

		&::after {
			position: absolute;
			content: '';
			width: calc(100% - 1em);
			height: 2px;
			background-color: rgb(76, 230, 0);
			display: block;
			bottom: -1px;
			
		}
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	
	li.social {
		float: right;
		text-align: right;
	}
</style>

<nav>
	<ul>
		<li><a class="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a class="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		<li><a sveltekit:prefetch class="{segment === 'showcase' ? 'page' : undefined}" href="showcase">showcase</a></li>

		<li class="social"><a href="https://forums.cepi.world" target="_blank">forum</a></li>
		<li class="social"><a href="https://youtube.cepi.world" target="_blank">youtube</a></li>
		<li class="social"><a href="https://github.cepi.world" target="_blank">github</a></li>
		<li class="social"><a href="https://discord.cepi.world" target="_blank">discord</a></li>
		<li class="social"><a href="https://twitter.cepi.world" target="_blank">twitter</a></li>
		<li class="social"><a href="https://instagram.cepi.world" target="_blank">instagram</a></li>

	</ul>
</nav>

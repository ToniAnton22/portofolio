<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import Laptop from 'svelte-material-icons/Laptop.svelte';

	var size = '4em';
	const selected = derived(page, ($page) => $page.url.pathname);
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/"> TONI IT LTD</a></svelte:fragment>
			<svelte:fragment slot="trail">
				<div> <a href="/"> Shop </a> </div>
				<div> <a href="/main/about">About </a></div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->

</AppShell>
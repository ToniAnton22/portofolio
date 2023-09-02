<script lang="ts">
	import { onMount } from 'svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { draw, fade, fly } from 'svelte/transition';
	import { backIn, backInOut, bounceIn, elasticInOut, expoOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	export let subtitle = 'Browse and find what interests you';
	export let inProgress = false;
	export let animatedText = [
		'W',
		'E',
		'L',
		'C',
		'O',
		'M',
		'E',
		' ',
		'T',
		'O',
		' ',
		'T',
		'O',
		'N',
		'I',
		' ',
		'I',
		'T',
		' ',
		'L',
		'T',
		'D'
	];

	let isAnimating = false;

	const sendRequest = () =>{
		//call api
	}

	// onMount(()=> {
	// 	// Set up Three.js scene, camera, lights, and cards
	// 	// Render the scene
	// 	const scene = new THREE.Scene();
	// 	const camera = new THREE.PerspectiveCamera(
	// 		75,
	// 		window.innerWidth / window.innerHeight,
	// 		0.1,
	// 		1000
	// 	);

	// 	const renderer = new THREE.WebGLRenderer();
	// 	renderer.setSize(window.innerWidth, window.innerHeight);
	// 	document.body.appendChild(renderer.domElement);

	// 	const geometry = new THREE.BoxGeometry(1, 1, 1);
	// 	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	// 	const cube = new THREE.Mesh(geometry, material);
	// 	scene.add(cube);

	// 	camera.position.z = 5;

	// 	function animate() {
	// 		requestAnimationFrame(animate);

	// 		cube.rotation.x += 0.01;
	// 		cube.rotation.y += 0.01;

	// 		renderer.render(scene, camera);
	// 	}

	// 	animate();
	// });
</script>

<div>
	<SlideToggle name="animation" bind:checked={isAnimating} class="mx-4 my-4" size="sm"
		>{isAnimating ? 'Animation On' : 'Animation Off'}</SlideToggle
	>
	<div class="flex flex-col w-full h-full mx-4 self-center items-center">
		<div class="flex w-full">
			<div class=" p-4">
				<h1 class=" text-4xl text-white font-bold">
					{#if isAnimating}
						{#each animatedText as text, i}
							<span
								class=""
								in:fly={{
									y: -100,
									delay: 200 * i,
									duration: 3000,
									easing: expoOut
								}}
								
								>{text}</span
							>
						{/each}
					{/if}
					{#if !isAnimating}
						{#each animatedText as text, i}
							<span
								class={inProgress ? 'opacity-0' : 'opacity-1'}
								in:fade={{
									duration: 500,
									delay: 500
								}}
								out:fade={{duration:0}}
								>{text}</span
							>
						{/each}
					{/if}
				</h1>
				{#if isAnimating}
					<p
						class="text-lg text-white mt-2"
						in:fly={{
							y: -100,
							delay: 200,
							duration:1000,
							easing: expoOut
						}}
					>
						{subtitle}
					</p>
				{/if}
				{#if !isAnimating}
					<p
						class="text-lg text-white mt-2"
						out:fly={{
							delay: 200,
							easing: expoOut
						}}
					>
						{subtitle}
					</p>
				{/if}
			</div>
		</div>

		<div class="container mx-auto w-full">
			<div class="container flex flex-col mx-auto mt-10">
				<div class="flex flex-wrap justify-center">
					<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-inner">
						<div
							class="{isAnimating
								? 'obstacles'
								: ''} bg-inherit border p-4 rounded-3xl shadow-md text-center h-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-inner hover:shadow-indigo-400 hover:scale-110 duration-300"
						>
							<img src="web.png" alt="Product 1" class="product-image mx-auto rounded-full" />
							<div class="product-name font-semibold mt-2">Web applications</div>
							<div class="product-price text-blue-500 mt-1">
								Using the power of Nextjs and react
							</div>
							<button
								class="order-button bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
								>Send a Request</button
							>
						</div>
					</div>
					<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
						<div
							class="{isAnimating
								? 'obstacles'
								: ''} transition ease-in-out delay-150 product-card border p-4 rounded-3xl shadow-md text-center hober:-translate-y-1 hover:shadow-indigo-400 hover:scale-110 duration-300"
						>
							<img src="mobile.jpeg" alt="Product 3" class="product-image mx-auto rounded-full" />
							<div class="product-name font-semibold mt-2">Mobile Applications</div>
							<div class="product-price text-blue-500 mt-1">
								Android or iOS, both work the same!
							</div>
							<button
								class="order-button bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
								>Send a Request</button
							>
						</div>
					</div>
					<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-inner">
						<div
							class="{isAnimating
								? 'obstacles'
								: ''} border p-4 rounded-3xl shadow-md text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-inner hover:shadow-indigo-400 hover:scale-110 duration-300"
						>
							<img src="vr.jpeg" alt="Product 2" class="product-image mx-auto rounded-full" />
							<div class="product-name font-semibold mt-2">VR/AR applications</div>
							<div class="product-price text-blue-500 mt-1">Using the power of Unity and C#</div>
							<button
								class="order-button bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
								>Send a Request</button
							>
						</div>
					</div>
				</div>
				<div class="text-center my-10">Or, you can do a custom order!</div>
				<div class="w-3/4 p-4 self-center">
					<div class="product-card mb-10 bg-transparent border p-4 rounded-md shadow-md text-center transition ease-in-out delay-150 hove
					r:-translate-y-1 hover:shadow-inner hover:shadow-indigo-400 hover:scale-110 duration-300">
						<img src="header-image.jpg" alt="Custom Project" class="mx-auto h-64" />
						<div class="product-name font-semibold mt-2">Custom Project</div>
						<div class="product-price text-blue-500 mt-1">
							Whatever your requirments are, I will deliver the best product in the least amount of
							time.
						</div>
						<button
							class="order-button bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
							>Send a Request</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>

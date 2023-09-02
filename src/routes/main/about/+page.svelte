<script>
	export let title = 'About Us';

	const programmerInfo = {
		name: 'John Doe',
		bio:
			'Toni IT LTD is a small start-up company that takes which aims to naturally grow and provide quality software products and hardware products to ' +
			'their customers. '
	};

	const experienceInfo = {
		yearsOfExperience: 5,
		skills: [
			'Mobile Apps (Both iOS and Android)',
			'Web Applications',
			'Desktop application',
			'VR/AR applications',
			'Other small applications'
		]
	};

	const ownerDetails = {
		name: 'Cristian Anton Frincu',
		bio:
			'Cristian is a creative and passionate developer whose aims are to leave a mark in the industry using the novel technologies to ' +
			"innovate the way we learn things. In his eyes, learning is the barrier breaker, it's the tool which we humanity used for hundreds of years " +
			'to overcome our conditions. With fun and accessible learning experiences, more people will be inclined, which will create more innovations to make ' +
			'everything better!',
		experience:
			'Cristian is experienced in web, VR, AR, mobile, and desktop applications, having being a part of many group and individual projects, and ' +
			'is currently a part-time developer at FellowBot, another start-up which aims to revolutionalize the word using novel techonologies.'
	};

	const motivationalQuote = {
		text: 'The only way to do great work is to love what you do.',
		author: 'Steve Jobs'
	};
	const motivationalQuote2 = {
		text: "Cybersecurity is a continuous process, not a one-time task. It's a journey that demands constant vigilance and improvement.",
		author: 'Bruce Schneier'
	};
	const motivationalQuote3 = {
		text: 'Customer satisfaction is the most important metric to track because happy customers are the best advertisement for your business.',
		author: 'Gurbaksh Chahal'
	};
</script>

<div class="p-4">
	<div class="flex flex-col container mx-auto">
		<h1 class="text-4xl font-bold mb-4">{title}</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<!-- Programmer Hero -->
			<div class="p-6 bg-transparent shadow-md rounded-lg">
				<h2 class="text-xl font-semibold">Who Are we?</h2>
				<p class="mt-2">{programmerInfo.bio}</p>
			</div>

			<!-- Experience Hero -->
			<div class="p-6 bg-transparent shadow-md rounded-lg">
				<h2 class="text-xl font-semibold">Experience</h2>
				<p class="mt-2">We work with any kind of application, such as:</p>
				<ul class="mt-2 list-disc ml-6">
					{#each experienceInfo.skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
				<br />
				<p>Just tell us what you need and we will take care of it!</p>
			</div>

			<!-- Motivational Quote Hero -->
			<div class="p-6 transparent shadow-md rounded-lg">
				<h2 class="text-xl font-semibold">We stand by</h2>
				<blockquote class="mt-2">
					<p>{motivationalQuote.text}</p>
					<cite class="block text-right mt-2">{motivationalQuote.author}</cite>
					<br />
					<p>{motivationalQuote2.text}</p>
					<cite class="block text-right mt-2">{motivationalQuote2.author}</cite>
					<br />
					<p>{motivationalQuote3.text}</p>
					<cite class="block text-right mt-2">{motivationalQuote3.author}</cite>
				</blockquote>
			</div>
			<div class="p-6 bg-transparent shadow-md rounded-lg">
				<h2 class="text-xl font-semibold">About the owner</h2>
				<p class="mt-2">We work with any kind of application, such as:</p>
				<p>{ownerDetails.bio}</p>
				<br />
				<h2>His Experience</h2>
				<p>{ownerDetails.experience}</p>
			</div>
		</div>
		<a
			href="/"
			class="border-4 border-violet-950 text-center bg-inherit mx-auto p-2 my-4 shadow-xl border-s-fuchsia-700 rounded-lg border-t-slate-400 hover:bg-sky-600 hover:animate-pulse"
			>Shop!</a
		>
	</div>
</div>

<script lang="ts">
</script>

<section class="projects-showcase py-24 px-4 md:px-8">
	<div class="container max-w-6xl mx-auto">
		<h2 class="section-title mb-16 reveal">Projects</h2>

		<!-- MustSeen Showcase -->
		<div class="project-card mb-16 reveal">
			<div class="project-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
				<div class="project-visual order-2 lg:order-1">
					<div
						class="w-full aspect-video bg-cover bg-center rounded-xl shadow-2xl border border-gray-800"
						style="background-image: url('/images/mustseen-dashboard.png'); background-color: #1a1a1a;"
					>
						<!-- <div class="w-full h-full flex items-center justify-center bg-linear-to-br from-electric-blue/10 to-transparent rounded-xl">
							<span class="text-6xl">🌍</span>
						</div> -->
					</div>
				</div>
				<div class="project-info order-1 lg:order-2">
					<h3 class="text-3xl md:text-4xl font-bold mb-4">MustSeen</h3>
					<p class="text-xl mb-6 text-electric-blue font-semibold">
						The Ground Truth Engine for AI Travel
					</p>

					<div class="problem-solution space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-lg mb-2 text-gray-300">Problem</h4>
							<p class="text-gray-400">
								AI models hallucinate travel information, creating impossible itineraries.
							</p>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2 text-gray-300">Solution</h4>
							<p class="text-gray-400">
								Real-time validation against live flight data, hotel availability, and ground truth.
							</p>
						</div>
					</div>

					<div class="tech-used mb-6">
						<h4 class="font-semibold text-lg mb-3 text-gray-300">Tech Stack</h4>
						<div class="flex flex-wrap gap-2">
							<span class="badge">Python</span>
							<span class="badge">Amadeus API</span>
							<span class="badge">Supabase</span>
							<span class="badge">Next.js</span>
						</div>
					</div>

					<a
						href="https://must-seen.com"
						target="_blank"
						rel="noopener noreferrer"
						class="cta-button inline-block"
					>
						Visit MustSeen →
					</a>
				</div>
			</div>
		</div>

		<!-- Spiritual Companion Showcase -->
		<div class="project-card reveal">
			<div class="project-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
				<div class="project-info">
					<h3 class="text-3xl md:text-4xl font-bold mb-4">Spiritual Companion</h3>
					<p class="text-xl mb-6 text-purple-400 font-semibold">Faith meets Technology</p>

					<p class="text-gray-400 mb-6 leading-relaxed">
						Ein digitaler Begleiter für das geistliche Leben. Nutzt KI, um Gebetsroutinen,
						Bibelstudium und spirituelle Reflexion zu unterstützen.
					</p>

					<div class="tech-used mb-6">
						<h4 class="font-semibold text-lg mb-2 text-gray-300">Status</h4>
						<p class="text-gray-400">Currently in Development</p>
					</div>
				</div>
				<div class="project-visual">
					<div
						class="placeholder-card bg-linear-to-br from-purple-900/30 to-gray-900 rounded-xl p-12 text-center border border-gray-800 aspect-video flex items-center justify-center"
					>
						<div>
							<span class="text-6xl block mb-4">✨</span>
							<p class="text-2xl font-semibold text-gray-400">Coming Soon</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
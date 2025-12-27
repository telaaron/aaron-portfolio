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
					<p class="text-xl mb-6 text-purple-400 font-semibold">Theologically Safe AI for Faith Conversations</p>

					<div class="problem-solution space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-lg mb-2 text-gray-300">Problem</h4>
							<p class="text-gray-400">
								AI tools for spiritual content generate theologically incorrect responses.
							</p>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2 text-gray-300">Solution</h4>
							<p class="text-gray-400">
								Every AI response is anchored to verified Bible verses through vector search—combining conversational empathy with theological accuracy.
							</p>
						</div>
					</div>

					<div class="tech-used mb-6">
						<h4 class="font-semibold text-lg mb-3 text-gray-300">Tech Stack</h4>
						<div class="flex flex-wrap gap-2">
							<span class="badge">FastAPI</span>
							<span class="badge">Google Vertex AI</span>
							<span class="badge">FAISS</span>
							<span class="badge">LangChain</span>
						</div>
					</div>

					<div class="tech-used mb-6">
						<h4 class="font-semibold text-lg mb-2 text-gray-300">Status</h4>
						<p class="text-gray-400">PoC completed - Pitched to YouVersion</p>
					</div>
				</div>
				<div class="project-visual">
					<img
						src="/images/spiritual-companion.jpg"
						alt="Spiritual Companion App"
						class="rounded-xl w-full h-auto object-cover border border-gray-800"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
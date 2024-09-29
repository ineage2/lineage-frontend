<script setup lang="ts">

</script>

<template>
	<section class="servers">
		<div class="servers-inner container-inner">
			<div class="servers-container servers-status">
				<div class="servers-status-title">
					<h3
							data-aos="fade-left"
							class="aos-init aos-animate">🔥{{ $t('welcome.servers.servers-title') }}</h3></div>
				<ui-card-primary data-aos="fade-in" data-aos-delay="200" data-aos-duration="500">
					<div class="servers-status-title-servers">
						<div>
							<p class="text-white">wdwdowhdowhdoiwhd</p>
						</div>
					</div>
				</ui-card-primary>
			</div>
			<div class="servers-container servers-discord-panel" data-aos="fade-up" data-aos-delay="200"
			     data-aos-duration="500">
				<iframe src="https://discord.com/widget?id=499879528085323776&theme=dark" width="100%" height="500"
				        allowtransparency="true" frameborder="0"
				        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
			</div>
		</div>
	</section>
</template>

<style scoped lang="less">
.servers {
@apply w-full;

	&-inner {
	@apply flex justify-between gap-5;
	}

	&-container {
		&:nth-child(1) {
		@apply w-full;
		}

		&:nth-child(2) {
		@apply w-1/2;
		}
	}

	&-status-title {
	@apply mb-5;

		h3 {
		@apply font-one-lord;
		}
		
		&-servers {
			@apply h-52;

		}
	}
}
</style>

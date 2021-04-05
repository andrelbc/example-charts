<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand logo fs-2 pt-3 fw-bold text-info" href="#">DashBoard</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link active" aria-current="page" href="/">Início</a>
						<a class="nav-link" href="#">Sobre</a>
					</div>
				</div>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "navbar",
};
</script>

<style>
.logo {
	font-family: "Condiment", cursive;
}
</style>
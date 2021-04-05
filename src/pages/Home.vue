<template>
	<div class="container">
		<div class="mt-5"><h1>Gŕaficos</h1></div>
		<div class="p-4"><bar-chart /></div>
		<div class="p-4"><radar-chart /></div>
        <div class="p-4"><line-chart /></div>
	</div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import RadarChart from "../components/RadarChart.vue";
import LineChart from "../components/LineChart.vue";

export default {
	name: "home",
	components: {
		BarChart,
		RadarChart,
        LineChart
	},
};
</script>

<style>
</style>
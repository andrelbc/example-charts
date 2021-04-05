

<script>
import { Bar } from "vue-chartjs";

export default {
	extends: Bar,
	mounted() {
		this.renderChart(
			{
				labels: [
					"Janeiro",
					"Fevereiro",
					"Março",
					"Abril",
					"Maio",
					"Junho",
					"Julho",
					"Agosto",
					"Setembro",
					"Outubro",
					"Novembro",
					"Dezembro",
				],
				datasets: [
					{
						label: "Dados 1",
						backgroundColor: "#0dcaf0",
						data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
					},
					{
						label: "Dados 2",
						backgroundColor: "#dddd",
						data: [25, 23, 75, 34, 76, 21, 54, 34, 54, 37, 15, 18],
					},
				],
			},
			{ responsive: true, maintainAspectRatio: false }
		);
	},
};
</script>

<style>
</style>
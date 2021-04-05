<script>
import { Line } from "vue-chartjs";

export default {
	extends: Line,
	mounted() {
		this.renderChart(
			{
				labels: [
					"Domingo",
					"Segunda",
					"Terça",
					"Quarta",
					"Quinta",
					"Sexta",
					"Sábado",
				],
				datasets: [
					{
						label: "Data 1",
						data: [5, 9, 7, 3, 0, 6, 20],
						backgroundColor: "transparent",
						borderColor: "rgba(1, 116, 188, 0.50)",
						pointBackgroundColor: "black",
					},
				],
			},
			{
				responsive: true,
				maintainAspectRatio: false,
			}
		);
	},
};
</script>
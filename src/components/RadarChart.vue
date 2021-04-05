<script>
import { Radar } from "vue-chartjs";

export default {
	extends: Radar,
	mounted() {
		this.renderChart(
			{
				labels: ["Fighting", "Versatility", "Farming", "Pushing", "Supporting"],
				datasets: [
					{
						label: "Oponente",
						backgroundColor: "rgba(179,181,198,0.2)",
						borderColor: "rgba(179,181,198,1)",
						pointBackgroundColor: "rgba(179,181,198,1)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(179,181,198,1)",
						data: [65, 59, 90, 81, 56],
					},
					{
						label: "Eu",
						backgroundColor: "rgba(179,181,198,0.2)",
						borderColor: "#0dcaf0",
						pointBackgroundColor: "#0dcaf0)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgba(255,99,132,1)",
						data: [28, 48, 40, 19, 96],
					},
				],
			},
			{ responsive: true, maintainAspectRatio: false }
		);
	},
};
</script>
<script>
import Chart from "chart.js/auto";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const socket = new WebSocket(SOCKET_URL);

function normalizeAngle() {
  let val = 0;
  if (robotStatus.value.speed !== undefined)
    val = Number(robotStatus.value.speed);
  return ((val - 0) / (100 - 0)) * 100;
}


function createDoughnutChart() {
  const ctx = chartRef.value.getContext("2d");
  const normalizedAngle = normalizeAngle();
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [normalizedAngle, 100 - normalizedAngle],
          backgroundColor: ["rgba(70, 130, 180, 0.7)", "rgba(230, 230, 230, 0.5)"],
          borderColor: ["rgba(70, 130, 180, 1)", "rgba(230, 230, 230, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false, // 범례를 표시하지 않음
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              let val = 0;
              if (robotStatus.value.speed !== undefined) val = Number(robotStatus.value.speed);
              const index = context.dataIndex;
              if (index === 0) return `${String(val)}`;
              return `${String(100 - val)}`;
            },
          },
        },
      },
      cutout: "70%", // 도넛 차트 내부를 비워줌
    },
  });
}

function updateChart() {
  const normalizedAngle = normalizeAngle();
  chartInstance.data.datasets[0].data[0] = normalizedAngle;
  chartInstance.data.datasets[0].data[1] = 100 - normalizedAngle;
  chartInstance.update();
}

onMounted(() => {
  if (chartRef.value) {
    chartInstance = createDoughnutChart();
  }
});

watch(
  () => robotStatus.value.speed,
  () => {
    if (chartInstance && robotStatus.value.speed !== undefined) {
      updateChart();
    }
  }
);


</script>

<template>
  <div>
    <h1>Status</h1>
    <p>상태 정보를 출력할 예정. 특히 차트</p>
  </div>
</template>

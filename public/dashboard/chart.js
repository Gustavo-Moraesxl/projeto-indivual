const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const data = {
  labels: labels,
  datasets: [{
    label: 'Acertos',
    data: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Defina os valores como 0 ou 1
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cor de fundo branca
    borderColor: 'rgba(255, 215, 0, 1)', // Cor da borda dourada
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 1 // Define o valor máximo do eixo y como 1
      }
    }
  },
};

const myChart1 = new Chart(document.getElementById("myChart1"), config);

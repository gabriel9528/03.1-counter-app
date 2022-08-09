import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  BarElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(LinearScale, LineElement, BarElement);

const GraficoBarra = () => {
  // const numero = faker.datatype.number({min: 0, max: 1000});

  const labels = ["Semana1", "Semana2", "Semana3", "Semana4"];
  const dataLinea = labels.map(() =>
    faker.datatype.number({ min: 1, max: 5 })
  );
  const dataBar = labels.map(() => faker.datatype.number({ min: 1, max: 5 }));
  const dataBar2 = labels.map(() => faker.datatype.number({ min: 1, max: 5 }));

//   const barra = {
//     Departamento: "Producción",
//     Area: "Community Manager",
//     Ptj1: "4.00",
//     Ptj2: "4.00",
//     Ptj3: "3.40",
//     Ptj4: "4.60",
//     Ptj5: "3.80",
//   };

  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        width: "10rem",
        fill: false,
        data: dataLinea,
      },
      {
        type: "bar",
        label: "Barra1",
        width: "10rem",
        borderColor: "white",
        borderWidth: 2,
        fill: false,
        data: dataBar,
      },
      {
        type: "bar",
        label: " Dataset 3",
        width: "10rem",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: dataBar2,
      },
    ],
  };
  return (
    <div>
      <Chart data={data} type="bar" />
    </div>
  );
};

export default GraficoBarra;

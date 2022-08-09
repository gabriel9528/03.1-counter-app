import React from "react";
import { Pie } from "react-chartjs-2";
import { meses_Años } from "../api/Data_Fecha";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import 'chartjs-plugin-datalabels';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
function GraficoPie_ObjAño() {
  const { año, area, meses, departamento } = meses_Años;

  // Declarando un array
  const meses_valor = Object.values(meses);

  const meses_claves = Object.keys(meses);

  // Funcion color
  const ColoresRgbRandom = () => {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 2));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const randomBetweenDouble = (min, max)=>min + Math.random()*(max-min+1);
    const d = randomBetweenDouble(0,1);
    const colo = `rgba(${r},${g},${b},${d})`;
    return colo;
  };

  const rgb = () => {
    let colores = [];
    for (let i = 0; i < meses_valor.length; i++) {
      if(ColoresRgbRandom()!==ColoresRgbRandom()){
        colores.push(ColoresRgbRandom());
      }
    }
    console.log(colores)
    return colores;
  };

  const data = {
    labels: meses_claves,
    datasets: [
      {
        data: meses_valor,
        backgroundColor: rgb(),
      },
    ]
  };

  const opciones = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position:'left',
        labels:{
          generateLabels(chart) {
            const data = chart.data;
            return data.labels.map((label,i)=>{
              var backgroundColor = data.datasets[0].backgroundColor[i];
              return {
                text: label + ' :' + data.datasets[0].data[i] + ' Inducidos',
                fillStyle: backgroundColor,
                index: i
              }
            })
          },
          font:{
            size:11,
            family: "Helvetica"
          },
          margin:{
            rigth: 8,
            left: 8
          },
          boxWidth: 15,
          color: 'white',
          usePointStyle: true,
          pointStyle:'rectRounded',
        }
      },
      title: {
        display: true,
        text: `Grafico por Año = ${año}`,
        font: {
          size: 45,
          family: "Helvetica Neue",
        },
        color: "orange",
      },
    },
  };
  return (
    <div>
      <Pie data={data} options={opciones} />
    </div>
  );
}

export default GraficoPie_ObjAño;

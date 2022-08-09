import React from "react";
import { Pie } from "react-chartjs-2";
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
import "chart.piecelabel.js";
import { meses_datos } from "../api/Data_Fecha";

function GraficoPie_Obj() {
  // Creando mapeo de datos
  const { mes, area, cantidadInducidos, departamento, semanas } = meses_datos;

  // const arreglos = [semana1, semana2, semana3, semana4];
  // Mapeando los datos de area x semana
  // const semanaxArea = arreglos.map((i) => i);
  // console.log(semanaxArea);

  const semanas_Clave = Object.keys(semanas);
  const semana_Valor = Object.values(semanas);


  const ColoresRgbRandom = () => {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const colo = `rgba(${r},${g},${b},0.5)`;
    return colo;
  };

  const rgb = () => {
    let colores = [];
    for (let i = 0; i < semana_Valor.length; i++) {
      if(ColoresRgbRandom()!==ColoresRgbRandom()){
        colores.push(ColoresRgbRandom());
      }
    }
    return colores;
  };



  const datos = {
    labels: semanas_Clave,
    datasets: [
      {
        label: "Mis datos",
        data: semana_Valor,
        backgroundColor: rgb()
        ,
        // backgroundColor: rgb(),
      },
    ],
  };

  const optiones = {
    responsive: true,
    // codigo por resolver, para colocar el label linea 67
    plugins: {
      legend: {
        display: true,
        labels: {
          generateLabels(chart) {
            const data = chart.data;
            return data.labels.map((label, i) => {
              var backgroundColor = data.datasets[0].backgroundColor[i];
              return {
                text: label + " : " + data.datasets[0].data[i],
                fillStyle: backgroundColor,
                index: i,
              };
            });
          },
          font: {
            size: 13,
            family: "Helvetica",
          },
          //pointStyle:"circle",
          boxWidth: 15,
          color: "white",
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
        position: "left",
      },
      title: {
        display: true,
        text: `Grafico por Mes = ${mes}`,
        font: {
          size: 45,
          family: "Helvetica Neue",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
        color: "orange",
      },
    },
  };

  return (
    <>
      <Pie data={datos} options={optiones} />
    </>
  );
}

export default GraficoPie_Obj;

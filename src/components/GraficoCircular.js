import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Chart, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import Data from "../api/Data";
import faker from "faker";
import {meses_datos} from "../api/Data_Fecha";

const GraficoCircular = ({ }) => {
  const [meses, setMeses] = useState([]);
  
  const departamentos = [
    "Sistemas",
    "MarketingDigital",
    "BaseDatos",
    "Documentacion",
    "DiseñoPagina",
    "Talento",
  ];

  // const area = {
  //   "area":["Documentacion","BackEnd","FrontEnd"],
  // };
  const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const areas = ["FrontEnd", "Backend", "Documentacion", "Base de Datos"];
  const recorrridoAreas = mes.map(() => areas[0]);
  // console.log(recorrridoAreas);

  const random = Math.floor(Math.random() * mes.length);
  const mesSelected = mes[random];

  // // Seleccionar x semana
  // let inducidos = [];
  // const semana = ["semana1", "semana2", "semana3", "semana4"];
  // const randomSemana = Math.floor(Math.random() * semana.length);
  // const inducidosSemana = semana[randomSemana];

  // const InducidoxSemana = [5,6,4,7];
  // const sumandoInducidos = ;
  // console.log(sumandoInducidos);
  // const cantidadInducidoSemana = semana.map(() => {
  //   faker.datatype.number({ min: 0, max: 40 });
  // });

  // Trayendo componente de colores
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
    for (let i = 0; i < mes.length; i++) {
      colores.push(ColoresRgbRandom());
    }
    return colores;
  };

  // use Effect/state- inducidos
  // const cantidadInducidos = mes.map(() =>
  //   faker.datatype.number({ min: 10, max: 50 })
  // );

  const datos = {
    labels: recorrridoAreas,
    width: "5rem",
    heigth: "5rem",
    datasets: [
      {
        label: `N° 1 Semana `,
        data: meses,
        backgroundColor: rgb(),
      },
    ],
  };

  const options = {
    legend: {
      display: true,
    },
    responsive: 1,
  };

  return (
    <>
      {/* <h1>{title}</h1> */}
      <h1>{mesSelected}</h1>
      <Pie data={datos} options={options} />
      {/* <ChartData chartData={datos} mesSelected = {mesSelected}/> */}
    </>
  );
};
export default React.memo(GraficoCircular);

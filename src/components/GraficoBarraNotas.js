import React from "react";
import datosGraficoBarras from "../api/DataBarra";
import { Chart } from "react-chartjs-2";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
} from "chart.js";
import { BarraPuntajes, DataArea } from "./datos/BarraPuntajes";
chartJS.register(
  CategoryScale,
  LineElement,
  BarElement,
  LinearScale,
  PointElement
);

function GraficoBarraNotas() {
  const dataAreas = datosGraficoBarras.map((a) =>
    a.areas.map((areaSele) => areaSele.area)
  );
  

  // Array de notas
  const puntaje = BarraPuntajes();
  console.log(puntaje);

  // Array de areas
  const areas = DataArea();
//   console.log(areas);
  


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
    for (let i = 0; i < puntaje.length; i++) {
      if(ColoresRgbRandom()!==ColoresRgbRandom()){
        colores.push(ColoresRgbRandom());
      }
    }
    return colores;
  };
  

  //   const dataAreas = datosGraficoBarras.map(({ areas }) => areas.area);
  //   console.log(dataAreas);

  //   const dataDepartamento = datosGraficoBarras.map(
  //     (departamento) => departamento.departamento
  //   );
  //   console.log(dataDepartamento);

  //   const dataPromedio = datosGraficoBarras.map((promedio) => promedio.promedio);

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
      labels: areas,
      datasets: [
          {
            type: "bar",
            label: "Barra1",
            width: "10rem",
            borderColor: rgb(),
            borderWidth: 2,
            fill: false,
            data: puntaje,
          }
      ],
    };

    // const opciones = {
    //     responsive: true,
    //     plugins: {
    //         legend
    //     }
    // }
  return (
    <div>
      <Chart data={data} type="bar" />
      {}
    </div>
  );
}

export default GraficoBarraNotas;

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
import {
  Areas,
  BarraPuntajes,
  DataArea,
  Ptj1,
  Ptj2,
  Ptj3,
  Ptj4,
  Ptj5,
} from "./datos/BarraPuntajes";
chartJS.register(
  CategoryScale,
  LineElement,
  BarElement,
  LinearScale,
  PointElement
);

function GraficoBarraNotas() {
  // const dataAreas = datosGraficoBarras.map((a) =>
  //   a.areas.map((areaSele) => areaSele.area)
  // );

  // Funcion para traer todas las areas
  const Areas = datosGraficoBarras.map((datareas) =>
    datareas.areas.map(function (index) {
      return index.area;
    })
  );
  console.log(Areas);

  const puntaje1 = Ptj1[0];
  const puntaje2 = Ptj2[0];
  const puntaje3 = Ptj3[0];
  const puntaje4 = Ptj4[0];
  const puntaje5 = Ptj5[0];

  const arrayNotas = [puntaje1, puntaje2, puntaje3, puntaje4, puntaje5];
  console.log(arrayNotas)

  // Array de notas
  // const puntaje = BarraPuntajes();
  // console.log(puntaje[0])
  // const dataPuntaje = puntaje[0];
  // const mapaNota = dataPuntaje.map()
  // const dataArea = Object.values(dataPuntaje);

  // Array de areas
  // const area = DataArea();
  // console.log(area);

  // const ColoresRgbRandom = () => {
  //   const randomBetween = (min, max) =>
  //     min + Math.floor(Math.random() * (max - min + 1));
  //   const r = randomBetween(0, 255);
  //   const g = randomBetween(0, 255);
  //   const b = randomBetween(0, 255);
  //   const colo = `rgba(${r},${g},${b},0.5)`;
  //   return colo;
  // };

  // const rgb = () => {
  //   let colores = [];
  //   for (let i = 0; i < puntaje.length; i++) {
  //     if (ColoresRgbRandom() !== ColoresRgbRandom()) {
  //       colores.push(ColoresRgbRandom());
  //     }
  //   }
  //   return colores;
  // };

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

  // var label=[], data =[];
  // dataArea.forEach(function(item, i){
  //   label.push(item)
  // })

  // const data = {
  //   labels: puntaje,
  //   datasets: [
  //     {
  //       type: "bar",
  //       label: puntaje,
  //       width: "10rem",
  //       borderColor: rgb(),
  //       borderWidth: 2,
  //       fill: false,
  //       data: puntaje,
  //     },
  //   ],
  // };

  // const opciones = {
  //     responsive: true,
  //     plugins: {
  //         legend
  //     }
  // }
  return (
    <div>
      {/* <Chart data={data} type="bar" /> */}
      {JSON.stringify(Areas, null, 3) +"\n"},
      {
        JSON.stringify(arrayNotas, null, 3)}
    </div>
  );
}

export default GraficoBarraNotas;
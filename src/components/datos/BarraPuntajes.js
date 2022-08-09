import datosGraficoBarras from "../../api/DataBarra";

export function BarraPuntajes() {

  const datosPuntajes = datosGraficoBarras.map((puntaje) =>
    puntaje.areas.map((punt) => punt)
  );
  console.log(datosPuntajes)


  const datosPuntajes2 = datosGraficoBarras.map((puntaje) =>
    puntaje.areas.map((punt) => punt.Ptj1)
  );
  const datosPuntajes3 = datosGraficoBarras.map((puntaje) =>
    puntaje.areas.map((punt) => punt.Ptj1)
  );
  const datosPuntajes4 = datosGraficoBarras.map((puntaje) =>
    puntaje.areas.map((punt) => punt.Ptj1)
  );
  const datosPuntajes5 = datosGraficoBarras.map((puntaje) =>
    puntaje.areas.map((punt) => punt.Ptj1)
  );

  const puntajes= [datosPuntajes, datosPuntajes2, datosPuntajes3, datosPuntajes4, datosPuntajes5];
  

  return puntajes;
}

export const DataArea = () =>{
    const dataArea = datosGraficoBarras.map((areas)=>areas.areas.map((areasSelected)=>areasSelected.area));
    return dataArea;
}
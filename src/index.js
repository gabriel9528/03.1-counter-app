import React from 'react'
import ReactDOM  from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import './index.css';
// import GraficoBarra from './components/GraficoBarra';
// import BarChart from './components/BarChart';
// import GraficoCircular from './components/GraficoCircular';

// const divRoot = document.querySelector('#root');
// console.log(divRoot);
// const saludo = <h1>Hola mundo</h1>;
// const divRoot = document.querySelector('#root');
// console.log(divRoot);
// ReactDOM.render(divRoot, saludo);


// Renderizando
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <PrimeraApp />
    
    {/* <TreeNode /> */}
    {/* <GraficoBarra /> */}
    {/* <BarChart /> */}
    </React.StrictMode>
)

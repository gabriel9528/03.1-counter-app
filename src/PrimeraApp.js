import React from 'react'
import GraficoCircular from './components/GraficoCircular';
import GraficoBarra from './components/GraficoBarra';
import TreeViewVista from './components/TreeViewVista';
import explorer from './api/FolderData';
import GraficoPie_Obj from './components/GraficoPie_Obj';
import GraficoPie_ObjAño from './components/GraficoPie_ObjAño';
import GraficoBarraNotas from './components/GraficoBarraNotas';
// import explorer from './api/FolderData';


function App() {

  return (
    <div className='App'>
        {/* <GraficoCircular chartData={data}/> */}
        <div style ={{width:400}}>
          {/* <GraficoCircular /> */}
          {/* <GraficoCircularAño />
          <GraficoBarra /> */}
          <GraficoPie_ObjAño />
          <br></br>
          <GraficoPie_Obj />
          <br></br>
          <h3>Diagrama Cascada</h3>
          <TreeViewVista />
          <GraficoBarraNotas />
        </div>
    </div>
  )
}

export default App;
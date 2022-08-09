import React, { useState } from "react";
import TreeView from "react-treeview";
import cascada from "../api/Data_cascada";

function TreeViewVista() {
  const [expand, setExpand] = useState(false);
  const [mostrarMes, setMostrarMes] = useState(false);
  const [mostrarArea, setMostrarArea] = useState(false);
  const [mostrarDatosArea, setMostrarDatosArea] = useState(false);
  // Crear estados para colocarlos en los span correspondientes
  // Da click , hace diferente de verdadero

  return (
    <div>
      <div style={{ width: "50%" }}>
        <ul>
          {cascada.map((node, i) => {
            const año = node.Año;
            const label = (
              <span onClick={() => setExpand(!expand)} style={{ top: 10 }}>
                {año}
              </span>
            );

            return (
              <TreeView key={año + "|" + i} nodeLabel={label}>
                {expand &&
                  node.Meses.map((meses) => {
                    const label2 = (
                      <span
                        style={{
                          paddingLeft: 50,
                        }}
                        onClick={() => setMostrarMes(!mostrarMes)}
                      >
                        <ul>
                          <li>{meses.Mes}</li>
                        </ul>
                      </span>
                    );
                    return (
                      <TreeView key={meses.Mes} nodeLabel={label2}>
                        {mostrarMes &&
                          meses.Departamentos.map((departa) => {
                            const label3 = (
                              <span
                                onClick={() => setMostrarArea(!mostrarArea)}
                              >
                                <br />
                                <ul
                                  style={{
                                    paddingLeft: 100,
                                  }}
                                >
                                  <li>
                                    {`Departamento: ${departa.Departamento}`}
                                  </li>
                                </ul>
                              </span>
                            );
                            return (
                              <TreeView
                                key={departa.Departamento}
                                nodeLabel={label3}
                              >
                                {mostrarArea &&
                                  departa.Areas.map((areas) => {
                                    const label4 = (
                                      <span
                                        onClick={() =>
                                          setMostrarDatosArea(!mostrarDatosArea)
                                        }
                                      >
                                        <br />
                                        <ul
                                          style={{
                                            paddingLeft: 150,
                                          }}
                                        >
                                          <li>{`Área: ${areas.Area}`}</li>
                                        </ul>
                                      </span>
                                    );
                                    return (
                                      <TreeView
                                        key={areas.Area}
                                        nodeLabel={label4}
                                      >
                                        <div
                                          style={{
                                            display: "inline-block",
                                            paddingLeft: 200,
                                            height: "100px",
                                          }}
                                        >
                                          <br />
                                          <div
                                            style={{
                                              display: "block",
                                              position: "relative",
                                              marginTop: "20",
                                              paddingTop: "20",
                                            }}
                                          >
                                            {`Inducidos: ${areas.Colaboradores}`}
                                          </div>

                                          <div
                                            style={{
                                              display: "block",
                                              position: "relative",
                                              marginLeft: 450,
                                            }}
                                          >
                                            {`N° Inducidos: ${areas.NroInducidosArea}`}
                                          </div>
                                        </div>
                                      </TreeView>
                                    );
                                  })}
                              </TreeView>
                            );
                          })}
                      </TreeView>
                    );
                  })}
              </TreeView>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TreeViewVista;

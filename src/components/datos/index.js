import './styles.css';

export const Datos = ({        CostoFijo,
CostoVariable1,
CostoVariable2,
CostoVariable3,
CostoVariable4,
CostoVariable5,
Precio1,
Precio2,
Precio3,
Precio4,
Precio5,
Ventas1,
Ventas2,
Ventas3,
Ventas4,
Ventas5,
UnidadesDeseadas,})=>{

    const VentasT1=Precio1*Ventas1;
    const VentasT2=Precio2*Ventas2;
    const VentasT3=Precio3*Ventas3;
    const VentasT4=Precio4*Ventas4;
    const VentasT5=Precio5*Ventas5;
    const SumaVT=(VentasT1+VentasT2+VentasT3+VentasT4+VentasT5);

    const PDV1=Math.round(((VentasT1*100)/SumaVT) * 100) / 100 
    const PDV2=Math.round(((VentasT2*100)/SumaVT) * 100) / 100 
    const PDV3=Math.round(((VentasT3*100)/SumaVT) * 100) / 100 
    const PDV4=Math.round(((VentasT4*100)/SumaVT) * 100) / 100 
    const PDV5=Math.round(((VentasT5*100)/SumaVT) * 100) / 100 

    const CM1=Math.round((Precio1-CostoVariable1) * 100) / 100;
    const CM2=Math.round((Precio2-CostoVariable2) * 100) / 100;
    const CM3=Math.round((Precio3-CostoVariable3) * 100) / 100;
    const CM4=Math.round((Precio4-CostoVariable4) * 100) / 100;
    const CM5=Math.round((Precio5-CostoVariable5) * 100) / 100;

    const CMP1=Math.round((CM1*(PDV1/100)) * 100) / 100;
    const CMP2=Math.round((CM2*(PDV2/100)) * 100) / 100;
    const CMP3=Math.round((CM3*(PDV3/100)) * 100) / 100;
    const CMP4=Math.round((CM4*(PDV4/100)) * 100) / 100;
    const CMP5=Math.round((CM5*(PDV5/100)) * 100) / 100;
    const CMPP=(CMP1+CMP2+CMP3+CMP4+CMP5);

    const PEQ=CostoFijo/CMPP;

    const Can1=(PEQ*(PDV1/100));
    const Can2=(PEQ*(PDV2/100));
    const Can3=(PEQ*(PDV3/100));
    const Can4=(PEQ*(PDV4/100));
    const Can5=(PEQ*(PDV5/100));
    
    const Ing1=Precio1*Can1;
    const Ing2=Precio2*Can2;
    const Ing3=Precio3*Can3;
    const Ing4=Precio4*Can4;
    const Ing5=Precio5*Can5;

    const IngV1=CostoVariable1*Can1;
    const IngV2=CostoVariable2*Can2;
    const IngV3=CostoVariable3*Can3;
    const IngV4=CostoVariable4*Can4;
    const IngV5=CostoVariable5*Can5;

    const CMarg1=Ing1-IngV1;
    const CMarg2=Ing2-IngV2;
    const CMarg3=Ing3-IngV3;
    const CMarg4=Ing4-IngV4;
    const CMarg5=Ing5-IngV5;
    return(
        <div style={{ height: 640, width: '100%' }}>
               <div className='divTabla'>
               <div className="puntoC">
          Comprobacion:
          <table>
                <thead>
                 <tr>
                   <th scope="col">Empresa</th>
                   <th scope="col">Costo Variable</th>
                   <th scope="col">Precio</th>
                   <th scope="col">Ventas en Unidades</th>
                   <th scope="col">Ventas Totales</th>
                   <th scope="col">Proporcion</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Producto 1</td> 
                    <td>{CostoVariable1}</td> 
                    <td>{Precio1}</td> 
                    <td>{Ventas1}</td> 
                    <td>{VentasT1}</td> 
                    <td>{PDV1}</td> 
                  </tr>
                  <tr>
                  <td>Producto 2</td> 
                    <td>{CostoVariable2}</td> 
                    <td>{Precio2}</td> 
                    <td>{Ventas2}</td> 
                    <td>{VentasT2}</td> 
                    <td>{PDV2}</td> 
                  </tr>
                  <tr>
                  <td>Producto 3</td> 
                    <td>{CostoVariable3}</td> 
                    <td>{Precio3}</td> 
                    <td>{Ventas3}</td> 
                    <td>{VentasT3}</td> 
                    <td>{PDV3}</td>  
                  </tr>
                  <tr>
                  <td>Producto 4</td> 
                    <td>{CostoVariable4}</td> 
                    <td>{Precio4}</td> 
                    <td>{Ventas4}</td> 
                    <td>{VentasT4}</td> 
                    <td>{PDV4}</td>  
                  </tr>
                  <tr>
                  <td>Producto 5</td> 
                    <td>{CostoVariable5}</td> 
                    <td>{Precio5}</td> 
                    <td>{Ventas5}</td> 
                    <td>{VentasT5}</td> 
                    <td>{PDV5}</td> 
                  </tr>
                </tbody>
          </table>
          </div>
          <div className="puntoD">
          <table>
                <thead>
                 <tr>
                   <th scope="col">Empresa</th>
                   <th scope="col">Contribución Marginal</th>
                   <th scope="col">Contribución Marginal Ponderada</th>
                   <th scope="col">Punto de Equilibrio(CF/CMPP)</th>
                   <th scope="col">Utilidad si es deseada((CF+UD)/CMPP)</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Producto 1</td> 
                    <td>{CM1}</td> 
                    <td>{CMP1}</td>
                    <td>{CostoFijo/CMPP}</td>
                    <td>{(CostoFijo+UnidadesDeseadas)/CMPP}</td>   
                  </tr>
                  <tr>
                  <td>Producto 2</td> 
                    <td>{CM2}</td> 
                    <td>{CMP2}</td> 
                    <td>{CostoFijo/CMPP}</td>  
                    <td>{(CostoFijo+UnidadesDeseadas)/CMPP}</td>
                  </tr>
                  <tr>
                  <td>Producto 3</td> 
                    <td>{CM3}</td> 
                    <td>{CMP3}</td>
                    <td>{CostoFijo/CMPP}</td>  
                    <td>{(CostoFijo+UnidadesDeseadas)/CMPP}</td> 
                  </tr>
                  <tr>
                  <td>Producto 4</td> 
                    <td>{CM4}</td> 
                    <td>{CMP4}</td> 
                    <td>{CostoFijo/CMPP}</td> 
                    <td>{(CostoFijo+UnidadesDeseadas)/CMPP}</td> 
                  </tr>
                  <tr>
                  <td>Producto 5</td> 
                    <td>{CM5}</td> 
                    <td>{CMP5}</td> 
                    <td>{CostoFijo/CMPP}</td> 
                    <td>{(CostoFijo+UnidadesDeseadas)/CMPP}</td> 
                  </tr>
                </tbody>
          </table>
          </div>
          <div className="puntoF">
          <table>
                <thead>
                 <tr>
                   <th scope="col">Empresa</th>
                   <th scope="col"> PEQxProporción</th>
                   <th scope="col">Ingresos</th>
                   <th scope="col">CV*Q</th>
                   <th scope="col">Contribución Marginal</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Producto 1</td> 
                    <td>{Can1}</td> 
                    <td>{Ing1}</td> 
                    <td>{IngV1}</td> 
                    <td>{CMarg1}</td> 
                  </tr>
                  <tr>
                  <td>Producto 2</td> 
                    <td>{Can2}</td> 
                    <td>{Ing2}</td> 
                    <td>{IngV2}</td> 
                    <td>{CMarg2}</td> 
                  </tr>
                  <tr>
                  <td>Producto 3</td> 
                    <td>{Can3}</td> 
                    <td>{Ing3}</td> 
                    <td>{IngV3}</td> 
                    <td>{CMarg3}</td>  
                  </tr>
                  <tr>
                  <td>Producto 4</td> 
                    <td>{Can4}</td> 
                    <td>{Ing4}</td> 
                    <td>{IngV4}</td> 
                    <td>{CMarg4}</td> 
                  </tr>
                  <tr>
                  <td>Producto 5</td> 
                    <td>{Can5}</td> 
                    <td>{Ing5}</td> 
                    <td>{IngV5}</td> 
                    <td>{CMarg5}</td> 
                  </tr>
                </tbody>
          </table>
          </div>
          Margen de utilidad= {CMarg1+CMarg2+CMarg3+CMarg4+CMarg5}
               </div>
       </div>
    );
}

export default Datos;
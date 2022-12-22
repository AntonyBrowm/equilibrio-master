import './styles.css';

export const DatosTwo = ({        CostoFijo,
CostoVariable1,
CostoVariable2,
CostoVariable3,
Precio1,
Precio2,
Precio3,
Ventas1,
Ventas2,
Ventas3,
})=>{

    const VentasT1=Precio1*Ventas1;
    const VentasT2=Precio2*Ventas2;
    const VentasT3=Precio3*Ventas3;
    const SumaVT=(VentasT1+VentasT2+VentasT3);

    const PDV1=Math.round(((VentasT1*100)/SumaVT) * 100) / 100 
    const PDV2=Math.round(((VentasT2*100)/SumaVT) * 100) / 100 
    const PDV3=Math.round(((VentasT3*100)/SumaVT) * 100) / 100 

    const CM1=Math.round((Precio1-CostoVariable1) * 100) / 100;
    const CM2=Math.round((Precio2-CostoVariable2) * 100) / 100;
    const CM3=Math.round((Precio3-CostoVariable3) * 100) / 100;

    const CMP1=Math.round((CM1*(PDV1/100)) * 100) / 100;
    const CMP2=Math.round((CM2*(PDV2/100)) * 100) / 100;
    const CMP3=Math.round((CM3*(PDV3/100)) * 100) / 100;
    const CMPP=(CMP1+CMP2+CMP3);

    const PEQ=CostoFijo/CMPP;

    const Can1=(PEQ*(PDV1/100));
    const Can2=(PEQ*(PDV2/100));
    const Can3=(PEQ*(PDV3/100));
    
    const Ing1=Precio1*Can1;
    const Ing2=Precio1*Can2;
    const Ing3=Precio3*Can3;

    const IngV1=CostoVariable1*Can1;
    const IngV2=CostoVariable2*Can2;
    const IngV3=CostoVariable3*Can3;

    const CMarg1=Ing1-IngV1;
    const CMarg2=Ing2-IngV2;
    const CMarg3=Ing3-IngV3;
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
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empresa 1</td> 
                    <td>{CM1}</td> 
                    <td>{CMP1}</td> 
                  </tr>
                  <tr>
                  <td>Empresa 2</td> 
                    <td>{CM2}</td> 
                    <td>{CMP2}</td> 
                  </tr>
                  <tr>
                  <td>Empresa 3</td> 
                    <td>{CM3}</td> 
                    <td>{CMP3}</td> 
                  </tr>
                </tbody>
          </table>
          </div>
          <div className="puntoF">
          <table>
                <thead>
                 <tr>
                   <th scope="col">Empresa</th>
                   <th scope="col">     </th>
                   <th scope="col">Ingresos</th>
                   <th scope="col">CV*Q</th>
                   <th scope="col">Contribución Marginal</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empresa 1</td> 
                    <td>{Can1}</td> 
                    <td>{Ing1}</td> 
                    <td>{IngV1}</td> 
                    <td>{CMarg1}</td> 
                  </tr>
                  <tr>
                  <td>Empresa 2</td> 
                    <td>{Can2}</td> 
                    <td>{Ing2}</td> 
                    <td>{IngV2}</td> 
                    <td>{CMarg2}</td> 
                  </tr>
                  <tr>
                  <td>Empresa 3</td> 
                    <td>{Can3}</td> 
                    <td>{Ing3}</td> 
                    <td>{IngV3}</td> 
                    <td>{CMarg3}</td>  
                  </tr>
                </tbody>
          </table>
          </div>
          Margen de utilidad= {CMarg1+CMarg2+CMarg3}
               </div>
       </div>
    );
}

export default DatosTwo;
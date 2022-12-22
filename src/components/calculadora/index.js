import * as React from 'react';
import Box from '@mui/material/Box';
import './index.css';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Typography } from '@mui/material';

export default function Calculadora({
CostoFijo1,
CostoFijo2,
CostoFijo3,
CostoXUnidad1,
CostoXUnidad2,
CostoXUnidad3,
CostoVariable1,
CostoVariable2,
CostoVariable3,
UtilidadesDeseadas,
GananciaDeseada,
GananciaDeseada2,}) {

 const PuntoEquilibrio1=CostoFijo1/(CostoXUnidad1-CostoVariable1);
 const PuntoEquilibrio2=CostoFijo2/(CostoXUnidad2-CostoVariable2);
 const PuntoEquilibrio3=CostoFijo3/(CostoXUnidad3-CostoVariable3);
 const PuntoEquilibrioDolares1=CostoFijo1/(1-(CostoVariable1/CostoXUnidad1));
 const PuntoEquilibrioDolares2=CostoFijo2/(1-(CostoVariable2/CostoXUnidad2));
 const PuntoEquilibrioDolares3=CostoFijo3/(1-(CostoVariable3/CostoXUnidad3));
 
 const OperacionCFmenosP1=PuntoEquilibrio1*CostoXUnidad1;
 const OperacionCFmenosP2=PuntoEquilibrio2*CostoXUnidad2;
 const OperacionCFmenosP3=PuntoEquilibrio3*CostoXUnidad3;

 const OperacionCFmenosCV1=PuntoEquilibrio1*CostoVariable1;
 const OperacionCFmenosCV2=PuntoEquilibrio2*CostoVariable2;
 const OperacionCFmenosCV3=PuntoEquilibrio3*CostoVariable3;

 const Resultado1=OperacionCFmenosP1-OperacionCFmenosCV1;
 const Resultado2=OperacionCFmenosP2-OperacionCFmenosCV2;
 const Resultado3=OperacionCFmenosP3-OperacionCFmenosCV3;

 const ResultadoUD1=(CostoFijo1+UtilidadesDeseadas)/(CostoXUnidad1-CostoVariable1);
 const resultadoGanancia1=((GananciaDeseada*CostoXUnidad1)-(GananciaDeseada*CostoVariable1))-(CostoFijo1);
 const resultadoGanancia12=((GananciaDeseada2*CostoXUnidad1)-(GananciaDeseada2*CostoVariable1))-(CostoFijo1);
 const resultGAO1=((resultadoGanancia12-resultadoGanancia1)/resultadoGanancia1)/ ((GananciaDeseada2-GananciaDeseada)/GananciaDeseada);

 const ResultadoUD2=(CostoFijo2+UtilidadesDeseadas)/(CostoXUnidad2-CostoVariable2);
 const resultadoGanancia2=((GananciaDeseada*CostoXUnidad2)-(GananciaDeseada*CostoVariable2))-(CostoFijo2);
 const resultadoGanancia22=((GananciaDeseada2*CostoXUnidad2)-(GananciaDeseada2*CostoVariable2))-(CostoFijo2);
 const resultGAO2=((resultadoGanancia22-resultadoGanancia2)/resultadoGanancia2)/ ((GananciaDeseada2-GananciaDeseada)/GananciaDeseada);

 const ResultadoUD3=(CostoFijo3+UtilidadesDeseadas)/(CostoXUnidad3-CostoVariable2);
 const resultadoGanancia3=((GananciaDeseada*CostoXUnidad3)-(GananciaDeseada*CostoVariable3))-(CostoFijo3);
 const resultadoGanancia32=((GananciaDeseada2*CostoXUnidad3)-(GananciaDeseada2*CostoVariable3))-(CostoFijo3);
 const resultGAO3=((resultadoGanancia32-resultadoGanancia3)/resultadoGanancia3)/ ((GananciaDeseada2-GananciaDeseada)/GananciaDeseada);

const data01 = [
  { x: 0, y: Resultado1 },
  { x: PuntoEquilibrio1, y: OperacionCFmenosP1 }, ];
const data02 = [
  { x: 0, y: 0 },
  { x: PuntoEquilibrio1, y: OperacionCFmenosP1 },];
const data21 = [
  { x: 0, y: Resultado2 },
  { x: PuntoEquilibrio2, y: OperacionCFmenosP2 },];
const data22 = [
  { x: 0, y: 0 },
  { x: PuntoEquilibrio2, y: OperacionCFmenosP2 },];
const data31 = [
  { x: 0, y: Resultado3 },
  { x: PuntoEquilibrio3, y: OperacionCFmenosP3 }, ];
const data32 = [
  { x: 0, y: 0 },
  { x: PuntoEquilibrio3, y: OperacionCFmenosP3 },];
  return (
    <Box sx={{ width: '100%', display:'flex'}}>
      <div className="column">
          <div className="title">
             Empresa 1
          </div>
          <div className="puntoA">
              Punto de Equilibrio: ${PuntoEquilibrio1}
          </div>
          <div className="puntoB">
          Punto de Equilibrio en Dolares: ${PuntoEquilibrioDolares1}
          </div>
          <div className="puntoC">
          Comprobacion:
          <table>
                <thead>
                 <tr>
                   <th scope="col">Operación</th>
                   <th scope="col">Resultado</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{PuntoEquilibrio1} x {CostoXUnidad1}</td> 
                    <td>{OperacionCFmenosP1}</td> 
                  </tr>
                  <tr>
                    <td>{PuntoEquilibrio1} x {CostoVariable1}</td> 
                    <td>{OperacionCFmenosCV1}</td> 
                  </tr>
                  <tr>
                    <td>=</td> 
                    <td>{Resultado1}</td> 
                  </tr>
                  <tr>
                    <td>- {CostoFijo1}</td> 
                    <td>{Resultado1-CostoFijo1}</td> 
                  </tr>
                </tbody>
          </table>
          <div className='utilidades'>
          <Typography>UTIILIDAD DESEADA: {ResultadoUD1}</Typography>
          <Typography>Ganancia DESEADA: {resultadoGanancia1}</Typography>
          <Typography>Ganancia DESEADA 2: {resultadoGanancia12}</Typography>
          <Typography>GAO: {((resultadoGanancia12-resultadoGanancia1)/resultadoGanancia1)}/ {((GananciaDeseada2-GananciaDeseada)/GananciaDeseada)}= {resultGAO1}</Typography>
          </div>
          </div>
          <div className='Graficas'>
      <ScatterChart width={360} height={400} margin={{ top: 20, left:20, }}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="Cantidad" unit="Q" />
      <YAxis type="number" dataKey="y" name="Ingreso" unit="$" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter
        name="Costo Total"
        data={data01}
        fill="red"
        line
        shape="cross"
      />
      <Scatter
        name="Ingreso"
        data={data02}
        fill="yellow"
        line
        shape="diamond"
      />
    </ScatterChart>
          </div>
          </div>
      <div className="column">
          <div className="title">
             Empresa 2
          </div>
          <div className="puntoA">
          Punto de Equilibrio: ${PuntoEquilibrio2}
          </div>
          <div className="puntoB">
          Punto de Equilibrio en Dolares: ${PuntoEquilibrioDolares2}
          </div>
          <div className="puntoC">
          Comprobacion:
          <table>
                <thead>
                 <tr>
                   <th scope="col">Operación</th>
                   <th scope="col">Resultado</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{PuntoEquilibrio2} x {CostoXUnidad2}</td> 
                    <td>{OperacionCFmenosP2}</td> 
                  </tr>
                  <tr>
                    <td>{PuntoEquilibrio2} x {CostoVariable2}</td> 
                    <td>{OperacionCFmenosCV2}</td> 
                  </tr>
                  <tr>
                    <td>=</td> 
                    <td>{Resultado2}</td> 
                  </tr>
                  <tr>
                    <td>- {CostoFijo2}</td> 
                    <td>{Resultado2-CostoFijo2}</td> 
                  </tr>
                </tbody>
          </table>
          <div className='utilidades'>
          <Typography>UTIILIDAD DESEADA: {ResultadoUD2}</Typography>
          <Typography>Ganancia DESEADA: {resultadoGanancia2}</Typography>
          <Typography>Ganancia DESEADA 2: {resultadoGanancia22}</Typography>
          <Typography>GAO: {((resultadoGanancia22-resultadoGanancia2)/resultadoGanancia2)}/ {((GananciaDeseada2-GananciaDeseada)/GananciaDeseada)}= {resultGAO2}</Typography>
          </div>
          </div>
          <div className='Graficas'>
      <ScatterChart width={360} height={400} margin={{ top: 20, left:20, }}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="Cantidad" unit="Q" />
      <YAxis type="number" dataKey="y" name="Ingreso" unit="$" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter
        name="Costo Total"
        data={data21}
        fill="red"
        line
        shape="cross"
      />
      <Scatter
        name="Ingreso"
        data={data22}
        fill="yellow"
        line
        shape="diamond"
      />
    </ScatterChart>
          </div>
          <div>
            
          </div>
       </div>
      <div className="column">
          <div className="title">
             Empresa 3
          </div>
          <div className="puntoA">
          Punto de Equilibrio: ${PuntoEquilibrio3}
          </div>
          <div className="puntoB">
          Punto de Equilibrio en Dolares: ${PuntoEquilibrioDolares3}
          </div>
          <div className="puntoC">
          Comprobacion:
          <table>
                <thead>
                 <tr>
                   <th scope="col">Operación</th>
                   <th scope="col">Resultado</th>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{PuntoEquilibrio3} x {CostoXUnidad3}</td> 
                    <td>{OperacionCFmenosP3}</td> 
                  </tr>
                  <tr>
                    <td>{PuntoEquilibrio3} x {CostoVariable3}</td> 
                    <td>{OperacionCFmenosCV3}</td> 
                  </tr>
                  <tr>
                    <td>=</td> 
                    <td>{Resultado3}</td> 
                  </tr>
                  <tr>
                    <td>- {CostoFijo3}</td> 
                    <td>{Resultado3-CostoFijo3}</td> 
                  </tr>
                </tbody>
          </table>
          <div className='utilidades'>
          <Typography>UTIILIDAD DESEADA: {ResultadoUD3}</Typography>
          <Typography>Ganancia DESEADA: {resultadoGanancia3}</Typography>
          <Typography>Ganancia DESEADA 2: {resultadoGanancia32}</Typography>
          <Typography>GAO: {((resultadoGanancia32-resultadoGanancia3)/resultadoGanancia3)}/ {((GananciaDeseada2-GananciaDeseada)/GananciaDeseada)}= {resultGAO3}</Typography>
          </div>
          </div>
          <div className='Graficas'>
          <ScatterChart width={360} height={400} margin={{top: 20, left:20,}}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="Cantidad" unit="Q" />
      <YAxis type="number" dataKey="y" name="Ingreso" unit="$" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter
        name="Costo Total"
        data={data31}
        fill="red"
        line
        shape="circle"
      />
      <Scatter
        name="Ingreso"
        data={data32}
        fill="yellow"
        line
        shape="diamond"
      />
    </ScatterChart>
          </div>
      </div>
    </Box>
  );
}
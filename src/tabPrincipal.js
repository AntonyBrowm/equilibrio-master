import { Formik, Field, Form } from 'formik';
import './tabPrincipal.css';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calculadora from './components/calculadora';
function tabPrincipal() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [results, setResults] = useState([]); 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
   console.log(results);

  },[ results]);

  return (
    <div className="AppPrincipal"> 
      <div className='DivForm'>
    <h3>Ingresa los valores</h3>
    <Formik
      initialValues={{
        CostoFijo1: '',
        CostoFijo2: '',
        CostoFijo3: '',
        CostoXUnidad1:'',
        CostoXUnidad2:'',
        CostoXUnidad3:'',
        CostoVariable1:'',
        CostoVariable2:'',
        CostoVariable3:'',
        UtilidadesDeseadas:'',
        GananciaDeseada:'',
        GananciaDeseada2:'',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        window.localStorage.setItem('user',JSON.stringify(values));
        alert(JSON.stringify(values, null, 2));
        setResults(values);
      }}
    >
      
      <Form className='form'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8,  md: 16 }}>
          <Grid item xs={4} sm={4} md={4}></Grid>
          <Grid item xs={4} sm={4} md={4}>
           EMPRESA 1
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            EMPRESA 2
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            EMPRESA 3
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            Costo Fijo: 
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoFijo1" name="CostoFijo1" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoFijo2" name="CostoFijo2" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoFijo3" name="CostoFijo3" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            Costo por Unidad: 
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoXUnidad1" name="CostoXUnidad1" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoXUnidad2" name="CostoXUnidad2" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoXUnidad3" name="CostoXUnidad3" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            Costo Variable: 
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoVariable1" name="CostoVariable1" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoVariable2" name="CostoVariable2" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="CostoVariable3" name="CostoVariable3" placeholder="Ingrese el dato" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="UtilidadesDeseadas" name="UtilidadesDeseadas" placeholder="Utilidades deseadas" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="GananciaDeseada" name="GananciaDeseada" placeholder="Ingrese Q1 para Ganancia Deseada" />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
          <Field   type="number" id="GananciaDeseada2" name="GananciaDeseada2" placeholder="Ingrese Q2 para Ganancia Deseada" />
          </Grid>
      </Grid>
    </Box>
        <button type="submit" className='buttonSubmit'>CONTINUAR</button>
        <button 
              className='buttonSubmit'
              type="reset"
              text="clear all" >BORRAR</button>
      </Form>
    </Formik>
  </div>
  <Calculadora  {...results}/>
    </div>
  );
}

export default tabPrincipal;

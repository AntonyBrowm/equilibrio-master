import './styles.css';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Datos } from '../datos';
import DatosThree from '../datos/datosthree';
export const TablasThree = ()=>{

  const [results, setResults] = useState([]); 

    return(
        <div style={{ height: 640, width: '100%' }}>
        <div style={{ textAlign: "center" }}>
      <h1>COMPARE DATOS DE DIFERENTES PRODUCTOS</h1>
      <Formik
      initialValues={{
        CostoFijo: '',
        CostoVariable1:'',
        CostoVariable2:'',
        CostoVariable3:'',
        CostoVariable4:'',
        Precio1:'',
        Precio2:'',
        Precio3:'',
        Precio4:'',
        Ventas1:'',
        Ventas2:'',
        Ventas3:'',
        Ventas4:'',
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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10 }}>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="CostoFijo" name="CostoFijo" placeholder="Ingrese el Costo Fijo" /></Grid>
        <Grid item xs={2} sm={4} md={4}>PRODUCTO 1</Grid>
        <Grid item xs={2} sm={4} md={4}>PRODUCTO 2</Grid>
        <Grid item xs={2} sm={4} md={4}>PRODUCTO 3</Grid>
        <Grid item xs={2} sm={4} md={4}>PRODUCTO 4</Grid>
        <Grid item xs={2} sm={4} md={4}>COSTO VARIABLE: </Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="CostoVariable1" name="CostoVariable1" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="CostoVariable2" name="CostoVariable2" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="CostoVariable3" name="CostoVariable3" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="CostoVariable4" name="CostoVariable4" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}>PRECIO: </Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Precio1" name="Precio1" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Precio2" name="Precio2" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Precio3" name="Precio3" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Precio4" name="Precio4" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}>VENTAS EN M X AÑO</Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Ventas1" name="Ventas1" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Ventas2" name="Ventas2" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Ventas3" name="Ventas3" placeholder="Ingrese el dato" /></Grid>
        <Grid item xs={2} sm={4} md={4}><Field   type="number" id="Ventas4" name="Ventas4" placeholder="Ingrese el dato" /></Grid>
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
    <DatosThree  {...results}/>
       </div>
    );
}

export default TablasThree;
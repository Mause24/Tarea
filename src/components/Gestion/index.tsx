import React, { useContext} from 'react';
import { ProductosContext } from '../../context/productosContext';

const Gestion = () => {
    const {productos}=useContext(ProductosContext);        
    console.log(productos);
    
    return (
        <>
            <div id='contenedor-gestion'>
                <div id='contenedor-titulo-producto' >
                    <h1>Gestion </h1>
                </div>
                <div id='contenedor-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cant.</th>
                                <th>Cant. Real</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productos.map((producto:any) => (
                                <tr key={producto.id}>
                                    <th>{producto.producto}</th>
                                    <th>{producto.cantidadBodega}</th>
                                    <th><input type="number" name="" id="txt-cantidad" /></th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <div id='contenedor-botones'>
                    <input type="button" value="Guardar" className='btn btn-success' id='btn-guardar'/>
                    <input type="button" value="Cancelar" className='btn btn-danger' id='btn-cancelar'/>
                </div>
            </div>
        </>
    );
}

export default Gestion;
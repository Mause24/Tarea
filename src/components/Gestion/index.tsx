import React, { useContext } from 'react';
import { ProductosContext } from '../../context/productosContext';

const Gestion = () => {
    const {productos}=useContext(ProductosContext);
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
                                <tr>
                                    <th>{producto.producto}</th>
                                    <th>{producto.cantidadBodega}</th>
                                    <th><input type="text" name="" id="txt-cantidad" /></th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <div id='contenedor-botones'>
                    <input type="button" value="Guardar" className='btn btn-success'/>
                    <input type="button" value="Cancelar" className='btn btn-danger'/>
                </div>
            </div>
        </>
    );
}

export default Gestion;
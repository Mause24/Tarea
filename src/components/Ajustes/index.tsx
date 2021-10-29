import React, { useContext} from 'react';
import { useHistory } from 'react-router';
import { ProductosContext } from '../../context/productosContext';
import AJUSTES from '../../JSON/json';

const Ajustes = () => {
    const history=useHistory()
    const { getArrayProductos}=useContext(ProductosContext);
    const changeValue=(array:any[])=>{
        getArrayProductos(array)
        history.push('/gestion')
    }
    
    
    return (
        <>
            <div id='contenedor-ajustes'>
                <div id='contenedor-titulo'>
                    <h1>Ajustes</h1>
                </div>
                <div id='contenedor-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Rubro</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AJUSTES.map(ajuste => (
                                    <tr key={ajuste.id}>
                                        <th>{ajuste.fecha}</th>
                                        <th>{ajuste.categoria}</th>
                                        <th>
                                            <input type="button" value="" className='btn btn-danger' id='btn-eliminar'/>
                                            <input type="button" value="" className='btn btn-warning' id='btn-editar' onClick={()=>changeValue(ajuste.productos)}/>
                                        </th>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}

export default Ajustes;
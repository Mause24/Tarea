import React, { useContext} from 'react';
import { useHistory } from 'react-router';
import { ProductosContext } from '../../context/productosContext';
import AJUSTES from '../../JSON/json';
import dayjs from 'dayjs'

const Ajustes = () => {
    const history=useHistory()
    const { getArrayProductos}=useContext(ProductosContext);
    return (
        <>
            <div id='contenedor-ajustes'>
                <div id='Cabecera'>
                    <div id='contenedor-titulo-ajustes'>
                        <h1>Ajustes</h1>
                    </div>
                    <div id='contendor-logout'>
                        <input type="button"  id='btn-logout' className='btn btn-danger' onClick={()=>history.replace('/login')} />
                    </div>
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
                                        <th>{dayjs(ajuste.fecha).format('DD/MM/YYYY hh:mm A') }</th>
                                        <th>{ajuste.categoria}</th>
                                        <th>
                                            <input type="button" value="" className='btn btn-danger' id='btn-eliminar'/>
                                            <input type="button" value="" className='btn btn-warning' id='btn-editar' onClick={()=> {
                                                history.push(`/gestion/${ajuste.id}`)
                                            }}/>
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
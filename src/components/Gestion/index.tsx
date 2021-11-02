import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ProductosContext } from '../../context/productosContext';
import { useModal } from '../../hooks/useModal';
import AJUSTES from '../../JSON/json';
import ModalProductos from '../../modals/ModalProductos';

interface ARRAYPRODUCTO {
    id: number,
    producto: string,
    cantidadBodega: number,
    cantidadReal: number,
}
const Gestion = () => {
    const { productos, getArrayProductos } = useContext(ProductosContext);
    const [arrayproductos, setarrayproductos] = useState([] as any[]);
    const history = useHistory();
    const { id: idParam } = useParams<{ id: string }>()
    const [isOpenModalProductos, openProductos, closeProductos]: any = useModal(false);
    const handdleChange = (event: React.ChangeEvent<HTMLInputElement>, productoArray: ARRAYPRODUCTO) => {
        const { id, producto, cantidadBodega } = productoArray
        if (arrayproductos.find(item => item.id === id)) {
            arrayproductos.filter(item => {
                item.id === id && (item.cantidadReal = Number(event.target.value.trim()))
            })
        } else {
            setarrayproductos([...arrayproductos,
            {
                id: id,
                producto: producto,
                cantidadBodega: cantidadBodega,
                cantidadReal: Number(event.target.value.trim()),
            }
            ])

        }

    }
    useEffect(() => {
        const ajuste = AJUSTES.find((ajuste) => ajuste.id === +idParam)
        getArrayProductos(ajuste?.productos ?? [])
    }, [])

    return (
        <>
            <div className='fondoModal'>
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
                                    productos.map((producto: any) => (
                                        <tr key={producto.id}>
                                            <th>{producto.producto}</th>
                                            <th>{producto.cantidadBodega}</th>
                                            <th><input type="number" name="" id="cantidad" onChange={(e) => handdleChange(e, producto)} /></th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div id='contenedor-botones'>
                        <input type="button" value="Cancelar" className='btn btn-danger' id='btn-cancelar' onClick={() => history.replace('/ajustes')} />
                        <input type="button" value="Guardar" className='btn btn-success' id='btn-guardar' onClick={openProductos} />
                    </div>
                </div>
            </div>
            <ModalProductos isOpen={isOpenModalProductos} closeModal={closeProductos}>
                <h2>Tabla de Productos</h2>
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
                            arrayproductos.map((producto: ARRAYPRODUCTO) => (
                                <tr key={producto.id}>
                                    <th>{producto.producto}</th>
                                    <th>{producto.cantidadBodega}</th>
                                    <th>{producto.cantidadReal}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </ModalProductos>
        </>
    );
}

export default Gestion;
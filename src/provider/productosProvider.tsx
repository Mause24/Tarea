import React, { useState } from 'react';
import { INITIALSTATE, ProductosContext } from '../context/productosContext';


export const Provider=({children}:any)=>{
    const [productos, setproductos] = useState(INITIALSTATE)
    const getArrayProductos=(array: any[])=>{
        setproductos([...array])
    }

    return(
        <ProductosContext.Provider value={{productos,getArrayProductos}}>
            {children}
        </ProductosContext.Provider>
    )
}
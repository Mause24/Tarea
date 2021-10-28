import  React, { useEffect, useState } from 'react';
import AJUSTES from '../../JSON/json';

const Ajustes = ()=>{
    const [empresa,setempresa] = useState({});

    const handdleEmpresa=(id:number)=>{
        for (let index = 0; index < AJUSTES.length; index++) {
            if (AJUSTES[index].id===id) {
                setempresa(AJUSTES[index]);
            }
            
        }
        console.log(empresa);
        
    }
    useEffect(() => {
        handdleEmpresa(1) 
    }, []);

    return(
        <>
            <div id='contenedor-ajustes'>
                <div id='contenedor-titulo'>
                    <h1>Ajustes</h1>
                </div>
                <div id='contenedor-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Descrip.</th>
                                <th>Valor</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th></th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th>Empresa</th>
                                <th></th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th>Responsable</th>
                                <th>Valor</th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th>Fecha</th>
                                <th>Valor</th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th>Categoria</th>
                                <th>Valor</th>
                                <th>Acciones</th>
                            </tr>
                            <tr>
                                <th>Estado</th>
                                <th>Valor</th>
                                <th>Acciones</th>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <nav>
                    <input type="button" className='btn' value="" id='btn-atras' />
                    <p>1/{AJUSTES.length}</p>
                    <input type="button" className='btn' value="" id='btn-siguiente'/>
                </nav>
            </div>
        </>
    );
}

export default Ajustes;
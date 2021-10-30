import React from 'react'
import './Modal.css';

const InformacionProducto = ({ children,isOpen,closeModal }: any) => {
    return (
        <article className={`productos ${isOpen && 'is-open'}`}>
            <div className='modal-container'>
                <input type="button" id='btn-cerrar' className='btn modal-close' onClick={closeModal}/>
                {children}
            </div>
        </article>
    )
}

export default InformacionProducto

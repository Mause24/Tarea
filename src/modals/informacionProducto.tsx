import React  from 'react'
import './Modal.css';
const InformacionProducto = ({children}:any) => {
    return (
        <article className='productos is-open'>
            <div className='modal-container'>
                <div className='container-X'>
                    <input type="button" value="X" className='modal-close'/>
                </div>
                {children}
            </div>
        </article>
    )
}

export default InformacionProducto

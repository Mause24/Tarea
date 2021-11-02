import  React,{useState} from 'react';
import { useHistory } from 'react-router';


const Login = ()=>{
    const [value, setvalue]=useState({
        user:'',
        password:'',
    })
    const history=useHistory()

    const handdleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setvalue({
            ...value,
            [e.target.id]: e.target.value,
        })
    }
    const validarInputs = ()=>{
        const {user, password} = value
        if (user.trim()!== '' && password.trim()!=='') {
            history.replace('/ajustes')
        } else {
            alert('Los campos de usuario y/o contraseña estan vacios')
            
        }
    }
    
    return (
        <div id='contenedor-login'>
            <div id='contenedor-titulo'>
                <h1>LOGIN</h1>
            </div>
            <form action="">
                <input type="text" className='txt' placeholder='Usuario' id='user' onChange={handdleInput} required/>
                <input type="password" className='txt' placeholder='Contraseña' id='password' onChange={handdleInput} required/>
                <button type="submit" className="btn" onClick={validarInputs} id='btn-ingresar'>Ingresar</button>
            </form>
        </div>
    );
}

export default Login;
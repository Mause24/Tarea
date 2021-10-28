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
        if (user!== '' && password!=='') {
            history.push('/ajustes')
        } else {
            console.log('Usuario o contraseña estan vacios');
            
        }
    }

    return (
        <div id='contenedor-login'>
            <div id='contenedor-titulo'>
                <h1>LOGIN</h1>
            </div>
            <input type="text"  className='txt' placeholder='Usuario' id='user' onChange={handdleInput}/>
            <input type="password"  className='txt' placeholder='Contraseña' id='password' onChange={handdleInput}/>
            <button type="submit" className="btn" onClick={validarInputs}>Ingresar</button>
        </div>
    );
}

export default Login;
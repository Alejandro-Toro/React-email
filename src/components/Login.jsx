import { useState } from "react";


const Login = ({setAlert}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    function esCorreoValido(email) {
        if (/\S+@\S+\.\S+/.test(email)){
            setAlert({
                mensaje: "",
                color: ""
            });
            
        } else {
            setAlert({
                mensaje: "Ingresa un correo valido",
                color: "warning"
            });
        }
      };

    const validarLogin = (e) => {
        e.preventDefault();
        
        if(email.trim() === "prueba@prueba.com" && password.trim() === "123456"){
            

            setAlert({
                mensaje: "Sesion iniciada",
                color: "success"
            });
            setEmail("");
            setPassword("");

            return;
            // limpiar inputs email y password   
        } 

        setAlert({
            mensaje: "datos incorrectos",
            color: "danger"
        });
        

    };

    return (
        <>
            <form onSubmit={validarLogin}>

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className="form-control mb-2"
                    onChange={(e) => setEmail(e.target.value)}
                    onInput= {(e) => esCorreoValido(e.target.value)}
                    value={email}
                    />

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    className="form-control mb-2"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />

                <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={!email.trim() || !password.trim()}>
                    Iniciar sesion
                </button>

            </form>
        
        </>

    );

};

export default Login;
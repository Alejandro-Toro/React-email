import { useState } from "react";
import Login from "./components/Login.jsx";
import Alert from "./components/Alert.jsx";


function App() {

  const[alert, setAlert] = useState({
    mensaje: "",
    color: "",
  })

  return (
    <div typeof="box">
     <>
     <h3>Ingresar</h3>
      <Login setAlert={setAlert}/> 

      {alert.mensaje && <Alert color={alert.color}> {alert.mensaje} </Alert>}
     </>
    </div>
  );
}

export default App;

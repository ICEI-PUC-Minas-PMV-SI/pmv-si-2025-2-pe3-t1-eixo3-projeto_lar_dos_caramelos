import { Navigate, redirect } from "react-router-dom";
import usersData from '../Database/usuarios/users.json';


export default async function  LoginService(User){

    const exists = usersData.users.some(u => u.email === User.email && u.password === User.password);

  if (exists) {
   //alert("Login realizado com sucesso!");
   console.log("Logou")

    // aqui você pode redirecionar, ex: navigate("/home") no componente
  } else {
    alert("Usuário ou senha inválidos!");
  }
}
   




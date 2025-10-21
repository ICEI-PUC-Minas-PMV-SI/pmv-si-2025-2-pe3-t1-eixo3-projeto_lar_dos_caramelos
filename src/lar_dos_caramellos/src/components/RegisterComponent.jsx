import { useEffect, useState } from "react"
import { useRouteError } from "react-router-dom"
import RegisterService from "../services/RegisterService"

export default function RegisterPage() { 
   
const [user, setUser] = useState({
    name:'',
    email:'',
    password:''

})

const [buttonDisabled, setButtonDisabled] = useState(true);

function Register(e){
    e.preventDefault()
 // console.log(user)
RegisterService(user)
}





function handleChange(e){
    setUser({...user, [e.target.name]: e.target.value})
}
   
  useEffect(() => {
    // Todos os critérios dentro de um if
    if (
      user.name && user.name.length >= 3 &&
      user.email && user.email.includes("@") && user.email.includes(".") &&
      user.password && user.password.length >= 6
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);





    return (
            <>
             <form onSubmit={Register}>

                    <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>

                            <input name = 'name' onInput={handleChange} value={user.name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">E-mail</label>

                            <input name ='email' onInput={handleChange}  value={user.email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            
                            <label  for="exampleInputPassword1" class="form-label">Password</label>

                            <input name='password' onInput={handleChange} value={user.password} type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check one</label>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check two</label>
                        </div>
                        <button type="submit" class="btn btn-dark" disabled={buttonDisabled} >Submit</button>
                        </form>
            </>

    )



}
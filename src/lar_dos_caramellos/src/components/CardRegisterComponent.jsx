import { useState } from "react"
import UploadImageService from "../services/UploadImageService"




export default  function CardRegisterComponent(){

const [dog, setDog] = useState({   
name:'',
peso:0,
history:'',
picture:''

})

const [image,setImage] = useState(null)


function handleChange(e){
 setDog({...dog, [e.target.name]: e.target.value})
}

function imageChange(e){
    console.log("Caiu aqui")
    const file = e.target.files[0];
    setImage(file);
}


async function Register(e){
e.preventDefault()

const img64 = await UploadImageService(image)


//
setDog(prev => ({
  ...prev,          // mantém os outros campos
  picture:img64  // atualiza apenas picture
}));



}



    return (
        <>
             <form onSubmit={Register}>

                    <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name dog</label>

                            <input onInput={handleChange} name = 'name'  value={dog.name}  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Peso KG</label>

                            <input onInput={handleChange} name='peso' value ={dog.peso} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            
                            <label  for="exampleInputPassword1" class="form-label">History</label>

                            <input onInput={handleChange} name='history' value = {dog.history} type="text" class="form-control" id="exampleInputPassword1"  style={{ height: "80px" }} />
                        </div>
                             <div class="mb-3">
                            
                            <label  for="exampleInputPassword1" class="form-label">Picture</label>

                            <input name = 'image' onChange={imageChange}  type="file" class="form-control" id="exampleInputPassword1" />
                        </div>
                       
                        <button type="submit" class="btn btn-dark">Submit</button>
                        </form>
        
        </>


    )

}
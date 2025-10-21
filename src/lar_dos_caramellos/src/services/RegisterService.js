export default async function RegisterPage(User){
    console.log("aAQUi")
    try{
            const response = await fetch('http://localhost:3000/users', {
                method:'POST',
                headers:{
                    'Content-Type':'apllication/json'
                },
                body:JSON.stringify(User)

            
    })
    localStorage.setItem('user',JSON.stringify(User))

    }
    catch(error){
        alert('Error al registrar el usuario')
    }



}
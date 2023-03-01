

const UserTarj = ({ userData }) => {

  
    
    console.log(userData)
    return (
        <div className="user-card">
            <h1>GALLETAS DE LA FORTUNA</h1>
            
            <img src="/fondo1.jpg" alt="" />
            
            <h1>Frase</h1>
           
            <h1>hola :{ userData?.phrase}</h1>

            
            
        

        

      </div>  
    )
    
}
export default UserTarj
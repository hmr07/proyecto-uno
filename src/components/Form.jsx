
import { useForm } from 'react-hook-form'

const Form = () => {

    //useForm -> Custom Hook
    //Lo ejecutamos. Retorna un objeto. Vamos a desestructurar dos propiedades muy importantes: register y handleSubmit.
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    
    const submit = data => {
        data.id = Date.now()
        console.log( data )

        //Si el envio de informacion ocurre con exito
        //Limpio el formulario
        emptyForm()
    }

    //reset
    //Lo que hace es recibir un objeto que como propiedades va a tener los nombres de los diferentes inputs del formulario
    //Los valores que tengan  las propiedades de este objeto se setearan como valores del input

    //Valores por default
    const fillForm = () => {
        reset( 
            {
                email: "john@gmail.com",
                password: "john1234",
                first_name: "John",
                last_name: "Doe",
                birthday: "1993-10-10",
                username : "jhondoe123"
            }
        )
    }
    
    //Limpieza del formulario
    const emptyForm = () => {
        reset(
            {
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: "",
                username : ""
            }
        )
    }
    
    return (
        <div>
            <form onSubmit={ handleSubmit( submit ) }>
                <div>
                    <label 
                    htmlFor="username">
                        Nombre de usuario
                    </label>
                    <input 
                    type="text" 
                    id="username" 
                    placeholder="Tu nombre de usuario va aqui..."
                    { ...register("username", { required: true } ) }
                    />


                    { 
                    errors.username?.type === 'required' && <p role="alert" style={{ color: 'tomato' }}>
                        El nombre de usuario es requerido</p> 
                    }
                </div>
                <div>
                    <label 
                    htmlFor="email">
                        Correo
                    </label>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="jhon@gmail.com"
                    { ...register("email", { required: true }) }
                    />
                </div>
                <div>
                    <label 
                    htmlFor="first_name">
                        Nombre
                    </label>
                    <input 
                    type="text" 
                    id="first_name" 
                    placeholder="Susana"
                    { ...register("first_name", { required: true }) }
                    />
                </div>
                <div>
                    <label 
                    htmlFor="last_name">
                        Apellido
                    </label>
                    <input 
                    type="text" 
                    id="last_name" 
                    placeholder="Distancia"
                    { ...register("last_name", { required: true }) }
                    />
                </div>
                <div>
                    <label 
                    htmlFor="birthday">
                        Fecha de nacimiento
                    </label>
                    <input 
                    type="date" 
                    id="birthday" 
                    placeholder="1995-04-02"
                    { ...register("birthday", { required: true }) }
                    />
                </div>
                <div>
                    <label 
                    htmlFor="password">
                        Contraseña
                    </label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Ej: 123"
                    { ...register("password", { required: true }) }
                    />
                </div>

                <button type="submit">
                    Completar registro
                </button>
            </form>

            <button onClick={ fillForm }> LLenar formulario </button>
        </div>
    );
}

export default Form;



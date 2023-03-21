
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const Form = ( { createUser, selectedUser, updateUser } ) => {

    //useForm -> Custom Hook
    //Lo ejecutamos. Retorna un objeto. Vamos a desestructurar dos propiedades muy importantes: register y handleSubmit.
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    

    //Instruccion (efecto) qu queremos que se lleve a cabo cuando el componente se monta y cuando alguno (o varios) de los estados o propiedades es modificado
    useEffect(() => {
        //Determinar si hay un un usuario seleccionado
        if( selectedUser ){ // null , { informacionUsuario }
            //Si lo hay se cargara su info
            reset( selectedUser )    
        }else{
            //Si no lo hay, el formulario estara vacio
            emptyForm()
        }

    }, [ selectedUser ]);


    const submit = data => {
        if( selectedUser ){
            //Si hay usuario seleccionado
            //Edicion de usuario YA existente
            updateUser( data )

        }else{
            //Si NO hay usuario seleccionado
            //Crear NUEVO usuario

            data.id = Date.now()
            //Sacar el objeto data
            createUser( data )
            //Si el envio de informacion ocurre con exito
            //Limpio el formulario
            emptyForm()
        }
    }

    //reset
    //Lo que hace es recibir un objeto que como propiedades va a tener los nombres de los diferentes inputs del formulario
    //Los valores que tengan  las propiedades de este objeto se setearan como valores del input
    
    //Limpieza del formulario
    const emptyForm = () => {
        reset(
            {
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: ""
            }
        )
    }
    
    return (
        <div>
            <form onSubmit={ handleSubmit( submit ) }>
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
                <div className="input-wrapper">
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
        </div>
    );
}

export default Form;

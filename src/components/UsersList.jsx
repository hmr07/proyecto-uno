
const UsersList = ( { usersData, deleteUserAction, selectUser } ) => {
    return (
        <ul>
            {
                usersData?.map( user => (
                <li key={ user.id }>
                    <h4><span>Nombre:</span> {user.first_name} { user.last_name } </h4>
                    <h4><span>Email:</span> {user.email} </h4>
                    <h4><span>Cumpleaños:</span> {user.birthday} </h4>

                    <button onClick={ () => deleteUserAction( user.id ) }>Eliminar</button>
                    <button onClick={ () => selectUser(user) } >Editar</button>
                </li>
                ))
            }
            
        </ul>
    );
}

export default UsersList;

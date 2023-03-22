
const UsersList = ( { usersData, deleteUserAction, selectUser } ) => {
    return (
        <ul>

            {
                usersData?.map( user => (
                <li key={ user.id }>
                    <h4><span>Marca:</span> {user.brand} { user.brand } </h4>
                    <h4><span>Modelo:</span> {user.model} </h4>
                    <h4><span>Color:</span> {user.color} </h4>

                    <button onClick={ () => deleteUserAction( user.id ) }>Eliminar</button>
                    <button onClick={ () => selectUser(user) } >Editar</button>
                </li>
                ))
            }
            
        </ul>
    );
}

export default UsersList;

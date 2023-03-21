import "./styles.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import { useState } from "react";

function App() {
  //  Create Read Update Delete
  //  Acciones mas basicas que podemos hacer con nuestras entidades

  const [users, setUsers] = useState([
    {
      email: "john@gmail.com",
      password: "john1234",
      first_name: "John",
      last_name: "Doe",
      birthday: "1993-10-10",
      id: 1
    }
  ]);
  const [userUpdate, setUserUpdate] = useState(null);

  //READ
  //Consultar la informacion guardada en el estado

  //CREATE
  //Utilizando la información generada por el formulario, vamos a añadir un nuevo objeto al estado

  const addUser = (userData) => {
    //Añadir nuevos elementos a un estado que tiene formato de arreglo

    //Los estados NO DEBEN mutar
    //Las modificaciones en un estado SOLO deben realizarse a traves de la funcion seteadora

    setUsers([...users, userData]);
  };

  //DELETE
  //La posibilidad de detonar una accion de eliminacion
  //Detectar el elemento que la esta provocando

  const deleteUser = (idUser) => {
    //¿Como eliminamos?

    //Filter
    //Obtener a todos los usuarios QUE NO SEAN el usuario que queremos eliminar
    //El usuario que queremos eliminar, no estaria dentro del arreglo que se genera con el filter
    //Eliminacion por descarte

    const filteredUsers = users.filter((user) => user.id !== idUser);
    setUsers(filteredUsers);
  };

  const selectUser = (userData) => {
    setUserUpdate(userData);
  };

  //UPDATE
  const userActualization = (userData) => {
    console.log(userData);
    //Encontrar dentro del arreglo del estado el objeto (el usuario) que va a ser actualizado.
    //Reemplazamos el objeto actual por el nuevo objeto userData
    //Seteamos el estado

    const index = users.findIndex((user) => user.id === userData.id);
    users[index] = userData;
    setUsers([...users]);

    setUserUpdate(null);
  };

  return (
    <div className="App">
      <Form
        createUser={(data) => addUser(data)}
        selectedUser={userUpdate}
        updateUser={(data) => userActualization(data)}
      />
      <UsersList
        usersData={users}
        deleteUserAction={(id) => deleteUser(id)}
        selectUser={(data) => selectUser(data)}
      />
    </div>
  );
}

export default App;

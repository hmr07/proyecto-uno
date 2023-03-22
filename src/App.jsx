import "./styles.css";
import Form from "./components/Form";
import UsersList from "./components/ProductList";
import { useState, useEffect } from "react";
import axios from "axios"

function App() {
 

  const [users, setUsers] = useState([])
    
  const [userUpdate, setUserUpdate] = useState(null);

  useEffect ( () => {
    axios
      .get ( "https://cars-crud.academlo.tech/cars/")
      .then (resp => setUsers(resp.data))
      .catch ( error => console.error (error))
       
  }, [])


  //READ
  //CREATE
   

  const addUser = (userData) => {
    
    setUsers([...users, userData]);
  };

  //DELETE
  
  const deleteUser = (idUser) => {
   

    //Filter
  
    const filteredUsers = users.filter((user) => user.id !== idUser);
    setUsers(filteredUsers);
  };

  const selectUser = (userData) => {
    setUserUpdate(userData);
  };

  //UPDATE
  const userActualization = (userData) => {
    console.log(userData);
  
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

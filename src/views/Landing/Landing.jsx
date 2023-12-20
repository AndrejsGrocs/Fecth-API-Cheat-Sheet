import React, { useEffect, useState } from "react";
import { User } from "../../components/User";
import AddUser from "../../components/AddUser";

export default function Landing() {
  const [users, setUsers] = useState([]);

  // function FetchData(){
  //   const [data, setData] = useState([])
  //     useEffect(()=>{
  //       axios.get('https://jsonplaceholder.typicode.com/users')
  //       // .then(res => console.log(res)) previous simple way to get data.
  //       .then (res =>setData(res.data))
  //       .catch(err=> console.log(err))

  //     }, [])

  useEffect(() => {
    FetchData1();
  }, []);

  const FetchData1 = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

      const onDelete = async (id) =>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
          method: 'DELETE'

        })
        .then((res)=>{
          if(res.status !== 200){
            return
          }else{
            setUsers(users.filter((user)=>{
              return user.id !==id

            }))
          }
        })
        .catch((err)=>{
           console.log(err)

        })

      }

  console.log(users);

  return (
    <div className="landing-body">
      <h1>CRUD JSON Fetch API</h1>

      <AddUser onAdd={onAdd}/>

      {users.map((user)=> (
        <User id={user.id} key={user.id} name={user.name} email={user.email} onDelete={onDelete} />
      ))

      }
    </div>
  );
}

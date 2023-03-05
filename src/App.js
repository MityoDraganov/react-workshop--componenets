import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Table } from "./components/Table";
import {useEffect, useState} from 'react'
import {getAll} from './services/UserService'
function App() {

    const [users, updateUsers] = useState([])

    useEffect(()=>{
       getAll()
       .then(data =>{
           updateUsers(data)
           
       })
       .catch(err =>{
           console.log('Error ' + err)
       })
    }, [])

  return (
    <>

      <Header />

      <main className="main">

        <section className="card users-container">

            <Search />
            <Table users = {users}/>
        </section>

      </main>

    
        <Footer />
    </>
  );
}

export default App;

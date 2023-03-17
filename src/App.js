import {useState} from "react";
import './App.css';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
// components
import {Navbar,Contacts} from "./components/";

const App = ()=> {
    const [loading , setLoading] = useState(false)
    const [getcontacts , setContacts] = useState([])

  return (
    <div className="App">
        <Navbar/>
        <Contacts contacts = {getcontacts} loading={loading}/>
    </div>
  );
}

export default App;

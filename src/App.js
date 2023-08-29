import {useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import {Navbar, Contacts} from "./components/";
import {Navigate, Route, Routes} from "react-router-dom";
import AddContact from "./components/Contacts/AddContact";
import {Contact} from "./components";
import EdictContact from "./components/Contacts/EdictContact";

const App = () => {
    const [loading, setLoading] = useState(false)
    const [contacts, setContacts] = useState(["سوران لطفی "])

    return (
        <div className="App">
            <Navbar/>
           <Routes>
               <Route path={"/"} element={<Navigate to={"/contacts"}/>}/>
               <Route path={"/contacts"} element={<Contacts contacts={contacts} loading={loading} />} />
               <Route path={"contacts/add"} element={<AddContact/>} />
               <Route path={"contacts/:contactId"} element={<Contact  />} />
               <Route path={"contacts/edit/:contactId"} element={<EdictContact/>} />
           </Routes>
        </div>
    );
}

export default App;

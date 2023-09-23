import {useState, useEffect} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {
  AddContact,
  ViewContact,
  Contacts,
  EditContact,
  Navbar, SearchContact,
} from "./components";
import {
    getAllContacts,
    getAllGroups,
    createContact, deleteContact,
} from "./services/contactService";
import "./App.css";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {confirmAlert} from "react-confirm-alert"
import {COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW} from "./assistants/colors";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [forceRender, setForceRender] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [Groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const {data: contactsData} = await getAllContacts();
                const {data: groupsData} = await getAllGroups();

                setContacts(contactsData);
                setGroups(groupsData);

                setLoading(false);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const {data: contactsData} = await getAllContacts();

                setContacts(contactsData);

                setLoading(false);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [forceRender]);


    const confirm = (contactId, contactFullName) =>
    {
        confirmAlert({
            customUI: ({onClose}) => {
                return <div dir={"rtl"} style={{
                    backgroundColor: CURRENTLINE,
                    border: `1px solid ${PURPLE}`,
                    borderRadius: "1em"
                }}
                            className={"p-4"}
                >
                  <h1 style={{color:YELLOW}}>پاک کردن مخاطب</h1>
                  <p style={{color:FOREGROUND}}>آیا نسبت به پاک کردن مخپاطب {contactFullName}</p>

                  <button onClick={()=>{
                    removeContact(contactId)
                    onClose();
                  }}
                          className="btn mx-2"
                          style={{backgroundColor:PURPLE}}
                  >
                    بلی
                  </button>
                  <button onClick={()=>{
                    onClose();
                  }}
                          className="btn"
                          style={{backgroundColor:COMMENT}}
                  >
                    خیر
                  </button>
                </div>
            }
        })
    }
    const removeContact = async (contactId) => {
        try {
            setLoading(true)
            const response = await deleteContact(contactId)
            if (response) {

            }
        } catch (err) {
            console.log(err.message)
            setLoading(false)
        }
    }

    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer rtl={true}/>
            <Navbar contacts={contacts} setContacts={setContacts}/>
            <Routes>
                <Route path="/" element={<Navigate to="/contacts"/>}/>
                <Route
                    path="/contacts"
                    element={<Contacts contacts={contacts} loading={loading}/>}
                />
                <Route
                    path="/contacts/add"
                    element={<AddContact loading={loading} groups={Groups}/>}
                />
                <Route path="/contacts/:contactId" element={<ViewContact/>}/>
                <Route path="/contacts/edit/:contactId" element={<EditContact groups={Groups}/>}/>
            </Routes>
        </div>
    );
};

export default App;

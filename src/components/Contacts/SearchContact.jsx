import { PURPLE } from "../../helpers/colors";

const SearchContact = ({contacts, setContacts}) => {
    function searchData(value){
        const filteredContacts = contacts.filter(contact =>
             contact.fullName.includes(value)
        )
/*
        setContacts(filteredContacts)
*/
        console.log(setContacts)
    }
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        dir="rtl"
        type="text"
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="Search"
        aria-describedby="basic-addon1"
        onChange={(e)=>searchData(e.target.value)}
      />
    </div>
  );
};

export default SearchContact;

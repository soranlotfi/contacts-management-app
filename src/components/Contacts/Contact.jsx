import {Link, useNavigate} from "react-router-dom";

import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED} from "../../helpers/colors";
import {useState} from "react";
import {confirmAlert} from "react-confirm-alert";
import {COMMENT, FOREGROUND, YELLOW} from "../../assistants/colors";
import {deleteContact} from "../../services/contactService";
import {SuccessToast} from "../../Utils/Toast";

const Contact = ({contact}) => {

    const confirmDelete = (contactId, contactFullName) =>
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
                    <p style={{color:FOREGROUND}}>آیا نسبت به پاک کردن مخاطب {contactFullName} اطمینان دارید ؟ </p>

                    <button onClick={()=>{
                        deleteContact(contactId)
                        SuccessToast("حذف مخاطب با موفقیت انجام شد")
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

    const Navigate=useNavigate()
    const [Delete , setDelete]=useState(false)
    return (
        <div className="col-md-6">
            <div style={{backgroundColor: CURRENTLINE}} className="card my-2">
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img
                                src={contact.photo}
                                alt={contact.fullName}
                                style={{border: `1px solid ${PURPLE}`}}
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">
                                    نام و نام خانوداگی :{"  "}
                                    <span className="fw-bold">{contact.fullName}</span>
                                </li>

                                <li className="list-group-item list-group-item-dark">
                                    شماره موبایل :{"  "}
                                    <span className="fw-bold">{contact.phoneNumber}</span>
                                </li>

                                <li className="list-group-item list-group-item-dark">
                                    آدرس ایمیل :{"  "}
                                    <span className="fw-bold">{contact.email}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <Link
                                to={`/contacts/${contact.id}`}
                                className="btn my-1"
                                style={{backgroundColor: ORANGE}}
                            >
                                <i className="fa fa-eye"/>
                            </Link>
                            <Link to={`/contacts/edit/${contact.id}/`}>
                                <button className="btn my-1" style={{backgroundColor: CYAN}}>
                                    <i className="fa fa-pen"/>
                                </button>
                            </Link>
                            <button onClick={()=>confirmDelete(contact.id , contact.fullName)}  className="btn my-1" style={{backgroundColor: RED}}>
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

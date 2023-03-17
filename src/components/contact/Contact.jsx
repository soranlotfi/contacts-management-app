import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED} from "../../assistants/colors";

const Contact = () => {
    return (<div className="col-md-6">
        <div style={{backgroundColor: CURRENTLINE}} className="card my-2">
            <div className="card-body">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-md-4 col-sm-4">
                        <img src="https://via.placeholder.com/150" alt="" style={{border: `1px solid ${PURPLE}`}}
                             className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-7 col-sm-7">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark">نام و نام خانوادگی : {" "}
                                <span className="fw-bold">
                                                    سوران لطفی
                                                </span>
                            </li>
                            <li className="list-group-item list-group-item-dark">شماره موبایل : {" "}
                                <span className="fw-bold">
                                                    09184451244
                                                </span>
                            </li>
                            <li className="list-group-item list-group-item-dark">آدرس ایمیل: {" "}
                                <span className="fw-bold">
                                                    soranit2000@gmail.com
                                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                        <button className="btn my-1" style={{backgroundColor: ORANGE}}>
                            <span className="fa fa-eye"></span>
                        </button>
                        <button className="btn my-1" style={{backgroundColor: CYAN}}>
                            <span className="fa fa-pencil"></span>
                        </button>
                        <button className="btn my-1" style={{backgroundColor: RED}}>
                            <span className="fa fa-trash"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Contact;
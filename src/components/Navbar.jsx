
import {SearchContact} from "./index";
import {PURPLE,BACKGROUND} from '../assistants/colors'
const Navbar = () => {
    return (<nav className="navbar navbar-dark navbar-expand-lg shadow-lg"
    style={{backgroundColor:BACKGROUND}}>
        <div className="container">
            <div className="row w-100">
                <div className="col">
                    <div className="navbar-brand">
                        <i className="fa fa-id-badge" style={{color:PURPLE}}/>
                        {" "}  وب اپلیکیشن مدیریت {" "}
                        <span style={{color: PURPLE}}>مخاطبین</span>
                    </div>
                </div>
                <SearchContact/>
            </div>
        </div>
    </nav>)
}

export default Navbar;
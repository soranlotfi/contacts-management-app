import {PURPLE} from "../../assistants/colors";

const searchContact = ()=>{
    return(
        <div className="col">
            <div className="input-group mx-2 w-75" dir="ltr">
                            <span className="input-group-text" id="basic-addon1"
                                  style={{backgroundColor: PURPLE}}>
                            <i className="fa fa-search"/>
                            </span>
                <input type="text" dir="rtl"
                       className="form-control" placeholder="نام مخاطب ..." aria-label="search"
                       aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}
export default searchContact
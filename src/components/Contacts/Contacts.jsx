import {Spinner,Contact} from "../index";
import {CURRENTLINE, ORANGE, PINK} from "../../assistants/colors";

const Contacts = ({contacts , loading}) => {
    return (
            <>
                <section className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">
                                    <button className="btn mx-2" style={{backgroundColor: PINK}}>
                                        ساخت مخاطب جدید
                                        <i className="fa fa-plus-circle"></i>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    loading? <Spinner/> :(
                        <section className="container">
                            <div className="row">
                                {
                                    contacts.length > 0 ? contacts.map(c=>(
                                            <Contact/>
                                        )) :
                                        (
                                            <div className="text-center py-5" style={{backgroundColor:CURRENTLINE}}>
                                                <p className="h3" style={{color:ORANGE}}>مخاطبی یافت نشد ...</p>
                                                <img src={require("../../assets/no-found.gif")} alt="پیدا نشد" className="w-25"/>
                                            </div>
                                        )
                                }
                            </div>
                        </section>
                    )
                }

            </>
        )
}

export default Contacts
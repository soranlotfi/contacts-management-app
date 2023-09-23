import {PURPLE, ORANGE, COMMENT} from "../../assistants/colors";
import {Spinner} from "../index";
import * as Yup from "yup";
import {PromiseToast} from "../../Utils/Toast";
import {createContact, getContact, updateContact} from "../../services/contactService";
import {useFormik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const EditContact = ({loading, groups}) => {
    const Navigate=useNavigate()
    const {contactId} = useParams()
    const [contact,setContact] = useState()
    const formValues = {
        fullName: "",
        photo: "",
        phoneNumber: "",
        email: "",
        job: "",
        group: 0
    }
    const validation = Yup.object({
        fullName: Yup.string().required("مقدار خواسته شده را پر کنید "),
        photo: Yup.string().required("مقدار خواسته شده را پر کنید "),
        phoneNumber: Yup.string().required("مقدار خواسته شده را پر کنید "),
        email: Yup.string().required("مقدار خواسته شده را پر کنید "),
        job: Yup.string().required("مقدار خواسته شده را پر کنید "),
        group: Yup.number().required("مقدار خواسته شده را پر کنید "),
    })



    const handleSubmit = (values, {resetForm}) => {
        try {
            PromiseToast(updateContact(values,contactId), {
                success: "با موفقیت انجام شد",
                pending: "در حال پردازش ...",
                error: {
                    render({data}) {
                        return data.message ?? "مشکل در ارتباط"
                    }
                }
            })
            Navigate("/contacts",{replace:true})
        } catch (err) {
            return err
        }
        resetForm()
    }
    const formik = useFormik(
        {
            initialValues: formValues,
            validationSchema: validation,
            onSubmit: handleSubmit,
        }
    )
    useEffect(() => {
        getContact(contactId)
            .then(r => {
                formik.setValues(r.data)
            }).catch(err => {
            return err.message
        })
    }, []);
    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <>
                    <section className="p-3">
                        <div className="container">
                            <div className="row my-2">
                                <div className="col text-center">
                                    <p className="h4 fw-bold" style={{color: ORANGE}}>
                                        ویرایش مخاطب
                                    </p>
                                </div>
                            </div>
                            <hr style={{backgroundColor: ORANGE}}/>
                            <div
                                className="row p-2 w-75 mx-auto align-items-center"
                                style={{backgroundColor: "#44475a", borderRadius: "1em"}}
                            >
                                <div className="col-md-8">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="mb-2">
                                            <input
                                                name="fullName"
                                                type="text"
                                                className="form-control"
                                                value={formik.values.fullName}
                                                onChange={formik.handleChange}
                                                required={true}
                                                placeholder="نام و نام خانوادگی"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={formik.values.photo}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="آدرس تصویر"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="phoneNumber"
                                                type="number"
                                                className="form-control"
                                                value={formik.values.phoneNumber}
                                                onChange={formik.handleChange}
                                                required={true}
                                                placeholder="شماره موبایل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                required={true}
                                                placeholder="آدرس ایمیل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="job"
                                                type="text"
                                                className="form-control"
                                                value={formik.values.job}
                                                onChange={formik.handleChange}
                                                required={true}
                                                placeholder="شغل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={formik.values.group}
                                                onChange={formik.handleChange}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">انتخاب گروه</option>
                                                {groups.length > 0 &&
                                                    groups.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{backgroundColor: PURPLE}}
                                                value="ویرایش مخاطب"
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{backgroundColor: COMMENT}}
                                            >
                                                انصراف
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src={formik.values.photo}
                                        className="img-fluid rounded"
                                        style={{border: `1px solid ${PURPLE}`}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-1">
                            <img
                                src={require("../../assets/man-taking-note.png")}
                                height="300px"
                                style={{opacity: "60%"}}
                            />
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default EditContact;

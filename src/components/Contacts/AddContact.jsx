import {Link} from "react-router-dom";
import {Spinner} from "../";
import {COMMENT, GREEN, PURPLE} from "../../helpers/colors";
import {useFormik} from "formik";
import *  as Yup from "yup"
import {PromiseToast} from "../../Utils/Toast";
import {createContact} from "../../services/contactService";

const AddContact = ({
                        loading,
                        groups,
                    }) => {

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

    const handleSubmit = (values , {resetForm}) => {
        try {
            PromiseToast(createContact(values), {
                success: "با موفقیت انجام شد",
                pending: "در حال پردازش ...",
                error: {
                    render({data}) {
                        return data.message ?? "مشکل در ارتباط"
                    }
                }
            })
        } catch (err) {
            return err
        }
        resetForm()
    }
    const formik = useFormik(
        {
            initialValues: formValues,
            validationSchema: validation,
            onSubmit: handleSubmit
        }
    )
    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <>
                    <section className="p-3">
                        <img
                            src={require("../../assets/man-taking-note.png")}
                            height="400px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
                                opacity: "50%",
                            }}
                        />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p
                                        className="h4 fw-bold text-center"
                                        style={{color: GREEN}}
                                    >
                                        ساخت مخاطب جدید
                                    </p>
                                </div>
                            </div>
                            <hr style={{backgroundColor: GREEN}}/>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="mb-2">
                                            <input
                                                name="fullName"
                                                id="fullName"
                                                type="text"
                                                value={formik?.values?.fullName}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                                placeholder="نام و نام خانوادگی"
                                            />
                                            {formik?.errors?.fullName && <p className={"text-danger font-monospace"}>
                                                {formik?.errors?.fullName}
                                            </p>}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                id="photo"
                                                type="text"
                                                value={formik.values?.photo}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                                placeholder="آدرس تصویر"
                                            />
                                            {formik.errors?.photo && <p className={"text-danger font-monospace"}>
                                                {formik.errors?.photo}
                                            </p>}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="phoneNumber"
                                                type="number"
                                                id={"phoneNumber"}
                                                value={formik.values?.phoneNumber}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                                placeholder="شماره موبایل"
                                            />
                                            {formik.errors?.phoneNumber && <p className={"text-danger font-monospace"}>
                                                {formik.errors.phoneNumber}
                                            </p>}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formik.values?.email}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                                placeholder="آدرس ایمیل"
                                            />
                                            {formik.errors?.email && <p className={"text-danger font-monospace"}>
                                                {formik.errors?.email}
                                            </p>}
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                name="job"
                                                id="job"
                                                value={formik.values?.job}
                                                onChange={formik.handleChange}
                                                className="form-control"
                                                placeholder="شغل"
                                            />
                                            {formik.errors?.job && <p className={"text-danger font-monospace"}>
                                                {formik.errors?.job}
                                            </p>}
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                id="group"
                                                value={formik.values?.group}
                                                onChange={formik.handleChange}
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
                                        <div className="mx-2">
                                            <input
                                                type="submit"
                                                onClick={() => console.log(formik.errors)}
                                                className="btn"
                                                style={{backgroundColor: PURPLE}}
                                                value="ساخت مخاطب"
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
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AddContact;

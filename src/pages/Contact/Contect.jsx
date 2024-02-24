import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ContectSchema } from './Schema'
import './Contect.css'
import '../About.css'


const initialValues = {
    firstName: 'dharshan',
    lastName: 'D',
    email: 'sad@gmail.com',
    phoneNo: '78656454433'
}

function Contect() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        if (values == '') {
            alert("all fields are required")
        } else {

            alert("your form is submitted successfully")
            navigate('/');
        }
        //form reset
        formik.resetForm();
    }
    const formik = useFormik(
        {
            initialValues,
            validationSchema: ContectSchema,
            onSubmit: handleSubmit
        }
    )

    return (
        <div>
           <div className='about-content'>
                <h2>Contact us for more help about our website</h2>
                <h6>What if creating a website was easy? With Pagio Website Builder, it is.
                    Youll control your website and be able to edit quickly, easily and hassle-free</h6>
            </div>
            <div className='m-5'>
            <form onSubmit={formik.handleSubmit}>
                <div className="row d-flex flex-column gap-3" style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}>
                    <div className="col"><label>First name</label>
                        <input type="text" name='firstName' value={formik?.values?.firstName}
                            onChange={formik.handleChange}
                            className="form-control errorInput text-start" placeholder="First name" aria-label="First name" />
                        <p className='text-danger'>{formik.errors.firstName}</p>
                    </div>
                    <div className="col"><label>Last name</label>
                        <input type="text" name='lastName' value={formik?.values?.lastName}
                            onChange={formik.handleChange}
                            className="form-control errorInput text-start" placeholder="Last name" aria-label="Last name" />
                        <p className='text-danger'>{formik.errors.lastName}</p>
                    </div>
                    <div className="col"><label> Email</label>
                        <input type="text" name='email' value={formik?.values?.email}
                            onChange={formik.handleChange}
                            className="form-control errorInput text-start" placeholder="Enter email" aria-label="Email ID" />
                        <p className='text-danger'>{formik.errors.email}</p>
                    </div>
                    <div className="col"><label>Phone No</label>
                        <input type="text" name='phoneNo' value={formik?.values?.phoneNo}
                            onChange={formik.handleChange}
                            className="form-control errorInput text-start" placeholder="Enter Phone" aria-label="Phone Number" />
                        <p className='text-danger'>{formik.errors.phoneNo}</p>
                    </div>
                    <button type='submit' className='p-1'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Contect
import { useFormik } from 'formik'
import React from 'react'
import { ContectSchema } from './Schema'
import './Contect.css'

const initialValues = {
 firstName:'dharshan',
 lastName:'D',
 email:'sad@gmail.com',
 phoneNo:'78656454433'
}

function Contect() {

    const handleSubmit =(values)=>{
    
    }
    const formik = useFormik(
        {
            initialValues,
            validationSchema:ContectSchema,
            onSubmit:handleSubmit
        }
    )

    return (
        <div>


            <form onSubmit={formik.handleSubmit}>
                <div class="row d-flex flex-column gap-3" style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}>
                    <div class="col"><label>First name</label>
                        <input type="text" name='firstName' value={formik?.values?.firstName}
                        onChange={formik.handleChange}
                        class="form-control errorInput text-start" placeholder="First name" aria-label="First name" />
                        <p className='text-danger'>{formik.errors.firstName}</p>
                    </div>
                    <div class="col"><label>Last name</label>
                        <input type="text" name='lastName' class="form-control text-start" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div class="col"><label> Email</label>
                        <input type="text" name='email' class="form-control text-start" placeholder="Enter email" aria-label="Last name" />
                    </div>
                    <div class="col"><label>Phone No</label>
                        <input type="text" name='phoneNo' class="form-control text-start" placeholder="Enter Phone" aria-label="Last name" />
                    </div>
                    <button className='p-1'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contect
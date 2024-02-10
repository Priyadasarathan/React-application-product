import * as Yup from 'yup';
export const ContectSchema=Yup.object().shape({
    firstName:Yup.string().required('First name is required'),
    lastName:Yup.string().required('Last name is required'),
    email:Yup.string().email('Invalid email').required(' Email field Required'),
    phoneNo:Yup.string().required(' Phone number Required'),
})
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'



    const initialValues = {
        name: '',
        password: '',
        email: ''
    }

    const onSubmit = values => {
        console.log('Form data', values)    
    }

    const validationSchema = Yup.object ({
        name: Yup.string().required('Required'),
        password: Yup.string().required('No password provided'),
        email: Yup.string().email('Invalid email format').required('Required')
    })

const Signup = () => {
    
    const formik = useFormik({
          initialValues,
          onSubmit,
          validationSchema
        //   validate
        })
       
      

    console.log('Visited fields', formik.touched)
    
    return (
 
        <div className="signform">
            <h1 className='title'>Create Account</h1>
            
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'></label>
                    <input type='text' 
                        id='name' 
                        name='name' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name} 
                        placeholder="User Name"
                    />
                    {formik.touched.name && formik.errors.name ? (
                 <div className='error'>{formik.errors.name}</div> 
                 ) : null}
                </div>

                <div className="form-control">
                    <label htmlFor='passWord'></label>
                    <input type='password' 
                        id='passworde' 
                        name='password' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="Create Password" 
                    />
                    {formik.touched.password && formik.errors.password ? (
                  <div className='error'>{formik.errors.password}</div>
                  ) : null}
                </div>
                
                <div className="form-control">
                    <label htmlFor='email'> </label>
                    <input type='email' 
                        id='email' 
                        name='email' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                        placeholder="Email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                   <div className='error'>{formik.errors.email}</div>
                   ) : null}
                </div>

                <button type='submit'>Submit</button>

            </form>
        </div>

    )
}
export default Signup
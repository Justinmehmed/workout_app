import React from 'react'
import { useFormik } from 'formik'



    const initialValues = {
        name: '',
        password: '',
        email: ''
    }

    const onSubmit = values => {
        console.log('Form data', values)    
    }

    const validate = values => {
        let errors = {}
        if (!values.name){
            errors.name = 'Required'
        }
        if (!values.password){
            errors.password = 'Required'
        }
        if (!values.email){
            errors.email = 'Required'
        }

    return errors

    }

const Signup = () => {
    
    const formik = useFormik({
          initialValues,
          onSubmit,
          validate
        })
       
      

    console.log('Form errors', formik.errors)
    
    return (
 
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'></label>
                    <input type='text' 
                    id='name' 
                    name='name' 
                    onChange={formik.handleChange} 
                    value={formik.values.name} 
                    placeholder="User Name"
                    />
                    {formik.errors.name ? 
                 <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='passWord'></label>
                    <input type='password' 
                    id='passworde' 
                    name='password' 
                    onChange={formik.handleChange} 
                    value={formik.values.password}
                    placeholder="Create Password" 
                    />
                    {formik.errors.password ? 
                  <div className='error'>{formik.errors.password}</div> : null}
                </div>
                
                <div className="form-control">
                    <label htmlFor='email'> </label>
                    <input type='email' 
                    id='email' 
                    name='email' 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    placeholder="Email"
                    />
                    {formik.errors.email ? 
                   <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <button type='submit'>Submit</button>

            </form>
        </div>

    )
}
export default Signup
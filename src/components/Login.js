import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


const initialValues = {
    name: '',
    password: '',
    email: ''
}

const onSubmit = values => {
    const { name, email, password, password_confirmation } = values;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });

  }

const validationSchema = Yup.object ({
    name: Yup.string().required('Required'),
    password: Yup.string().required('No password provided'),
    email: Yup.string().email('Invalid email format').required('Required')
})


const Login = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
      //   validate
      })
     
  console.log('Visited fields', formik.touched)
  
  return (

      <div className="signform">
          <h1 className='title'>Sign In</h1>
          
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
                      placeholder="Password" 
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

export default Login 
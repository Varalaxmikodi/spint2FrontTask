

import { useNavigate, Navigate } from 'react-router-dom';

import logoImage from '../../assets/images/logs.PNG';


import { getLoginData, getLoginUserData } from '../user.service';
import './login.component.css';




export function LoginComponent() {


    let navigate = useNavigate();



    function getLoginUser() {


        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        console.log(email, password)


        getLoginUserData()
            .then((res) => {
                console.log(res.data)
                alert('Get login data successfully..')

                let filterData = res.data.filter((item) => item.email === email && item.password === password)
                console.log(filterData)
                if (filterData.length > 0) {
                    alert("User Exist");

                    navigate("/logo")


                }
                else {
                    alert("User not exist")
                }

            })
            .catch((ex) => {
                alert(ex.message)
            })


    }




    return (

        <div>
            <div className='row'>
                <div className='col-6'>
                    <img src={logoImage} className='image-card'></img>

                </div>
                <div className='col-6'>
                    <div className='login-form'>
                        <div className='container'>
                            <h6 style={{ textAlign: 'center' }} className='title'>Welcome back!</h6>
                            <div className='form-group m-3 email-card'>
                                <label className='name-card' st>Email*</label>
                                <div style={{"background-color":"white","border":"1px solid","border-color":"white"}}>
                                <input type='email' id='email' className='form-control' placeholder='Email' required></input>
                                </div>
                            </div>
                            <div className='form-group m-3 pw-card'>
                                <label className='pass-card' style={{"margin-top":"10px"}}>Password*</label>
                                <div style={{"background-color":"white","border":"1px solid","border-color":"white"}}>
                                <input type='password' id='password' className='form-control' placeholder='Password' required></input>
                                </div>
                            </div>
                            <div className='m-3'>
                              <button className='btn btn-secondary button-cards ' style={{"font-size":"20px"}} onClick={() => { getLoginUser() }} >Login</button> &nbsp;
                                {/* <button className='btn btn-secondary' >Cancel</button> */}

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { get_user } from './allfun';

import { useParams } from 'react-router-dom';
export default function Adminverify() {
    const [success, setSuccess] = useState("")
    const [errors, setErrors] = useState([])
    
    const [verify, setverify] = useState(
        {
            name: "",
            email: "",
            twitter: "",
            username: "",
        }
    )
    const param = useParams();
    const userauth = get_user()
    useEffect(() => {
        const postData = { user_id: userauth.id,id:param.id };
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'admin-verification',
            data: postData
        }).then(async function (response) {
            const res = await response;
            console.log(res)
            setverify(res.verification)
        });
    }, []);

    const approveverification = async () => {
        const postData ={ user_id:2}
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'approve',
            data: postData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                setSuccess(res.data.message)
                console.log("approve")
                console.log(res)
            } else {
                setErrors(errors)
            }
        }).catch((err) => {

            const errors = err.response.data.data;
            console.log(errors)
            setErrors(errors)
            console.log('errors')
            console.log(errors)
            setSuccess("")
        });
    }; 
    const disverification = async () => {
        const postData ={ user_id:2}
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'dis-approve',
            data: postData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                setSuccess(res)
                console.log("disapprove")
                console.log(res.data)
            } else {
                setErrors(errors)
            }
        }).catch((err) => {

            const errors = err.response.data.data;
            console.log(errors)
            setErrors(errors)
            console.log('errors')
            console.log(errors)
            setSuccess("")
        });
    };
    const closeMessage=(e) => {
		if (e == 1) {
			setErrors("")
			setSuccess("")
		}
	}
    const handleChange = ({ currentTarget: input }) => {
        setverify({ ...verify, [input.name]: input.value })

        if (input.name == "") {
            setErrors([])
        }
        if (input.value == '') {
            setErrors({ ...errors, [input.name]: input.placeholder + ' is required!' })
        } else {
            // setErrors({ ...errors, [input.name]: false })
        }
    }

    return (
        <>
            <div className="container-fluied  mt-5">
                <h2 className='color_pencile text-center mt-5'>Artist Verification</h2>
                <p className='color_pencile text-center'>Fill up the Form and our team will verify you within 24 hrs</p>
                <div className="d-flex justify-content-center">
                    <div className="card  bg-transparent form_card form_width">
                        <div className="card-body">
                            <form>
                            {success != '' &&
					    		<div className="alert alert-success alert-dismissible fade show">
								    <strong>Success!</strong> {success}
								    <button type="button" className="btn-close" onClick={() => closeMessage(1)} ></button>
								</div>
							}
					    	{errors != '' &&
					    		<div className="alert alert-danger alert-dismissible fade show">
								    <strong>Error!</strong> {errors}
								    <button type="button" className="btn-close" onClick={() => closeMessage(1)} ></button>
								</div>
							} 
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label color_pencile">Name</label>
                                    <input type="text" name="name" className="form-control bg-transparent border_theme_1px inp_radius color_theme input  rounded"   onChange={handleChange}  placeholder='Your Name' id="name" />
                                    {errors && <span className="text-danger">{errors.name}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label color_pencile">Email</label>
                                    <input type="email"  name="email"className="form-control bg-transparent border_theme_1px inp_radius color_theme input rounded"    onChange={handleChange}  placeholder='youremail@gmail.com' id="e-mail" />
                                    {errors && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="twitter" className="form-label color_pencile">Twitter</label>
                                    <input type="text" name='twitter' className="form-control bg-transparent border_theme_1px inp_radius color_theme input  rounded"   onChange={handleChange}  id="collection" placeholder='Your Twitter' />
                                    {errors && <span className="text-danger">{errors.twitter}</span>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label color_pencile">Coin Market Cap Username</label>
                                    <input type="text" name='username' className="form-control bg-transparent border_theme_1px inp_radius color_theme input  rounded"    onChange={handleChange}  placeholder='Your coinmarket cap username' id="collection" />
                                    {errors && <span className="text-danger">{errors.username}</span>}
                                </div>
                                <div className="d-flex justify-content-center">
                                <button type='button' className="Snoozz_fn_button p-3 border_grey_2px mt-3 mx-2" onClick={() => approveverification()}>Approve</button>
                                <button type='button' className="Snoozz_fn_button p-3 border_grey_2px mt-3" onClick={() => disverification()}>DisApprove</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

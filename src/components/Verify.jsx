import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
export default function Verify() {
    const [userid, setuserid] = useState()
    const[data, setdata] = useState(
        {
            // user_id:"2",
            name:"",
            email:"",
            coinmarketuname:"",
            twitter:"",
        }
    )
    const [errors, setErrors] = useState({
        name:false,
        email: false,
        coinmarketuname:false,
        twitter: false,
    })
    
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

      

    const submitVerification = async () => {
        data.user_id = 2;
        // const aaa = JSON.stringify(data)
        console.log('data')
        console.log(data)
        const postData = data;
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            url: process.env.REACT_APP_API_PATH+'verification',
            data: postData,
        }).then(function (res) {
            if (res.data.status && res.data.status == 'success') {
                setError("")
				setSuccess(res.data.message)
			} else if ((res.data.status && res.data.status == 'error') || !res.data.status) {
                setSuccess("")
				setError("Something went wrong!!!!!!!!!!!!!!!!!!!!!!!")
                setdata({ name:"",email:"", coinmarketuname:"",twitter:"",})
			}
            const aaa = res;
            console.log('aaa')
            console.log(aaa)

        }).catch((err) => {
            const errors = err.response.data.data;
            setSuccess("")
			setError("Something went wrong!")
            console.log('errors')
            console.log(errors)
        });
    };
    
	const closeMessage=(e) => {
		if (e == 1) {
			setError("")
			setSuccess("")
		}
	}
    const handleChange=({currentTarget:input}) => {
        setdata({...data,[input.name]:input.value})
        if (input.value == '') {
	        setErrors({...errors,[input.name]:input.placeholder+' is required!'})
        } else {
	        setErrors({...errors,[input.name]:false})
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

					    	{error != '' &&
					    		<div className="alert alert-danger alert-dismissible fade show">
								    <strong>Error!</strong> {error}
								    <button type="button" className="btn-close" onClick={() => closeMessage(1)} ></button>
								</div>
							}
					        	
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label color_pencile">Name</label>
                                    <input type="text" name="name" className="form-control bg-transparent border_theme_1px inp_radius color_theme input  rounded" value={data.name} onChange={handleChange}  placeholder='Your Name' id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="e-mail" className="form-label color_pencile">Email</label>
                                    <input type="email"  name="email"className="form-control bg-transparent border_theme_1px inp_radius color_theme input rounded" value={data.email} onChange={handleChange}  placeholder='youremail@gmail.com' id="e-mail" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="twitter" className="form-label color_pencile">Twitter</label>
                                    <input type="text" name='twitter' className="form-control bg-transparent border_theme_1px inp_radius color_theme input  rounded" value={data.twitter} onChange={handleChange}  id="collection" placeholder='Your Twitter' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="coinmarketuname" className="form-label color_pencile">Coin Market Cap Username</label>
                                    <input type="text" name='coinmarketuname' className="form-control bg-transparent border_theme_1px inp_radius color_theme input  rounded" value={data.coinmarketuname} onChange={handleChange}  placeholder='Your coinmarket cap username' id="collection" />
                                </div>
                                <div className="d-flex justify-content-center">
                                <button type='button' className="Snoozz_fn_button p-3 border_grey_2px mt-3" onClick={() => submitVerification()}>Submit</button>

                                    {/* <button type="submit" className="Snoozz_fn_button p-3 border_grey_2px mt-3">Submit</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

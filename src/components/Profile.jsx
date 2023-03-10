import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import '../css/profile.css'
import { get_user } from './allfun';
import profile from '../img/Profile.png'
export default function Profile() {
    const [countrydata, setcountryData] = useState([])
    const [pic, setpic] = useState(
        {
            image: "",
        }
    )
    const [success, setSuccess] = useState("")
    const [errors, setErrors] = useState([])
    const userauth = get_user()
    const [profiledata, setprofiledata] = useState(
        {
            name: "",
            uname: "",
            email: "",
            country: ""
        }
    )
    //getprofile
    const getProfile = async () => {
        const postData = { user_id: userauth.id};
        console.log(63)
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'profile',
            data: postData
        }).then(async function (response) {
            const res = await response.data.data;
            console.log('res')
            console.log(res)
            if(res.profile && res.profile.country) {
                res.user_details.country = res.profile.country
            } else if(res.profile == "") 
            {
                res.user_details.country = res.countries
            }
            // console.log(res.country)
            setcountryData(res.countries)
            if(res.user_details) {
                setprofiledata(res.user_details)
            }

            // console.log('res.user_details')
            // console.log(res.user_details)
        });
    };
    //updateprofile

    const submitProfile = async () => {
        profiledata.user_id = userauth.id;
        const postData = profiledata;
        console.log('profiledata');
        console.log(profiledata);
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'submit-profile',
            data: postData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                setSuccess(res.data.message)
            } else  {
            }
        }).catch((err) => {

            const errors = err.response.data.data;
            console.log(errors)
            setErrors(errors)
            console.log('errors')
            console.log(errors)
            setSuccess("")
        });

        // set profile image

        const formData = new FormData();
        console.log("pic.image")
        console.log(pic.image)
        formData.append("profile-pic", pic.image);
        formData.append("user_id", 69);
        console.log("formData")
        console.log(formData)
        await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_PATH + 'submit-profile-pic',
            data: formData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                console.log('res')
                console.log(res)
            } else {
            }
            console.log(res)
        }).catch((err) => {

            const errors = err.response;
            console.log(errors)
            console.log('errors')
            console.log(errors)
        });
    };
    const closeMessage = (e) => {
        if (e == 1) {
            // setError("")
            setSuccess("")
        }
    }

    const handleChange = ({ currentTarget: input }) => {
        setprofiledata({ ...profiledata, [input.name]: input.value })
        if (input.name == "") {
            setErrors([])
        }
        if (input.value == '') {
            setErrors({ ...errors, [input.name]: input.placeholder + ' is required!' })
        } else {
            setErrors({ ...errors, [input.name]: false })
        }
        
    }
    var handleimage = function (event) 
    {
      var images = document.getElementById("pic");
      images.src =URL.createObjectURL(event.target.files[0]);
      setpic({
        image:event.target.files[0]
      })
    };
    console.log("image outside")
    console.log(pic.image)

    useEffect(() => {
        getProfile()
        // getcountry()
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card bg-transparent border_none w-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <img src={profile} id='pic' className="w-75 artist_img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <nav>
                            <div className="nav nav-tabs nav_tabs" id="nav-tab" role="tablist">
                                <button className="nav-link nav_link active mx-1" id="nav-personalsetting-tab" data-bs-toggle="tab" data-bs-target="#nav-personalsetting" type="button" role="tab" aria-controls="nav-personalsetting" aria-selected="true">personalsetting</button>
                                <button className="nav-link nav_link mx-1" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane  tab_pane fade show active" id="nav-personalsetting" role="tabpanel" aria-labelledby="nav-personalsetting-tab" tabIndex="0">
                                <form>
                                    {success != '' &&
                                        <div className="alert alert-success alert-dismissible fade show">
                                            <strong>Success!</strong> {success}
                                            <button type="button" className="btn-close" onClick={() => closeMessage(1)} ></button>
                                        </div>
                                    }
                                    <div className="container p-5 select_container mt-5">
                                        <p className='color_theme text-center'> PNG, JPG, JPEG
                                            Height: 500, Width: 500</p>
                                        <div className='d-flex justify-content-center'>
                                            <input type="file" className="Snoozz_fn_button select_width shdow_green p-3 fwthin" id='profile_img'  onChange={handleimage}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="name" className="form-label color_pencile">Name</label>
                                        <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2" value={profiledata.name} placeholder='Name' name='name' onChange={handleChange} id="name" />
                                        {errors && <span className="text-danger">{errors.name}</span>}
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="username" className="form-label color_pencile">Username</label>
                                        <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2" value={profiledata.uname} placeholder='Username' name='uname' onChange={handleChange} id="uname" />
                                        {errors && <span className="text-danger">{errors.uname}</span>}
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label color_pencile">E-mail</label>
                                        <input type="email" className="form-control bg-transparent border_theme_1px  color_theme p-2" value={profiledata.email} placeholder='E-mail' name='email' aria-describedby="emailHelp" onChange={handleChange} id="email" />
                                        {errors && <span className="text-danger">{errors.email}</span>}

                                    </div>
                                    <div className="mb-3 mt-3">

                                        <label htmlFor="country" className="form-label color_pencile">Country</label>
                                        <select className="form-select bg-transparent border_theme_1px  color_theme p-2" value={profiledata.country} name='country' onChange={handleChange} aria-label="Default select example">

                                            {countrydata.map((e) => {
                                                if (profiledata.country == e.name) {
                                                    return <option className="bg-dark">{e.name}</option>
                                                } else {
                                                    return <option key={e.id} className="bg-dark">{e.name}</option>
                                                }
                                            })}
                                        </select>
                                    </div>
                                    <button type='button' className="btn w-25 btn_submit" onClick={() => submitProfile()}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="tab-pane  tab_pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">...</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
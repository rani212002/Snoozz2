import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Profiletabs from './Profiletabs'
import '../css/profile.css'
import { errors } from 'ethers';

export default function Profile() {
    const [countrydata, setcountryData] = useState([])
    // const [profiledata,setprofiledata] = useState([])
    // const[profile,setprofile]= useState()
    const [userid, setuserid] = useState()
    const [success, setSuccess] = useState("")
    const [errors, setErrors] = useState([])

    const [profiledata, setprofiledata] = useState(
        {
            name: "",
            uname: "",
            email: "",
            country: "",
        }
    )

    const [profile, setprofile] = useState(
        {
            country: ""
        }
    )
    useEffect(() => {
        let localData = localStorage.getItem('userauth');
        let data = JSON.parse(localData)
        console.log('data');
        console.log(data.id);

        const postData = { user_id: data.id };
        const response = axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'profile',
            data: postData
        }).then(async function (response) {
            const res = await response.data.data;
            console.log(res)
            setcountryData(res.countries)
            setprofile(res.profile.country)
            setprofiledata(res.user_details)
            console.log(profile)
        });
    }, []);

    const submitProfile = async () => {
        let localData = localStorage.getItem('userauth');
        let data = JSON.parse(localData)
        console.log('data');
        console.log(data.id);
        profiledata.user_id = 2;
        profiledata.country = profile
        const postData = profiledata;
        await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            url: process.env.REACT_APP_API_PATH + 'submit-profile',
            data: postData,
        }).then(function (res) {
            if (res.data.success && res.data.success == 1) {
                setSuccess(res.data.message)
            } else {
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

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card bg-transparent border_none w-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <img src="https://snoozz.io/ver1/img/profileimage/Profile.png" className="w-75 artist_img" alt="..." />
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

                                    <div className="container p-5 select_container mt-5">
                                        <p className='color_theme text-center'> PNG, JPG, JPEG
                                            Height: 500, Width: 500</p>
                                        <div className='d-flex justify-content-center'>
                                            <input type="file" className="Snoozz_fn_button select_width shdow_green p-3 fwthin">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="name" className="form-label color_pencile">Name</label>
                                        <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2" value={profiledata.name} placeholder='Name' name='name' onChange={handleChange} id="name" />
                                        {errors && <span className="text-danger">{errors.name}</span>}
                                        {/* {errors && <span className="text-danger">{errors.name}</span>} */}

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
                                        {/* <label htmlFor="wallet" className="form-label color_pencile">Country</label>
                            <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " placeholder='Country' name='country' value={formdata.country} onChange={handleChange} id="wallet" /> */}
                                        <label htmlFor="country" className="form-label color_pencile">Country</label>
                                        <select className="form-select bg-transparent border_theme_1px  color_theme p-2" name='country' value={countrydata.countries} onChange={handleChange} aria-label="Default select example">
                                            {countrydata.map((e) => {
                                                if (profile == e.name) {
                                                    return <option key={e.id} defaultValue className="bg-dark">{e.name}</option>
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
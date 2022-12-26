import React, { useEffect } from 'react'
import { bootstrap } from 'bootstrap/dist/js/bootstrap.bundle.min';
import eth from '../img/et.png'
import bnb from '../img/bnb.png'
import trc from '../img/trc_20.png'


export default function Buytokenmain() {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    })
    return (
        <>
            <div className="border_theme_1px text-center rounded">
                <p className='color_theme mt-3 '>Trading NFT</p>
            </div>
            <div className="border_theme_1px rounded mt-2">
                <div className="p-3">
                    <h1 className='color_theme'>$0</h1>
                    <div className="d-flex justify-content-between">
                        <div className='me-3'>
                            <p className='text-light'>0% of minimum goal raised</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-info bg_theme p-1 rounded"></i>

                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-25" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className='text-end color_theme'>$1000</p>
                    <div className="border_theme_1px d-flex justify-content-between rounded p-1">
                        <h6 className='text-light mt-2'>Participants</h6>
                        <h3 className='text-light'>0</h3>
                    </div>
                    <div className="border_theme_1px mt-2 rounded">
                        <h5 className='text-light p-2'>42% bonus end in:</h5>
                        <div className="row">
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Days</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Hours</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Min</p>
                            </div>
                            <div className="col text-center">
                                <h4 className='color_theme'>1066</h4>
                                <p className='text-light'>Sec</p>
                            </div>
                        </div>
                    </div>
                    <div className="border_theme_1px rounded mt-2">
                        <p className='text-light p-2'>42% bonus end in:</p>
                        <div className="row mx-1">
                            <div className="col-6 p-2">
                                <input type="text" className="form-control text-dark" aria-label=".." />
                            </div>
                            <div className="col-6 p-2">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control text-dark" aria-label="Text input with dropdown button" />
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item color_theme d-flex" href="#"><div><img src={bnb} className="coin_image"></img></div><div><p className='mt-1'>BNB</p></div></a></li>
                                        <li><a className="dropdown-item color_theme d-flex" href="#"><div><img src={eth} className="coin_image"></img></div><div><p className='mt-1'>ETH</p></div></a></li>
                                        <li><a className="dropdown-item color_theme d-flex" href="#"><div><img src={trc} className="coin_image"></img></div><div><p className='mt-1'>BNB</p></div></a></li>
                                    </ul>
                                </div>

                            </div>
                            <p className='text-start text-light'>Snoozz Amount:</p>
                            <p className='text-start text-light'>ZSnoozz Amount:</p>
                            <div class="mb-3 ms-3 d-flex justify-content-center form-check">
                                <input type="checkbox" class="form-check-input me-2" id="exampleCheck1" />
                                <label class="form-check-label text-light" for="exampleCheck1">I agree with Terms and Conditions !!</label>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center mt-2  ">
                <button className="w-25 Snoozz_fn_button shdow_green p-3 fwthin">
                    submit
                </button>
            </div>

        </>
    )
}

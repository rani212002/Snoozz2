import React from 'react'
import '../css/additem.css'
import accrord from '../img/accordian_side.png'
export default function Additem() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <p className='color_pencile'>PREVIEW</p>
                        <img src='https://snoozz.io/ver1/img/dummy-nft.jpg' className='w-100' />
                    </div>
                    <div className="col-lg-8 mt-5">
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
                                <label htmlFor="title" className="form-label color_pencile">Title</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="title" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="price" className="form-label color_pencile">Price</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="price" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="royalites" className="form-label color_pencile">Royalties(%)</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="royalites" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="service_fees" className="form-label color_pencile">Service Fees(%)</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="service_fees" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="final_price" className="form-label color_pencile">Final Price</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="final_price" />
                            </div>
                            <label htmlFor="desc" className="form-label color_pencile">Description</label>
                            <div class="form-floating">
                                <textarea class="form-control bg-transparent border_theme_1px  color_theme p-2 " placeholder="Leave a comment here" id="desc"></textarea>
                            </div>

                            <div className="mb-3 mt-3">
                                <label htmlFor="final_price" className="form-label color_pencile">Final Price</label>
                                <input type="text" className="form-control bg-transparent border_theme_1px  color_theme p-2 " id="final_price" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

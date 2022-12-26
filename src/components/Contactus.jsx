import React from 'react'

export default function Contactus() {
    return (
        <>
            <div className="container-fluied auto_height mt-5">
                <h2 className='color_pencile text-center mt-5'>Contact US</h2>
                <div className="d-flex justify-content-center">
                    <div className="card  bg-transparent form_card form_width">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="collection" className="form-label color_pencile">Collection</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" id="collection" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="formFile" class="form-label color_pencile">Image</label>
                                    <input className="form-control bg-transparent border_theme_1px rounded inp_radius" type="file" id="image" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="coverimg" class="form-label color_pencile">Cover Image(Image dimension 1400 x 400)</label>
                                    <input className="form-control bg-transparent border_theme_1px rounded inp_radius" type="file" id="coverimg" />
                                </div>
                                <label htmlFor="desc" className="form-label color_pencile">Description</label>
                                <div class="form-floating">
                                    <textarea class="form-control bg-transparent border_theme_1px inp_radius  color_theme p-2 " placeholder="Leave a comment here" id="desc"></textarea>
                                </div>

                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div> */}
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="Snoozz_fn_button p-3 shdow_green mt-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

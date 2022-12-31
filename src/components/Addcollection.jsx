import React from 'react'

export default function Addcollection() {
    return (
        <>
            <div className="container-fluied auto_height mt-5">
                <h2 className='color_pencile text-center m-5'>Your Activity</h2>
                <div className="d-flex justify-content-center">
                    <div className="card  bg-transparent form_card form_width">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlfor="collection" className="form-label color_pencile">Collection</label>
                                    <input type="text" className="form-control bg-transparent border_theme_1px inp_radius color_theme  rounded" id="collection" />
                                </div>
                                <div class="mb-3">
                                    <label htmlfor="formFile" class="form-label color_pencile">Image</label>
                                    <input className="form-control bg-transparent border_theme_1px rounded inp_radius" type="file" id="image" />
                                </div>
                                <div class="mb-3">
                                    <label htmlfor="coverimg" class="form-label color_pencile">Cover Image(Image dimension 1400 x 400)</label>
                                    <input className="form-control bg-transparent border_theme_1px rounded inp_radius" type="file" id="coverimg" />
                                </div>
                                <button type="submit" className="Snoozz_fn_button p-3 shdow_green mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from "react";
import "../css/Usercollection.css";
export default function Usercollection() {
    return (
        <>
            <div className="container-fluied">
                <div className="bg_cover"></div>
                <div className="black_one_bg mt-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-center  mt-2 mb-2">
                                <div className="text-end">
                                    <img
                                        src="https://snoozz.io/ver1/img/profileimage/Profile.png"
                                        className="artist_img"
                                        alt="..."
                                    />
                                </div>
                                <div className="mt-3 ms-1">
                                    <h5 className="color_pencile">col3</h5>
                                    <p className="color_pencile">Created by Prads</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="d-flex justify-content-center  mt-2 mb-2">
                                <div className="text-end">
                                <button ty pe="submit" className="Snoozz_fn_button p-3 shdow_green mt-2 mx-2"><i class="fa-solid fa-plus color_theme fa-sm"></i> Follow</button>

                                </div>
                                <div className="ms-1">
                                <button ty pe="submit" className="Snoozz_fn_button p-3 shdow_green mt-2 mx-2"><i class="fa-solid fa-plus color_theme fa-sm"></i> Follow</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

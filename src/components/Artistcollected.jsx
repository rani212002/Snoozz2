import React, { useEffect } from 'react'
import '../css/Artistcollected.css'

export default function Artistcollected() {
  useEffect(() => {

  })
  return (
    <>
      <div className="container-fluied  top_sec_margin">
        <div className="d-flex justify-content-center m-5">
          <div className="card shdow_green bg-transparent w-50">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="d-flex justify-content-center">
                    <img src='https://snoozz.io/ver1/img/profileimage/Profile.png' className="w-75 artist_img" alt="..." />
                  </div>
                </div>
                <div className="col-md-8">
                  <h3 className='color_pencile mt-3'>Rani</h3>
                  <p className='color_theme'>Member since November, 2022</p>
                  <div className="d-flex">
                    <div className="borde_theme p-2 text-center">
                      <p className='color_theme border_theme_1px p-2  rounded black_one_bg'>
                        {localStorage.getItem("smwallet")}
                      </p>
                    </div>
                    {/* <div className="borde_theme p-2 text-center" >
                      <p className='color_theme border_theme_1px p-2  w-100 rounded black_one_bg'>
                      <i className="fa-solid fa-ellipsis" ></i>
                      </p>
                    </div> */}
                    <div className="dropdown mt-2">
                      <a className="btn p-2 bg-transparen color_theme border_theme_1px menue black_one_bg dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        link
                      </a>
                      <ul className="dropdown-menu bg-transparent border_theme_1px" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <li><a className="dropdown-item dd_text" href="#">Share</a></li>
                        <li><a className="dropdown-item dd_text" href="#">Another action</a></li>
                      </ul>

                    </div>
                    <div>
                      <button ty pe="submit" className="Snoozz_fn_button p-3 shdow_green mt-2 mx-2"><i class="fa-solid fa-plus color_theme fa-sm"></i> Follow</button>
                    </div>
                  </div>
                  <div className="d-flex">

                  <p className='color_theme mx-3'>
                    1 Followers
                  </p>
                  <p className='color_theme mx-3'>
                    1 Following
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

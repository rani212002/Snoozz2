import React, { useEffect } from 'react'
import '../css/Artistcollected.css'

export default function Artistcollected() {

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
                    <div className="dropdown mt-2">
                      <a className="btn p-2 bg-transparen color_theme border_theme_1px menue black_one_bg dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                      </a>
                      <ul className="dropdown-menu black_one_bg border_theme_1px" >
                        <li><a className="dropdown-item dd_text" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Share</a></li>
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
          <div className="modal-content black_one_bg border_theme_1px">
            <div className="modal-header">
              <h1 className="modal-title fs-5 color_pencile" id="exampleModalLabel">Share</h1>
              <i class="fa-solid fa-xmark color_pencile" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div className="modal-body text-center">
              <h6 className='color_theme'>Beeple</h6>
              <a class="facebook media_icone mx-1" href="https://www.facebook.com/sharer/sharer.php?u=http://snoozz.io/artist-collected/2" target="_blank"><i class="fa-brands fa-facebook mx-1 fa-2x social_icone p-2"></i></a>
              <i class="fa-brands fa-twitter mx-1 fa-2x social_icone p-2"></i>
              <i class="fa-brands fa-instagram mx-1 fa-2x social_icone p-2"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

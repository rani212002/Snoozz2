import React from 'react'
import '../css/buynft.css'

export default function Buynft() {
  return (
    <>
      <div className="container">
        <div className="row top_sec_margin">
          <div className="col-xl-4 col-md-6 col-12">
            <div
              className="card discoveritemcards border_none bg-transparent">
              <img
                src="https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla"
                className="w-100 rounded position-relative"
                alt="..."
              />
              <div className="card-body">
                <div>
                  <div className="d-flex justify-content-start">
                    <div>
                      <span className="badge black_one_bg  like_btn ">
                        <i type="button" className="fa-solid fa-heart fa-2x text-light"></i>
                      </span><span className='color_theme mt-3 ms-2'>1 Like</span>
                    </div>
                    <div className='ms-auto'>
                      <h2 className='color_theme'>NFT 1</h2>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div>
                      <h5 className='color_theme mt-2'>Owner:</h5>
                      <h5 className='color_theme mt-2'>collection:</h5>
                    </div>
                    <div className='ms-auto'>
                      <h5 className='color_theme mt-2'>Prads</h5>
                      <h5 className='color_theme mt-2'>COL1</h5>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-6 col-12">

            <div className="card  black_one_bg ">
              <div className="card-body">
                <div className="p-3">
                  <h5 className="card-title color_pencile">Current Price</h5>
                  <h2 className="card-title color_pencile">7.5 {process.env.REACT_APP_COIN}</h2>
                  <p className="color_pencile">$(0.1.124)</p>
                </div>
                <hr></hr>
                <div className="p-3">
                  <p className='color_pencile'>Percentage</p>
                  <ul className="list-group  bg-transparent border_none">
                    <li className="list-group-item bg-transparent border_none text-light">
                      <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                      <label className="form-check-label" for="firstRadio">First radio</label>
                    </li>
                    <li className="list-group-item  bg-transparent border_none text-light">
                      <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" />
                      <label className="form-check-label" for="secondRadio">Second radio</label>
                    </li>
                    <li className="list-group-item  bg-transparent border_none text-light">
                      <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio" />
                      <label className="form-check-label" for="thirdRadio">Third radio</label>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <button type='button' className="Snoozz_fn_button p-3 border_grey_2px mt-3">Stake Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion mt-5" id="accordionExample">
              <div className="accordion-item mb-3 ">
                <h2 className="accordion-header black_one_bg" id="headingOne">
                  <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    OFFERS
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body p-0">
                    <div className="card border_none bg-transparent text-center gl_morph">

                      <div className="card-body p-0 mt-2 table-responsive ">
                        <table className="table text-light  border_none wsnwrap table-borderless">
                          <thead className='black_one_bg'>
                            <tr>
                              <th scope="col">From</th>
                              <th scope="col">Price</th>
                              <th scope="col">Expiration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Listings
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body p-0">
                    <div className="card bg-transparent text-center gl_morph">

                      <div className="card-body p-0 mt-2 table-responsive ">
                        <table className="table text-light  border_none wsnwrap table-borderless">
                          <thead className='black_one_bg'>
                            <tr>
                              <th scope="col">From</th>
                              <th scope="col">Price</th>
                              <th scope="col">Expiration</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="accordion mt-5" id="accordionExample">
              <div className="accordion-item mb-3 ">
                <h2 className="accordion-header black_one_bg" id="headingOne">
                  <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    OFFERS
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body p-0">
                    <div className="card border_none bg-transparent text-center gl_morph">

                      <div className="card-body p-0 mt-2 table-responsive ">
                        <table className="table text-light  border_none wsnwrap table-borderless">
                          <thead className='black_one_bg'>
                            <tr>
                              <th scope="col">From</th>
                              <th scope="col">Price</th>
                              <th scope="col">Expiration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone' />
                                  <div className='ms-2'>
                                    <b>CyberCypher</b><br></br>
                                    <b>5 days ago</b>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="">

                                  {/* <img src='https://gateway.pinata.cloud/ipfs//bafkreia45xaqia5kfjep5oa44e35v6uw2btnmzyzljwy42xrubrww73vla' className='imge_icone'/> */}
                                  <div className='ms-2'>
                                    <b>11.05 SNOOZZ
                                    </b><br></br>
                                    <p>($38,427.03)</p>
                                  </div>
                                </div>
                              </td>
                              <td>5 Days</td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
import React from 'react';
import "../css/landing.css";

export default function Landing_tabs(props) {

    return (
        <>
            <ul className="nav nav-tabs nav_tabs mt-5 d-flex justify-content-center" id="myTab" role="tablist">
                <li className="nav-item nav_item mx-2" role="presentation">
                    <button className="nav-link nav_links  active" id={props.tab1_id} data-bs-toggle="tab"
                        data-bs-target={props.stake_tab1_dbt} type="button" role="tab"
                        aria-selected="false">
                        {props.tab1_title}
                    </button>
                </li>
                <li className="nav-item nav_item mx-2" role="presentation">
                    <button className="nav-link nav_links" id={props.tab2_id} data-bs-toggle="tab" data-bs-target={props.stake_tab2_dbt}
                        type="button" role="tab" aria-selected="true">
                        {props.tab2_title}
                    </button>
                </li>
                <li className="nav-item nav_item mx-2" role="presentation">
                    <button className="nav-link nav_links" id={props.tab3_id} data-bs-toggle="tab" data-bs-target={props.stake_tab3_dbt}
                        type="button" role="tab" aria-selected="true">
                        {props.tab3_title}
                    </button>
                </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
                <div className="tab-pane fade show active" id={props.stake_tab1_con_id} role="tabpanel" aria-labelledby={props.tab1_id}
                    tabindex="0">
                    <div className="d-flex justify-content-center">
                        <img src={props.stake_tab1_img} className="mx-auto w-75" />
                    </div>
                    <div className={props.btn_vissible1}>
                        <div className="d-flex justify-content-center">
                            <a id="loginButton" className="Snoozz_fn_button shdow_green  p-3 mt-2 w-25" role="button">
                                {props.btn_vissible1_con}</a>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id={props.stake_tab2_con_id} role="tabpanel" aria-labelledby={props.tab2_id} tabindex="0">
                    <div className="d-flex justify-content-center">
                        <img src={props.stake_tab2_img} className="mx-auto w-75" />
                    </div>
                    <div className={props.btn_vissible2}>
                        <div className="d-flex justify-content-center">
                            <a id="loginButton" className="Snoozz_fn_button shdow_green  p-3 mt-2 w-25" role="button">
                                {props.btn_vissible2_con}</a>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id={props.stake_tab3_con_id} role="tabpanel" aria-labelledby={props.tab3_id} tabindex="0">
                    <div className="d-flex justify-content-center">
                        <img src={props.stake_tab3_img} className="mx-auto w-75" />
                    </div>
                    <div className={props.btn_vissible3}>
                        <div className="d-flex justify-content-center">
                            <a id="loginButton" className="Snoozz_fn_button shdow_green  p-3 mt-2 w-25" role="button">
                                {props.btn_vissible3_con}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

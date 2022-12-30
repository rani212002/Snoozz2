import React from 'react'
import Featurecards from './Featurecards'
import featuresecdata from './featuresecdata'
import featurenftdata from './Featurenft';
import featuresupportdata from './featuresupport';
import kyc from '../img/home/KYC.png';
export default function Feature_tabs(props) {
    const FetureentData = featuresecdata.map((data) => {
        return (

            < Featurecards
                key={data.key}
                img={data.img}
                title={data.title}
                content={data.desc}
            />
        )
    })
    const featuresupport = featuresupportdata.map((data) => {
        return (

            < Featurecards
                key={data.key}
                img={data.img}
                title={data.title}
                content={data.desc}
            />
        )
    })
    const Feturenft = featurenftdata.map((data) => {
        return (

            < Featurecards
                key={data.key}
                img={data.img}
                title={data.title}
                content={data.desc}
            />
        )
    })
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
                    <div className="row">
                        {FetureentData}
                    </div>
                </div>
                <div className="tab-pane fade" id={props.stake_tab2_con_id} role="tabpanel" aria-labelledby={props.tab2_id} tabindex="0">
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            {featuresupport}
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id={props.stake_tab3_con_id} role="tabpanel" aria-labelledby={props.tab3_id} tabindex="0">
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            {Feturenft}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

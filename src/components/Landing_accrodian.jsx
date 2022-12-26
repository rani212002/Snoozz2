import React from 'react'

export default function Landing_accrodian(props) {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-transparent mt-3 mb-3 accordian_div">
                    <h2 className="accordion-header bg_grey rounded" id={props.acc_heading_id}>
                        <button className="accordion-button bg-transparent acc_header text-light" type="button"
                            data-bs-toggle="collapse" data-bs-target={props.collapse_id_databs} aria-expanded="true" aria-controls={props.area_controls}>
                            <span><img src={props.img} className="acc_img" /></span>
                            {props.tab_heading}
                        </button>
                    </h2>
                    <div id={props.collapse_id} className="accordion-collapse collapse" aria-labelledby={props.area_labeled}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body  accrodian_body color_theme bg_grey">
                            {props.tab_content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

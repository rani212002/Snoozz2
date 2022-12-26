import React from 'react'

export default function Table() {
    return (
        <>
            <div className="card bg-transparent border_theme_1px text-center mt-3 gl_morph">
                <div className="card-header color_theme ">
                    <h5 className="h5 p-2 text-light">Featured</h5>

                </div>
                <div className="card-body table-responsive">
                    <table className="table text-light  border-2 wsnwrap">
                        <thead>
                            <tr>
                                <th scope="col">Wall Address</th>
                                <th scope="col">Snoozz Price</th>
                                <th scope="col">Blogs</th>
                                <th scope="col">Snoozz Price</th>
                                <th scope="col">ZSnooz Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">L1</th>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">L2</th>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">L3</th>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

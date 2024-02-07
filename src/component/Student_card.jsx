import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'

function Student_card() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row bg-light my-2 py-2">
                        <div className="col-10">
                            <h5>STUDENT CARD</h5>
                        </div>

                        <div className="col-2">
                            <input class="form-control" type="text" placeholder="Search here" aria-label="default input example" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid">
                <div className="row">
                    {Data.map(d =>
                        <div className="col-4">
                            <Link to={`/student-all-detail/${d.id}`}>
                                <div className="card">
                                    <div className="card-header">BROADWAY INFOSYS</div>
                                    <div className="card-body">

                                        <div className="image">
                                            <div className="img-title">ID No.: {d.id}</div>
                                            <img src={d.image} alt="" /></div>
                                        <div className="card-content">
                                            <div className="title">{d.names}
                                                <div className="sub-title">{d.Faculty}</div>

                                            </div>
                                            <div className="card-details">
                                                <h6>Moible No.: {d.Mobile_no}</h6>
                                                <h6>Address: {d.Address} </h6>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-footers">IDENTITY CARD</div>
                                </div>
                            </Link>

                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}

export default Student_card
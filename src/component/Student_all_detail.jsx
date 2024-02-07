import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'

function Student_all_detail() {
    let {stdID} = useParams()
    let getData = Data.find(d=>d.id==stdID)
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row bg-light my-2 py-2">
                        <div className="col-10">
                            <h5>STUDENT ALL DETAIL</h5>
                        </div>
                    </div>

                    <div className="row bg-light">
                        <div className="col-4">
                            <img src={getData.image}/>
                        </div>
                        <div className="col-6">
                            <h6>ID : {stdID} </h6>
                            <div className='py-2'>Name: {getData.names}</div>
                            <div className='py-2'>{getData.Gender}</div>
                            <div className='py-2'>{getData.Address}</div>
                            <div className='py-2'>{getData.Mobile_no}</div>
                            <div className='py-2'>{getData.Faculty}</div>
                            
                          
                        </div>
                    </div>

                    <div className="row bg-light mt-2">
                        <h4>Fee Detail:</h4>
                        <div className="col">Prev Dues : 45000</div>
                        <div className="col">Current Dues : 5000</div>
                        <div className="col">Total Dues : 50000</div>
                    </div>

                    <div className="row bg-light mt-2">
                        <h4>Parents: Detail: xxxxxxxx</h4>
                        <div className="col">Prev Dues : 45000</div>
                        <div className="col">Current Dues : 5000</div>
                        <div className="col">Total Dues : 50000</div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Student_all_detail
import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'
function Student() {
  return (
    <div>
      <section>
        <div className="container">

          <div className="row bg-light my-2 py-2">
            <div className="col-6">
              <h5>Student</h5>
            </div>
            <div className="col-4"><input class="form-control" type="text" placeholder="Search here" aria-label="default input example" />
            </div>
            <div className="col-2">
              <Link to="/student-card"> <h5>student Card</h5></Link>
            </div>
          </div>


          <div className="row bg-primary text-white">
            <div className="col-1">SN</div>
            <div className="col-2">Emplpyee Name</div>
            <div className="col-2">Address</div>
            <div className="col-2">Mobile_no</div>
            <div className="col-2">Gender</div>
            <div className="col-2">Faculty</div>
            <div className="col-1">Action</div>
          </div>
          {Data.map((d) =>
            <div className="row bg-white text-black border py-2">
              <div className="col-1">{d.id}</div>
              <div className="col-2">{d.names}</div>
              <div className="col-2">{d.Address}</div>
              <div className="col-2">{d.Mobile_no}</div>
              <div className="col-2">{d.Gender}</div>
              <div className="col-2">{d.Faculty}</div>
              <div className="col-1">
                <Link to={`/student-all-detail/${d.id}`}>
                  <i class="fa-solid fa-eye"></i>
                </Link>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Student
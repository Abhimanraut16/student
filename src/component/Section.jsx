import React from 'react'
import Home from './Home'
import About from './About'
import Address from '../component/Address'
import Mobile from '../component/Mobile'
import Students from '../component/Student'
import Page_not_found from './Page_not_found'
import { Route, Routes } from 'react-router-dom'
import Student_card from './Student_card'
import Student_all_detail from './Student_all_detail'
import View from './view'



function Section() {
  let x = "learn React"
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home msg={x}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/address" element={<Address />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/student" element={<Students />} />
        <Route path="/student-card" element={<Student_card />} />
        <Route path="/view" element={<View />} />

        

        <Route path="/student-all-detail/:stdID" element={<Student_all_detail />} />
        <Route path="/*" element={<Page_not_found />} />
      </Routes>

    </div>
  )
}

export default Section
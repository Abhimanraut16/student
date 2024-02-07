import React from 'react'
import Slider from './Slider'


function Home(props) {
  function msmCheck(a){
    alert(a)
  }
  return (
    <div>
      <Slider/>
         {/* <section>
            <div className="container">
                <h1>Home page</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem enim magnam eos quo praesentium in sequi fugit ullam reiciendis dolores.</p>
            </div>
        </section> */}
        {/* <div className="container">
        <button className="btn btn-primary"  onClick={()=> msmCheck("props.msg")}>Click</button>
        </div> */}
        
        
    </div>
  )
}

export default Home
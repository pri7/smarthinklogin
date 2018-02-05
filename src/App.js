import React, { Component } from 'react';

import './App.css';
import Particles from 'react-particles-js';




class App extends Component {
  render() {

    var json = {
            "particles": {
              "number": {
                "value": 90,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#787878"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#787878"
                },
                "polygon": {
                  "nb_sides": 10
                },
                "image": {
                  "src": "1.jpg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 0.5,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 8,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 90,
                "color": "#ffffff",
                "opacity": 0.8,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "remove"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,

}
    return (
      <div className="container">
          <div className="brand-group">

            <div className="bran-logo">
            <img  id="logo1" src="logo1.png" alt="SmartThink Logo"/>
            <img id="logo2" src="logo2.png" alt="Microland Logo"/></div>

          </div>

          <Particles  params={json} />
          <div id="text" className="col-6">
              <h1>Welcome to SmartThink..!!!</h1>

              <h3>CREATE INCIDENTS / REQUESTS, RESOLVE PROBLEMS OR FIND ANSWERS IN THE KNOWLEDGE BASE.</h3>
          </div>
          <div id="image" className="col-6">
              <img id="mob" src="/mob.png" alt="A mobile"/>
          </div>
          <div id="logIN" className="col-6">
            <input type="text" id="user" placeholder="USERNAME"/>
            <input type="password" id="password" placeholder="PASSWORD"/>
            <button className="signin" id="signin">SIGN IN</button>
          </div>


          <div className="row" id="row1" className="col-9">
            <div className="column left" >
              <div className="card" >
               <div className="card-block">
               <div className="img-cont">
               <img  id="image1" src="1.png" alt="IT Service Management Illustration"/>
               </div>
                 <div><h4 className="card-title">IT SERVICE MANAGEMENT</h4></div>
                 <p className="card-text" id="ct1">Create incidents/requests, resolve problems or find answers in the knowledge base.</p>
                 <a href="" className="btn btn-primary">Read More</a>
               </div>
            </div>
            </div>
            <div className="column middle" >
            <div className="card" >
             <div className="card-block">
             <div className="img-cont">
             <img id="image1" src="2.png" alt="REAL TIME IT OPERATIONS MANAGEMEN Illustration"/>
             </div>
               <div><h4 className="card-title">REAL TIME IT OPERATIONS MANAGEMENT</h4></div>
               <p className="card-text" id="ct2">Manage IT with real time Operations Manager and Engineer Dashboards.</p>
               <a href="" className="btn btn-primary">Read More</a>
             </div>
          </div>
            </div>

            <div className="column right" >
            <div className="card" >
             <div className="card-block">
             <div className="img-cont">
             <img id="image1" src="3.png" alt="ADMINISTRATION Illustration"/>
             </div>
             <div>
               <h4 className="card-title">ADMINISTRATION</h4>
               </div>
               <p className="card-text" id="ct3">Manage users, events, reports and other administartive controls.</p>
               <a href="" className="btn btn-primary">Read More</a>
             </div>
          </div>
            </div>
          </div>
          <div id="rest"> </div>
          <div className="footer"><p id="foot">SmartThink 2.3.1</p> </div>
      </div>
    );
  }
}



export default App;

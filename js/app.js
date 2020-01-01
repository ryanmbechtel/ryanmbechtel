particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 155,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": ["#d24dff","#668cff","#4dff4d","#80ffe5"]
        /*["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]*/
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 1,
          "color": ["#730099","#002db3","#009900","#00997a"]
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.6,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 2,
          "size_min": 3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 110,
          "size": 4,
          /*here*/
          "duration": 0,
          "opacity": 0.3,
          "speed": 2
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);
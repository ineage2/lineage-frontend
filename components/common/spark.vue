<template>
    <div>
        <div id="sparks" data-aos="fade-in" data-aos-once="true"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        if (process.client) {
            this.loadParticles();
        }
    },
    methods: {
        loadParticles() {
            const script = document.createElement('script');
            script.src = 'http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.onload = () => {
                this.$nextTick(() => {
                    this.initParticles();
                });
            };
            document.head.appendChild(script);
        },
        initParticles() {
            if (typeof window.particlesJS !== 'undefined') {
                window.particlesJS("sparks", {
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": true,
                                "value_area": 1000
                            }
                        },

                        "color": {
                            "value": "#fff"
                        },
                        "shape": {
                            "type": "image",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/spark/spark_2.png",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 20,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 10,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 500,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 10,
                            "direction": "top-left",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": true,
                            "attract": {
                                "enable": false,
                                "rotateX": 0,
                                "rotateY": 10
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 0.5
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 4,
                                "duration": 0.3,
                                "opacity": 1,
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
                    "retina_detect": true
                })
            } else {
                console.error('particlesJS is not defined');
            }
        }
    }
}
</script>

<style scoped>
#sparks {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
}
</style>

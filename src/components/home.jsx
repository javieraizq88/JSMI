import React from "react";

const Home = props => {
    return (
        <div className="contenedorPag">
            {/* carrusel */}
            {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">0</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">1</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2">2</li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1544739313-6fad02872377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                            className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                            className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
                            className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            */}
            {/* fin carrusel */}

            {/* ultimos blogs */}
            <div className="" id="bg-home-blog">
                <h1>Últimos blogs</h1>
                <br />
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card border-light  h-100" id="card-home-blog">
                            <img
                                src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
                                class="card-img-top"
                                alt="img home blog" />
                            <div class="card-body">
                                <h5 class="card-title text-center">
                                    Card title
                                        </h5>
                                <p class="card-text">
                                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card border-light  h-100" id="card-home-blog">
                            <img src="https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc"
                                class="card-img-top"
                                alt="img home blog" />
                            <div class="card-body ">
                                <h5 class="card-title text-center">Card title</h5>
                                <p class="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card border-light  h-100" id="card-home-blog">
                            <img src="https://i.picsum.photos/id/134/4928/3264.jpg?hmac=IcPmWTNClVqLcr7PpqBrfOAvgmJbqw0Z8jZvmsCrC-c"
                                class="card-img-top"
                                alt="img home blog" />
                            <div class="card-body">
                                <h5 class="card-title text-center">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
{/* fin ultimos blogs */}

        </div>

    )
}

export default Home;
import React from "react"

const Footer = props => {
    return (
        <footer className="bg-dark">
            <div className="d-flex">

                <div id="left-footer">
                    <h3>Links rápidos</h3>
                    <p>
                        <ul>
                            <a href="/">Home</a> <br />
                            <a href="/conoceme">Conóceme</a><br />
                            <a href="/blog">Mi Blog</a><br />
                            <a href="/proyectos">Proyectos</a><br />
                        </ul>
                    </p>
                </div>

                <div id="right-footer">
                    <h3>Sígueme en:</h3>
                    <p>
                        <div className="d-flex justify-content-center" id="social-media-footer">
                            <ul>
                                <ol>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i> <br />
                                    </a>
                                </ol>
                                <ol>
                                    <a href="#">
                                        <i class="fab fa-github-square"></i> <br />
                                    </a>
                                </ol>
                                <ol>
                                    <a href="#">
                                        <i class="far fa-envelope"></i> <br />
                                    </a>
                                </ol>
                                <ol>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i> <br />
                                    </a>
                                </ol>
                            </ul>
                        </div>
                    </p>

                    <p>Este website ha sido desarrollado por JIM</p>
                </div>

            </div>

        </footer>
    )
}

export default Footer
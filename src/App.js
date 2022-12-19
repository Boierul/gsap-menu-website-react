import {useRef, useEffect} from 'react';

import gsap from "gsap";
import {Power2} from "gsap/gsap-core";

import './App.css';
import svg from './assets/exit.svg';

function App() {
    const menuBtnRef = useRef(null);
    const exitBtnRef = useRef(null);
    let t1 = gsap.timeline({paused: true});

    useEffect(() => {
        t1.to(".menu", {
            opacity: 1,
            duration: 1,
            top: 0,
            ease: Power2.easeInOut
        });
        t1.to(
            ".nav",
            {
                opacity: 1,
                marginBottom: 0,
                duration: 1,
                ease: Power2.easeInOut,
                stagger: 0.3,
            },
            ">-0.5"
        );
        menuBtnRef.current.addEventListener("click", () => {
            t1.play().timeScale(1);
        });

        exitBtnRef.current.addEventListener("click", () => {
            t1.timeScale(2.5);
            t1.reverse();
        });
    }, []);

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="logo">Logo</div>
                </div>
                <div className="container">
                    <div className="menu-div" ref={menuBtnRef}>Menu</div>
                </div>
            </div>

            <div className="menu">
                <div className="background">Menu</div>
                <div className="exit" ref={exitBtnRef}><img src={svg} alt="" srcSet=""/></div>

                <div className="menu-container">
                    <ul className="options">
                        <li className="nav">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="nav-link">
                                Home <span className="small-number">01</span>
                            </a>
                        </li>
                        <li className="nav">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="nav-link">
                                Blog <span className="small-number">02</span>
                            </a>
                        </li>
                        <li className="nav">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="nav-link">
                                About <span className="small-number">03</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="menu-container right">
                    <div className="information">
                        <p className="title">Who am I?</p>
                        <p className="description">Engineer/Designer/Developer</p>

                    </div>
                    <div className="information">
                        <p className="title">Contact</p>
                        <p className="description">github.com/Boierul</p>

                    </div>
                    <div className="information">
                        <p className="title">Redirection</p>
                        <div className="social-medias">
                            <a href="https://github.com/Boierul/gsap-menu-website" className="social-media">This
                                project</a>
                            <a href="https://github.com/Boierul" className="social-media">Other projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

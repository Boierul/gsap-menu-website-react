import { useRef, useEffect, useCallback, useState } from 'react';
import gsap from "gsap";
import { Power2 } from "gsap/gsap-core";

import './App.css';
import svg from './assets/exit.svg';

import classNames from 'classnames';

function App() {
    const menuBtnRef = useRef(null);
    const exitBtnRef = useRef(null);
    const t1Ref = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        t1Ref.current = gsap.timeline({ paused: true });
        t1Ref.current.to(".menu", {
            opacity: 1,
            duration: 1,
            top: 0,
            ease: Power2.easeInOut
        });
        t1Ref.current.to(
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
    }, []);

    const handleMenuBtnClick = useCallback(() => {
        setIsMenuOpen(true);
        t1Ref.current.play().timeScale(1);
    }, []);

    const handleExitBtnClick = useCallback(() => {
        setIsMenuOpen(false);
        t1Ref.current.timeScale(2.5);
        t1Ref.current.reverse();
    }, []);

    return (
        <div className={classNames('app', { 'menu-open': isMenuOpen })}>
            <div className="home">
                <div className="container">
                    <div className="logo">Logo</div>
                </div>
                <div className="container">
                    <div className="menu-div" ref={menuBtnRef} onClick={handleMenuBtnClick}>Menu</div>
                </div>
            </div>

            <div className="menu">
                <div className="background">Menu</div>
                <div className="exit" ref={exitBtnRef} onClick={handleExitBtnClick}><img src={svg} alt="" srcSet=""/></div>

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
        </div>
    );
}

export default App;

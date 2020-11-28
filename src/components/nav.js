import React from 'react';
import style from './css/Nav.module.css';

const Nav = () => {

    const openNav = () => {
        document.getElementById("mySidepanel").style.width = '50%';
    };
  
    const closeNav = () => {
        document.getElementById("mySidepanel").style.width = "0";
    }  

    return(

        <div className={style.ham}>
            <div className={style.nav}>
                <div id="mySidepanel" className={style.sidebar}>
                    <i className="fas fa-times" id={style.closebtn} onClick={closeNav}></i>
                    <ul>
                        <li>
                            <a className={style.active} href="index.html">Home</a>
                            <a href="about.html">About</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.navmain}>
                <i id={style.openbtn} className="fas fa-hamburger fa-2x" onClick={openNav}></i>
            </div>
        </div>
        
    );
};


export default Nav; 
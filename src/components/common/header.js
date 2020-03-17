import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'


class header extends Component {
    render() {
        return (
            <div classNameName="page">
               <header id="header" role="header" className="solid-bg-header clear">
                    <div classNameName="header-v1">
                        {/* Start Header Top */}
                        <div classNameName="header-top clear">
                            <div className="container">
                                <div className="row">
                                    <div className="header-top-left">
                                        <div className="school-tag">
                                            <a href="index.php">
                                                {/* <h2>ඇන්.ඇම්.පෙරේරා මධ්‍ය මහා විද්‍යාලය</h2> */}
                                                <h2>N.M. Perera Central College</h2>
                                                <h4>Dehiowita Zone, Yatiyanthota</h4>
                                            </a>
                                        </div>              
                                    </div>
                                    <div className="header-top-right">           
                                        <div className="aditional-nav">
                                            <a href="register.html" className="btn-border"><span><i className="fa fa-user"></i>Register</span></a>
                                            <a href="login.html" className="btn-border"><span><i className="fa fa-sign-in"></i>Login</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Header Top */}
                        {/* Start Header Bottom */}
                        <div className="header-bottom">
                            <div className="container">
                                <div className="row hidden-xs hidden-sm">
                                {/* Start Main Menu */}
                                <div className="col-md-12 text-center">
                                    <div className="menu-wrap">
                                        <nav class="primary-menu">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li className="mega-dropdown current">
                                                    <a href="#">About Our School <span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                                                    <div class="sl-mega-full">
                                                        <div class="container">
                                                            <div class="sl-mega-section-wrap">
                                                                <div class="mega-menu-column-4">
                                                                <a href="#" class="mega-menu-section-title">History And Traditions</a>
                                                                <ul class="sub-menu">
                                                                    <li><a href="#">A Brief History</a></li>
                                                                    <li><a href="founders.php">Founders</a></li>
                                                                    <li><a href="#">Past Principals</a></li>
                                                                </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                <a href="#" class="mega-menu-section-title">Identity</a>
                                                                <ul class="sub-menu">
                                                                    <li><a href="school-profile.php">School Profile</a></li>
                                                                    <li><a href="#">Crest & Moto</a></li>
                                                                    <li><a href="#">School Flag</a></li>
                                                                    <li><a href="#">School Colours</a></li>
                                                                    <li><a href="#">School Song</a></li>
                                                                    <li><a href="#">House System</a></li>
                                                                    <li><a href="#">Uniform</a></li>
                                                                </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <a href="#" class="mega-menu-section-title">Administration</a>
                                                                    <ul class="sub-menu">
                                                                        <li><a href="#">Management Structure</a></li>
                                                                        <li><a href="#">Management Committee</a></li>
                                                                        <li><a href="profiles.php">Profiles</a></li>
                                                                    </ul>

                                                                    <a href="#" class="mega-menu-section-title no-border">Rules and Regulations</a>
                                                                    <a href="#" class="mega-menu-section-title no-border">School Facilities</a>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <h4 class="mega-menu-section-title">Profiles</h4>
                                                                    <div class="mega-menu-section-content">
                                                                        <a href="#" class="profile-block">
                                                                            {/* <img src="images/principal-thumb.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>U.G. Kamal Maduranga</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </a>
                                                                        <a href="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum2.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>S.M. Prasad Ariyarathna</h3>
                                                                                <h4>The Deputy Principal</h4>
                                                                            </div>
                                                                        </a>
                                                                        <a href="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum1.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>T.G. Niroshan Premarathna</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="mega-dropdown">
                                                    <a href="#">Academic <span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                                                    <div class="sl-mega-full">
                                                        <div class="container">
                                                            <div class="sl-mega-section-wrap">
                                                                <div class="mega-menu-column-4">
                                                                    <a href="#" class="mega-menu-section-title">Curriculum</a>
                                                                    <ul class="sub-menu">
                                                                        <li><a href="#">Primary School</a></li>
                                                                        <li><a href="#">Middle School</a></li>
                                                                        <li><a href="#">Upper School</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <a href="#" class="mega-menu-section-title">Academic Staff</a>
                                                                    <ul class="sub-menu">
                                                                        <li><a href="profiles.php">Profiles</a></li>
                                                                        <li><a href="academic-staff.php">Tutorial Staff</a></li>
                                                                        <li><a href="#">Non Academic Staff</a></li>
                                                                        <li><a href="#">Prefects Board</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <a href="#" class="mega-menu-section-title">Student Performance</a>
                                                                    <ul class="sub-menu">
                                                                        <li><a href="student-performance.php">Results Summary 2014</a></li>
                                                                        <li><a href="#">Results Summary 2015</a></li>
                                                                        <li><a href="#">Results Summary 2016</a></li>
                                                                        <li><a href="#">Results Summary 2017</a></li>
                                                                        <li><a href="#">Results Summary 2018</a></li>
                                                                    </ul>
                                                                    <a href="#" class="mega-menu-section-title no-border">Clubs & Associations</a>
                                                                    <a href="#" class="mega-menu-section-title no-border">Admissions</a>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <h4 class="mega-menu-section-title">Profiles</h4>
                                                                    <div class="mega-menu-section-content">
                                                                        <a href="#" class="profile-block">
                                                                            {/* <img src="images/principal-thumb.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>U.G. Kamal Maduranga</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </a>
                                                                        <a href="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum2.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>S.M. Prasad Ariyarathna</h3>
                                                                                <h4>The Deputy Principal</h4>
                                                                            </div>
                                                                        </a>
                                                                        <a href="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum1.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>T.G. Niroshan Premarathna</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">Achievements</a>
                                                </li>
                                                <li class="menu-logo">
                                                    <div class="menu-logo-inner">
                                                        <a href="#"><img src="images/logo/school-logo.png" alt="" /></a>
                                                    </div>
                                                </li>
                                                <li><a href="#">Gallery <span class="indicator"><i class="fa fa-angle-down"></i></span></a>
                                                    <ul class="sl-dropdown scale-effect">
                                                        <li><a href="#">Photo Gallery</a></li>
                                                        <li><a href="#">Video Gallery</a></li>
                                                    </ul>
                                                </li>
                                                <li ><a href="news.php">News & Highlights</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Alumni</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* End Main Menu */}
                                </div>

                                <div class="row">
                                    <div class="col-sm-12 hidden-md hidden-lg">
                                        {/* Start Mobile Menu */}
                                        <div class='mobile-menu-area'>
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li class="current"><a href="#">Home</a></li>
                                                    <li><a href="#">About Our School</a>
                                                        <ul>
                                                            <li><a href="#">History and Traditions</a></li>
                                                            <li><a href="#">Identity</a></li>
                                                            <li><a href="#">Administration</a></li>
                                                            <li><a href="#">Rules and Regulations </a></li>
                                                            <li><a href="#">School Facilities</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Academic</a>
                                                        <ul>
                                                            <li><a href="#">Overview</a></li>
                                                            <li><a href="#">Curriculum</a></li>
                                                            <li><a href="#">Academic Staff</a></li>
                                                            <li><a href="#">Student Performance</a></li>
                                                            <li><a href="#">Clubs & Associations</a></li>
                                                            <li><a href="#">Admissions</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Achievements</a></li>
                                                    <li><a href="#">Gallery</a>
                                                    <ul>
                                                        <li><a href="#">Photo Gallery</a></li>
                                                        <li><a href="#">Video Gallery</a></li>
                                                    </ul>
                                                    </li>
                                                    <li><a href="#">News & Highlights</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    <li><a href="#">Alumni</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/* End Mobile Menu */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Header Bottom */}
                    </div>
                </header>
                <section class="section page-banner">
                    <div class="banner-img">
                        <img className="bg-image" src='images/banner/history-bg.jpg'></img>
                    </div>    
                </section>
            </div>
        )
    }
}

export default header;
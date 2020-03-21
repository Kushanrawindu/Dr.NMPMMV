import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import '../style/header.css'


class header extends Component {
    render() {
        return (
            <div classNameName="page">
               <section id="header" role="header" className="solid-bg-header clear">
                    <div classNameName="header-v1">
                        {/* Start Header Top */}
                        <div classNameName="header-top clear">
                            <div className="container">
                                <div className="row">
                                    <div className="header-top-left">
                                        <div className="school-tag">
                                            <Link to="index.php">
                                                {/* <h2>ඇන්.ඇම්.පෙරේරා මධ්‍ය මහා විද්‍යාලය</h2> */}
                                                <h2>N.M. Perera Central College</h2>
                                                <h4>Dehiowita Zone, Yatiyanthota</h4>
                                            </Link>
                                        </div>              
                                    </div>
                                    <div className="header-top-right">           
                                        <div className="aditional-nav">
                                            <Link to="register.html" className="btn-border"><span><i className="fa fa-user"></i>Register</span></Link>
                                            <Link to="login.html" className="btn-border"><span><i className="fa fa-sign-in"></i>Login</span></Link>
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
                                                <li><Link to="index.html">Home</Link></li>
                                                <li className="mega-dropdown current">
                                                    <Link to="#">About Our School <span class="indicator"><i class="fa fa-angle-down"></i></span></Link>
                                                    <div class="sl-mega-full">
                                                        <div class="container">
                                                            <div class="sl-mega-section-wrap">
                                                                <div class="mega-menu-column-4">
                                                                <Link to="#" class="mega-menu-section-title">History And Traditions</Link>
                                                                <ul class="sub-menu">
                                                                    <li><Link to="#">A Brief History</Link></li>
                                                                    <li><Link to="founders.php">Founders</Link></li>
                                                                    <li><Link to="#">Past Principals</Link></li>
                                                                </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                <Link to="#" class="mega-menu-section-title">Identity</Link>
                                                                <ul class="sub-menu">
                                                                    <li><Link to={'/profile'}>School Profile</Link></li>
                                                                    <li><Link to="#">Crest & Moto</Link></li>
                                                                    <li><Link to="#">School FlLinkg</Link></li>
                                                                    <li><Link to="#">School Colours</Link></li>
                                                                    <li><Link to="#">School Song</Link></li>
                                                                    <li><Link to="#">House System</Link></li>
                                                                    <li><Link to="#">Uniform</Link></li>
                                                                </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <Link to="#" class="mega-menu-section-title">Administration</Link>
                                                                    <ul class="sub-menu">
                                                                        <li><Link to="#">Management Structure</Link></li>
                                                                        <li><Link to="#">Management Committee</Link></li>
                                                                        <li><Link to="profiles.php">Profiles</Link></li>
                                                                    </ul>

                                                                    <Link to="#" class="mega-menu-section-title no-border">Rules and Regulations</Link>
                                                                    <Link to="#" class="mega-menu-section-title no-border">School Facilities</Link>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <h4 class="mega-menu-section-title">Profiles</h4>
                                                                    <div class="mega-menu-section-content">
                                                                        <Link to="#" class="profile-block">
                                                                            {/* <img src="images/principal-thumb.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>U.G. Kamal Maduranga</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </Link>
                                                                        <Link to="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum2.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>S.M. Prasad Ariyarathna</h3>
                                                                                <h4>The Deputy Principal</h4>
                                                                            </div>
                                                                        </Link>
                                                                        <Link to="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum1.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>T.G. Niroshan Premarathna</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="mega-dropdown">
                                                    <Link to="#">Academic <span class="indicator"><i class="fa fa-angle-down"></i></span></Link>
                                                    <div class="sl-mega-full">
                                                        <div class="container">
                                                            <div class="sl-mega-section-wrap">
                                                                <div class="mega-menu-column-4">
                                                                    <Link to="#" class="mega-menu-section-title">Curriculum</Link>
                                                                    <ul class="sub-menu">
                                                                        <li><Link to="#">Primary School</Link></li>
                                                                        <li><Link to="#">Middle School</Link></li>
                                                                        <li><Link to="#">Upper School</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <Link to="#" class="mega-menu-section-title">Academic Staff</Link>
                                                                    <ul class="sub-menu">
                                                                        <li><Link to="profiles.php">Profiles</Link></li>
                                                                        <li><Link to="academic-staff.php">Tutorial Staff</Link></li>
                                                                        <li><Link to="#">Non Academic Staff</Link></li>
                                                                        <li><Link to="#">Prefects Board</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <Link to="#" class="mega-menu-section-title">Student Performance</Link>
                                                                    <ul class="sub-menu">
                                                                        <li><Link to="student-performance.php">Results Summary 2014</Link></li>
                                                                        <li><Link to="#">Results Summary 2015</Link></li>
                                                                        <li><Link to="#">Results Summary 2016</Link></li>
                                                                        <li><Link to="#">Results Summary 2017</Link></li>
                                                                        <li><Link to="#">Results Summary 2018</Link></li>
                                                                    </ul>
                                                                    <Link to="#" class="mega-menu-section-title no-border">Clubs & Associations</Link>
                                                                    <Link to="#" class="mega-menu-section-title no-border">Admissions</Link>
                                                                </div>
                                                                <div class="mega-menu-column-4">
                                                                    <h4 class="mega-menu-section-title">Profiles</h4>
                                                                    <div class="mega-menu-section-content">
                                                                        <Link to="#" class="profile-block">
                                                                            {/* <img src="images/principal-thumb.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>U.G. Kamal Maduranga</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </Link>
                                                                        <Link to="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum2.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>S.M. Prasad Ariyarathna</h3>
                                                                                <h4>The Deputy Principal</h4>
                                                                            </div>
                                                                        </Link>
                                                                        <Link to="#" class="profile-block">
                                                                            {/* <img src="images/principal-thum1.jpg"> */}
                                                                            <div class="des">
                                                                                <h3>T.G. Niroshan Premarathna</h3>
                                                                                <h4>The Principal</h4>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to="#">Achievements</Link>
                                                </li>
                                                <li class="menu-logo">
                                                    <div class="menu-logo-inner">
                                                        <Link to="#"><img src="images/logo/school-logo.png" alt="" /></Link>
                                                    </div>
                                                </li>
                                                <li><Link to="#">Gallery <span class="indicator"><i class="fa fa-angle-down"></i></span></Link>
                                                    <ul class="sl-dropdown scale-effect">
                                                        <li><Link to="#">Photo Gallery</Link></li>
                                                        <li><Link to="#">Video Gallery</Link></li>
                                                    </ul>
                                                </li>
                                                <li ><Link to="news.php">News & Highlights</Link></li>
                                                <li><Link to="#">Contact Us</Link></li>
                                                <li><Link to="#">Alumni</Link></li>
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
                                                    <li class="current"><Link to="#">Home</Link></li>
                                                    <li><Link to="#">About Our School</Link>
                                                        <ul>
                                                            <li><Link to="#">History and Traditions</Link></li>
                                                            <li><Link to="#">Identity</Link></li>
                                                            <li><Link to="#">Administration</Link></li>
                                                            <li><Link to="#">Rules and Regulations </Link></li>
                                                            <li><Link to="#">School Facilities</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="#">Academic</Link>
                                                        <ul>
                                                            <li><Link to="#">Overview</Link></li>
                                                            <li><Link to="#">Curriculum</Link></li>
                                                            <li><Link to="#">Academic Staff</Link></li>
                                                            <li><Link to="#">Student Performance</Link></li>
                                                            <li><Link to="#">Clubs & Associations</Link></li>
                                                            <li><Link to="#">Admissions</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="#">Achievements</Link></li>
                                                    <li><Link to="#">Gallery</Link>
                                                    <ul>
                                                        <li><Link to="#">Photo Gallery</Link></li>
                                                        <li><Link to="#">Video Gallery</Link></li>
                                                    </ul>
                                                    </li>
                                                    <li><Link to="#">News & Highlights</Link></li>
                                                    <li><Link to="#">Contact Us</Link></li>
                                                    <li><Link to="#">Alumni</Link></li>
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
                </section>
                <section class="section page-banner">
                    <div class="banner-img">
                        <img className="bg-image" src={'images/banner/history-bg.jpg'}></img>
                    </div>    
                </section>
            </div>
        )
    }
}

export default header;
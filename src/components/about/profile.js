import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class profile extends Component {
    render() {
        return (
            <div>
            <main role="main"> 
  <section class="section section-contents">
    <div className="container">
      <div className="row range">
        <div className="sticky-sidebar"></div>
            <div className="sidebar-content-wrapper">
  <div className="nav-wrapper sticky-nav-wrap">
    <div className="nav-header">
      <h2 className="icon">School Identity</h2>
    </div>
    <nav className="navbar" role="navigation">
      <div className="navbar-header">
        <a id="menu-toggle" href="#" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </a>
        <div className="navbar-brand">About Our School</div>
      </div>
      <div id="sidebar-toggle-wrapper" className="sidebar-toggle">
        <ul className="sidebar-nav">
          {/* <!-- Add "className='active'" into <a> tag to show active state of the links below: -->
          <!-- <li className="title">School Identity</li> -->   */}
          <li><Link  className="active" to={'/profile'}><span className="dot"></span>School Profile</Link></li>
          <li><Link  to={'/vision'}><span className="dot"></span>Vision & Mission</Link></li>
          <li><a  href="crest-and-moto.php"><span className="dot"></span>Crest & Moto</a></li>
          <li><a  href="school-flag.php"><span className="dot"></span>School Flag</a></li>
          <li><a  href="school-colours.php"><span className="dot"></span>School Colours</a></li>
          <li><a  href="school-song.php"><span className="dot"></span>School Song</a></li>
          <li><a  href="house-system.php"><span className="dot"></span>House System</a></li>
          <li><a  href="uniforms.php"><span className="dot"></span>Uniform</a></li>
        </ul>
      </div>
    </nav>            
  </div>
  <footer role="footer">
    <div className="get-social">
      <ul>
        <li><a href=""><i className="fa fa-facebook"></i></a></li>
        <li><a href=""><i className="fa fa-instagram"></i></a></li>
        <li><a href=""><i className="fa fa-twitter"></i></a></li>
        <li><a href=""><i className="fa fa-youtube"></i></a></li>
      </ul>
    </div>
    <div className="top-row">
      <span><a href="#">Help Center</a> | <a href="#">About</a> | <a href="#">Privacy Policy</a></span>
      <span><a href="#">Community Guidlines</a></span>
    </div>

    <div className="bottom-row">
      <h3 className="icon">
        Powered by: <a href="" title="Webcomms Global (PVT) Ltd.">Webcomms</a>
        <span>Sakaskadaya Portal © 2019</span>
      </h3>
    </div>
  </footer>
  {/* <!-- 
  <div className="background">
    <img src="images/background-city.png" alt="background"></img>
  </div> 
  --> */}
</div>
            
            <div className="post-content-wrapper">
                <ol className="breadcrumb">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="#">About Our School</a></li>
                    <li className="active">Identity</li>
                </ol>   

                <div className="inner-content-wrapper">
                    <section className="content-block">
                    <h1>School Profile</h1>
                    <div className="divider left"></div>

                    <div className="table-wrapper v2">
                        <table className="table table-hover table-v2 w50">
                        <tr>
                            <th>පාසල ආරම්භ වූ දිනය </th>
                            <td>1939.11.04</td>
                        </tr>                
                        <tr>
                            <th>පාසල රජයට පවරා ගත් දිනය</th>
                            <td>1961.10.15</td>
                        </tr>                
                        <tr>
                            <th>ජාතික පාසලක් වූ දිනය</th>
                            <td>1996.04.29</td>
                        </tr>                
                        <tr>
                            <th>පාසල් වර්ගය</th>
                            <td>1ABS</td>
                        </tr>                
                        <tr>
                            <th>පාසල් අංකය</th>
                            <td>13603</td>
                        </tr>  
                        <tr>
                            <th>සංගණන අංකය </th>
                            <td>24042</td>
                        </tr>                
                        <tr>
                            <th>පාසල සතු භුමියේ ප්‍ර‍මාණය</th>
                            <td>අක් 04 රූඩ් 03 පර්චස් 08</td>
                        </tr> 
                        <tr>
                            <th>පාසල පිහිටි පළාත</th>
                            <td>සබරගමුව</td>
                        </tr>                
                        <tr>
                            <th>දිස්ත්‍රික්කය</th>
                            <td>කෑගල්ල</td>
                        </tr>                
                        <tr>
                            <th>කලාපය</th>
                            <td>දෙහිඕවිට</td>
                        </tr>                
                        <tr>
                            <th>කොට්ඨාසය</th>
                            <td>යටියන්තොට</td>
                        </tr>     
                        <tr>
                            <th>ප්‍රාදේශීය ලේකම් කොට්ඨාසය</th>
                            <td>යටියන්තොට</td>
                        </tr>                
                        <tr>
                            <th>ග්‍රාම සේවක වසම</th>
                            <td>යටියන්තොට</td>
                        </tr>                
                        <tr>
                            <th>ග්‍රාම සේවා කොට්ඨාස අංකය</th>
                            <td>106</td>
                        </tr>                
                        <tr>
                            <th>මුළු ශ්‍රේණි ගණන</th>
                            <td>08</td>
                        </tr>     
                        <tr>
                            <th>මුළු පන්ති ගණන</th>
                            <td>42</td>
                        </tr>                
                        <tr>
                            <th>2019 ජූනි මාසයට මුළු ශීෂ්‍ය ගණන</th>
                            <td>1585</td>
                        </tr>                
                        <tr>
                            <th>2019 ජූනි මාසය වන විට මුළු ගුරුවරුන්ගේ ගණන</th>
                            <td>95</td>
                        </tr>                
                        <tr>
                            <th>පාසලේ වර්ණය </th>
                            <td>නිල් හා සුදු වර්ණ</td>
                        </tr>                
                        </table>
                    </div>
                    </section>                
                </div>
            </div>

            </div>
    </div>
  </section>
</main>

            </div>
        )
    }
}

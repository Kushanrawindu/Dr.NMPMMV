import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../style/main.css';

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
        <Link id="menu-toggle" href="#" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </Link>
        <div className="navbar-brand">About Our School</div>
      </div>
      <div id="sidebar-toggle-wrapper" className="sidebar-toggle">
        <ul className="sidebar-nav">
          {/* <!-- Add "className='active'" into <a> tag to show active state of the links below: -->
          <!-- <li className="title">School Identity</li> -->   */}
          <li><Link  className="active" to={'/profile'}><span className="dot"></span>School Profile</Link></li>
          <li><Link  to={'/vision'}><span className="dot"></span>Vision & Mission</Link></li>
          <li><Link  to="crest-and-moto.php"><span className="dot"></span>Crest & Moto</Link></li>
          <li><Link  to="school-flag.php"><span className="dot"></span>School Flag</Link></li>
          <li><Link  to="school-colours.php"><span className="dot"></span>School Colours</Link></li>
          <li><Link  to="school-song.php"><span className="dot"></span>School Song</Link></li>
          <li><Link  to="house-system.php"><span className="dot"></span>House System</Link></li>
          <li><Link  to="uniforms.php"><span className="dot"></span>Uniform</Link></li>
        </ul>
      </div>
    </nav>            
  </div>
  <footer role="footer">
    <div className="get-social">
      <ul>
        <li><Link to=""><i className="fa fa-facebook"></i></Link></li>
        <li><Link to=""><i className="fa fa-instagram"></i></Link></li>
        <li><Link to=""><i className="fa fa-twitter"></i></Link></li>
        <li><Link to=""><i className="fa fa-youtube"></i></Link></li>
      </ul>
    </div>
    <div className="top-row">
      <span><Link to="#">Help Center</Link> | <Link to="#">About</Link> | <Link to="#">Privacy Policy</Link></span>
      <span><Link to="#">Community Guidlines</Link></span>
    </div>

    <div className="bottom-row">
      <h3 className="icon">
        Powered by: <Link to="" title="Webcomms Global (PVT) Ltd.">Webcomms</Link>
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
                    <li><Link to="index.php">Home</Link></li>
                    <li><Link to="#">About Our School</Link></li>
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

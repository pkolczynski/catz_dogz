import './Banner.scss';
import banner from '../../resources/banner.jpg';
import logo from '../../resources/logo.png'

const Banner = () =>{
    return (
        <div className = "banner-wrapper">
            <img className="banner"src={banner} alt="BANNER"/>
            <img className="logo" src={logo} alt="LOGO"/>
        </div>
    )
}

export default Banner;
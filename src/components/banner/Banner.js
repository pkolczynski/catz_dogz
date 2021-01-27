import './Banner.scss';
import banner from '../../resources/banner.jpg';
import logo from '../../resources/logo.png'

const Banner = () =>{
    return (
        <div id = "banner-wrapper">
            <img id="banner"src={banner} alt="BANNER"/>
            <img id="logo" src={logo} alt="LOGO"/>
        </div>
    )
}

export default Banner;
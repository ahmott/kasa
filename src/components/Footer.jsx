//Footer
import logoFooter from '../utils/img/kasa_logo_footer.png'

const Footer = () => {
    return(
        <footer className='footer'>
            <img src={logoFooter} alt='kasa-logo' className='footer_logo' />
            <p className='footer_text'>©2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;
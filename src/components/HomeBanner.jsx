// Top home banner
import Banner from './Banner';
import homeBanner from '../utils/img/kasa_home.png'

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs' // Titre Accueil 
            src={homeBanner}  // import img de la Banner
        />
    )
}

export default HomeBanner;
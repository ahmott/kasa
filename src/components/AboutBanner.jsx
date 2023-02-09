//Banner A propos img + titre
import Banner from './Banner';
import APropos from '../../src/utils/img/kasa_about.png'

const aPropos = () => {
    return(
        <Banner
            title='A propos'
            src={APropos} 
        />
    )
}

export default aPropos;
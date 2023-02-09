//Agencement General de la page d'Accueil 
import Card from './CardTile'
import propertyListing from '../datas/logements.json'


const Layout = () => {
    return(
        <section className='housings_container'>
            <ul className='housings_list'>
                {propertyListing.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Layout;
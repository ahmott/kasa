// Property Page 
import { NavLink, useParams } from 'react-router-dom';
import propertyListing from '../datas/logements.json';
import Collapse from './Collapse';
import Gallery from './Gallery';
import Rating from './Ratings';


const PropertyPage = () => {

    const { id } = useParams()
    const property = propertyListing.find(property => property.id === id)
    if (property === undefined) { 
        return <section className="error_page">
        <h1 className="error_page_title">404</h1>
        <h2 className="error_page_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink title='Accueil' end to='/home' className="error_page_link">Retourner sur la page d'accueil</NavLink>
    </section>
    }

    return (
        <section key={property.id} className='housing_page'>
            <Gallery 
                img={property.pictures} 
            />

            <header className='housing_page_header'>
                <article className='housing_page_header_infos'>
                    <h1 className='housing_page_header_infos_title'>{property.title}</h1>
                    <h2 className='housing_page_header_infos_subtitle'>{property.location}</h2>
                    <div className='housing_page_header_infos_tags'>
                        {property.tags.map((tag, i) => (
                            <p key={i} className='housing_page_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='housing_page_header_hoster'>
                    <div className='housing_page_header_hoster_infos'>
                        <p className='housing_page_header_hoster_infos_name'>{property.host.name}</p>
                        <img src={property.host.picture} alt='host-cover' className='housing_page_header_hoster_infos_img'/>
                    </div>
                    <Rating
                        scaleValue={property.rating}
                    />
                </article>
            </header>

            <article className='housing_page_collapses'>
                <div className='housing_page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={property.description}
                    />
                </div>
                <div className='housing_page_collapses_content'>
                    <Collapse
                        title='Équipements'
                        content={property.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )
}

export default PropertyPage;
import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import DisplayCards from "../components/HomeLayout"
import Footer from "../components/Footer"

const Home = () => {
    return(
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home
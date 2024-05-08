import './home.scss';

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Content from "../components/content/content";

function Home() {
    return (
        <div className='Home'>
            <div className="header"> 
                <Header/>
            </div>
            <div className="content">
                <Content/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
        
}

export default Home;
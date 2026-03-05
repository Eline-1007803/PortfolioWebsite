import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar.jsx";
import StartPage from "./components/StartPage.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"
import Bg from "./assets/pink-bg.jpg"

function App() {
     const styles = {
            backgroundImage: `url(${Bg})`,
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: '800px'
        };
    return (
            <div>
                <NavigationBar/>
                <div className="d-flex align-items-center justify-content-center" style={styles}>
                    <StartPage/>
                </div>
                <div>
                    <About/>
                </div>
                <div>
                    <Contact/>
                </div>



            </div>



    )
}


export default App

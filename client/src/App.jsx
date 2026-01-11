import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar.jsx";
import startPage from "./components/StartPage.jsx";
import StartPage from "./components/StartPage.jsx";

function App() {
    return (
        <div>
            <div>
                <NavigationBar/>
            </div>
            <div>
                <StartPage/>
            </div>
        </div>

    )
}

export default App

import "./App.css";
import Workout from "./pages/Workout";
import Standorte from "./pages/Standorte";
import Rezepte from "./pages/Rezepte";
import Home from "./pages/Home";
import Navbar from "./Navbar"
function App() {

    let component
    switch (window.location.pathname){
        case "/":
            component = < App/>
            break
        case "/home":
            component = <Home/>
            break
        case "/rezepte":
            component = <Rezepte/>
            break
        case "/standorte":
            component = <Standorte/>
            break
        case "/workout":
            component = <Workout/>
            break
    }
    return (
        <>
            <Navbar/>
            {component}
        </>
    );
}

export default App;
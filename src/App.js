import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// import Home component
import Home from "./Home";
// import About component
import Workout from "./Workout";
// import ContactUs component
import Standorte from "./Standorte";

import Rezepte from "./Rezepte";


function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
                    <Route exact path="/home" component={Home} />

                    {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
                    <Route path="/workout" component={Workout} />

                    {/* This route is for contactus component
          with exact path "/contactus", in
          component props we passes the imported component*/}
                    <Route path="/standorte" component={Standorte} />

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}

                    <Route path="/rezept" component={Rezepte} />

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
                    <Navigate to="/home" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
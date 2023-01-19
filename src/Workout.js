function Workout() {
    return (
        <div className="workout">

            <div className="container">
                <nav className="main-nav">
                    <img src="img/dumbbell.png" alt="Health" className="logo"/>

                    <ul className="main-menu">
                        <li><a href="#">Rezepte</a></li>
                        <li><a href="#">Workouts</a></li>
                        <li><a href="#">Standorte</a></li>
                    </ul>

                    <img src="img/295128.png" alt="Login" className="login"/>
                </nav>

                <section className="work">
                    <div className="out">
                        <h2>About Us</h2>
                    </div>
                    <div className="content">
                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum.</p>
                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Workout;

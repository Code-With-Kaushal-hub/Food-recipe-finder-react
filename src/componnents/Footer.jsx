
function Footer() {
    return (
        <footer className="recipe-footer">

            <div className="container">

                <div className="footer-content">

                    {/* Logo / About */}
                    <div className="footer-about">
                        <h3>🍳 Recipe Finder</h3>

                        <p>
                            Discover delicious recipes and
                            explore new flavors every day.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>

                        <a href="#home">Home</a>

                        <a href="#recipes">Recipes</a>

                        <a href="#categories">Categories</a>
                    </div>


                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Explore</h4>

                        <p>🥘 Delicious Recipes</p>

                        <p>🍴 Easy Cooking</p>

                        <p>❤️ Made for Food Lovers</p>
                    </div>

                </div>


                <div className="footer-bottom">

                    <p>
                        © 2026 Recipe Finder. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;

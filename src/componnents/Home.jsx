function Home({mySearch,activate}){
   return <>
   <section id="home" className="home-section">

                {/* Dark overlay */}
                <div className="home-overlay"></div>

                {/* Content */}
                <div className="container home-content text-center text-white">

                    <h1 className="display-3 fw-bold">
                        Taste the Happiness 🍕
                    </h1>

                    <p className="lead fw-semibold">
                        Cheesy bites, delicious flavors,
                        and happiness on every plate!
                    </p>

                    <p>
                        Discover your favorite food and satisfy your cravings.
                    </p>

                    {/* Search */}
                    <div className="row justify-content-center mt-4">

                        <div className="col-md-7 col-lg-6">

                            <div className="input-group input-group-lg">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search your favorite food..."
                                    onChange={(e) => mySearch(e.target.value)}
                                />

                                <button className="btn btn-warning" onClick={() => activate(prev => prev + 1)}>
                                    🔍 Search
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
    
   </>
} 
export default Home;
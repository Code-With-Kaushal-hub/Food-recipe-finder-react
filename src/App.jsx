import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './componnents/Navbar'
import Home from './componnents/Home'
import Cards from './componnents/Cards'
import Categories from './componnents/Categories'
import Footer from './componnents/Footer'

function App() {

    // Search value
    const [search, setSearch] = useState("");


    function handlesearch(val) {
        setSearch(val);
    }


    // Recipe data
    const [foods, setfoods] = useState([]);


    // Loading
    const [loading, setLoading] = useState(false);


    // Error
    const [error, setError] = useState("");


    // Used to trigger API search
    const [activeButton, setButtonData] = useState(0);


    // Selected recipe
    const [selectedFood, setSelectedFood] = useState(null);


    /* =========================
       FETCH RECIPES
    ========================= */

    useEffect(() => {

        // Don't fetch when page first loads
        if (activeButton === 0) {
            return;
        }


        async function getData() {

            try {

                setLoading(true);
                setError("");


                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`
                );


                const data = await response.json();


                // No recipe found
                if (data.meals === null) {

                    setfoods([]);

                    setLoading(false);

                    return;
                }


                let fooding = [];


                for (let i = 0; i < data.meals.length; i++) {

                    const meal = data.meals[i];


                    let ingredients = [];
                    let measurements = [];


                    // Get ingredients
                    for (let j = 1; j <= 20; j++) {

                        let ingredient = meal[`strIngredient${j}`];
                        let measurement = meal[`strMeasure${j}`];


                        if (
                            ingredient &&
                            ingredient.trim() !== ""
                        ) {

                            ingredients.push(ingredient);
                            measurements.push(measurement);

                        }

                    }


                    // Create food object
                    const food = {

                        id: meal.idMeal,

                        name: meal.strMeal,

                        category: meal.strCategory,

                        location: meal.strArea,

                        image: meal.strMealThumb,

                        ingredients: ingredients,

                        measurements: measurements,

                        instructions: meal.strInstructions,

                        youtube: meal.strYoutube,

                        source: meal.strSource
                    };


                    fooding.push(food);

                }


                setfoods(fooding);

                console.log(data);

                setLoading(false);

            }
            catch (error) {

                setError("Something went wrong");

                setLoading(false);

            }

        }


        getData();

    }, [activeButton]);


    return (

        <>


            {/* =========================
                NAVBAR
            ========================= */}

            <Navbar
                mySearch={handlesearch}
                activate={setButtonData}
            />


            {/* =========================
                HOME
            ========================= */}

            <Home
                mySearch={handlesearch}
                activate={setButtonData}
            />


            


            {/* =========================
                RECIPES
            ========================= */}

            <section
                id="recipes"
                className="food-section"
            >

                <div className="container py-5">


                    {/* TITLE */}

                    <h2 className="text-center mb-2">
                        🍽️ Recipes
                    </h2>


                    <p className="text-center mb-5">
                        Discover delicious recipes
                    </p>


                    {/* =========================
                        NO SEARCH YET
                    ========================= */}

                    {!loading &&
                        foods.length === 0 &&
                        !error && (

                            <div className="text-center py-5">

                                <div
                                    style={{
                                        fontSize: "50px"
                                    }}
                                >
                                    🔍
                                </div>


                                <h3>
                                    Search for a recipe
                                </h3>


                                <p>
                                    Discover delicious meals
                                    by searching for your
                                    favorite recipe.
                                </p>


                                <a
                                    href="#home"
                                    className="btn btn-warning mt-3"
                                >
                                    Search Now
                                </a>

                            </div>
                        )
                    }


                    {/* =========================
                        LOADING
                    ========================= */}

                    {loading && (

                        <div className="text-center py-5">

                            <div
                                className="spinner-border text-warning"
                                role="status"
                            >

                                <span className="visually-hidden">
                                    Loading...
                                </span>

                            </div>


                            <p className="mt-3">
                                Searching recipes...
                            </p>

                        </div>

                    )}


                    {/* =========================
                        ERROR
                    ========================= */}

                    {error && (

                        <div className="alert alert-danger text-center">

                            {error}

                        </div>

                    )}


                    {/* =========================
                        RECIPE CARDS
                    ========================= */}

                    {!loading && foods.length > 0 && (

                        <div className="row g-4">

                            {foods.map((item) => (

                                <div
                                    className="col-12 col-md-4"
                                    key={item.id}
                                >

                                    <Cards
                                        food={item}
                                        onViewRecipe={setSelectedFood}
                                    />

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </section>


            {/* =========================
                RECIPE POPUP
            ========================= */}

            {selectedFood && (

                <div className="recipe-overlay">

                    <div className="recipe-modal">


                        {/* CLOSE */}

                        <button
                            className="recipe-close"
                            onClick={() =>
                                setSelectedFood(null)
                            }
                        >
                            ×
                        </button>


                        {/* IMAGE */}

                        <img
                            src={selectedFood.image}
                            alt={selectedFood.name}
                            className="recipe-image"
                        />


                        <div className="recipe-content">


                            {/* NAME */}

                            <h1>
                                {selectedFood.name}
                            </h1>


                            {/* INFO */}

                            <p className="recipe-info">

                                <strong>
                                    Category:
                                </strong>{" "}

                                {selectedFood.category}

                                &nbsp; | &nbsp;

                                <strong>
                                    Area:
                                </strong>{" "}

                                {selectedFood.location}

                            </p>


                            <hr />


                            {/* INGREDIENTS */}

                            <h3>
                                🥘 Ingredients
                            </h3>


                            <ul className="ingredients-list">

                                {selectedFood.ingredients.map(
                                    (ingredient, index) => (

                                        <li key={index}>

                                            {ingredient}

                                            {" — "}

                                            {
                                                selectedFood
                                                    .measurements[index]
                                            }

                                        </li>

                                    )
                                )}

                            </ul>


                            {/* INSTRUCTIONS */}

                            <h3>
                                👨‍🍳 Instructions
                            </h3>


                            <p className="instructions">

                                {selectedFood.instructions}

                            </p>


                            {/* YOUTUBE */}

                            {selectedFood.youtube && (

                                <a
                                    href={selectedFood.youtube}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-danger"
                                >
                                    ▶ Watch Recipe
                                </a>

                            )}

                        </div>

                    </div>

                </div>

            )}
            {/* =========================
                CATEGORIES
            ========================= */}

            <Categories
                selectCategory={handlesearch}
            />
            <Footer />

        </>
    )
}


export default App
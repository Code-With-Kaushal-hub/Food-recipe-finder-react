function Categories({ selectCategory }) {

    const categories = [
        "Beef",
        "Chicken",
        "Dessert",
        "Lamb",
        "Miscellaneous",
        "Pasta",
        "Pork",
        "Seafood",
        "Side",
        "Starter",
        "Vegan",
        "Vegetarian",
        "Breakfast",
        "Goat"
    ];

    return (
        <section id="categories" className="categories-section">

            <div className="container">

                <h2 className="categories-title">
                    Explore Categories
                </h2>

                <p className="categories-subtitle">
                    Choose a category and discover delicious recipes
                </p>

                <div className="categories-container">

                    {categories.map((category) => (

                        <button
                            key={category}
                            className="category-btn"
                            onClick={() => selectCategory(category)}
                        >
                            {category}
                        </button>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Categories;
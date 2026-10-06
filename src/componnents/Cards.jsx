function Cards({ food, onViewRecipe }) {

    return (

        <div className="card h-100 food-card">

            {/* Food Image */}
            <img
                src={food.image}
                className="card-img-top"
                alt={food.name}
            />


            {/* Card Body */}
            <div className="card-body">

                {/* Food Name */}
                <h5 className="card-title">
                    {food.name}
                </h5>


                {/* Category */}
                <p className="card-text">

                    <strong>
                        Category:
                    </strong>{" "}

                    {food.category}

                </p>


                {/* Area */}
                <p className="card-text">

                    <strong>
                        Area:
                    </strong>{" "}

                    {food.location}

                </p>


                {/* View Recipe */}
                <button
                    className="btn btn-primary w-100"
                    onClick={() => onViewRecipe(food)}
                >
                    View Recipe
                </button>

            </div>

        </div>

    );
}

export default Cards;
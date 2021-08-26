import React, { useState, useEffect } from "react";
import axios from "axios";

function LandingContent() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://warm-gorge-13979.herokuapp.com/api/v1/drinks"
      );
      console.log(result.data);
      setDrinks(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex">
          <div className="mt-6 flex">
            <div className="mr-4 flex-shrink-0"></div>
            <ul>
              {drinks.map((item) => (
                <li key={item.id}>
                  <p>{item.drinkName}</p>
                  {/* <p>{item.brew}</p>
                  <p>{item.description}</p>
                  <p>{item.ingredients}</p> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingContent;

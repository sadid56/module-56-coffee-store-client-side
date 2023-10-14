import { useLoaderData } from "react-router-dom";
import Coffees from "../pages/Coffees";
import { useState } from "react";

const Home = () => {
  const LoadedCoffee = useLoaderData();
  const [newCoffee, setNewCoffee] = useState(LoadedCoffee);
  return (
    <div>
      <h2>total coffee {newCoffee.length}</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {newCoffee.map((coffee) => (
          <Coffees coffee={coffee}
          newCoffee={newCoffee}
          setNewCoffee={setNewCoffee}
          >

          </Coffees>
        ))}
      </div>
    </div>
  );
};

export default Home;

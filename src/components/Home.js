import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to Recipe App</h1>
      <p>Explore and share delicious recipes with the community.</p>
      <div>
        <Link to='/login'>
          <button style={{ marginRight: "150px", marginLeft: "30px" }}>
            Login
          </button>
        </Link>
        <Link to='/register'>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

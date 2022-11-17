import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Supabase App</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create New Smoothies</Link>
    </nav>
  );
};

export default Navbar;

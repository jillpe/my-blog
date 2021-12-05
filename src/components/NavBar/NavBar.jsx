import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <nav>
          <Link to="/">Home</Link>
          <Link to="/allblogs">All Blogs</Link>
          <Link to="/fitness">Fitness</Link>
          <Link to="/food">Food</Link>
      </nav>
    );
  }
import { Link } from "react-router-dom";

// npm install react-icons
import { IoMdHome, IoIosStar, IoIosListBox, IoIosTrain } from "react-icons/io";


const Navbar = () =>{
    return (
      <nav>
        <Link className="nav_link" to="/"><IoMdHome className="icon"/>Home</Link>
        <Link className="nav_link" to="/about"><IoIosStar className="icon"/>About</Link>
        <Link className="nav_link" to="/articles"><IoIosListBox className="icon"/>Articles</Link>

      </nav>
    )
}


export default Navbar;
import style from "./Menu.module.css";
import { Link } from "react-router-dom";





function Menu(){
    return(
     <div className={style.menu}>
<img src="./Header/Objekt.png" alt="icon" className={style.icon} />
        <Link to="/">Home</Link>
        <Link to="/Game"> Game </Link>
        <Link to="/Table"> Table</Link>
     </div>
    );
}

export default Menu;
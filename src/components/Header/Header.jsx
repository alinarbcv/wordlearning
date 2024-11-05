import style from "./Header.module.css";


function Header(){
    return(
     <div className={style.header}>
        <h1>Word trainer</h1>
     </div>
    );
}

export default Header;
import logo from '../../logo.svg'
import './NavBar.css'

export const NavBar = ()=>{
    return (
        <div className="navbar__container">
            <img src = {logo} width='120px'/>
            <h1> ReactJS Todo App </h1>
        </div>
    );
}
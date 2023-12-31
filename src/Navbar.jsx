import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Navbar(props){
  

    return(
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5 text-primary" to="">{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>

        <li className="nav-item">
          <Link className="nav-link active text-primary" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-primary" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </Link>
    
        </li>
  
      
      </ul>
      
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.dark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-3 text-primary" htmlFor="flexSwitchCheckDefault">{props.toggle} </label>
</div>
      
      
    </div>
  </div>
</nav>

    );
}
export default Navbar;
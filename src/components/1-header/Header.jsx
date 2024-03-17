import { useEffect, useState } from 'react';
import './header.css' ;
import { IoMoon } from "react-icons/io5";

import { GiHeraldicSun } from "react-icons/gi";





const Header = ()=>{
  const [showModal, setshowModel] = useState(false);
  const[theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
  useEffect(() => {
    if(theme === "light"){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);


  return(
    
    <header className=" flex">
      <button onClick={() => {
        setshowModel(true)
      }}className="menu">show</button>

      <div className="dd">VILLA</div>
    <nav>
      <ul className='flex'>
        <li><a  href="" >Home</a></li>
        <li><a href="">Properites</a></li>
        <li><a href="">Property Details</a></li>
        <li><a href="">Countact Us</a></li>
      </ul>
    </nav>
        <button>Schedule a visit</button>


        <button onClick={() => {
        //  setTheme("light")
          // send value to local store

         localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark")
          // get 
          setTheme(localStorage.getItem("currentMode"))
        }
        }>
          {theme === "dark" ? ( <IoMoon  size={"2rem"} color='yellow'/> ) :
           (<GiHeraldicSun size={"3rem"} color='yellow'/>)}
      
        </button>

      {showModal && (
          <div className="border fixed">
          <ul className="modal">
            <li> <button onClick={() => {
        setshowModel(false)

      }}>close</button></li>
          <li><a href="">Home</a></li>
          <li><a href="">Properites</a></li>
          <li><a href="">Property Details</a></li>
          <li><a href="">Countact Us</a></li>
        </ul>
           
          </div>

      )}
  </header>

    )
}
  

export default Header;
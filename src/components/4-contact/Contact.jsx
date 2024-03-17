
import './contact.css' ;
import { BiSolidMessageMinus } from "react-icons/bi";


const Contact = ()=>{

  return(
    
   <section className='contact-us'>
    <h1 className='title'>
     
      <BiSolidMessageMinus className='BiSolidMessageMinus' size={""} color=''/>
      contact-us
      
    
    </h1>

    <h2>Get In Touch With Our Agents</h2>

    <p className="sub-title">When you really need to download free CSS templates, please remember our website TemplateMo.
         Also, tell your friends about our website. Thank you for visiting. 
         There is a variety of Bootstrap HTML CSS templates on our website.
          If you need more information, please contact us.

      </p>

      <div className="flex"> 
      <form className='border'>
        <div className="flex">
        <label htmlFor="email">Email Address:</label>
        <input required type="email" name="" id="email" />
        </div>

        <div className="flex" style={{marginTop:"14px"}}>
        <label htmlFor="message">Your Message:</label>
        <textarea required name="" id="message" ></textarea>
        </div>

        <button className="submit">submit</button>
        
      </form>
      
      <img className="animation" src={"./contact-bg.jpg"} alt=""/>

      </div>
  
   </section>
    

    )
}
  

export default Contact ;
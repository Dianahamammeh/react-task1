
import './main.css' ;
import { BiAlignRight } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiSolidInstitution } from "react-icons/bi";


const myProjects = [{projectTitle:"Best Appartment & Sea View" ,imagPath:"featured.jpg"},
{projectTitle:"react project",imagPath:"deal-02.jpg"},
{projectTitle:"react project", imagPath:"deal-01.jpg"}]
const  Main= ()=>{

  return(
    <main className=" flex">



      <section className="flex left-section">

      <ul>
        <li>
        <BiAlignRight size={"1.3rem" } color='red' />
        <h1>250 m2</h1><br></br><span><h4>Total Flat Space</h4></span>
        </li>
      
        <div className='divider'/>
        <BiHighlight size={"1.3rem" } color='red' />
        <li><h1>Contrac</h1><br></br><span><h4>Contract Ready</h4></span></li>
        <div className='divider'/>
        <BiHome  size={"1.3rem" } color='red'/>
        <li><h1>Payment Process</h1><br></br><span><h4>Payment Process</h4></span></li>
        <div className='divider'/>
        <BiSolidInstitution size={"1.3rem" } color='red'/>
        <li><h1>Under Control</h1><br></br><span><h4>24/7 Under Control</h4></span></li>
      </ul>

      </section>
      
      <section className=" flex right-section">
          {myProjects.map((item) => {
            return(
              <article key={item.imagPath} className="card">
              <img width={266} src={item.imagPath} alt=""/>
              <div style={{width: "266px"}} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">Best useful links ?
                 Get the best villa website template in HTML CSS and Bootstrap 
                 for your business. 
                TemplateMo provides you the best free CSS templates in the world.
                 Please tell your friends about it.</p>
              </div>
            </article>
            
            )
            
          }
          )}
    </section> 

    </main>
    )
}
  


export default Main;
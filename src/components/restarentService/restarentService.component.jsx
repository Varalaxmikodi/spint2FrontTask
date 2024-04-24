import './restarentService.component.css';
import { BiLogoSpringBoot } from "react-icons/bi";
import rapImage from '../../assets/images/photo.jpg';
import { Link } from 'react-router-dom';

export function RestarentService() {
    return (
        <div className='last-card'>
            <div className='head-card'>
                <div className='farm'>
                    <div className='fooling'>
              <Link to="/">         <h6 style={{"color":"black"}}>Home</h6></Link> 
                    </div>
                    <div className='cooling'>
                        <h6>Sign Up</h6>
                    </div>


                </div>

            </div>

            <div>
                <img src={rapImage} className='rapo'></img>

            </div>
            <div className='rating'>
                <div className='deny'>
                    <h1 className=''>Denny's Diner Middle East</h1>
                </div>

                <div className='ho'>
                        <h6 className='num'>4.5</h6>
                    </div>

            </div>
            <div className='comm'>
            <p className=''>Commercial,Chinease, Healthy Food...</p>
           
            </div>
            <div className='abu'>
            <p className=''>Location: Abu Dubai Mall, Ground Floor - Abu Dubai, Uninted Abu Dubai Estates</p>
            </div>
            <div className='open'>

                <p>Open at 12 Noon - 11:30 PM</p>
            </div>
            <div className='con'>
                <p>Contact : +91 546758676</p>
                
            </div>
                
        </div>
    )
}
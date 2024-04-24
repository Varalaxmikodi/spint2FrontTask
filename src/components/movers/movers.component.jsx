import './movers.component.css';

import { IoCallSharp } from "react-icons/io5";
import { FaPersonRays } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";


export function MoversComponent(){
    return(
        <div>
<div className='main-back'>
                <div className='good'>

                    <div className='tall'>
                        <a href='#' > <span className='number'><IoCallSharp />+91-44-22761081</span></a>
                        <a href='#' >  <span className='provide'><FaPersonRays className='a' />Provide Services<MdOutlineArrowDropDown /></span></a>
                        <a href='#' > <span className='my'><IoPerson className='b' />My account<MdOutlineArrowDropDown /></span></a>
                        <a href='#' ><span className='wish'><FaHeart className='c' />Wish List</span></a>
                        <a href="/sign" >   <span className='sign'><FaLock className='lock' />Sign In / Sign Up</span></a>
                        <h4 className='name'><BiLogoSpringBoot className='logo' />FindDubai</h4>

                    </div>
                </div>

                <div className='goal3'>
<h1>Shipping</h1>
                </div>





            </div>
        </div>
    )
}
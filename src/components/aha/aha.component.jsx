import './aha.component.css';

import { IoCallSharp } from "react-icons/io5";
import { FaPersonRays } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

export function AhaCommponent() {
    return (
        <div className=''>
            <div className='main-back'>
                {/* <div className='good'>

                    <div className='tall'>
                        <a href='#' > <span className='number'><IoCallSharp />+91-44-22761081</span></a>
                        <a href='#' >  <span className='provide'><FaPersonRays className='a' />Provide Services<MdOutlineArrowDropDown /></span></a>
                        <a href='#' > <span className='my'><IoPerson className='b' />My account<MdOutlineArrowDropDown /></span></a>
                        <a href='#' ><span className='wish'><FaHeart className='c' />Wish List</span></a>
                        <a href="/sign" >   <span className='sign'><FaLock className='lock' />Sign In / Sign Up</span></a>
                        <h4 className='name'><BiLogoSpringBoot className='logo' />FindDubai</h4>

                    </div>
                </div> */}

                

                <div className='goal6'>

                </div>
                <div className='row'>
                    <div className='col-2 close'>
                        <img src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_indianflavours.jpg?w=256&q=75" className='bread1'></img>
                        <a href='#'><span className='food'>Indian Flavours</span></a>
                    </div>

                    <div className='col-2 close'>
                        <img src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_globalcuisines.jpg?w=256&q=75" className='bread2'></img>
                        <a href='#'><span className='food'>Global Cuisines</span></a>
                    </div>

                    <div className='col-2 close'>
                        <img src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_nightlife.jpg?w=256&q=75" className='bread3'></img>
                        <a href='#'><span className='food'>Nightlife</span></a>
                    </div>

                    <div className='col-2 close'>
                        <img src="	https://akam.cdn.jdmagicbox.com/images/icons/website/i_quickbites.jpg?w=256&q=75" className='bread3'></img>
                        <a href='#'><span className='food'>Quick Bites</span></a>
                    </div>

                    <div className='col-2 close'>
                    <img src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_sweettooth.jpg?w=256&q=75" className='bread3'></img>
                        <a href='#'><span className='food'>Sweet Tooth</span></a>
                    </div>

                    <div className='col-2 close'>
                    <img src="https://akam.cdn.jdmagicbox.com/images/icons/website/i_foodie.jpg?w=256&q=75" className='bread3'></img>
                        <a href='#'><span className='food'>Foodie</span></a>
                    </div>

                </div>






            </div>
        </div>
    )
}
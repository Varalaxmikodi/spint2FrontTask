import './frontpage.component.css';

import backImage from '../../assets/images/photo-1549778399-f94fd24d4697.avif';
import logoImage from '../../assets/images/images.jpg';
import { FaHome } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaPersonRays } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineLockReset } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { MdArrowDropUp } from "react-icons/md";
import { GrRestaurant } from "react-icons/gr";
import { RestuarentComponent } from '../restuarent/restuarent.component';
import { IoLocation } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { getRestarentData } from '../user.service';
import axios from 'axios';
import { getData } from '../context.service';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Frontpage() {



    const [restData, setrestData] = useState([]);

    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        filterData(newQuery);

        // restData.map(item => console.log(item))
    };

    const filterData = (query) => {
        let filtered;
        if(query !=="")
        {
             filtered = restData.filter(item =>  item.restarentName.toLowerCase().includes( query.toLowerCase() ));
             console.log(filtered)
             setFilteredData(filtered)
        }
        else{
            setFilteredData("")
             
            
        }
     
           
        // const filtered = restData.filter(item =>  console.log(item.restarentName));
 
    };

    useEffect(() => {
        getRestarentData()
            .then((res) => {
                // alert("success")
                setrestData(res.data)
                // setFilteredData(res.restData)
            })
            .catch((error) => {
                alert(error)
            })
       
    }, [])





    return (
        <div className='main-back'>

            <div className='good'>


                <div className='tall'>
                    <a href='#' > <span className='number'></span></a>
                    <a href='/provide' >  <span className='provide'><FaPersonRays className='a' />Provide Services<MdOutlineArrowDropDown /></span></a>
                    <a href='/myAccount' > <span className='my'><IoPerson className='b' />My account<MdOutlineArrowDropDown /></span></a>
                    <a href='/wishlist' ><span className='wish'><FaHeart className='c' />Wish List</span></a>
                    <a href="/sign" >   <span className='sign'><FaLock className='lock' />Sign In / Sign Up</span></a>
                    <h4 className='name'><BiLogoSpringBoot className='logo' />FindDubai</h4>
                </div>

            </div>

            <div className='back'>

                <h1 className='q'> </h1>  <br></br>

                <div className='shot'>

                    <div className='search'>



                        {/* <input type="text" className="form-control box" placeholder="Search Your Service Here" /> */}
                        <input
                            className=' form-control box'
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search Services Here..."
                        />
                        <ul className='max'>
                            {
                            // if(filterData.length>0){
                                filteredData.length>0 && filteredData.map((item, index) => (
                                <a href='/service'> <li key={index} className='like' > {item.restarentName}</li></a>
                            ))
                        // }
                            
                            
                            }
                        </ul>
                        {/* <label  className='label' ></label> <br />
                        <select className='drop' id='available' >
                            <option>9AM  - 7PM</option>
                            <option>10AM - 8PM</option>
                            <option>1AM - 9PM</option>
                        </select> */}


                    </div>

                    {/* <div className='input-card'>
           <label className='label'>Select Timing</label> <br/>
           <select className='drop' id='available' >
            <option>9AM  - 7PM</option>
            <option>10AM - 8PM</option>
            <option>1AM - 9PM</option>
           </select>
          </div> */}

                </div>



            </div>



            <div className='row'>

                <div className='col-2'>
                    <ol>
                        <img src='https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=48&q=75' className='rest'></img>
                        <a href='/abhi'><li className='home1' >Restaurents
                            {/* <ul className="home">
                                <li>Kwart Shop</li>
                                <li>Sweet Shop</li>
                                <li>Organic</li>
                                <li>Super Shop</li>
                            </ul> */}
                        </li></a>
                    </ol>
                </div>
                <div className='col-2'>
                    <div className='local'>
                        <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=48&q=75" className='spa'></img>
                    </div>
                    <a href='/beauty'><li className='home1' >Beauty Spa
                        {/* <ul className='home'>
                            <li>Fridge</li>
                            <li>Cooler</li>
                            <li>Fridge</li>
                            <li>Washing mashion</li>
                        </ul> */}
                    </li></a>
                </div>

                <div className='col-2'>
                    <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=48&q=75" className='edu'></img>
                    <a href="/education"><li className='home1' >Education
                        {/* <ul className='home'>
                            <li>Mens Wear</li>
                            <li>Women Wear</li>
                            <li>Kids Wear</li>
                            <li>Foot wear</li>
                        </ul> */}
                    </li></a>
                </div>

                <div className='col-2'>
                    <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=48&q=75" className='rest'></img>
                    <a href='/movers'><li className='home1' >Packers & Movers
                        {/* <ul className='home'>
                            <li>Divorce Lawyers</li>
                            <li>Auditors</li>
                            <li>Fire Insurance</li>
                            <li>Life Insurance</li>
                        </ul> */}
                    </li></a>
                </div>

                <div className='col-2'>
                    <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=48&q=75" className='rest'></img>
                    <a href='/contra'><li className='home1' >Contractors
                        {/* <ul className='home'>
                            <li>Cars</li>
                            <li>Vans</li>
                            <li>Buses</li>
                            <li>Three whealer</li>
                        </ul> */}
                    </li></a>
                </div>

                <div className='col-2'>
                    <img src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=48&q=75" className='rest'></img>
                    <a href='/accomadation'><li className='home1' >Accomdation
                        {/* <ul className='home'>
                            <li>Hotels</li>
                            <li>Restuarents</li>
                            <li>Villas</li>
                            <li>Dabas</li>
                        </ul> */}
                    </li></a>
                </div>

            </div>
            <div className='row'>
                <div className='col-2' >
                    <div className='close'>
                        <a href='#'> <img src='https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg' className='bread'></img></a>
                        <a href='/food'> <span className='food'>Food</span></a>

                    </div>
                    <div className='close'>
                        <a href='#'> <img src="https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_SY200_.jpg" className='bread'></img></a>
                        <a href='#'>    <span className='food'>Mobiles</span></a>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='close'>
                        <a href='#'> <img src="https://sulcdn.azureedge.net/content/hpc/job-training.jpg" className='bread'></img></a>
                        <a href='/courses'>   <span className='food'>Courses</span></a>
                    </div>
                    <div className='close'>
                        <a href='#'>  <img src="https://m.media-amazon.com/images/I/419srwglARL._AC_SY200_.jpg" className='bread'></img></a>
                        <a href='#'>      <span className='food'>Stationary</span></a>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='close'>
                        <a href='#'>  <img src="https://sulcdn.azureedge.net/content/hpc/beauty-parlour.jpg" className='bread'></img></a>
                        <a href='#'>  <span className='food'>Makeup</span></a>
                    </div>
                    <div className='close'>
                        <a href='#'><img src="https://m.media-amazon.com/images/I/816atz++wqL._AC_SY200_.jpg" className='bread'></img></a>
                        <a href='#'>    <span className='food'>Decoration</span></a>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='close'>
                        <a href=''> <img src="https://sulcdn.azureedge.net/content/images/blogs/53734748-shutterstock_2157379791.jpg" className='bread'></img></a>
                        < a href='#'>      <span className='food'>Interior</span></a>
                    </div>
                    <div className='close'>
                        <a href='#'> <img src="	https://m.media-amazon.com/images/I/81QiNyrMYEL._AC_SY200_.jpg" className='bread'></img></a>
                        <a href='#'>    <span className='food'>Bed Accessories</span></a>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='close'>
                        <a href='#'> <img src="https://sulcdn.azureedge.net/content/images/blogs/54846187-shutterstock-2166824479-1-1.png" className='bread'></img></a>
                        <a>     <span className='food'>Electronics</span></a>
                    </div>
                    <div className='close'>
                        <a href='#'>   <img src="https://m.media-amazon.com/images/I/51x3cj+-iUL._AC_SY200_.jpg" className='bread'></img></a>
                        <a href='#'>  <span className='food'>Beauty Products</span></a>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='close'>
                        <a href='#'>   <img src="https://sulcdn.azureedge.net/content/hpc/properties-to-buy.jpg" className='bread'></img></a>
                        <a href='#'>  <span className='food'>Dream Home</span></a>
                    </div>
                    <div className='close'>
                        <a href='#'>   <img src="https://sulcdn.azureedge.net/content/hpc/web-designers.jpg" className='bread'></img></a>
                        <a href='#'>    <span className='food'>Web Developer</span></a>
                    </div>
                </div>
            </div>
            <div className='row ground'>
                <div className='col-6 explore ' >

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6GpQ2JPaxtF0FwK8c7UY8QSv46b9FVemHg&usqp=CAU" className='rap'></img>

                </div>
                <div className='col-6'>
                    <img src="https://3.imimg.com/data3/WP/HM/MY-11535832/luxury-villas-500x500.jpg" className='rap'></img>
                </div>

            </div>
            <div className='foot'>
                {/* <div className='x'>
                    <ol className='menu'>
                        <li className='menu-list'>Information</li>
                        <li className='menu-list'>Customer Service</li>
                        <li className='menu-list' >Extras
                        <ul className='sub-menu'>
                                <li className='account'>My Account</li>
                                <li>Booking History</li>
                                <li>Wish List</li>
                                <li>News Letter</li>

                            </ul>
                        
                        
                        
                        </li>

                        <li className='menu-list'>My account
                            <ul className='sub-menu'>
                                <li className='account'>My Account</li>
                                <li>Booking History</li>
                                <li>Wish List</li>
                                <li>News Letter</li>

                            </ul>
                        </li>

                        

                    </ol>
                </div> */}
                <div className='row'>
                    <div className='col-3'>
                        <ol>
                            <li className='tag'>Information
                                <ul className='menu'>
                                    <li className='doll'>About Us</li>
                                    <li className='god'>Privacy Policy</li>
                                    <li className='term'>Terms & Conditions</li>
                                    <li className='refund'>Refund and Cancellation </li>
                                    <li className='contacts'>Contacts</li>
                                    <li className='locations'>Locations</li>
                                    <li className='map'>Mapping</li>
                                    <li className='address'>Addresses</li>
                                </ul>

                            </li>
                        </ol>

                    </div>

                    <div className='col-3'>
                        <ol>
                            <li className='tag'>Customer Service
                                <ul className='menu'>
                                    <a href='/abhi' >  <li className='anchor'>Restuarents</li></a>
                                    <a href='#' className='anchor' >    <li className='health'>Health</li></a>
                                    <li className='jobs'>Jobs</li>
                                    <a href='/education'>   <li className='education'>Education</li></a>
                                    <li className='makeup'>MakeUp</li>
                                    <li className='mobiles'>Mobiles</li>
                                    <li className='stationary'>Stationary</li>
                                    <li className='decor'>Decoration</li>

                                </ul>

                            </li>
                        </ol>

                    </div>

                    <div className='col-3'>
                        <ol>
                            <li className='tag'>Personal Services
                                <ul className='menu'>
                                    <li className='jobs'>Loans</li>
                                    <li className='jobs'>Visa Consultants</li>
                                    <li className='jobs'>Astrologers</li>
                                    <li className='jobs'>Lawers</li>
                                    <li className='jobs'>Bed Accessories</li>
                                    <li className='jobs'>Dream House</li>
                                    <li className='jobs'>Food</li>
                                </ul>

                            </li>
                        </ol>
                    </div>

                    <div className='col-3'>
                        <ol>
                            <li className='tag'>My Account
                                <ul className='menu'>
                                    <a href='/myAccount'>  <li className='sap'>My Account</li></a>
                                    <li className='jobs'>Booking History</li>
                                    <li className='jobs'>Wish List</li>
                                    <li className='jobs'>News Letter</li>
                                    <li className='jobs'>Credentials</li>
                                </ul>

                            </li>
                        </ol>
                    </div>

                </div>

            </div>
            <div className='mouse'>

                <div className='hell'>
                    <span className='footer'>© 2024 Copyright Find Dubai.com. All Rights Reserved</span>
                    <div className='book'>
                        <a href='#'><FaFacebook className='face' /></a>
                    </div>
                    <div>
                        <a href='#'> <FaTwitter className='twitter' /></a>
                    </div>
                    <div>
                        <a href='#'>      <FaLinkedin className='linkdn' /></a>
                    </div>
                    <div>
                        <a href='#'>   <IoLogoInstagram className='insta' /></a>
                    </div>
                    <div>
                        <a href='#'>    <FaYoutube className='you' /></a>
                    </div>
                </div>
            </div>

        </div>
    )

}

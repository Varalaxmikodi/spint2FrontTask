import './restuarent.component.css';

import { IoCallSharp } from "react-icons/io5";
import { FaPersonRays } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { saveRestarentData } from '../user.service';
import { CreateComponent } from '../create/create.component';
import { Link } from 'react-router-dom';




export function RestuarentComponent() {

//     const [userLoggedIn,setUserLoggedIn]=useState(false);
//     const navigate=useNavigate();

// useEffect(()=>{
// store.subscribe(() =>{
//     let logData=store.getState().userData;
//     let isUserLoggedIn=logData ? true:false;
//     setUserLoggedIn(isUserLoggedIn)

// })
// },[])





    return (
        <div>
            <div className='main-back'>
                <div className=''>
                    <div>

                    </div>
                    {/* <div className='tall'>



                        <a href='/'><button className='btn btn-success button-card ' >Home</button></a>
                        <a href='/admin/Create-projects'><button className='btn btn-primary backs' >Back</button></a>
                        <h4 className='name'><BiLogoSpringBoot className='logo' />FindDubai</h4>

                    </div> */}
                </div>
                <div className=''>
                    <div className='row back-card' >
                        <div className='col-2 side-card'>



                            <h5 className='menu'>
                                Menu-List
                            </h5>
                            <a href='/create'>   <h6 className='create'>
                                Add Item
                            </h6></a>
                            <a href="/all">  <h6 className='trash'>
                                Get Item
                            </h6></a>
                            <Link to ="/update">  <h6 className='trash'>
                               
                          </h6></Link>
                          <a href='/'>
                       
                          </a>

                        </div>
                        <div className='col-10'>


                        </div>


                    </div>

                </div>




            </div>
        </div>
    )
}
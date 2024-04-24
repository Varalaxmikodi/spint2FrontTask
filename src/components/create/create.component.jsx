import './create.component.css';

import { FaPersonRays } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { saveRestarentData } from '../user.service';
import { AllComponent } from '../all/all.component';
import { Link } from 'react-router-dom';


export function CreateComponent() {

    function saveRestData() {
        let data = {
            id: 0,
            restarentName: document.getElementById("restarentName").value,
            price: document.getElementById("price").value,
            category: document.getElementById("category").value,
            location: document.getElementById("location").value,
            available: document.getElementById("available").value,
            // image: document.getElementById("chooseFile").value

        }
        console.log(data)
        saveRestarentData(data)
        
            .then(() => {
                alert("Successfully Saved")

            })
            .catch(() => {
                alert("Data Saved Fail")
            })


    }
    return (

<div className='mt-5'>
        <div className=''>
            <div className='flop'>
    <Link to="/logo">   <button className='btn btn-secondary  gets'>Back</button></Link> 
   <Link to="/all"> <button className='btn btn-primary  gets-card'>Get Item</button></Link>
    </div>

            <form className='form-card'>
                <div className='row'>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" placeholder="Restuarent Name" id="restarentName" name="restarentName" required />
                        <input type="text" className="form-control-plaintext input-text1" placeholder="Description" id="location" name="location" required />
                        {/* <input type="file" className="form-control-plaintext text8" id="chooseFile" /> */}
                    </div>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" placeholder="Item Name" id="price" name="price" required />
                        <input type="text" className="form-control-plaintext input-text1" placeholder="Price" id="available" name="available" required />
                    </div>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" placeholder="category" id="category" name="category" required />

                    </div>
                    {/* <input type="submit" value="save" className=' btn btn-primary button  save-button'  ></input> */}


                </div>
                <button className='btn btn-success button back-button save' onClick={() => { saveRestData() }}>Save</button>
                {/* <input type="submit" value="save" className=' btn btn-primary button  save'  ></input> */}
            </form>
            {/* <AllComponent></AllComponent> */}
        </div>
        
        </div>
    )
}
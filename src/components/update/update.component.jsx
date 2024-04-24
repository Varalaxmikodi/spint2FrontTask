import { useParams, useNavigate, Link } from 'react-router-dom';

import './update.component.css';
import { useEffect, useRef, useState } from 'react';
import { UpdateUserData, getOneUserData } from '../user.service';
import { useForm } from 'react-hook-form';



export function UpdateComponent() {

    const [oneUserData, setOneUserData] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id);

    //ref varaiables
    const restarentNameRef = useRef();
    const itemNameRef = useRef();
    const categoryRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();



    useEffect(() => {


        getOneUserData(id)
            .then((resp) => {
                let data = resp.data
                setOneUserData(data)
                // alert("get data Successful")
                console.log(resp.data)

                restarentNameRef.current.value = data.restarentName
                itemNameRef.current.value = data.price
                categoryRef.current.value = data.category
                locationRef.current.value = data.location
                priceRef.current.value = data.available



            })
            .catch(() => {
                // alert("Not get data")
            })


    }, [])

    const UpdatedData = (event) => {
        event.preventDefault();
       

        let data = {
            restarentName: restarentNameRef.current.value,
            price: itemNameRef.current.value,
            category: categoryRef.current.value,
            location: locationRef.current.value,
            available: priceRef.current.value,
        }

        console.log(data)
        UpdateUserData(id, data)
            .then(() => {
                alert("Update Successfully")
            })
            .catch(() => {
                alert("Update Failed")
            })


    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div>
        <Link to="/all">   <button className='btn btn-primary get-card'>Get Item</button></Link> 
            <form className='form-card' >
                <div className='row'>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" ref={restarentNameRef} placeholder="Restuarent Name" id="restarentName" required />
                        <input type="text" className="form-control-plaintext input-text1" ref={locationRef} placeholder="Desription" id="location" name="location" required />
                        {/* <input type="file" className="form-control-plaintext text8" id="chooseFile" /> */}
                    </div>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" ref={itemNameRef} placeholder="Item Name" id="price" name="price" required />
                        <input type="text" className="form-control-plaintext input-text1" ref={priceRef} placeholder="Price" id="available" name="available" required />
                    </div>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" ref={categoryRef} placeholder="category" id="category" name="category" required />

                    </div>
                    {/* <input type="submit" value="save" className=' btn btn-primary button  save-button'  ></input> */}


                </div>
                <button className='btn btn-success button back-button save' onClick={UpdatedData}>Update</button>
                {/* <input type="submit" value="save" className=' btn btn-primary button  save'  ></input> */}
            </form>

        </div>
    )
}
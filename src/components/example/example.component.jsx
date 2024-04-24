import { useRef } from "react"
import { saveRestarentData } from "../user.service"



export function ExampleComponent() {

//Ref Variable
 const restarentNameRef=useRef();
 const priceRef=useRef();
 const categoryRef=useRef();
 const locationRef=useRef();
 const availableRef=useRef();




   //save 
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
        saveRestarentData(data)
            .then(() => {
                alert("Successfully Saved")

            })
            .catch(() => {
                alert("Data Saved Fail")
            })
    }

    return (
        <div>
            <form className='form-card'>
                <div className='row'>
                    <div className='col-4'>
                        <input type="text" className="form-control-plaintext input-text1" ref={restarentNameRef} placeholder="Restuarent Name" id="restarentName" name="restarentName" required />
                        <input type="text" className="form-control-plaintext input-text1" placeholder="Location" id="location" name="location" required />
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
                <button className='btn btn-primary button back-button save' onClick={() => { saveRestData() }}>Save</button>
                {/* <input type="submit" value="save" className=' btn btn-primary button  save'  ></input> */}
            </form>
        </div>
    )
}
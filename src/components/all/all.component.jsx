import { useEffect, useRef, useState } from "react";


import { deleteRestarentData, getRestarentData } from "../user.service";
import SharedComponent from "../shared/shared.component";
import { Link } from "react-router-dom";



export function AllComponent() {

    //ref variables
    const restarentNameRef = useRef();
    const itemNameRef = useRef();
    const categoryRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();

    const [allHeader, setAllHeader] = useState([
        "Id", "Restaurent Name", "Item Name", "Category", "Desription", "Price", "Actions"
    ])

    const [createProjectData, setCreateProjectData] = useState([]);

    const [saveBtnText, setSaveBtnText] = useState("save");

    useEffect(() => {
        getRestarentData()
            .then((resp) => {
                setCreateProjectData(resp.data)
            })
    }, [])

    //delete
    function deleteItemFromProject(item) {
        deleteRestarentData(item._id)
            .then((resp) => {
                getRestarentData();
                alert("delete successfully")
            })
            .catch(() => {
                alert("not deleted")
            })
    }
    function UpdateProperGrid() {
        console.log('Up')
    }

    //edit
    function editPropertyTypeData(item) {
        // restarentNameRef.current.value=
        // itemNameRef.current.value=item.
        // categoryRef
        // locationRef
        // priceRef
    }

    return (
        <div className="table">
            <div>
                <Link to="/create">   <button className="btn btn-success mt-4" style={{ "margin-right": "1400px" }}>Add Item</button></Link>
            </div>
            <div className="edo " >


                <SharedComponent headers={allHeader} body={createProjectData}
                    editItemFromCreate={(item) => { UpdateProperGrid(item) }}
                    deleteItemFromCreate={(item) => { deleteItemFromProject(item) }}>

                </SharedComponent>

            </div>
        </div>
    )
}
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { Link } from "react-router-dom";


const SharedComponent = (props) => {

    function UpdateItem(row) {
        props.editItemFromCreate(row)
    }
    function deleteItem(row) {
        props.deleteItemFromCreate(row)
    }

    return (
        <div className="">
            <table className="table table-bordered table-hover" style={{"width":"1400px","margin" : "","margin-left":"90px","margin-top":"30px"}} >
                <thead className="table-danger">
                    <tr>
                        {
                            props.headers.map((header) => <th>{header}</th>)

                        }


                    </tr>
                </thead>
                <tbody>
                    {
                        props.body.map((row) => <tr>
                            {/* {
                                Object.values(row).map((cell) => <td>{cell}</td>)
                            } */}

                            <td>
                                {
                                    row._id


                                }
                            </td>
                            <td>
                                {
                                    row.restarentName


                                }
                            </td>
                            <td>
                                {
                                    row.price


                                }
                            </td>
                            <td>
                                {

                                    row.category



                                }
                            </td>
                            <td>
                                {

                                    row.
                                        location



                                }
                            </td>
                            <td>
                                {

                                    row.
                                        available



                                }
                            </td>



                            <td>


                                {/* <a href='#' onClick={(event) => { UpdateItem(row, event) }} ><MdModeEdit className='bomma' /> </a> */}
                                <Link to={`/update/${row._id}`}> <MdModeEdit className='bomma' /></Link>
                                <a href='#' onClick={() => { deleteItem(row) }} ><MdDelete className='bomma1' /> </a>
                               

                            </td>

                        </tr>
                        )
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}
export default SharedComponent;

import { Link } from 'react-router-dom';
import './logo.component.css';


export function LogoComponent() {
    return (
        <div>
            <h6 className='menu'>
                Menu-List
            </h6>

            <div className='n'>

                <div className='m'>
                    <a href='/create'> <button className='add btn btn-success'>Add Item</button></a>
                    <a href='/all'>  <button className='get btn btn-primary'>Get Item</button></a>

                </div>
            </div>
        </div>

    )
}
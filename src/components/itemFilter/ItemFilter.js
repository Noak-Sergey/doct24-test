import { useState } from 'react';
import './itemFilter.css';

const ItemFilter = (props) => {
    const buttonsData = [
        {name: 'like', label: 'Only likes'},
    ];

    const [onOff, setOnOff] = useState(false);
    const stateBtn = () => setOnOff(!onOff)

    const buttons = buttonsData.map(({name, label}) => {
        
        const clazz = onOff ? "btn-light" : "btn btn-outline-light";
        return (
            <button 
                className={`btn ${clazz}`}  
                type="button" 
                key={name}
                onClick={() => {stateBtn(); props.onFilterSelect()}}>
                {label}
            </button>
        )
    })

    return(
        <div className="btn-group">
         {buttons}
        </div>
    )
}

export default ItemFilter;
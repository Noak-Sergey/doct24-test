import Item from "../item/Item";
import './itemsList.css';

const ItemsList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (            
            <Item 
                key={id} 
                {...itemProps}
                onDelete={()=> onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />   
        )
    })

    return(
        
            <ul className="app-list list-group">
                {elements}
            </ul>
        
    )
}

export default ItemsList;
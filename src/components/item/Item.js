import './item.css';

const Item = (props) => {

        const {name, onDelete, onToggleProp, like} = props;

        let className = "list-group-item d-flex justify-content-between";
        
        if(like) {
            className += ' increase like';
        }

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{name}</span>
                <div className='d-flex justify-content-center align-items-center'>
                    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
} 

    


export default Item;
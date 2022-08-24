import ItemsList from './components/itemsList/ItemsList';
import ItemFilter from './components/itemFilter/ItemFilter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsTC, deleteItemAC, likeItemAC, } from './redux/items-reducer'
import { useEffect, useState } from 'react';

function App() {

  const dispatch = useDispatch()

  const items = useSelector(state => state.items.items)
  const[onlyLike, setOnlyLike] = useState(false)

  useEffect( () => {
    dispatch(getItemsTC())
  },[])

  const deleteItem = (id) => {
    dispatch(deleteItemAC(id))
  }

  const onToggleProp = (id, prop) => {
    dispatch(likeItemAC(id, prop))
  }

  const onFilterSelect = () => {
    setOnlyLike(!onlyLike)
  }

  const filterItem = (items, filter) => {    
    return filter ? items.filter(i => i.like) : items
  }

  const renderItems = filterItem(items, onlyLike)
  

  return (
    <div className="App">
      <div>
        <ItemFilter onFilterSelect={onFilterSelect}/>
      </div>
      
      <ItemsList data={renderItems} onDelete={deleteItem} onToggleProp={onToggleProp}/>
    </div>
  );
}

export default App;

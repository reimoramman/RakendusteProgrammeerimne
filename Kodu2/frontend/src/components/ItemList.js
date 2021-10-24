import Item from '../components/Item';

function ItemList(){
  return (<div>
    {props.items.map(item=> (
      <Item
      key={item.id}
      name={item.category}
      price={item.name}
      category={item.category} />
    ))}
    
    <Item name="Item2" price="20" category="laptop" />
  </div>);
}

export default ItemList
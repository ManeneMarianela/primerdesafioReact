import React, { useState } from 'react'
import ItemList from './ItemList'

const Item = () => {
    const [item, setItem] = useState([
        {
            id: 1,
            title: zapatillas run,
            price: $40000, 
            pictureUrl:
        },
        {
            id: 2,
            title: zapatillas urbanas,
            price: $25000,
            pictureUrl:
        },
        {
            id: 3,
            title: zapatillas trecking,
            price: $80000,
            pictureUrl:
        },
        {
            id: 4,
            title: zapatillas blancas,
            price: $28000,
            pictureUrl:
        },
    ])
  return (
    <div className='row'>
        {ItemList.map((item)=> {
            return <Item products={item.products}
               
})}
    </div>
        );
    };


export default Item;

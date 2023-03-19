import React, { useState } from 'react'

export default function Card({id ,image,info,price,name,removeTour}) {
    const [readmore,setreadmore] = useState(false);
    const description = readmore? info: `${info.substring(0,200)}...`
            
    function readmoreahandler(){
        setreadmore(!readmore);
    }

  return (
    <div className='card'>

        <img src={image} className = "image"></img>

        <div className="tour-info">

            <div className='tour-details'>
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>

            <div className='description'>
                {description}
                <span className='read-more' onClick={readmoreahandler}>
                    {readmore?`Show Less`:`Read More`}
                </span>
            </div>
        </div>
        <button className='btn-red' onClick={()=>removeTour(id)}>
            Not Intreseted
        </button>
    </div>
  )
}
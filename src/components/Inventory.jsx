import React from 'react'

const Inventory = ({inventory, itemImages}) => {
  return (
    <div className='col-span-12 flex gap-4 border-2 border-amber-400 p-2'>
        {inventory.map((item) => (
            <img key={item} src={itemImages[item]} alt={item} className='h-full w-1/6' />
        ))}
    </div>
  )
}

export default Inventory

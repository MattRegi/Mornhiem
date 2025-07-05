import React from 'react'

const Controls = ({ move, collectItem, endGame}) => {
  return (
    <div className='col-span-1 border-2 border-amber-400 p-2 h-full'>
      {!endGame ? (
      <div className='grid grid-cols-2 gap-2 text-4xl font-bold py-4 h-full place-content-around'>
        <button onClick={() => move('North')} className='col-span-2 border-3 border-black rounded-3xl bg-amber-500 mx-auto p-2 w-[37%]'>North</button>
        <button onClick={() => move('West')} className='border-3 border-black rounded-3xl bg-amber-500 mx-auto p-2 w-[75%]'>West</button>
        <button onClick={() => move('East')} className='border-3 border-black rounded-3xl bg-amber-500 mx-auto p-2 w-[75%]'>East</button>
        <button onClick={() => move('South')} className='col-span-2 border-3 border-black rounded-3xl bg-amber-500 mx-auto p-2 w-[37%]'>South</button>
        <button onClick={() => collectItem()} className='col-span-2 border-3 border-black rounded-3xl bg-amber-500 mx-auto p-2 w-[75%]'>Collect Item</button>
      </div>
      ) : (
        <div className='flex justify-center items-center h-full text-4xl font-bold py-4'>
          <button onClick={() => window.location.reload()} className='border-3 border-black rounded-3xl bg-amber-500 mx-auto p-2 w-[75%]'> Play Again </button>
        </div>
      )}
    </div>
  )
}

export default Controls

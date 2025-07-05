import React, {useEffect, useRef} from 'react'

const Gameplay = ({log}) => {
    const logEndRef = useRef(null);

    useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [log]);

  return (
    <div className='col-span-2 border-2 border-amber-400 overflow-y-auto py-5'>
        {log.map((entry, index) => (
            <p key={index} className='text-black font-bold py-1 pl-5 pr-5 m-3 text-md'>{entry}</p>
        ))}
        <div ref={logEndRef} />
    </div>
  )
}

export default Gameplay

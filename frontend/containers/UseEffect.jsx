import React from 'react'
import { useState, useEffect } from 'react'
import "../style/useeffect.css"

const UseEffect = ({judul}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Di klik ${count} kali (useEffect)`;
      });

  return (
    <div>
        <p className='judul'>{judul}</p>
        <button className='useeffect' onClick={()=>setCount(count+1)}>Sertifikat A : {count} buah</button>
    </div>
  )
}

export default UseEffect

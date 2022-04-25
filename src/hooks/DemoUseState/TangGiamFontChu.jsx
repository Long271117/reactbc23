import React, { useState } from 'react'

export default function TangGiamFontChu(props) {

  const [fontChu, setFontChu] = useState(15)

  const [mauChu, setMauChu] = useState('black')

  return (
    <div style={{fontSize:fontChu +'px', color: mauChu}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda aut ratione doloribus nulla tempore recusandae optio, dolorum provident, ipsa suscipit culpa laboriosam dicta error dolor perferendis, veniam eaque fuga!
        <br /><br />
        <button className='btn btn-primary mr-2' onClick={() => {
            setFontChu(fontChu+1)
            setMauChu('blue')
        }}>+</button>
        <button className='btn btn-danger' onClick={() => {
            setFontChu(fontChu-1)
            setMauChu('red')
        }}>-</button>
    </div>
  )
}

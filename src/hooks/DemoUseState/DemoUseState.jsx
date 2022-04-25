// rfc
import React, {useState} from 'react'
import TangGiamFontChu from './TangGiamFontChu';

export default function DemoUseState(props) {

  const [number, setNumber] = useState(1);

  const [imgSrc, setImgSrc] = useState('https://i.pravatar.cc?u=1')

  return (
    <div className='container mt-5'>
        <h3>Number: {number}</h3>
        <button className='btn btn-success mr-2' onClick = {() => {
            setNumber(number + 1)
        }}>+</button>
        <button className='btn btn-danger ml-2' onClick = {() => {
            setNumber(number - 1)
        }}>-</button>
        <hr />
        <h3>Tinder</h3>
        <div className='card w-25'>
            <img src={imgSrc} alt='...' className='w-100' />
            <div className='card-body'>
                <button className='btn btn-outline-danger' onClick={() => {
                    let numberRandom = Math.floor(Math.random() * 100);
                    let newLink = 'https://i.pravatar.cc?u=' + numberRandom;
                    setImgSrc(newLink);
                }}>Random</button>
            </div>
        </div>
        <br />
        <h3 className='mt-4'>Bài tập tăng giảm font chữ</h3>
        <TangGiamFontChu />
    </div>
  )
}

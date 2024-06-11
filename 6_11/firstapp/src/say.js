import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    const [color,setColor] = useState('');

    return (
        <div>
           <button style={{ color : 'red'}} onClick={onClickEnter}>입장</button>
           <button style={{ color : 'blue'}} onClick={onClickEnter}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{ color : 'red'}} onClick={()=> setColor('red')}>빨간색</button>
            <button style={{ color : 'red'}} onClick={()=> setColor('greed')}>빨간색</button>
            <button style={{ color : 'red'}} onClick={()=> setColor('blue')}>빨간색</button>
        </div>
    );
};
export default Say;
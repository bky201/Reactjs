import React, {useState} from 'react'
import UseEffectCounterOnlyOnce from './UseEffectCounterOnlyOnce'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={ () => {
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {display && <UseEffectCounterOnlyOnce />}
    </div>
  )
}

export default UseEffectCounterContainer
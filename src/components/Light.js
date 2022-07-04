import React, { useState } from 'react'

import GetImage from './GetImage'
import classes from './Light.module.css'

export default function Light() {
  const [img, setImg] = useState()

  return (
    <div>
      <div className={classes.light_face}>
        In this Demo you can switch on a LED by sending TKLV to an address.
        Simply scan the QR Code with your Klever App and send some TKLV to it.
        Once the balance increases the LED will be switched on for 1 Minute.
      </div>
      {/* <button onClick={handleOnSwitch}>Switch Lights</button>
      <div className={lightOn ? classes.lightbulb_on : classes.lightbulb_off}>
        {lightOn ? <img src={bulbOn} /> : <img src={bulbOff} />}
      </div> */}
      <img className={classes.photo1} src={img} />
      <GetImage setImg={setImg} alt="live view" />
    </div>
  )
}

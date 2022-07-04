import React from 'react'

import classes from './DemoWrapper.module.css'

export default function DemoWrapper(props) {
  return (
    <div className={classes.demowrapper}>
      <h2 className={classes.text}>{props.text}</h2>
      <div className={classes.light}>{props.children}</div>
    </div>
  )
}

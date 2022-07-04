import React from 'react'

import classes from './Header.module.css'
import QrCode from './QrCode'

export default function Header() {
  return (
    <header>
      <h1 className={classes.header}>
        This is a Demo Site for the Node-RED Klever Plugin
      </h1>
      <QrCode />
    </header>
  )
}

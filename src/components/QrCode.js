import QRCode from 'qrcode'
import { useState, useEffect } from 'react'

import classes from './QrCode.module.css'

const PUBLIC_KEY =
  'klv16flmx0km3e0ld9ly8pdhec2ccaz3jwmyfpe9c74h7fax4xysz9lsc5msv7'

function QrCode() {
  const [qr, setQr] = useState('')

  useEffect(function GenerateQRCode() {
    QRCode.toDataURL(
      PUBLIC_KEY,
      {
        width: 200,
        margin: 2,
        color: {
          dark: '#14152c',
          light: '#EEEEEEFF',
        },
      },
      (err, url) => {
        if (err) return console.error(err)
        setQr(url)
      },
    )
  }, [])

  return (
    <div className={classes.qrcode}>
      {/* <button onClick={GenerateQRCode}>Generate</button> */}
      {qr && (
        <>
          <img src={qr} alt="QrCode" />
        </>
      )}
    </div>
  )
}

export default QrCode

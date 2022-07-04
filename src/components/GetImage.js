import React, { useEffect } from 'react'

const imageUrl = 'http://173.249.18.133:1880/images'

export default function GetImage(props) {
  //
  const fetchImage = async () => {
    const res = await fetch(imageUrl)
    const imageBlob = await res.blob()
    const imageObjectURL = URL.createObjectURL(imageBlob)
    props.setImg(imageObjectURL)
    console.log('udated image')
  }

  useEffect(() => {
    fetchImage()
    const interval = setInterval(() => {
      fetchImage()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return <>{/* <img src={props.img} alt="icons" /> */}</>
}

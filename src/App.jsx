import { useState } from 'react'
import Swal from 'sweetalert2'

import './App.css'
const API = 'https://64c510e7c853c26efada7299.mockapi.io/product/product'


function App() {
  const [data, setData] = useState('')
  const [name, setName] = useState()
  const [img, setImg] = useState()
  const [rating, setRating] = useState()
  const [newPrice, setNewPrice] = useState()
  const [oldPrice, setOldPrice] = useState()
  const [info, setInfo] = useState()
  const [desc, setDesc] = useState()


  function OnSubmit() {

    if (name == "" && img == "" && rating == "" && newPrice == "" && oldPrice == "" && info == "" && desc == ""
    ) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: "To'ldirilmagan !!!",
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      const Data = { 'name': name, 'img': img, 'rating': rating, 'new_price': newPrice, 'old_price': oldPrice, 'info': info, 'desc': desc }

      fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)

      }).then(result => {

        if (result.status == 201) {
          Swal.fire({
            position: 'top-end',
            icon: 'succes',
            title: 'Bajarildi !!!',
            showConfirmButton: false,
            timer: 1500
          })
        }

        setName('')
        setImg('')
        setRating('')
        setNewPrice('')
        setOldPrice('')
        setInfo('')
        setDesc('')
      })

    }








  }



  return (
    <div>
      <div className="container">
        <div className="wrap">
          <div className="input">
            <form action="">
              <h1>Admin</h1>
              <input onChange={(evt) => setName(evt.target.value)} type="text" value={name} placeholder='Name' />
              <input onChange={(evt) => setImg(evt.target.value)} type="text" value={img} placeholder='Img' />
              <input onChange={(evt) => setRating(evt.target.value)} type="text" value={rating} placeholder='Rating' />
              <input onChange={(evt) => setNewPrice(evt.target.value)} type="text" value={newPrice} placeholder='New price' />
              <input onChange={(evt) => setOldPrice(evt.target.value)} type="text" value={oldPrice} placeholder='Old price' />
              <input onChange={(evt) => setInfo(evt.target.value)} type="text" value={info} placeholder='Info' />
              <input onChange={(evt) => setDesc(evt.target.value)} type="text" value={desc} placeholder='Describtion' />
            </form>
            <div className="btn">
              <button onClick={OnSubmit} >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )

}

export default App

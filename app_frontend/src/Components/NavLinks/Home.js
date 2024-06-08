import React, { useContext } from 'react'
import './HomeCss.css'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'

export default function Home() {

  const auth = useContext(authContext)
  const navigate = useNavigate()

  const checkAuth = () => {
    if (auth.isLoggedIn) {
      console.log(`logged in`);
      navigate('/item/description')
    }
    else {
      console.log(`no auth`);
      navigate('/user/auth')
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row home-screen-header mt-5 mb-4">
          <h1>Our Concepts</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">
            <h2 className='home-screen-sub-heading'>Stack</h2>
            <div className="card home-screen-card">
              <img src="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=is&k=20&c=iQdICOnz_UmfAiFuY3d3LQe1B9cYHI3UwjTPNKBOlow=" className="card-img-top home-screen-card-image" alt="..." />
            </div>
            <div className='home-screen-button'>
              <p href="#" className="btn btn-primary" onClick={checkAuth}>View</p>
            </div>
          </div>
          <div className="col">
            <h2 className='home-screen-sub-heading'>Queue</h2>
            <div className="card home-screen-card">
              <img src="https://media.istockphoto.com/id/453156437/photo/group-of-people-in-line-for-the-atm.jpg?s=1024x1024&w=is&k=20&c=k6ijcHeQGNperx1vvp4sYWTh-IlwEuwWyr_mrgsv3JA=" className="card-img-top home-screen-card-image" alt="..." />
            </div>
            <div className='home-screen-button'>
              <p href="#" className="btn btn-primary" onClick={checkAuth}>View</p>
            </div>
          </div>
          <div className="col">
            <h2 className='home-screen-sub-heading'>Link List</h2>
            <div className="card home-screen-card">
              <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644309661084-Linked%20list-03.png" className="card-img-top home-screen-card-image" alt="..." />
            </div>
            <div className='home-screen-button'>
              <p href="#" className="btn btn-primary" onClick={checkAuth}>View</p>
            </div>
          </div>
          <div className="col">
            <h2 className='home-screen-sub-heading'>Coming Soon</h2>
            <div className="card home-screen-card">
              <img src="https://media.istockphoto.com/id/1130665041/photo/question-mark-symbol.jpg?s=1024x1024&w=is&k=20&c=kd6zJihEUX2K3wqQ4cJmKt76br0jRyyniOwQJOeAsi0=" className="card-img-top home-screen-card-image" alt="..." />
            </div>
            <div className='home-screen-button'>
              <p href="#" className="btn btn-primary" onClick={checkAuth}>View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

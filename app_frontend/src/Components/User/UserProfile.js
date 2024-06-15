import React, { useContext, useEffect, useState } from 'react';
import "../../Components-CSS/User/UserProfileCss.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '../Modal/Modal';
import { authContext } from '../Context/AuthContext';

export default function UserProfile() {
  const [data, SetData] = useState('')
  useEffect(() => {
    getUserProfile()
  }, [])

  const auth = useContext(authContext)

  const [showModal, SetShowModal] = useState(false)

  const handleModal = () => {
    if (auth.isLoggedIn) {
      console.log(`open modal`);
      SetShowModal(true)
    }
  }

  const getUserProfile = async () => {
    const userToken = localStorage.getItem("access_token")
    const config = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`
      },
      url: process.env.REACT_APP_PROD_API_BASE_URL + `/v1/api/auth/user/profile`
    }

    try {
      const response = await axios(config)
      // console.log(response);
      if (response.data.status === 200) {
        console.log(`Profile fetched successfully`);
        console.log(response.data.data)
        SetData(response.data.data)
      }
    }
    catch (error) {
      console.log(`Error while fetching profile`);
      console.log(error);
    }
  }

  const initialData = {
    email: "",
    name: "",
    mobileNumber: ""
  }
  const [formData, SetFormData] = useState(initialData)
  const handleFormChange = (event) => {
    const {name, value} = event.target
    SetFormData({...formData, [name]: value});
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    const postData = {
      name: formData.name? formData.name: "",
      mobileNumber: formData.mobileNumber? formData.mobileNumber: "",
      email: formData.email? formData.email: ""
    }

    const userToken = localStorage.getItem("access_token")
    const config = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`
      },
      url:
          process.env.REACT_APP_PROD_API_BASE_URL + `/v1/api/auth/user/profile/update`,
      data: postData
    }

    try {
      const response = await axios(config)

      if(response.data.status === 200){
        console.log(`Profile updated successfully`)
        SetFormData(initialData)
      }
    } catch (error) {
      
    }
  }
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 p-0 border rounded app-secondary-color auth-card overflow-hidden" style={{ maxWidth: "800px", height: "auto" }}>
          <div className="col-md-6 d-flex d-md-flex flex-column justify-content-center align-items-center app-primary-color order-md-1">
            <h5> {data.name}</h5>
            <Link type="button" className="btn btn-light" onClick={handleModal}>Edit</Link>
          </div>
          <div className="col-md-6 order-md-2">
            <div className="card-body" style={{ marginTop: '3rem' }}>
              <div className='mb-5'>
                <h5 className="card-title">INFORMATION</h5><hr></hr>
                <div className="row text-center">
                  <div className="col">
                    Email: {data.email}
                  </div>
                  <div className="col">
                    Phone: {data.mobileNumber}
                  </div>
                </div>

              </div>
              <div className='mb-5'>
                <h5 className="card-title">PROJECTS</h5><hr></hr>
                <div className="row text-center">
                  <div className="col">
                    Email: {data.email}
                  </div>
                  <div className="col">
                    Phone: {data.mobileNumber}
                  </div>
                </div>

              </div>
              <div>
                <h5 className="card-title">LINKS</h5><hr></hr>
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      Twitter
                    </div>
                    <div className="col">
                      facebook
                    </div>
                    <div className="col">
                      Github
                    </div>
                    <div className="col">
                      Github
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
      {showModal && <Modal formData={formData} handleFormChange={handleFormChange} modalAction={handleUpdate} onClose={() => SetShowModal(false)} heading="Update profile" isAForm={true} />
      }
    </>
  );
}

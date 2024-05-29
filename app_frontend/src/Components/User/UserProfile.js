import React from 'react';
import "../../Components-CSS/User/UserProfileCss.css"
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 cardBody">
        <div className="card mb-3" style={{ height: '70vh', width: '60%' }}>
          <div className="row g-0 h-100">
            <div className="col-md-4 cardBody-left">
              <h5>Your profile</h5>
              <div className='d-flex justify-content-center align-items-center'>
                <h5>Name</h5>
              </div>
              <div className='d-flex justify-content-center'>
                <Link type="button" className="btn btn-light">Edit</Link>
              </div>
            </div>
            <div className="col-md-8 cardBody-right">
              <div className="card-body">
                <h5 className="card-title">Information</h5><hr></hr>
                <div className='d-flex mb-5'>
                  <div>email</div>
                  <div>phone</div>
                </div>
                <h5 className="card-title">Projects</h5><hr></hr>
                <div className='d-flex mb-5'>
                  <div>email</div>
                  <div>phone</div>
                </div>
                <h5 className="card-title">Links</h5><hr></hr>
                <div class="container text-center">
                  <div class="row">
                    <div class="col">
                      Twitter
                    </div>
                    <div class="col">
                      facebook
                    </div>
                    <div class="col">
                      Github
                    </div>
                    <div class="col">
                      Github
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

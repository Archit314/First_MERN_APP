import React from 'react';
import "../../Components-CSS/User/UserProfileCss.css"
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 cardBody">
        <div className="card mb-3" style={{ height: '70vh', width: '60%' }}>
          <div className="row g-0 h-100">
            <div className="col-md-4 cardBody-left d-flex flex-column align-items-center justify-content-center">
              <h5>Your profile</h5>
              <h5>Name</h5>
              <Link type="button" className="btn btn-light">Edit</Link>
            </div>
            <div className="col-md-8 cardBody-right">
              <div className="card-body" style={{ marginTop: '3rem' }}>
                <div className='mb-5'>
                  <h5 className="card-title">INFORMATION</h5><hr></hr>
                  <div class="row text-center">
                    <div class="col">
                      Email:
                    </div>
                    <div class="col">
                      Phone:
                    </div>
                  </div>

                </div>
                <div className='mb-5'>
                  <h5 className="card-title">PROJECTS</h5><hr></hr>
                  <div class="row text-center">
                    <div class="col">
                      Email:
                    </div>
                    <div class="col">
                      Phone:
                    </div>
                  </div>

                </div>
                <div>
                  <h5 className="card-title">LINKS</h5><hr></hr>
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
      </div>
    </>
  );
}

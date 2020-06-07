import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import BlogImage from '../../assets/images/blog.svg';

import './Blog.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Blog() {
  return (
    <div className="row">
      <div className="col-md-6 col-xs-12 col-lg-4">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                13 Sep 2020
              </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="stats">
                <div>
                <button type="button" className="btn btn-info"><FaEdit /> Edit</button>
                </div>
                <div>
                  <button type="button" className="btn btn-danger"><FaTrash /> Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Read more <b>&rarr;</b></span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xs-12 col-lg-4">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                13 Sep 2020
              </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="stats">
                <div>
                <button type="button" className="btn btn-info"><FaEdit /> Edit</button>
                </div>
                <div>
                  <button type="button" className="btn btn-danger"><FaTrash /> Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Read more <b>&rarr;</b></span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xs-12 col-lg-4">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                13 Sep 2020
              </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="stats">
                <div>
                <button type="button" className="btn btn-info"><FaEdit /> Edit</button>
                </div>
                <div>
                  <button type="button" className="btn btn-danger"><FaTrash /> Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Read more <b>&rarr;</b></span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xs-12 col-lg-4 ">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                13 Sep 2020
              </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="stats">
                <div>
                <button type="button" className="btn btn-info"><FaEdit /> Edit</button>
                </div>
                <div>
                  <button type="button" className="btn btn-danger"><FaTrash /> Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Read more <b>&rarr;</b></span>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xs-12 col-lg-4">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                13 Sep 2020
              </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="stats">
                <div>
                <button type="button" className="btn btn-info"><FaEdit /> Edit</button>
                </div>
                <div>
                  <button type="button" className="btn btn-danger"><FaTrash /> Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Read more <b>&rarr;</b></span>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Blog;

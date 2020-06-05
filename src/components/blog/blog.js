import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import BlogImage from '../../assets/images/blog.svg';

import './blog.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Blog() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Level 13
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

      <div className="col-md-6">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Level 13
        </div>
              <div className="points center">
                5,312 Points
        </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div className="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div>
              <div className="stats">
                <div>
                  <div className="title">Awards</div>
                  <i className="fa fa-trophy"></i>
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Matches</div>
                  <i className="fa fa-gamepad"></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Pals</div>
                  <i className="fa fa-group"></i>
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Coffee</div>
                  <i className="fa fa-coffee"></i>
                  <div className="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Level 13
        </div>
              <div className="points center">
                5,312 Points
        </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div className="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div>
              <div className="stats">
                <div>
                  <div className="title">Awards</div>
                  <i className="fa fa-trophy"></i>
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Matches</div>
                  <i className="fa fa-gamepad"></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Pals</div>
                  <i className="fa fa-group"></i>
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Coffee</div>
                  <i className="fa fa-coffee"></i>
                  <div className="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Level 13
        </div>
              <div className="points center">
                5,312 Points
        </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div className="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div>
              <div className="stats">
                <div>
                  <div className="title">Awards</div>
                  <i className="fa fa-trophy"></i>
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Matches</div>
                  <i className="fa fa-gamepad"></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Pals</div>
                  <i className="fa fa-group"></i>
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Coffee</div>
                  <i className="fa fa-coffee"></i>
                  <div className="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card green">
          <div className="additional">
            <div className="user-card">
              <div className="level center">
                Level 13
        </div>
              <div className="points center">
                5,312 Points
        </div>
              <img src={BlogImage} alt="..." />
            </div>
            <div className="more-info">
              <h1>Jane Doe</h1>
              <div className="coords">
                <span>Group Name</span>
                <span>Joined January 2019</span>
              </div>
              <div className="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div>
              <div className="stats">
                <div>
                  <div className="title">Awards</div>
                  <i className="fa fa-trophy"></i>
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Matches</div>
                  <i className="fa fa-gamepad"></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Pals</div>
                  <i className="fa fa-group"></i>
                  <div className="value">123</div>
                </div>
                <div>
                  <div className="title">Coffee</div>
                  <i className="fa fa-coffee"></i>
                  <div className="value infinity">∞</div>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span className="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blog;

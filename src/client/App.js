import React, { Component } from "react";
import "./app.css";
import "./style.scss";

export default class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <header>
            <div className="container">
              <div className="left">
                <img src="../src/client/img/logo.png" alt="" />
                <div className="appname">SimpleChat</div>
              </div>

              <div className="middle">
                <h3>Theresa Hudson</h3>
              </div>

              <div className="right">
                <div className="username">Patrcia Fields</div>
                <div className="avatar">
                  <img src="../src/client/img/avatar.png" alt="" />
                </div>
              </div>
            </div>
          </header>

          <main>
            <div className="col-left">
              <div className="col-content">
                <div className="messages">
                  <li>
                    <div className="avatar">
                      <div className="avatar-image">
                        <div className="status online" />
                        <img src="../src/client/img/avatar-2.png" alt="" />
                      </div>
                    </div>
                    <h3>Nancy Scott</h3>
                    <p>Be there soon.</p>
                  </li>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="col-content">
                <section className="message">
                  <div className="grid-message">
                    <div className="col-message-received">
                      <div className="message-received">
                        <p>Ok.</p>
                      </div>
                      <div className="message-received">
                        <p>Do you play EVE Online?</p>
                      </div>
                    </div>
                    <div className="col-message-sent">
                      <div className="message-sent">
                        <p>Not anymore.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-foot">
                <div className="compose">
                  <input placeholder="Type a message" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

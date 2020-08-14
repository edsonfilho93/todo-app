import React from 'react'
import './menu.css'
import { BsCardChecklist } from 'react-icons/bs'

export default (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#/todos">
            <BsCardChecklist /> Navbar
          </a>
        </div>
        <div id="navbar">
          <ul class="list-group list-group-horizontal nav navbar-nav">
            <li>
              <a class="nav-link" href="#/todos">
                Tarefas
              </a>
            </li>
            <li>
              <a class="nav-link" href="#/about">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

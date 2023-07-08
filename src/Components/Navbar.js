import React from 'react'

export default function Navbar({mode, togglemode}) {
  return (
    <div>
        <nav class={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Detail bhro</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <div class="form-check form-switch">
  <input className="form-check-input" onClick={togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
      </div>
    </div>
  </nav></div>
  )
}

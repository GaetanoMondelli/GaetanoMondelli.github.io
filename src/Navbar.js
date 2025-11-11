import React from 'react'

export default class Navbar extends React.Component {

  state = {
    isNavCollapsed: true
  }

  constructor(props){
    super(props);
    this.handleNavCollapse = this.handleNavCollapse.bind(this);
  }

  handleNavCollapse() { 
    this.setState({isNavCollapsed: !this.state.isNavCollapsed})
  }

  render() {
    return <nav style={{ marginTop: "2%" }} class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">root ~ $ cd <span class="cursor" ></span> </a>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded={!this.state.isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={this.handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${this.state.isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarColor01">
      <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">/home
          <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/projects">/projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/articles">/articles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/awards">/awards</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/cert">/cert</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="/#/about">/about</a>
                </li> */}
            </ul>
      </div>
    </nav>

  }
}



    {/* <nav  class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">root ~ $ cd</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">/projects/public</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">/about</a>
                </li>
            </ul>
        </nav> */}
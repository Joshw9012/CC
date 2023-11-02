import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const description1 = this.props.data.description1;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">



        </nav>

        <div className="row banner">
        <h1 class="HBD H">H</h1><h1 class="HBD A" >a</h1><h1 class="HBD P">p</h1>
        <h1 class="HBD P">p</h1><h1 class="HBD Y">y</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 class="HBD B">B</h1><h1 class="HBD I">i</h1><h1 class="HBD R">r</h1>
        <h1 class="HBD T">t</h1><h1 class="HBD H">h</h1><h1 class="HBD D">d</h1>
        <h1 class="HBD A">a</h1><h1 class="HBD Y">y</h1>
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
              <h3>{description1}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                {/*<a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>*/}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

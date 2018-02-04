import React, { Component } from 'react';

import CompanyInfo from '../company/index';
import Tile from './components/tile';
import Button from '../components/button/button';
import './style.css';

class TokenStudio extends Component {
    state = {
        companyOpen: false,
    }

  render() {
    return (
      <div className="mt-5 main-container d-flex flex-column align-items-center">
        <h1>Design Your Token</h1>
        <div className="main-tile-container mt-5 d-flex flex-row justify-content-around align-self-center flex-wrap">
          <div onClick={() => this.setState({ companyOpen: true })}>
            <Tile
              focused={false}
              completed
              link="/"
              img="./img/user.png"
              title="Personal"
            />
          </div>
          <Tile
            focused
            completed={false}
            link="/"
            img="./img/user.png"
            title="ST-20"
          />
          <Tile
            focused={false}
            completed={false}
            link="/"
            img="./img/user.png"
            title="STO"
          />
        </div>
        <div className="mt-5 z-depth-1">
          <Button title="Create Token" />
        </div>
        <div className="mt-5">
          <h6>Back</h6>
        </div>

        <CompanyInfo
            open={this.state.companyOpen}
            close={() => this.setState({ companyOpen: false })}
        />
      </div>
    );
  }
}

export default TokenStudio;

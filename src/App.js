import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project';
import data from './Data/data.json';

var images = require.context('', true);

class App extends Component {

  render(){
    return (
      <div className="App">
          <Header/>
          {data.map((projectDetails, index) => {
            let imageTile = images(`${projectDetails.tileImage}`)
            return <Project tileImage = {imageTile} title = {projectDetails.title} subtitle = {projectDetails.subtitle}  description = {projectDetails.description}  />
          })}
      </div>
    );
  }
}

export default App;

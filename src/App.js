import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import images from './images.json';
import ImageCard from './components/ImageCard';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Wrapper from './components/Wrapper';


class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    currentScore: 0,
    images: images,
    unImages: images
  }

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  selectImage = name => {
    const findImage = this.state.unImages.find(item => item.name === name);

    if(findImage === undefined) {
      this.setState({
        message: "You already clicked that image!",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore: this.state.topScore,
        currentScore: 0,
        images: images,
        unImages: images
      })
    } else {
      const newImages = this.state.unImages.filter(item => item.name !== name);

      this.setState({
        message: "Nice!",
        currentScore: this.state.currentScore + 1,
        images: images,
        unImages: newImages
      })
    }

    this.shuffleArray(images);
  }

  render() {
    return (
      <Wrapper >
      <Navbar
        message={this.state.message}
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
      <Title />

      {
        this.state.images.map(image => (
          <ImageCard
            name={image.name}
            image={image.image}
            selectImage={this.selectImage}
            currentScore={this.state.currentScore}
            />
        ))
      }
      </Wrapper>
    )
  }
}

export default App;

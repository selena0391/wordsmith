import React  from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';
import man from './man.jpg';
import loss from './loss.jpg';
import jumpers from './jumpers.jpg';
import hangingdowntown from './hangingdowntown.jpg';
import flowerpower from './flowerpower.jpg';
import day1 from './day1.jpg';
import couple from './couple.jpg';
import coloredfaces from './coloredfaces.jpg';
import blurWoman from './blurWoman.jpg';
import btf from './btf.jpg';

const IMAGEPATHS = [
  		'{man}', '{loss}', '{jumpers}', '{hangingdowntown}', '{flowerpower}',
  		'{day1}', '{couple}', '{coloredfaces}', '{blurWoman}', '{btf}'
];

export default class background extends React.Component {
	constructor(props) {
    super(props);

    this.state = { currentImage: 0 };

    this.interval = null;

    this.nextImage = this.nextImage.bind(this);
 	}

 	nextImage() {
    let current = this.state.currentImage;
    let next = ++current % IMAGEPATHS.length;
    this.setState({ currentImage: next });
  	}

  	componentDidMount() {
    this.interval = setInterval(this.nextImage, 5000);
  	}

  	componentWillUnmount() {
    clearInterval(this.interval);
  	}

  	render() {
    let src = IMAGEPATHS[this.state.currentImage];
    return <background src={src} />;
  }
}

ReactDOM.render(
  <background />,
  document.getElementById('app')
);
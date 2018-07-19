import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import classNames from 'classnames';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      class: classNames('App'),
      sections: {
        coreBg: {
          typing: 0,
        },
        coreColours: {
          typing: 0,
        },
        finalSection: {
          typing: 0,
        }
      }
    };

    this.initCoreBgSection = this.initCoreBgSection.bind(this);
    this.initCoreColoursSection = this.initCoreColoursSection.bind(this);
    this.initFinalSection = this.initFinalSection.bind(this);
  }

  initCoreBgSection() {
    setTimeout(() => { 
      let sections = this.state.sections;
      sections.coreBg.typing = 1;
  
      this.setState({
        class: classNames('App'),
        sections: sections
      });
     }, 1000);
  }

  initCoreColoursSection() {
    setTimeout(() => { 
      let sections = this.state.sections;
      sections.coreColours.typing = 1;

      this.setState({
        class: classNames('App', 'AppCoreBg'),
        sections: sections
      });
    }, 1000);
  }

  initFinalSection() {
    setTimeout(() => { 
      let sections = this.state.sections;
      sections.finalSection.typing = 1;

      this.setState({
        class: classNames('App', 'AppCoreBg', 'AppCoreColours'),
        sections: sections
      });
    }, 1000);
  }

  render() {      
    return (
      <div className={this.state.class}>
        <TypeWriter typing={1} onTypingEnd={this.initCoreBgSection}>
          /** <br/>
          * Hey! My name is Gary and I am a developer at Rehab. <br/>
          * <br/>
          * This is my website showing off my coding skills! <br/>
          */ <br/><br/>
        </TypeWriter>

        <TypeWriter typing={this.state.sections.coreBg.typing} onTypingEnd={this.initCoreColoursSection}>
          /** <br/>
          * Lets make this look a bit better. I think the background colour would <br/>
          * look better light grey... <br/>
          */ <br/>
          background-color: lightgray; <br/><br/>
        </TypeWriter>

        <TypeWriter typing={this.state.sections.coreColours.typing} onTypingEnd={this.initFinalSection}>
          /** <br/>
          * We can't really read the text now, lets fix that... <br/>
          */ <br/>
          color: slategray; <br/><br/>
        </TypeWriter>

        <TypeWriter typing={this.state.sections.finalSection.typing}>
          /** <br/>
          * I learnt how to do all this today at Rehab, I also learnt: <br/>
          * - Navigating the command line <br/>
          * - Setting up a GitHub account <br/>
          * - Basic git commands and repo setup: <a href="https://github.com/garyrehab/gary" target="_blank">https://github.com/garyrehab/gary</a> <br/>
          * - Homebrew and Yarn <br/>
          * - Create React App <br/>
          * - HTML and CSS <br/>
          * - Basic Javascript <br/>
          * - Deploying to GitHub pages <br/><br/>
          * Now, lets celebrate wooo!! <br/>
          */ <br/>
        </TypeWriter>
      </div>
    );
  }
}

export default App;

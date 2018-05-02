import React, { Component } from 'react';
import _ from 'lodash';
import './GeneratedText.css';

class GeneratedText extends Component {
  constructor(props) {
    super(props);
    const kanyeParagraphs = [
      `I miss the old Kanye, straight from the Go Kanye,
  Chop up the soul Kanye, set on his goals Kanye.
  I hate the new Kanye, the bad mood Kanye.
  The always rude Kanye, spaz in the news Kanye.
  I miss the sweet Kanye, chop up the beats Kanye,
  I gotta say, at that time I'd like to meet Kanye.
  See, I invented Kanye, it wasn't any Kanyes,
  And now I look and look around and there's so many Kanyes.`,
  `I used to love Kanye, I used to love Kanye,
  I even had the pink polo, I thought I was Kanye.
  What if Kanye made a song about Kanye
  Called 'I Miss The Old Kanye'? Man, that'd be so Kanye
  That's all it was Kanye, we still love Kanye
  And I love you like Kanye loves Kanye.`,
  `Worry about your character, not your reputation. Your character
  is who you are. Your reputation is who people think you are.`];

    this.state = { paragraphs: kanyeParagraphs };
  }

  generateGraphs() {
    this.state.paragraphs = _.shuffle(this.state.paragraphs);
    const paragraphs = [];

    for(let i = 0; i < this.props.count; i++) {
      paragraphs.push(<div key={i} className="GeneratedText__paragraph">{this.state.paragraphs[i]}</div>)
    }

    return (
      <div>
        {paragraphs}
      </div>
    );
  }

  render() {
    return (
      <div className="GeneratedText__container col-lg-6">
        <h2 className="GeneratedText__heading">
          Interlude:
        </h2>
        <div className="GeneratedText__paragraphs-container">
          {this.generateGraphs()}
        </div>
      </div>
    );
  }
}

export default GeneratedText;

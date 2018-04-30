import React, { Component } from 'react';
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
  And I love you like Kanye loves Kanye.`];

    this.state = { paragraphs: kanyeParagraphs };
  }

  generateGraphs() {
    return (
    <div>
      <p className="GeneratedText__paragraph">{this.state.paragraphs[0]}</p>
      <p className="GeneratedText__paragraph">{this.state.paragraphs[1]}</p>
      <p className="GeneratedText__paragraph">{this.state.paragraphs[0]}</p>
      <p className="GeneratedText__paragraph">{this.state.paragraphs[1]}</p>
    </div>
    );
  }

  render() {
    return (
      <div className="GeneratedText__container col-lg-6">
        <h2 className="GeneratedText__heading">
          Ye Approved Content -  <span className="GeneratedText__sub-heading"></span>
        </h2>
        {this.generateGraphs()}
      </div>
    );
  }
}

export default GeneratedText;

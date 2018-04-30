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
  And I love you like Kanye loves Kanye.`,
  `Your conscience should allow a physical manifestation of your
  subconscious but right now most people's conscious is too affected
  by other people’s thoughts and it creates a disconnect from you doing
  what you actually feel now. Instead of doing what you feel, you just
  do what other people think you should do.`];

    this.state = { paragraphs: kanyeParagraphs };
  }

  generateGraphs() {
    const paragraphs = this.state.paragraphs.map((paragraph, index) => <div key={index} className="GeneratedText__paragraph">{paragraph}</div>);
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

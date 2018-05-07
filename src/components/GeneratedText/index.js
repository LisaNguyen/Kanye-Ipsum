import React, { Component } from 'react';
import _ from 'lodash';
import './GeneratedText.css';

class GeneratedText extends Component {
  constructor(props) {
    super(props);
    const kanyeParagraphs = [
    `Society has put up so many boundaries, so many limitations on what’s right and wrong that
    it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy,
    looking at colors, and no one told him what colors are good, before somebody tells you you
    shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old.
    Why would anyone pick blue over pink? Pink is obviously a better color. Everyone’s born confident,
    and everything’s taken away from you`,
    `As we live, our hearts turn colder. Cause pain is what we go through, as we become older.
    We get insulted by others, lose trust for those others. We get back stabbed by friends.
    It becomes harder for us to give others a hand. We get our heart broken by people we love,
    even that we give them all we have. Then we lose family over time. What else could rust
    the heart more over time? Blackgold.`,
    `I always felt like I could do anything. That’s the main thing people are controlled by!
    Thoughts- their perception of themselves! They're slowed down by their perception of themselves.
    If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.`,
    `We’re not always in the position that we want to be at. We’re constantly growing We’re
    constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams.
    If you have the opportunity to play this game of life you need to appreciate every moment. A lot
    of people don’t appreciate the moment until it’s passed.`,
    `The time is now for it to be okay to be great. People in this world shun people for being great.
     For being a bright color. For standing out. But the time is now to be okay to be the greatest you.
     Would you believe in what you believe in, if you were the only one who believed it?`,
     `There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.
     I’m not really specifically talented at anything except for the ability to learn. That’s what I do.
     That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.`,
     `It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it.
     And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers.
     Because I’m here to follow my dreams and inspire other people to follow their dreams, too.`,
     `If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail
     is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is
     that I'm not trying, and not I'm not trying my hardest, and I'm not trying to do the best way I know how.`
   ];

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

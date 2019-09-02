import React, { Component } from 'react';
import './Welcome.css';
import { Redirect } from 'react-router-dom'

class Welcome extends Component {
  state = {
    tiles: false
  };

  goToTiles = () => {
    this.setState({
      tiles: true
    })
  }
  

  render() {
    if(this.state.tiles) {
      return <Redirect to='/steppingStones' />
    }

    if (performance.navigation.type == 1) {
      return <Redirect to='/' />
    }
    return (
        <div onClick = {this.goToTiles} className= "outer-div-welcome">
        
          {/* <h1 className = "big-heading">Welcome to People of Promise</h1> */}
              <h4 className = "welcome-heading big-heading">Welcome to People of Promise!</h4>
              <div className ="scroll-welcome cover-image">
              <div className ="columns-welcome">
              <h4 className = "welcome-heading">Welcome to People of Promise!</h4>
              <p className = "main-content">This resource is designed to introduce you to some of the remarkable people of the Bible and God’s amazing grace. A thread that runs throughout all the books of scripture is God’s promises and faithfulness. And people; ordinary people, like you and me, are the vessels through which God’s love and grace are revealed. From start to finish, from Genesis to Revelation, from Creation to New Creation, God poured his love into all that he said and did. The highlights and the ‘low-lives’ of how these were received are all recorded in the BIble. The scripture passages you will read are the unvarnished but inspired narrative of God’s redeeming love. It is the remarkable testimony of God’s embrace of life and humanity. As C.S. Lewis stated, in view of God’s relation to people; “God writes straight on crooked lines.” Enjoy this journey that travels through the words and witnesses of these very real people. And discover the enduring truth that God is for you!<br/><br/>St. Paul, in his second letter to the Corinthians, summarizes the encompassing grace of God’s Promises, “For all of the promises which God has made, they are ‘Yes’ in Christ. And through him the ‘Amen’ is spoken by us to the glory of God.” II Cor. 1:20 The Cross is how God underlined all of his promises. The Empty Tomb is God’s exclamation point! God is the God of second chances. Because of Jesus we know that nothing can separate us from the love of God! </p>
              <h4 className = "welcome-heading">How to Use People of Promise</h4>
              <p className = "main-content">This web based resource is designed to be used by individuals and/or groups. Each week, one or two characters from the Bible are highlighted. Start by visiting the <b>‘Stepping Stones’</b> calendar page. Click on the date that is closest to today. It will link you to the character(s) that are being studied for this week. Read the Introduction and then the selected Bible passage. Then, individually or as a group, work through the questions. At the end, offer up the provided prayer to conclude your study.</p>
              <h4 className = "welcome-heading">Extras</h4>
              <p className = "main-content">You will notice that there are links for every character(s) to additional resources. These include:</p>
              <ul className = "main-content">
                <li>Maps - to orient where the action of the passage takes place</li>
                <li>Family Trees - to see who is related to whom</li>
                <li>Timelines - to give context to the Bible story and world history</li>
                <li>Gallery - to see the story with ‘the right side of your brain’ </li>
              </ul>
              <h4 className = "welcome-heading">Thank You Team!</h4>
              <p className = "main-content">Peopleofpromise.net is the result of a team of people. They poured themselves into their assignments and used their creativity to produce this wonderful resource. I want to thank the following individuals for their efforts and support:</p>
              <div className ="columns-names">
              <p className = "main-content">Elliot Thomas<br/>Brooke Struck<br/>Ruth Haugstad<br/>Ami Schlampp
              <br/>Mike Duffy<br/>Connie Priez<br/>Kerry Dressen<br/>Tonsha Belland<br/>Dan Segersin<br/>Brent Kastler<br/>
              Jill Sonnek<br/>Stephanie Kruger<br/>Melony Weathermon<br/><br/>Kris Paulsen<br/>Ann Pavelka<br/><br/>Pastor Joel Quie</p>
              </div>
              </div>
              </div>
        </div>
    );
  }
}

export default Welcome;


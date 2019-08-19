import React, { Component } from 'react';
import './Tiles.css';

class Tiles extends Component {


  render() {
    console.log('in tiles')
    return (
        <div className = 'outer-div-tiles'>
        <h1 className= 'tiles-header'>Click on the ‘Stepping Stones’ below to locate this week’s lesson</h1>
        <div className ='tiles cover-image'>
        <a onClick={this.props.clickLink} data-value = '2019-09-08' href= '#introPerson' className = 'calendar-link day-1' style = {{fontSize: '17pt'}}>September 8<br />Adam and Eve</a>
        <a onClick={this.props.clickLink} data-value = '2019-09-15' href= '#introPerson' className = 'calendar-link day-2'>September 15<br />Noah</a>
        <a onClick={this.props.clickLink} data-value = '2019-09-22' href= '#introPerson' className = 'calendar-link day-3'>September 22<br />Abraham & Sarah</a>
        <a onClick={this.props.clickLink} data-value = '2019-09-29' href= '#introPerson' className = 'calendar-link day-4'>September 29<br />Hagar & Ishmael</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-06' href= '#introPerson' className = 'calendar-link day-5'>October 6<br />Jacob & Esau</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-13' href= '#introPerson' className = 'calendar-link day-6'>October 13<br />Joseph</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-20' href= '#introPerson' className = 'calendar-link day-7'>October 20<br />Moses</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-27' href= '#introPerson' className = 'calendar-link day-8'>October 27<br />Miriam</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-03' href= '#introPerson' className = 'calendar-link day-9' style = {{fontSize: '16pt'}}>November 3<br />Joshua & Caleb</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-10' href= '#introPerson' className = 'calendar-link day-10'>November 10<br />Gideon</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-17' href= '#introPerson' className = 'calendar-link day-11'>November 17<br />Samuel</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-24' href= '#introPerson' className = 'calendar-link day-12'>November 24<br />David</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-01' href= '#introPerson' className = 'calendar-link day-13'>December 1<br />Isaiah</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-08' href= '#introPerson' className = 'calendar-link day-15'>December 8<br />Elizabeth</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-15' href= '#introPerson' className = 'calendar-link day-16'>December 15<br />Mary</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-22' href= '#introPerson' className = 'calendar-link day-17'>December 22<br />John B</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-29' href= '#introPerson' className = 'calendar-link day-18'>December 29<br />Micah</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-05' href= '#introPerson' className = 'calendar-link day-19'>January 5<br />Daniel</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-12' href= '#introPerson' className = 'calendar-link day-20'>January 12<br />Esther</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-19' href= '#introPerson' className = 'calendar-link day-21'>January 19<br />Job</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-26' href= '#introPerson' className = 'calendar-link day-22'>January 26<br />Nehemiah</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-02' href= '#introPerson' className = 'calendar-link day-23' style = {{fontSize: '16pt'}}>February 2<br />Prodigal Father/Son</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-09' href= '#introPerson' className = 'calendar-link day-24'>February 9<br />Nicodemus</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-16' href= '#introPerson' className = 'calendar-link day-25'>February 16<br />Lazarus</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-23' href= '#introPerson' className = 'calendar-link day-26'>February 23<br />Mary & Martha</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-01' href= '#introPerson' className = 'calendar-link day-27'>March 1<br />Barnabas</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-08' href= '#introPerson' className = 'calendar-link day-28'>March 8<br />John Patmos</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-15' href= '#introPerson' className = 'calendar-link day-29'>March 15<br />Timothy</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-22' href= '#introPerson' className = 'calendar-link day-30'>March 22<br />Lydia</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-29' href= '#introPerson' className = 'calendar-link day-31' style = {{fontSize: '15pt'}}>March 29<br />Prisca & Aquila </a>
        <a onClick={this.props.clickLink} data-value = '2020-04-05' href= '#introPerson' className = 'calendar-link day-32'>April 5<br />Peter</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-12' href= '#introPerson' className = 'calendar-link day-33'>April 12<br />Jesus</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-19' href= '#introPerson' className = 'calendar-link day-34'>April 19<br />Paul</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-26' href= '#introPerson' className = 'calendar-link day-35'style = {{fontSize: '14pt'}}>April 26<br />Faithful Servant</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-03' href= '#introPerson' className = 'calendar-link day-36'>May 3<br />Sower</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-10' href= '#introPerson' className = 'calendar-link day-37'>May 10<br />Good Samaritan</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-17' href= '#introPerson' className = 'calendar-link day-38'>May 17<br />John</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-24' href= '#introPerson' className = 'calendar-link day-39'>May 24<br />James</a>
  </div>
  </div>
    );
  }
}

export default Tiles;
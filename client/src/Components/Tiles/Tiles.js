import React, { Component } from 'react';
import './Tiles.css';

class Tiles extends Component {


  render() {
    console.log('in tiles')
    return (
        <div>
        <h1 className= 'tiles-header'>Click on the ‘Stepping Stones’ below to locate this week’s lesson</h1>
        <div className ='tiles cover-image'>
        <a onClick={this.props.clickLink} data-value = '2019-09-08' href= '#introPerson' className = 'calendar-link day-1'>September 8<br />Adam and Eve</a>
        <a onClick={this.props.clickLink} data-value = '2019-09-15' href= '#introPerson' className = 'calendar-link day-2'>September 15<br />Noah</a>
        <a onClick={this.props.clickLink} data-value = '2019-09-22' href= '#introPerson' className = 'calendar-link day-3'>September 22<br />Abraham & Sarah</a>
        <a onClick={this.props.clickLink} data-value = '2019-09-29' href= '#introPerson' className = 'calendar-link day-4'>September 29<br />Hagar & Ishmael</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-06' href= '#introPerson' className = 'calendar-link day-5'>October 6</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-13' href= '#introPerson' className = 'calendar-link day-6'>October 13</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-20' href= '#introPerson' className = 'calendar-link day-7'>October 20</a>
        <a onClick={this.props.clickLink} data-value = '2019-10-27' href= '#introPerson' className = 'calendar-link day-8'>October 27</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-03' href= '#introPerson' className = 'calendar-link day-9'>November 3</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-10' href= '#introPerson' className = 'calendar-link day-10'>November 10</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-17' href= '#introPerson' className = 'calendar-link day-11'>November 17</a>
        <a onClick={this.props.clickLink} data-value = '2019-11-24' href= '#introPerson' className = 'calendar-link day-12'>November 24</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-01' href= '#introPerson' className = 'calendar-link day-13'>December 1</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-08' href= '#introPerson' className = 'calendar-link day-15'>December 8</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-15' href= '#introPerson' className = 'calendar-link day-16'>December 15</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-22' href= '#introPerson' className = 'calendar-link day-17'>December 22</a>
        <a onClick={this.props.clickLink} data-value = '2019-12-29' href= '#introPerson' className = 'calendar-link day-18'>December 29</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-05' href= '#introPerson' className = 'calendar-link day-19'>January 5</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-12' href= '#introPerson' className = 'calendar-link day-20'>January 12</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-19' href= '#introPerson' className = 'calendar-link day-21'>January 19</a>
        <a onClick={this.props.clickLink} data-value = '2020-01-26' href= '#introPerson' className = 'calendar-link day-22'>January 26</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-02' href= '#introPerson' className = 'calendar-link day-23'>February 2</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-09' href= '#introPerson' className = 'calendar-link day-24'>February 9</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-16' href= '#introPerson' className = 'calendar-link day-25'>February 16</a>
        <a onClick={this.props.clickLink} data-value = '2020-02-23' href= '#introPerson' className = 'calendar-link day-26'>February 23</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-01' href= '#introPerson' className = 'calendar-link day-27'>March 1</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-08' href= '#introPerson' className = 'calendar-link day-28'>March 8</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-15' href= '#introPerson' className = 'calendar-link day-29'>March 15</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-22' href= '#introPerson' className = 'calendar-link day-30'>March 22</a>
        <a onClick={this.props.clickLink} data-value = '2020-03-29' href= '#introPerson' className = 'calendar-link day-31'>March 29</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-05' href= '#introPerson' className = 'calendar-link day-32'>April 5</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-12' href= '#introPerson' className = 'calendar-link day-33'>April 12</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-19' href= '#introPerson' className = 'calendar-link day-34'>April 19</a>
        <a onClick={this.props.clickLink} data-value = '2020-04-26' href= '#introPerson' className = 'calendar-link day-35'>April 26</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-03' href= '#introPerson' className = 'calendar-link day-36'>May 3</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-10' href= '#introPerson' className = 'calendar-link day-37'>May 10</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-17' href= '#introPerson' className = 'calendar-link day-38'>May 17</a>
        <a onClick={this.props.clickLink} data-value = '2020-05-24' href= '#introPerson' className = 'calendar-link day-39'>May 24</a>
  </div>
  </div>
    );
  }
}

export default Tiles;
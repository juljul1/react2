import React from 'react';
import './styles.css';
import logo from '../../logo.svg';
import NavItem from './NavItem.jsx';

export default class Header extends React.Component {
  render() {
      const { text } = this.props;
      const linkItems =['ABOUT', 'BROWSE', 'LOG IN'];
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{text}</h1>

            <ul className="Navigation">
                <NavItem link={linkItems}/>
            </ul>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
  }
}

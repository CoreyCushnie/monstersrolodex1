import React from 'react';
import { CardList } from './components/cardlist/cardlist.component.jsx';
import { Search } from './components/search/search.component.jsx';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => this.setState({monsters: res})).catch(err => console.log(err))
  }

 evHandle = e => {
   this.setState({searchField: e.target.value})
 }

  render() {
    const { monsters , searchField } = this.state;
    const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h2> Monster Rolodex </h2>
        <Search 
          placeholder="Search Monster: " 
          evHandle={this.evHandle}
        />

        <CardList monsters={filtered}></CardList>
      </div>

    )
  }
}

export default App;

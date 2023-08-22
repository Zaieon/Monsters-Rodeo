import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    api.get().then(res => {
      this.setState({ monsters: res.data })
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' onSearchChange={this.onSearchChange}/>
        <CardList monsters = {filteredMonsters}> 
        </CardList>
      </div>
    );
  }
}

export default App;

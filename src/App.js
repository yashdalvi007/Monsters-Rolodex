import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){

    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster=>{
      if (monster.name.toLowerCase().includes(searchField.toLowerCase())){
        return monster.name
      } })

      const handleChange = e =>{
        this.setState({searchField: e.target.value})
      }

    return (
    <div className="App">
      <h1>Monsters-Rolodex</h1>
      <input className='search' type='search' placeholder='search monster' onChange = {handleChange} />
        <CardList monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;

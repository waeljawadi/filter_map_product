import React, { Component } from 'react';
import Header from './component/Header'
import List from './component/List'
import './App.css';

const ArticleList = 
[
  { title : 'Art1', stars : '5', description: 'text text text' },
  { title : 'Art2', stars : '4', description: 'text text text' },
  { title : 'Art3', stars : '3', description: 'text text text' },
  { title : 'Test1', stars : '3', description: 'text text text' }
]


class App extends Component {
    constructor(props)
    {
      super(props)
      this.state = { thelist : ArticleList, filtredlist : ArticleList}
    }
    searchitem = (keyword) =>
    {
      let filter1 = this.state.thelist.filter((el,index) => el.title.indexOf(keyword) > -1)
      this.setState({filtredlist : filter1})
    }
  render() {
    return (
      <div className="App">
      <p className="ok">
fdsdfsdfsdfds
      </p>
      <p className="ok">dfgdsfgdsfg</p>
        <Header search={(keyword) => this.searchitem(keyword)}/>
        <List getarticle={this.state.filtredlist} />
      </div>
    );
  }
}

export default App;

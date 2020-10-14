import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../images/condos.png';

@connect((state) => ({
  points: state.points,
}))
export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      sortOrder: 'asc',
      tab: 'list',
    };
    this.setSort = this.setSort.bind(this);
  }

  setSort(event) {
    this.setState({
      sortOrder: event.target.value,
    });
  }

  setTab(value) {
    this.setState({
      tab: value,
    });
  }

  render() {
    const { sortOrder, tab } = this.state;
    let activeTabStyle = { border: '1px solid #47cdce' };
    return (
      <div>
        <div className="top-bar">
          <img height={40} src={logo} />

          <nav>
            <div style={{ paddingBottom: 30 }} className="container">
              <div style={{ float: 'left' }}>
                <a
                  onClick={() => this.setTab('list')}
                  style={tab === 'list' ? activeTabStyle : {}}
                  href="#/"
                >
                  Listings
                </a>

                <a
                  style={tab === 'fav' ? activeTabStyle : {}}
                  onClick={() => this.setTab('fav')}
                  href="#/favourites"
                >
                  Favourites
                </a>
              </div>
              <div style={{ float: 'right' }}>
                <label>Sort By: </label>
                <select
                  style={{ marginLeft: 5 }}
                  onChange={this.setSort}
                  name="sortOrder"
                  id="sortOrder"
                >
                  <option selected="selected" value="asc">
                    Price-Ascending
                  </option>
                  <option value="des">Price-Descending</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
        {React.cloneElement(this.props.children, { sortOrder: sortOrder })}
      </div>
    );
  }
}

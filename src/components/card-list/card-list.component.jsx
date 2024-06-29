import { Component } from 'react';
import './card-list.styles.css'
import Card from './../card/card.component'

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.monsters)
    console.log('render from Cardlist')
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <Card monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default CardList;

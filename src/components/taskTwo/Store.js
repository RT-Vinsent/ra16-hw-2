import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from './products';

/*****************************************
*  Компонент класса Store для задачи №2  *
*****************************************/
export default class Store extends React.Component {
  constructor(props) {
    super(props);
    // this.cards = products;
    this.state = { icon: 'view_module' };

    this.onSwitch = this.onSwitch.bind(this);
  }

  /*
  *  Обработчик события клик
  */
  onSwitch() {
    const { icon } = this.state;

    /* Обновляем состояние icon */
    if (icon === 'view_list') {
      this.setState({ icon: 'view_module' })
    } else {
      this.setState({ icon: 'view_list' })
    }
  }

  render() {
    const { icon } = this.state;

    return (
      <div className='container'>
        <IconSwitch icon={icon} onSwitch={this.onSwitch} />
        {icon === 'view_module' ? <CardsView cards={products} /> : <ListView cards={products} />}
      </div>
    );
  }
}

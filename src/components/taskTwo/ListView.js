import ShopItem from './ShopItem';
import './css/listView.css';

/***************************************
*  Компонент ListView для задачи №2    *
*  Обёртка для карточек в строчку      *
***************************************/
export default function ListView(props) {
  const { cards } = props;

  return (
    <div className='view-list'>
      {cards.map((card, index) => <ShopItem key={index} card={card} />)}
    </div>
  )
}

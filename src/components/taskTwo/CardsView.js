import ShopCard from './ShopCard';
import './css/cardsView.css';

/***************************************
*  Компонент CardsView для задачи №2   *
*  Обёртка для карточек в столбик      *
***************************************/
export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className='view-module'>
      {cards.map((card, index) => <ShopCard key={index} card={card} />)}
    </div>
  )
}

import './css/IconSwith.css';

/***************************************
*  Компонент IconSwitch для задачи №2  *
*  Кнопка изменения вида отображения   *
***************************************/
export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <i className="material-icons" onClick={onSwitch}>
      {icon}
    </i>
  )
}

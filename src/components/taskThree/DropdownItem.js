/*****************************************
*  Компонент DropdownItem для задачи №3  *
*  Элемент из списка                     *
*****************************************/

export default function DropdownItem(props) {
  const { item, selected, selectItem } = props

  return (
    <li className={`${selected === true ? 'active' : ''}`} onClick={selectItem}>
      { /* eslint-disable-next-line */ }
      <a href="#">{item.title}</a>
    </li>
  )
}


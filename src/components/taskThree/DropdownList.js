
import React, { useState  } from 'react';
import DropdownItem from './DropdownItem';

/**************************************************
*  Компонент DropdownList для задачи №3           *
*  Выпадающий список для элементов DropdownItem   *
**************************************************/
export default function DropdownList() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const items = [
    { title: 'Profile Information' },
    { title: 'Change Passward' },
    { title: 'Become PRO' },
    { title: 'Help' },
    { title: 'Log Out' }
  ];

  /*
  *  Обработчик события клик
  *  Принимает строку с названием фильтра.
  */
  const selectItem = (index) => {
    setSelectedItemIndex(index);
  }

  return (
    <ul className="dropdown">
      {items.map((item, index) =>
        <DropdownItem
          key={index}
          item={item}
          selected={index === selectedItemIndex}
          selectItem={() => selectItem(index)}
        />
      )}
    </ul>
  )
}

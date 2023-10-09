import { useState } from 'react';
import DropdownList from './DropdownList';
import './taskThree.css';

/****************************************************
*  Компонент функциональный Dropdown для задачи №3  *
*****************************************************/
export default function Dropdown() {
  const [opened, setOpened] = useState(false);

  /* функция открывает и скрывает выпадающий список */
  const toggleOpen = () => {
    setOpened(!opened);
  }

  return (
    <div className='container'>
      <div data-id='wrapper' className='dropdown-wrapper open'>

        <button data-id='toggle' className='btn' onClick={toggleOpen}>
          <span>Account Settings</span>
          <i className='material-icons'>public</i>
        </button>

        {opened && <DropdownList />}
      </div>
    </div>
  )
}

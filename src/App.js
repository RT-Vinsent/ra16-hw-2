import Portfolio from './components/taskOne/Portfolio';
import Store from './components/taskTwo/Store';
import Dropdown from './components/taskThree/Dropdown';
import './App.css';

function App() {
  return (
    <>
      {/* шапка */}
      <header className='header'>
        <h1>Домашнее задание «Состояние компонентов»</h1>
        <h2>Задачи расположены последовательно в столбик</h2>
      </header>

      {/* Компонент класса Portfolio для задачи №1 */}
      <Portfolio />

      {/* Компонент класса Store для задачи №2 */}
      <Store/>

      {/* Компонент функциональный Dropdown для задачи №3 */}
      <Dropdown/>

      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;

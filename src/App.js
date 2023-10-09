import Portfolio from './components/taskOne/Portfolio';
import Store from './components/taskTwo/Store';
import Dropdown from './components/taskThree/Dropdown';
import './App.css';

function App() {
  return (
    <>
      {/* Компонент класса Portfolio для задачи №1 */}
      <Portfolio />

      {/* Компонент класса Store для задачи №2 */}
      <Store/>

      {/* Компонент функциональный Dropdown для задачи №3 */}
      <Dropdown/>

      {/* Просто подвал */}
      <div className='footer'><p>Просто подвал</p></div>
    </>
  );
}

export default App;

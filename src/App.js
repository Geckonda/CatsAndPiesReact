import React, { useEffect, useState } from 'react'
import Welcome from './Welcome';
import Card from './Components/Card';
import styles from "./App.module.css"

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`Количество кликов изменилось ${count}`);
  }, [count])

  return (
    <div>
      <h1 className={styles.title}>Hello, React!</h1>
      <Welcome name={name || "Sasha"}/>
      <p>Количество кликов: {count}</p>
      <button onClick={() => setCount(count + 1)}>Жми на меня</button>
      <button onClick={() => setCount(0)}>Обнулить счетчик</button>
      <div>
        <input
          type='text'
          placeholder='Введите ваше имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <Card title="Mobile" price={count * 3000} />
      <Card title="Car" price="21200" />
      <Card title="Appliacation" price="200" />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import Create from './component/Create'
import Detail from './component/Detail'
import './App.css'

const App = () => {
  const [todo, settodo] = useState(() => {
    const saved = localStorage.getItem("mytodo");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "kuch kam kar le bhai"
          }
        ];
  });

  useEffect(() => {
    localStorage.setItem("mytodo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="app-container">
      <Create todo={todo} settodo={settodo} />
      <Detail todo={todo} settodo={settodo} />
    </div>
  );
};

export default App;

import React from 'react';
import counterStore from '../stores/counterStore.jsx';

const CountBox = () => {
  const { count, increase, decrease, increaseBy, decreaseBy, reset } = counterStore();

  return (
    <div className="container">
      <div className="content">

        <div className="header">
          <h1 className="title">Counter</h1>
        </div>

        <div className="display">
          <div className="number">
            {count}
          </div>
        </div>

        <div className="reset-container">
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>

        <div className="quick-buttons">
          <button onClick={decreaseBy(100)} className="quick-button">
            - 100
          </button>
          <button onClick={decreaseBy(10)} className="quick-button">
            - 10
          </button>
          <button onClick={increaseBy(10)} className="quick-button">
            + 10
          </button>
          <button onClick={increaseBy(100)} className="quick-button">
            + 100
          </button>
        </div>

        <div className="action-buttons">
          <button onClick={decrease} className="action-button">
            <span className="action-symbol">−</span>
          </button>
          <button onClick={increase} className="action-button">
            <span className="action-symbol">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountBox;
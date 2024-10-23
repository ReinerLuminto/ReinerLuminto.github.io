import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // Generate a new array when component mounts
  useEffect(() => {
    resetArray();
  }, []);

  // Function to generate a random array
  const resetArray = () => {
    const newArr = [];
    for (let i = 0; i < 50; i++) {
      newArr.push(randomIntFromInterval(5, 300));
    }
    setArray(newArr);
  };

  // Bubble Sort Algorithm
  const bubbleSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await sleep(50); // Slow down to visualize the sorting process
        }
      }
    }
  };

  // Utility function for generating random numbers
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Utility function for sleep/delay in visualization
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className="container">
      <h1>Bubble Sort Visualizer</h1>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default SortingVisualizer;
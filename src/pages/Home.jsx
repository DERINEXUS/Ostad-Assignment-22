import { useState } from 'react';
import UseRefPractice from '../components/UseRefPractice';
import FormHandling from '../components/FormHandling';
import ObjectArrayState from '../components/ObjectArrayState';

const Home = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', minHeight: '100vh', transition: '0.3s' }}>
      <h1>Welcome to the Simple User Directory App!</h1>
      <button onClick={changeColor} className="btn">Change Page Background Color</button>
      
      <hr />
      <UseRefPractice />
      
      <hr />
      <FormHandling />
      
      <hr />
      <ObjectArrayState />
    </div>
  );
};

export default Home;
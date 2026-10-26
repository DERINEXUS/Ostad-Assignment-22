import { useState } from 'react';

const ObjectArrayState = () => {
  // Object State
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });
  
  // Array State
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript']);

  const updateName = () => {
    setUser({ ...user, name: 'Jane Doe' }); // Using spread operator
  };

  const addSkill = () => {
    setSkills([...skills, 'React']); // Using spread operator
  };

  return (
    <div>
      <h2>Task 5: Object and Array State</h2>
      <div>
        <h3>User Object:</h3>
        <p>Name: {user.name} | Email: {user.email}</p>
        <button onClick={updateName} className="btn">Update Name</button>
      </div>
      
      <div>
        <h3>Skills Array:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button onClick={addSkill} className="btn">Add React Skill</button>
      </div>
    </div>
  );
};

export default ObjectArrayState;
import { useState } from 'react';

const FormHandling = () => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', age: '' });
    setSubmittedData(null);
  };

  return (
    <div>
      <h2>Task 4: Form Handling</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Submit</button>
        <button type="button" onClick={handleReset} className="btn btn-danger">Reset</button>
      </form>

      {submittedData && (
        <div className="submitted-info">
          <h3>Submitted Information:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
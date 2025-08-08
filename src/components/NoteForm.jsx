import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    // Create new object
    const newNote = { id: Date.now(), ...formData };

    // Add notes to state
    setNotes([newNote, ...notes]);

    // Reset formData
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border 
        border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer 
        hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? 'Cancel' : 'Add new note'}
      </button>
      {/* Form */}
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            label={'Title'}
            name={'title'}
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label={'Priority'}
            name={'priority'}
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟠 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />
          <SelectInput
            label={'Category'}
            name={'category'}
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '🏢 Work' },
              { value: 'Personal', label: '🏠 Personal' },
              { value: 'Ideas', label: '💡Ideas' },
            ]}
          />
          <TextAreaInput
            name="description"
            label="Description"
            className="w-full p-2 border rounded-lg"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Create your note here..."
          />
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;

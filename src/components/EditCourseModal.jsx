import React, { useState } from 'react';

const EditCourseModal = ({ isOpen, onClose, course }) => {
  const [name, setName] = useState(course.name);
  const [description, setDescription] = useState(course.description);
  const [instructor, setInstructor] = useState(course.instructor);
  const [instrument, setInstrument] = useState(course.instrument);
  const [day, setDay] = useState(course.day);
  const [students, setStudents] = useState(course.students);
  const [price, setPrice] = useState(course.price);

  const handleSave = () => {
    // Save logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md w-1/2">
        <h2 className="text-2xl mb-4">Edit Course</h2>
        <div className="space-y-2">
          <div>
            <label className="block text-sm">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Description</label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Instructor</label>
            <input 
              type="text" 
              value={instructor} 
              onChange={e => setInstructor(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Instrument</label>
            <input 
              type="text" 
              value={instrument} 
              onChange={e => setInstrument(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Day</label>
            <input 
              type="text" 
              value={day} 
              onChange={e => setDay(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Students</label>
            <input 
              type="number" 
              value={students} 
              onChange={e => setStudents(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Price</label>
            <input 
              type="number" 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button 
            onClick={onClose} 
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseModal;

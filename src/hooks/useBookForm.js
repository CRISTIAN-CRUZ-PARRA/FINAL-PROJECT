import { useState, useEffect } from 'react';

export const useBookForm = (initialBook = null) => {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: new Date().getFullYear(),
    status: 'pending'
  });

  useEffect(() => {
    if (initialBook) {
      setFormData(initialBook);
    }
  }, [initialBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      author: '',
      year: new Date().getFullYear(),
      status: 'pending'
    });
  };

  return {
    formData,
    handleChange,
    resetForm
  };
}; 
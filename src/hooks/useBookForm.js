import { useState, useEffect } from 'react';

export const useBookForm = (initialBook = null) => {
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: new Date().getFullYear(),
    status: 'pending'
  });

  // Actualizar el formulario cuando se edita un libro
  useEffect(() => {
    if (initialBook) {
      setFormData(initialBook);
    }
  }, [initialBook]);

  // Función para manejar los cambios en los campos del formulario
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
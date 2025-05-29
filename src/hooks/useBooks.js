import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setBooks(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los libros');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (bookData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
      await fetchBooks();
    } catch (err) {
      setError('Error al añadir el libro');
    }
  };

  const editBook = async (bookData) => {
    try {
      const response = await fetch(`${API_URL}/${bookData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
      await fetchBooks();
    } catch (err) {
      setError('Error al editar el libro');
    }
  };

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      await fetchBooks();
    } catch (err) {
      setError('Error al eliminar el libro');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    loading,
    error,
    addBook,
    editBook,
    deleteBook
  };
}; 
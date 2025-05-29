import { useState } from 'react';
import BookCard from './BookCard';
import BookForm from './BookForm';
import styles from './BookList.module.css';
import { useBooks } from '../hooks/useBooks';

const BookList = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const { books, loading, error, addBook, editBook, deleteBook } = useBooks();

  const handleSubmit = (bookData) => {
    if (editingBook) {
      editBook({ ...bookData, id: editingBook.id });
    } else {
      addBook(bookData);
    }
    setShowForm(false);
    setEditingBook(null);
  };

  if (loading) {
    return <div className={styles.loading}>Loading books...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles['book-list-container']}>
      <div className={styles['book-list-header']}>
        <h1>My Book Library</h1>
        <button 
          className={styles['add-book-button']}
          onClick={() => setShowForm(true)}
        >
          Add book
        </button>
      </div>

      {showForm && (
        <BookForm
          book={editingBook}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingBook(null);
          }}
        />
      )}

      <div className={styles['books-grid']}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onEdit={(book) => {
              setEditingBook(book);
              setShowForm(true);
            }}
            onDelete={deleteBook}
          />
        ))}
      </div>

      {books.length === 0 && !showForm && (
        <div className={styles['no-books']}>
          There are no books in your library. Add your first book!
        </div>
      )}
    </div>
  );
};

export default BookList; 
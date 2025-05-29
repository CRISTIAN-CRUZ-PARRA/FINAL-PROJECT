import { useState } from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ book, onEdit, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setIsDeleting(true);
      try {
        await onDelete(book.id);
      } catch (error) {
        alert('Error deleting book');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'read':
        return styles['status-read'];
      case 'in-progress':
        return styles['status-in-progress'];
      case 'pending':
        return styles['status-pending'];
      default:
        return '';
    }
  };

  return (
    <div className={styles['book-card']}>
      <div className={styles['card-header']}>
        <span className={styles['card-title']}>{book.title}</span>
        <span className={styles['card-year']}>{book.year}</span>
      </div>
      <div className={styles['card-author']}>{book.author}</div>
      <div className={styles['card-status']}>
        <span className={`${styles['status-badge']} ${getStatusClass(book.status)}`}>
          {book.status}
        </span>
      </div>
      <div className={styles['card-actions']}>
        <div>
          <button 
            onClick={() => onEdit(book)} 
            className={styles['edit-btn']}
            disabled={isDeleting}
          >
            Edit
          </button>
        </div>
        <div>
          <button 
            onClick={handleDelete} 
            className={styles['delete-btn']}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard; 
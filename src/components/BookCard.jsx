import { useState } from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ book, onEdit, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      setIsDeleting(true);
      try {
        await onDelete(book.id);
      } catch (error) {
        alert('Error al eliminar el libro');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const getStatusColor = (status) => {
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
      <div className={styles['book-info']}>
        <h3>{book.title}</h3>
        <p className={styles.author}>Autor: {book.author}</p>
        <p className={styles.year}>Año: {book.year}</p>
        <p className={`${styles.status} ${getStatusColor(book.status)}`}>
          Estado: {book.status === 'read' ? 'Leído' : 
                  book.status === 'in-progress' ? 'En progreso' : 'Pendiente'}
        </p>
      </div>
      <div className={styles['book-actions']}>
        <button 
          onClick={() => onEdit(book)} 
          className={styles['edit-button']}
          disabled={isDeleting}
        >
          Editar
        </button>
        <button 
          onClick={handleDelete} 
          className={styles['delete-button']}
          disabled={isDeleting}
        >
          {isDeleting ? 'Eliminando...' : 'Eliminar'}
        </button>
      </div>
    </div>
  );
};

export default BookCard; 
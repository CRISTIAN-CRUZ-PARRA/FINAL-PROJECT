import styles from './BookForm.module.css';
import { useBookForm } from '../hooks/useBookForm';

const BookForm = ({ book, onSubmit, onCancel }) => {
  const { formData, handleChange } = useBookForm(book);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles['book-form']} onSubmit={handleSubmit}>
      <h2>{book ? 'Editar Libro' : 'Añadir Nuevo Libro'}</h2>
      
      <div className={styles['form-group']}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Title of the book"
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          placeholder="Author's name"
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="year">Year of publication:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
          min="1000"
          max={new Date().getFullYear()}
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="status">Reading status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="pending">pending</option>
          <option value="in-progress">In progress</option>
          <option value="read">Read</option>
        </select>
      </div>

      <div className={styles['form-actions']}>
        <button type="submit" className={styles['submit-button']}>
          {book ? 'Save changes' : 'Add book'}
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          className={styles['cancel-button']}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookForm; 
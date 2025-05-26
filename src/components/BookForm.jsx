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
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Título del libro"
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          placeholder="Nombre del autor"
        />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="year">Año de publicación:</label>
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
        <label htmlFor="status">Estado de lectura:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="pending">Pendiente</option>
          <option value="in-progress">En progreso</option>
          <option value="read">Leído</option>
        </select>
      </div>

      <div className={styles['form-actions']}>
        <button type="submit" className={styles['submit-button']}>
          {book ? 'Guardar cambios' : 'Añadir libro'}
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          className={styles['cancel-button']}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default BookForm; 
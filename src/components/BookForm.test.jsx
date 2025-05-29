import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

describe('Given a BookForm component', () => {
  test('When no book is provided Then the form should render with empty fields', () => {
    // Arrange
    render(<BookForm onSubmit={() => {}} onCancel={() => {}} />);
    
    // Act
    // No hay accion especfica, solo renderizado
    
    // Assert
    expect(screen.getByLabelText('Título:')).toBeInTheDocument();
    expect(screen.getByLabelText('Autor:')).toBeInTheDocument();
    expect(screen.getByLabelText('Año de publicación:')).toBeInTheDocument();
    expect(screen.getByLabelText('Estado de lectura:')).toBeInTheDocument();
  });

  test('When a book is provided Then the form should render with the book data', () => {
    // Arrange
    const book = {
      title: 'Test Book',
      author: 'Test Author',
      year: 2024,
      status: 'read'
    };
    render(<BookForm book={book} onSubmit={() => {}} onCancel={() => {}} />);
    
    // Act
    // No hay accion especifica, solo renderizado
    
    // Assert
    expect(screen.getByLabelText('Título:')).toHaveValue('Test Book');
    expect(screen.getByLabelText('Autor:')).toHaveValue('Test Author');
    expect(screen.getByLabelText('Año de publicación:')).toHaveValue(2024);
    expect(screen.getByLabelText('Estado de lectura:')).toHaveValue('read');
  });

  test('When the form is submitted with new data Then onSubmit should be called with the form data', () => {
    // Arrange
    const onSubmit = vi.fn();
    render(<BookForm onSubmit={onSubmit} onCancel={() => {}} />);

    // Act
    fireEvent.change(screen.getByLabelText('Título:'), {
      target: { value: 'New Book' }
    });
    fireEvent.change(screen.getByLabelText('Autor:'), {
      target: { value: 'New Author' }
    });
    fireEvent.click(screen.getByText('Añadir libro'));

    // Assert
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New Book',
      author: 'New Author'
    }));
  });
}); 
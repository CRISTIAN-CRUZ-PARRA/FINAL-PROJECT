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
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Author:')).toBeInTheDocument();
    expect(screen.getByLabelText('Year of publication:')).toBeInTheDocument();
    expect(screen.getByLabelText('Reading status:')).toBeInTheDocument();
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
    expect(screen.getByLabelText('Title:')).toHaveValue('Test Book');
    expect(screen.getByLabelText('Author:')).toHaveValue('Test Author');
    expect(screen.getByLabelText('Year of publication:')).toHaveValue(2024);
    expect(screen.getByLabelText('Reading status:')).toHaveValue('read');
  });

  test('When the form is submitted with new data Then onSubmit should be called with the form data', () => {
    // Arrange
    const onSubmit = vi.fn();
    render(<BookForm onSubmit={onSubmit} onCancel={() => {}} />);

    // Act
    fireEvent.change(screen.getByLabelText('Title:'), {
      target: { value: 'New Book' }
    });
    fireEvent.change(screen.getByLabelText('Author:'), {
      target: { value: 'New Author' }
    });
    fireEvent.click(screen.getByText('Add book'));

    // Assert
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New Book',
      author: 'New Author'
    }));
  });
}); 
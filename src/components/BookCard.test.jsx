import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BookCard from './BookCard';

describe('Given a BookCard component', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    year: 2024,
    status: 'read'
  };

  test('When the component is rendered Then it should display all book information correctly', () => {
    // Arrange
    render(<BookCard book={mockBook} onEdit={() => {}} onDelete={() => {}} />);
    
    // Act
    // No hay acción específica, solo renderizado
    
    // Assert
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('read')).toBeInTheDocument();
  });

  test('When the edit button is clicked Then onEdit should be called with the book data', () => {
    // Arrange
    const onEdit = vi.fn();
    render(<BookCard book={mockBook} onEdit={onEdit} onDelete={() => {}} />);
    
    // Act
    fireEvent.click(screen.getByText('Edit'));
    
    // Assert
    expect(onEdit).toHaveBeenCalledWith(mockBook);
  });

  test('When the delete button is clicked and confirmed Then onDelete should be called with the book id', () => {
    // Arrange
    const onDelete = vi.fn();
    window.confirm = vi.fn(() => true);
    render(<BookCard book={mockBook} onEdit={() => {}} onDelete={onDelete} />);
    
    // Act
    fireEvent.click(screen.getByText('Delete'));
    
    // Assert
    expect(window.confirm).toHaveBeenCalled();
    expect(onDelete).toHaveBeenCalledWith(mockBook.id);
  });
}); 
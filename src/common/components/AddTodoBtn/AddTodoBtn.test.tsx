import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoBtn from './AddTodoBtn';
import { UI_TEXT } from '../Components.Constants';


jest.mock('../AddTodoModal/AddTodoModal', () => ({
  __esModule: true,
  default: ({ isOpen }: { isOpen: boolean }) => (
    isOpen ? <div data-testid="modal">Modal Content</div> : null
  )
}));

describe('AddTodoBtn', () => {
  it('render button with right text', () => {
    render(<AddTodoBtn />);
    const button = screen.getByRole('button', { name: UI_TEXT.ADD_TASK_BUTTON });
    expect(button).toBeInTheDocument();
  });

  it('open modal window after click on button', () => {
    render(<AddTodoBtn />);
    const button = screen.getByRole('button', { name: UI_TEXT.ADD_TASK_BUTTON });
    fireEvent.click(button);

    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});

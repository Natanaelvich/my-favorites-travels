import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import Home from '../../pages/index';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('../../hooks/modules/ToastContext.tsx', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Home Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should render the home apge', async () => {
    const { getByText } = render(<Home />);

    expect(getByText('inicio')).toBeTruthy();
  });
});

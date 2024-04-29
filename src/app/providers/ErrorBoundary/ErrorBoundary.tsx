import React, { Component, ErrorInfo, ReactNode } from 'react';
import { CustomLink } from '../../../shared/ui/CustomLink';
import { LinkTheme } from '../../../shared/ui/CustomLink/ui/CustomLink';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1>
          Sorry.. there was an error{' '}
          <CustomLink linkTheme={LinkTheme.PRIMARY} to="/">
            Назад в приложение
          </CustomLink>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // You can log to your error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Oops! Something went wrong
              </h2>
              <div className="mt-4 text-center text-gray-600">
                {this.props.fallback || (
                  <div className="space-y-4">
                    <p>We're sorry, but something went wrong on our end.</p>
                    {process.env.NODE_ENV !== 'production' && (
                      <details className="text-left p-4 bg-gray-100 rounded-lg">
                        <summary className="cursor-pointer text-blue-600">
                          Error Details
                        </summary>
                        <pre className="mt-2 text-sm text-red-600 overflow-auto">
                          {this.state.error && this.state.error.toString()}
                        </pre>
                        {this.state.errorInfo && (
                          <pre className="mt-2 text-sm text-gray-600 overflow-auto">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        )}
                      </details>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={this.handleRefresh}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

export default ErrorBoundary;
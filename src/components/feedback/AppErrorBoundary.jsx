import { Component } from 'react';
import InlineErrorState from './InlineErrorState';

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Application error boundary caught an error:', error);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-3xl px-4 py-10">
          <InlineErrorState
            title="حدث خطأ غير متوقع"
            message="تعذر عرض الصفحة بشكل صحيح. يمكنك إعادة المحاولة أو العودة إلى الصفحة الرئيسية."
            onRetry={this.handleReset}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;

import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageText2,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>A Dog Ate this Page</ErrorImageText>
          <ErrorImageText2>
            Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation
            certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you
            take your dog to the vet on that same Thursday?!
          </ErrorImageText2>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

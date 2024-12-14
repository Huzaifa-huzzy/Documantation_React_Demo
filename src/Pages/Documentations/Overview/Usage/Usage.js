import React from 'react';
import './Usage.css';

export default function Usage() {
  return (
    <div className="usage-section">
      <h2 className="usage-heading">Usage</h2>
      <p className="usage-description">
        This section describes how to effectively use the application. Follow the instructions below to get started.
      </p>
      <h3 className="usage-subheading">Example Usage</h3>
      <div className="code-container">
        <pre>
          <code>
            {`// Import the main component
import MainComponent from './MainComponent';

// Initialize and use the component
const App = () => {
  return (
    <MainComponent />
  );
};

export default App;`}
          </code>
        </pre>
      </div>
      <h3 className="usage-subheading">API Reference</h3>
      <p className="usage-description">
        Refer to the API documentation for detailed information on available methods and properties.
      </p>
    </div>
  );
}

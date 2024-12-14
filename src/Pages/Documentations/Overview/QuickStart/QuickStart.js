import React from 'react';
import './QuickStart.css';

export default function QuickStart() {
  return (
    <div className="quickstart-container">
      <h1>Quick Start Guide</h1>
      <p className="quickstart-description">
        Get started with our platform in just a few steps! This guide will walk you through the essentials to start building your project.
      </p>

      <div className="quickstart-step">
        <h2>1. Install the Package</h2>
        <p>Run the following command in your terminal:</p>
        <div className="code-block">
          <code>npm install my-awesome-package</code>
        </div>
      </div>

      <div className="quickstart-step">
        <h2>2. Initialize the Project</h2>
        <p>Create a new project using the following command:</p>
        <div className="code-block">
          <code>npx my-awesome-package init my-project</code>
        </div>
      </div>

      <div className="quickstart-step">
        <h2>3. Start the Development Server</h2>
        <p>Navigate into your project directory and start the server:</p>
        <div className="code-block">
          <code>cd my-project</code><br />
          <code>npm start</code>
        </div>
      </div>

      <div className="quickstart-note">
        <p>For more details on configuration, refer to the <a href="/docs/configuration">Configuration Guide</a>.</p>
      </div>
    </div>
  );
}

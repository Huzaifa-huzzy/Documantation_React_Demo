import React from 'react';
import './Installation.css';

export default function Installation() {
  return (
    <div className="installation-container">
      <h1>Installation Guide</h1>
      <p className="installation-description">
        Follow these steps to install and set up our software on your system.
      </p>

      <div className="installation-step">
        <h2>1. Install Prerequisites</h2>
        <p>Ensure you have Node.js and npm installed. Run the following command to check:</p>
        <div className="code-block">
          <code>node -v</code><br />
          <code>npm -v</code>
        </div>
      </div>

      <div className="installation-step">
        <h2>2. Install the Package</h2>
        <p>Run this command to install the package globally:</p>
        <div className="code-block">
          <code>npm install -g my-awesome-package</code>
        </div>
      </div>

      <div className="installation-step">
        <h2>3. Verify Installation</h2>
        <p>After installation, verify it by running the following command:</p>
        <div className="code-block">
          <code>my-awesome-package --version</code>
        </div>
      </div>

      <div className="installation-note">
        <p>For more detailed troubleshooting steps, refer to our <a href="/docs/troubleshooting">Troubleshooting Guide</a>.</p>
      </div>
    </div>
  );
}

# WXT Browser Extension

This project is a WXT browser extension with Playwright tests. The extension provides various functionalities to enhance your browsing experience.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/wxt-browser-extension.git
    cd wxt-browser-extension
    ```

2. Install the dependencies using pnpm:
    ```sh
    pnpm install
    ```

### Running the Extension

To run the extension in your browser, follow these steps:

1. Build the extension:
    ```sh
    pnpm build
    ```

2. Load the extension in your browser:
    - Open your browser and navigate to the extensions page (e.g., `chrome://extensions` for Chrome).
    - Enable "Developer mode".
    - Click on "Load unpacked" and select the `dist` directory from the project.

### Running Playwright Tests

To run the Playwright tests, use the following command:
```sh
pnpm e2e
```

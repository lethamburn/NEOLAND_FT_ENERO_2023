import inquirer from "inquirer";
import fs from "fs";

let customJSON = {
  name: "",
  private: true,
  version: "",
  scripts: {
    dev: "vite",
    build: "vite build",
    preview: "vite preview",
  },
  dependencies: {
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  },
  devDependencies: {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    vite: "^4.1.0",
  },
};

inquirer
  .prompt([
    {
      name: "name",
      message: "What is the project name?",
      default: "react-project",
    },
    {
      name: "version",
      message: "What is the project version?",
      default: "0.0.1",
    },
    {
      type: "confirm",
      name: "router",
      message: "Do you want React Router Dom?",
    },
    {
      type: "confirm",
      name: "eslint_prettier",
      message: "Do you want ESLint & Prettier?",
    },
  ])
  .then((answers) => {
    customJSON = {
      ...customJSON,
      name: answers.name,
      version: answers.version,
      dependencies: answers.router
        ? { "react-router-dom": "^6.8.1" }
        : { ...customJSON.dependencies },
      devDependencies: answers.eslint_prettier
        ? {
            ...customJSON.devDependencies,
            eslint: "^8.34.0",
            "eslint-config-prettier": "^8.6.0",
            "eslint-plugin-import": "^2.27.5",
            "eslint-plugin-jsx-a11y": "^6.7.1",
            "eslint-plugin-prettier": "^4.2.1",
            "eslint-plugin-react": "^7.32.2",
            "eslint-plugin-simple-import-sort": "^10.0.0",
            "pre-commit": "^1.2.2",
            prettier: "^2.8.4",
          }
        : { ...customJSON.devDependencies },
      "pre-commit": answers.eslint_prettier ? "lint" : "",
    };

    const customJSONStringify = JSON.stringify(customJSON);

    fs.writeFile("custom-package.json", customJSONStringify, () => {
      console.log("File created!");
    });
  });

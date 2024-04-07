Project setup step by step: 
1. Create an empty folder for a new Project
2. Open the project folder in VS Code
3. install typescript exension
4. Run commands:
npm init -y
npm install cypress
npm install typescript
5. Initialize a new tsconfig.json file using command: npx tsc --init --types cypress --lib dom,es6
Note:this ensure that types for cypress are accessible by typescript. These types depend on dom & es6, so we pass them as lib option to typescript.
6. Open TestRunner using command: npx cypress open

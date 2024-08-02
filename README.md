# Using TypeScript/esbuild with Flask
Simple demo app of how TypeScript can be bundled used with a Flask app.

This is runnable without Node.js if the TypeScript is compiled before running the Flask app.

## Requirements
- Python
- Node.js
- npm

## Starting the app 
```bash
python -m venv venv

venv\Scripts\activate.bat

pip install -r requirements.txt

npm install

```

Then either run

```bash
npm run dev
```
or
```bash
npm run build

python app.py
```
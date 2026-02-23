# Basic Mathematical Application (Full‑Stack)

A simple web application that performs addition, subtraction, and multiplication.  
The frontend sends the numbers to a Flask backend, which computes the result and returns it.

## Features
- Clean UI built with Bootstrap.
- Client‑side validation.
- Asynchronous communication with the server using `fetch`.
- Error handling for invalid input and network issues.

## Technologies
- **Backend**: Python, Flask
- **Frontend**: HTML, CSS (Bootstrap), JavaScript

## Project Structure
.
├── app.py # Flask application
├── mathematics.py # Arithmetic functions
├── templates/
│ └── index.html # Main page
└── static/
└── mywebscript.js # Frontend logic


## Setup & Running

1. **Clone or download** the project.
2. **Install Flask** (if not already installed):
   ```bash
   pip install flask
3.Run the application:
   python app.py

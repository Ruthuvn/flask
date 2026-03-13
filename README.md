# 🚀 Flask MongoDB Atlas Application

A simple Flask web application that demonstrates:

- Creating an `/api` route that returns JSON data from a backend file  
- Submitting form data to MongoDB Atlas  
- Redirecting on successful submission  
- Displaying errors without redirection  
- Clean project structure with proper environment handling  

---

## 📌 Features

### 🔹 API Endpoint
- Route: `/api`
- Reads data from `data.json`
- Returns JSON response

### 🔹 Form Submission
- Accepts Name and Email
- Inserts data into MongoDB Atlas
- Redirects to success page on success
- Shows error message on failure

---

## 🛠️ Tech Stack

- Python 3.x
- Flask
- MongoDB Atlas
- PyMongo
- HTML
- dotenv

---

## 📂 Project Structure

```
flask/
│
├── backend/                # Flask Backend
│   ├── app.py
│   ├── data.json
<<<<<<< HEAD
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/               # Node.js Express Frontend
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── public/
│       └── index.html
|       └── todo.html
│
├── docker-compose.yaml
=======
├── frontend/
│   └── templates/
│       ├── index.html
│       └── todo.html
|   ├── app.py
│ 
├── requirements.txt
>>>>>>> 650bf6509be1270868350ec477e40cf23111cd77
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Ruthuvn/flask.git
cd flask
```

---

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

Activate:

**Windows**
```bash
venv\Scripts\activate
```

**Mac/Linux**
```bash
source venv/bin/activate
```

---

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
```

Update `app.py`:

```python
import os
from dotenv import load_dotenv

load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
```

---

### 5️⃣ Run the Application

```bash
python backend/app.py
```

Open in browser:

```
http://127.0.0.1:5000/
```

---

## 🌐 API Usage

### GET `/api`

Returns JSON data from `data.json`.

Example Response:

```json
[
  {
    "name": "Ruthu",
    "role": "Developer"
  }
]
```

---

## 🗄 MongoDB Atlas Setup

1. Create an account on MongoDB Atlas
2. Create a cluster
3. Create a database user
4. Allow network access (IP whitelist)
5. Copy connection string
6. Add it to `.env`

---

## 🔐 Security

- `.env` is added to `.gitignore`
- MongoDB credentials are not committed to GitHub
- Virtual environment is excluded

---

## 📄 License

This project is for educational purposes.

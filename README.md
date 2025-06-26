# 📝 Blog App – Minimal Express.js Blog Platform

**Blog App** is a simple, file-based blogging platform built with Node.js and Express. It allows users to view, create, and manage blog posts using EJS templating, without relying on a full database system.

---

## 🔧 Tech Stack
- **Node.js**
- **Express.js**
- **EJS** – for templating
- **CSS** – basic styling
- **JSON** – for storing blog posts

---

## 🚀 Features
- 🏠 View all posts on the homepage
- ➕ Create new blog entries
- 🧾 View single posts via dynamic routing
- ❌ Handles 404 errors with a custom page
- 🗂️ Clean project structure (MVC-inspired)

---

## 📁 Folder Structure
blog-app-demo/
│
├── Data/ # JSON file storage
├── public/ # Static CSS
├── views/ # EJS Templates
│ ├── partials/ # Reusable components (like navbar)
│
├── app.js # Main server file
├── package.json

---

## 📦 Setup & Run Locally

```bash
git clone https://github.com/FaiziCodeSpace/blog-app-demo.git
cd blog-app-demo
npm install
node app.js
```
Open your browser and visit:
```
http://localhost:8080/blog/home
```
🔒 No Database Required
All data is stored in a local posts.json file located in the Data folder. Perfect for learning and prototyping.

🛠️ Status
✅ Project is complete and functional for demo purposes.
📌 Future versions may include MongoDB or authentication support.

📬 Contact & Credits
Made with 💻 by Faizan (FaiziCodeSpace)

🔗 GitHub: https://github.com/FaiziCodeSpace



# 📒 Notes App  

A modern, responsive web application for creating and managing personal notes with secure authentication and real-time updates.  

## 🚀 Description  

**Notes App** is a feature-rich, cloud-based note-taking application built with **React** and **Firebase**. Designed for simplicity and efficiency, it allows users to create, edit, and manage their notes effortlessly. The app offers **real-time updates**, **secure authentication**, and a **responsive design** that adapts seamlessly across devices.  

## ✨ Features  

### 🔐 Authentication & Security  
- Secure **email/password login**  
- **Google Sign-in** integration  
- Persistent user sessions with Firebase Authentication  

### 📝 Note Management  
- Create, edit, and delete notes  
- Automatic **real-time synchronization**  
- Responsive and user-friendly **editor interface**  

### 🎨 Modern UI/UX  
- **Minimalist design** for distraction-free note-taking  
- Fully **responsive layout** for mobile and desktop  
- **Dark mode** for a comfortable viewing experience  

### 🔧 Tech Stack  
- **React 18** with **Vite** for fast development  
- **Firebase** for authentication and real-time database  
- **Tailwind CSS** for sleek and modern styling  
- **React Router** for seamless navigation  

## 🛠 Installation  

### 1️⃣ Clone the Repository  
```bash
git clone [repository-url]
cd notes-app
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Set Up Firebase  
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
2. Enable **Authentication** (Email/Password + Google Sign-in).  
3. Set up **Cloud Firestore** for real-time data storage.  
4. Obtain your Firebase configuration details.  

### 4️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and add your Firebase credentials:  
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 5️⃣ Run the Application  
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.  

## 🤝 Contributing  

Contributions are welcome! If you'd like to improve the app, please:  
1. **Fork** the repository.  
2. Create a **new branch** (`feature-branch`).  
3. Submit a **pull request** with a clear description.  

## 📜 License  

This project is licensed under the **MIT License**.  


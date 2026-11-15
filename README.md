# 🌿 Hidden Gems SL — Travel Discovery & Trip Planner

A **full-stack mobile application** for exploring lesser-known destinations in Sri Lanka, connecting travelers with local guides, sharing destination information, and organizing trips.

## 📌 Project Purpose

Hidden Gems SL brings destination discovery, local guide information, reviews, photos, and trip planning into one mobile experience. Its goal is to make it easier to explore underrepresented travel locations and organize personal itineraries.

## 🛠️ Technology Stack

| Layer | Technologies |
| --- | --- |
| Mobile frontend | React Native, Expo SDK 54, React Navigation |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JWT, bcryptjs; optional Google authentication |
| Media | Multer, Expo image-picker |
| Notifications / email | In-app notification flows, Nodemailer |

## 📂 System Modules

### 1. 🗺️ Destinations & Categories
- Discover destinations and browse by category / environmental tags
- View place details with descriptions and images
- Add and edit destinations through the available screens and routes

### 2. 🧭 Trip Planner & Wishlist
- Create and organize travel plans
- View saved plans and trip details
- Manage planned destinations

### 3. 👥 Local Travel Guides
- Browse guide profiles
- Register as a guide and review submitted guide applications
- View guide details and guide feedback

### 4. ⭐ Reviews & Community Feedback
- Submit place reviews
- Read and share comments and ratings
- Review local guides

### 5. 📸 Media Gallery
- Upload destination images/media
- Display uploaded content within destination pages

### 6. 🔐 Accounts & Notifications
- Registration, login, profile management, and password reset
- Token-based authentication and admin checks
- Notification screens and associated API routes

## 🏗️ Architecture

```text
React Native + Expo mobile application
           | HTTP / JSON
           v
Node.js + Express REST API (default port 5000)
           |
           v
MongoDB (Mongoose)

Uploaded media -> backend/uploads/ (local development)
```

## 📁 Project Structure

```text
Hidden-Gems-SL/
├── Hidden_place_frontend/
│   ├── screens/           # React Native screens
│   ├── styles/            # Styling
│   ├── assets/            # Static application assets
│   ├── apiConfig.js       # Backend base URL
│   └── App.js             # Navigation
├── Hidden_place_backend/
│   ├── models/            # Mongoose models
│   ├── routes/            # REST API handlers
│   ├── middleware/        # Authentication, admin, uploads
│   ├── config/            # Database connection
│   ├── server.js          # Express entry point
│   └── .env.example       # Example variable names (no secrets)
├── README.md
└── .gitignore
```

## ⚙️ Running Locally

### Prerequisites
- Node.js / npm
- MongoDB (local installation or cloud connection)
- Expo Go or an Android/iOS emulator

### 1. Run the backend

```bash
cd Hidden_place_backend
npm install
cp .env.example .env
```

Fill in your **own** credentials in `.env`. In particular, configure `MONGO_URI` and a strong `JWT_SECRET`.

```bash
npm run dev
```

The server uses port `5000` by default.

### 2. Run the mobile frontend

```bash
cd Hidden_place_frontend
npm install
npx expo start
```

Update `apiConfig.js` to point to an accessible backend address. A physical phone cannot reach a backend running at its own `localhost`; use your development computer's reachable LAN IP or a deployed backend URL.

### 3. Optional admin seed

The seed script now expects `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` in the backend environment. Use a strong password and **only run it on a database you control**.

```bash
cd Hidden_place_backend
node seedAdmin.js
```

## 📡 Main API Route Groups

`/api/auth`, `/api/places`, `/api/categories`, `/api/trips`, `/api/guides`, `/api/reviews`, `/api/guide-reviews`, `/api/comments`, `/api/media`, `/api/notifications`.

## 👥 Academic Team Project & Contributions

This project was produced collaboratively. The original team documentation credits:

| Contributor | Area |
| --- | --- |
| Gunawardhana C.Y.D | Travel categories and environmental tags |
| Gunawardhana H.K.D | Destination management |
| Senaratne P.A.R.T | Travel guide management |
| Imalki G.N | Trip planner and wishlist |
| Rukshan R.A.R | Media gallery and infrastructure |
| Wijerathne P.W.G.I.D | Reviews and community feedback |

For a personal LinkedIn profile, clearly describe **your own** contribution and credit the other team members appropriately.

## 🔐 Publishing Notes

- This public-ready package excludes `.git/`, dependency caches, `.env`, and runtime uploads (which may contain personal photos/data).
- The original project contains configuration and seed values that should be reviewed and rotated before deploying or sharing a live environment.
- Do not present a local development build as a verified production release.

## 🚀 Future Improvements

Offline travel maps, advanced trip recommendations, improved safety/privacy controls, performance optimization, and expanded automated tests.

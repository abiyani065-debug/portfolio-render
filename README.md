# Ankit Biyani — Portfolio

A personal portfolio website built with Node.js + Express + MongoDB Atlas, deployed on Render.

## Project Structure

```
portfolio-render/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions manual deploy workflow
├── api/
│   └── feedback.js           ← POST /api/feedback → saves to MongoDB
├── public/                   ← All static files served from here
│   ├── index.html
│   ├── Ankit boi.jpeg
│   ├── ankit white 2.jpeg
│   ├── aws.png
│   ├── cloud  storage.avif
│   ├── CSE cer.png
│   ├── expense tracker 1.webp
│   ├── front and web development.png
│   ├── Learnthon.png
│   ├── nascom.png
│   ├── RJ.png
│   ├── SDPD cer.png
│   └── task manager 1.png
├── .gitignore
├── package.json
├── README.md
└── server.js                 ← Express entry point
```

## Setup

1. Clone this repo
2. Run `npm install`
3. Create a `.env` file:  
   `MONGODB_URI=your_mongodb_connection_string`
4. Run `npm start`

## Deploy to Render

- Set env variable `MONGODB_URI` in Render dashboard
- Add `RENDER_DEPLOY_HOOK_URL` secret in GitHub repo settings
- Go to GitHub → Actions → "Deploy to Render" → Run workflow

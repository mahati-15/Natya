# Natya

![Status ](https://img.shields.io/badge/Status-In%20Development-red)
![React ](https://img.shields.io/badge/React-19-blue)
![TypeScript ](https://img.shields.io/badge/TypeScript-blue)
![MediaPipe ](https://img.shields.io/badge/MediaPipe-Computer%20Vision-green)

## 💃 Description

Natya is a computer vision-powered web application that helps users learn Bharatanatyam through real-time movement analysis and feedback.

As a Bharatanatyam dancer, I often found it difficult to learn choreography from videos shared in group chats or virtual classes. It was easy to mirror movements incorrectly, miss small details, or practice mistakes without realizing it. Natya aims to bridge this gap by using a webcam to analyze a dancer's movements and provide immediate visual feedback.

> **Vision**
>
> The long-term vision is to create an interactive online dance-learning platform where instructors can upload choreography and students can practice independently while receiving corrections on posture, mudras (hand gestures), and movement accuracy.


## 🚀 Planned Features
- real-time mudra recognition with hand-tracking and visual feedback
- guided lessons for Bharatanatyam Level Exams
- quiz/flashcard style practice
- choreography learning through instructor-uploaded videos with movement comparison and automatic correction
- progress tracker with personalized feedback

---

## 🎯 Current Focus
> - Webcam integration
> - Hand landmark detection
> - Basic mudra recognition
---

## ⚙️ Tech Stack
| Category | Technologies |
|-----------|-------------|
| Frontend | React, TypeScript, Vite |
| Computer Vision | MediaPipe Hands, Canvas API |
| Backend | Node.js, Express, PostgreSQL |
| Deployment | Vercel, Supabase |

---

## 🗺️ Development Roadmap
<details>
<summary><b>View Project Phases Here:</b></summary>

### Phase 1: Mudra Recognition MVP  -  🟨 Progress: 20%

#### Camera System
- [x] Access webcam feed
- [x] Display live camera feed in browser

#### Hand Tracking
- [ ] Integrate MediaPipe Hands
- [ ] Render hand landmarks
- [ ] Display landmark coordinates

#### Single Mudra Detection
- [ ] Set landmark rules for one mudra
- [ ] Compare user hand positions against reference position
- [ ] Provide visual feedback to user

#### Full Mudra Library
- [ ] Support all single-hand mudras
- [ ] Support all double-hand mudras
- [ ] Add accuracy scoring

---

### Phase 2: Learning Platform

#### Practice Mode
- [ ] Mudra flashcards
- [ ] Recognition exercises
- [ ] Accuracy tracking

#### Progress Tracking
- [ ] User accounts
- [ ] Saved progress
- [ ] Performance analytics

---

### Phase 3: Choreography Learning

#### Instructor Tools
- [ ] Upload choreography videos
- [ ] Analyze key poses and transitions
- [ ] Generate practice sequences

#### Student Experience
- [ ] Follow-along practice mode
- [ ] Movement comparison
- [ ] Real-time correction


</details>

---

## 📁 Proposed Project Structure

```text
src/
├── components/
├── pages/
├── hooks/
├── data/
├── utils/
├── App.tsx
└── main.tsx
```
<details>
<summary><b>View Full Project Structure Here:</b></summary>

```text
natya/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Camera/
│   │   ├── HandTracker/
│   │   ├── PositionGuide/
│   │   ├── Feedback/
│   │   └── ProgressTracker/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Learn/
│   │   ├── Practice/
│   │   └── Dashboard/
│   │
│   ├── hooks/
│   │   ├── useCamera.ts
│   │   ├── useHandTracking.ts
│   │   └── useMudraDetection.ts
│   │
│   ├── data/
│   │   ├── mudras.ts
│   │   └── lessons.ts
│   │
│   ├── utils/
│   │   ├── geometry.ts
│   │   ├── landmarkMath.ts
│   │   └── scoring.ts
│   │   └── handTypes.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── README.md
```
</details>

---

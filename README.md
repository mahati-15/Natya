# Natya - Ongoing

Natya is a web application that helps users learn Bharatanatyam through real-time computer vision feedback.

Traditional online dance instruction often relies on videos, Zoom classes, or recorded choreography, making it difficult for students (particularily beginners) to know whether they are performing movements correctly. Natya aims to bridge this gap by using a webcam to analyze a dancer's movements and provide immediate visual feedback.

The long-term vision is to create an interactive online dance-learning platform where instructors can upload choreography and students can practice independently while receiving corrections on posture, mudras (hand gestures), and movement accuracy.

### Features  -  ***Planned***
The web application will include real-time mudra recognition with hand tracking and visual feedback, guided lessons for Bharatanatyam Level Exams, quiz-style practice and progress tracking, and choreography learning through instructor-uploaded videos with movement comparison and automatic correction. Users will also be able to track their progress and receive personalized recommendations for improvement.

### Current Status
Currently building rontent with React + TypeScript, webcam integration, hand-landmark detection, and basic mudra recognition.

---

## Tech Stack
- React, TypeScript, Vite
- MediaPipe Hands, Canvas API
- Node.js, Express, PostgreSQL
- Vercel, Supabase

---

## Development Roadmap

### Phase 1: Mudra Recognition MVP  -  ***In Progress***

#### Camera System
- [x] Access webcam feed
- [x] Display live camera feed in browser

#### Hand Tracking
- [ ] Integrate MediaPipe Hands
- [ ] Render hand landmarks
- [ ] Display landmark coordinates

#### Single Mudra Detection
- [ ] Define landmark rules for one mudra
- [ ] Compare user hand positions against reference
- [ ] Provide visual feedback

#### Full Mudra Library
- [ ] Support all single-hand mudras
- [ ] Support all double-hand mudras
- [ ] Add accuracy scoring

---

### Phase 2: Learning Platform

#### Practice Mode
- [ ] Mudra flashcards
- [ ] Timed recognition exercises
- [ ] Accuracy tracking

#### Progress Tracking
- [ ] User accounts
- [ ] Saved progress
- [ ] Performance analytics

---

### Phase 3: Choreography Learning

#### Instructor Tools
- [ ] Upload choreography videos
- [ ] Tag key poses and transitions
- [ ] Generate practice sequences

#### Student Experience
- [ ] Follow-along practice mode
- [ ] Movement comparison
- [ ] Real-time correction

---

## Proposed Project Structure

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

---

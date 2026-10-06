# 🎓 CampusNav AI — Smart Campus Navigation & 3D Digital Twin
### Acropolis Institute of Technology & Research (AITR), Indore
**Hacktoberfest'26 • Problem Statement 3 (Campus Navigation System)**

[![Live Preview](https://img.shields.io/badge/Demo-Local%20Port%205500-38d7c0?style=for-the-badge&logo=googlechrome)](http://localhost:5500)
[![Tech Stack](https://img.shields.io/badge/Stack-WebGL%20%7C%20Three.js%20%7C%20Web%20Speech%20API-4f80ff?style=for-the-badge)](https://github.com/nileshrathor45/campusnav-ai)
[![Offline First](https://img.shields.io/badge/Architecture-100%25%20Offline%20Resilient-22c55e?style=for-the-badge)]()
[![Hackathon](https://img.shields.io/badge/Hacktoberfest'26-PS3%20Solution-f59e0b?style=for-the-badge)]()

---

## 🌟 Overview

**CampusNav AI** is an advanced, offline-first smart campus navigation system and 3D digital twin developed specifically for the **Acropolis Institute of Technology and Research (AITR), Indore**. 

Designed to eliminate first-day confusion for new students, parents, and visitors, CampusNav AI bridges satellite positioning with **ground-truth photographic milestones**, an interactive **WebGL 3D digital twin**, calibrated **architectural blueprints**, and a real-time **Live Turn-by-Turn Navigation Simulator with voice audio cues**.

---

## 🚀 Key Features

### 1. 🎮 Real-Time 3D Campus Digital Twin (WebGL & Three.js)
* **True Architectural Scale Layout**: Incorporates the physical campus model layout featuring the continuous **Covered Inter-Block Passage/Corridor** linking **Entrance → Library → Block 1 → Block 2 → Block 3**.
* **Floor-by-Floor Departmental Slicing**:
  * **Block 1**: 
    * *Ground Floor*: Civil Engineering Department, Admission Cell & Counseling Desk.
    * *1st Floor*: Central Library (above Admission Cell), First Year Engineering Classes (Sec A–D).
    * *2nd Floor*: First Year Classes (Sec E–H), Applied Physics & Chemistry Labs.
  * **Block II (CSE/IT Hub)**:
    * *Ground Floor*: Mechanical Engineering Department, Computer Science Labs (Labs 1–8 High Performance).
    * *1st Floor*: Electrical Engineering Department, CSE Faculty Cabins.
    * *2nd Floor*: Advanced AI & Cloud Computing Lab, Research & Project Labs.
  * **Block 3**:
    * *Ground Floor*: Engineering Graphics Lab, Workshop, Civil Material Testing.
    * *1st & 2nd Floors*: Information Technology (IT) Department & Software Labs.
* **Campus Landmarks**: CDC Lawn, Regulation Blue Basketball Court, Sports Complex & Gymnasium, Canteen, AcroCafe, and Transport Office (50+ Bus Fleet).
* **3D Controls**: Full orbit rotation, zoom, pan, camera presets, and interactive building raycasting.

### 2. 🗺️ Dual 2D Interactive Multi-Layer Map Engine
Switch between three specialized 2D views with calibrated coordinate systems:
1. 📌 **Annotated Google Map**: Aerial satellite survey annotated with key campus destinations (Main Gate, Admission, Block 1, Block 2, Block 3, CDC Lawn, Sports Complex, Canteen, AcroCafe, Sports Ground).
2. 📐 **Architectural Model Blueprint**: High-resolution view of the physical architectural scale model illustrating the internal connection spine, library wing, courtyards, and block wings.
3. 🛰️ **Clean Satellite Map**: Uncluttered high-definition satellite imagery with animated SVG route tubes.

### 3. 🚶 Live Turn-by-Turn Navigation Simulator (HUD + Audio)
* **Animated Live GPS Walker**: Real-time pulsing blue location marker moving continuously along the route with dynamic heading arrow.
* **Heads-Up Display (HUD)**:
  * High-contrast directional turn icons (⬆️, ↗️, ➡️, ⬅️, 🏁).
  * Real-time distance countdown (meters remaining) and estimated arrival time.
  * Live step counter (`Steps Walked / Total Steps`).
  * Walking pace indicator (`4.5 km/h`).
* **Visual Landmark Photo HUD**: As the user approaches each waypoint, real photographic landmarks (Gate, Crosswalk, Palm Curve, Flag Courtyard, Terracotta Walkway) pop up dynamically in the HUD.
* **🔊 Spoken Voice Guidance**: Built-in voice announcements using the browser's native **Web Speech API** (works 100% offline, with quick mute/unmute toggle).
* **Simulation Controls**: Play, Pause, Resume, Next Waypoint, Previous Waypoint, and Speed toggles (1x Normal Walk, 2x Fast Walk, 4x Sprint).
* **Synchronized 3D Follow Mode**: In 3D view, a glowing avatar sphere travels along the 3D route tube while the camera glides behind in third-person chase mode.

### 4. 📸 9-Stop Sequential Photo Walking Tour
Sequential high-resolution photo walkthrough tracing the actual path taken by students:
1. `Main Campus Gate` — Guard outpost and checkpoint.
2. `Gate Crosswalk` — Pedestrian crossing onto the inner road.
3. `Campus Curve` — Tree-lined avenue with perimeter landscaping.
4. `Central Avenue` — Straight approach towards the academic core.
5. `Academic Approach` — Perspective view approaching Block 1 and sports zone.
6. `Block 1 Approach` — Terracotta facade entrance.
7. `Block 1 Entrance` — Indian Flagpole courtyard and Sports Achievements board.
8. `Avenue to Block-II` — Palm-lined pathway towards Block 2 and CDC Lawn.
9. `Block-II Entrance` — Red terracotta walkway lined with green potted plants.

### 5. 🤖 Natural Language AI Campus Assistant
* Intelligent query parsing without requiring exact room numbers.
* Responds instantly to queries such as:
  * *"Where is Civil Engineering?"*
  * *"Take me to Computer Science Labs"*
  * *"Where are First Year classes held?"*
  * *"Show me the Central Library"*
  * *"Where is Electrical Department?"*
  * *"Where is IT Department?"*
* Direct 1-click **"Show Route"** action button embedded inside chat replies.

### 6. 🛡️ 100% Offline-First & Resilient
* Zero cloud dependencies, zero external map API rate limits.
* All Three.js libraries, models, and photographic assets are bundled locally.
* Delivers 60fps WebGL rendering on modern mobile and desktop browsers.

---

## 🏗️ Architecture & Tech Stack

```
campusnav-ai/
├── index.html                      # Semantic HTML5 Layout & Navigation Viewports
├── style.css                       # Modern Dark-Tech Theme, Glassmorphic HUD & Responsive Grid
├── app.js                          # Core Application Engine, 2D Routing, Live Nav Simulator & AI
├── campus3d.js                     # Three.js 3D WebGL Digital Twin & 3D Chase Camera
├── assets/
│   ├── campus-google-annotated.jpg # Annotated Satellite Map (768 x 1024)
│   ├── campus-model-blueprint.jpg  # Physical Architectural Scale Model (1024 x 768)
│   ├── campus-map.png              # Clean Satellite Map
│   ├── js/
│   │   ├── three.min.js            # Three.js WebGL Core (Local)
│   │   └── OrbitControls.js        # Three.js Camera Controller (Local)
│   └── tour/                       # 9 Sequential Ground-Level Photos
│       ├── 01-main-gate.jpg
│       ├── 02-gate-crosswalk.jpg
│       ├── 03-campus-curve.jpg
│       ├── 04-central-avenue.jpg
│       ├── 05-academic-approach.jpg
│       ├── 06-block1-approach.jpg
│       ├── 07-block1-entrance.jpg
│       ├── 08-avenue-to-block2.jpg
│       └── 09-block2-entrance.jpg
└── README.md                       # Comprehensive Technical Documentation
```

---

## ⚡ Quick Start

### Option A: Direct Browser Launch
Simply double-click `index.html` in your file explorer to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option B: Local Web Server
To serve over HTTP:
```bash
# Clone the repository
git clone https://github.com/nileshrathor45/campusnav-ai.git
cd campusnav-ai

# Start a lightweight local HTTP server (Python 3)
python -m http.server 5500
```
Open your browser and navigate to:
```
http://localhost:5500
```

---

## 🍁 Hacktoberfest'26 Submission Notes

* **Problem Statement**: PS3 (Campus Navigation System)
* **Institution**: Acropolis Institute of Technology and Research (AITR), Indore (M.P.)
* **Developed By**: Nilesh Rathor & Team
* **Key Innovations**:
  1. Multi-modal 3D Digital Twin + 2D Architectural Model + Satellite View.
  2. Live Walking Simulation with real-time HUD telemetry and voice directions.
  3. Ground-truth photo integration for verifiable landmark recognition.
  4. Floor-accurate departmental mapping reflecting actual academic placement at AITR.
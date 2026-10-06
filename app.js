// ==============================================================================
// CampusNav AI - Acropolis Institute of Technology & Research (AITR)
// Complete Campus Dataset & Navigation Engine (Calibrated from real map & photos)
// ==============================================================================

const locations = [
  {
    id: "gate",
    name: "Main Campus Gate",
    category: "Facilities",
    categoryLabel: "Campus Entry",
    icon: "🚪",
    meta: "Security Cabin • Primary Entrance",
    block: "Entrance",
    floor: "Ground",
    distance: 0,
    x: 74,
    y: 91,
    photo: "assets/tour/01-main-gate.jpg",
    photoCaption: "Main security gate with guard outpost",
    directions: [
      "Arrive at the AITR campus main entrance.",
      "Check in with security if visiting for the first time.",
      "Proceed through the yellow gate onto the internal paved avenue."
    ],
    details: "Primary entry point for students, faculty, and visitors. Security cabin and campus guidelines board are located here."
  },
  {
    id: "crosswalk",
    name: "Entry Crosswalk & Admin Wing",
    category: "Offices",
    categoryLabel: "Campus Hub",
    icon: "🚶",
    meta: "Pedestrian Crosswalk • Tinted Glass Facade",
    block: "Entry Hub",
    floor: "Ground",
    distance: 40,
    x: 68,
    y: 86,
    photo: "assets/tour/02-gate-crosswalk.jpg",
    photoCaption: "Pedestrian crosswalk leading past admin building",
    directions: [
      "Walk 40 meters straight from the Main Gate.",
      "Cross the white zebra pedestrian crossing.",
      "The tinted-glass facade building is on your right; continue along the main road."
    ],
    details: "Transition zone from the main security gate into the central academic road."
  },
  {
    id: "admission",
    name: "Admission Cell",
    category: "Offices",
    categoryLabel: "Administration",
    icon: "🪪",
    meta: "Ground Floor • Near Block 1 Entrance",
    block: "Block 1",
    floor: "Ground Floor",
    distance: 85,
    x: 57,
    y: 81,
    photo: "assets/tour/06-block1-approach.jpg",
    photoCaption: "Block 1 front wing housing Admission Cell",
    directions: [
      "From the Main Gate, walk ~85m along the main avenue.",
      "Take the gentle left branch towards the first academic complex.",
      "The Admission Cell is located on the ground floor at the front of Block 1."
    ],
    details: "First point of contact for new students, fee queries, enrollment, and verification. Dedicated counseling desks available."
  },
  {
    id: "block1",
    name: "Academic Block 1",
    category: "Blocks",
    categoryLabel: "Academic Block",
    icon: "🏢",
    meta: "First Year Engineering • Dean Office • Flag Courtyard",
    block: "Block 1",
    floor: "Ground - 3rd Floor",
    distance: 100,
    x: 51,
    y: 75,
    photo: "assets/tour/07-block1-entrance.jpg",
    photoCaption: "Block 1 Entrance with Indian Flag & Sports billboard",
    directions: [
      "Walk ~100m from the Main Gate following the avenue.",
      "Look for the prominent 'SPORTS ACHIEVEMENTS' monolith board.",
      "Enter through the paved courtyard with the Indian National Flagpole into 'BLOCK - 1'."
    ],
    details: "Houses First Year engineering classrooms, fundamental engineering labs, department offices, and faculty cabins."
  },
  {
    id: "library",
    name: "Central Library",
    category: "Facilities",
    categoryLabel: "Library",
    icon: "📚",
    meta: "1st Floor • Directly Above Admission Cell in Block 1",
    block: "Block 1",
    floor: "1st Floor",
    distance: 120,
    x: 53,
    y: 74,
    photo: "assets/tour/07-block1-entrance.jpg",
    photoCaption: "Located on 1st Floor of Block 1",
    directions: [
      "Head to the Block 1 main entrance.",
      "Enter the building and ascend the main staircase to the 1st Floor.",
      "The Central Library entrance is situated directly above the Admission Cell."
    ],
    details: "Comprehensive academic repository with over 50,000+ volumes, reading halls, digital e-library stations, and journal archives."
  },
  {
    id: "block2",
    name: "Academic Block II",
    category: "Blocks",
    categoryLabel: "Academic Block",
    icon: "🏢",
    meta: "CSE • IT • Advanced Computer Labs",
    block: "Block 2",
    floor: "Ground - 3rd Floor",
    distance: 165,
    x: 62,
    y: 68,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Block II Entrance with Terracotta Garden Walkway",
    directions: [
      "Walk past Block 1 along the central avenue lined with palm trees (~60m).",
      "Look for the dedicated terracotta-paved pathway lined with green potted plants.",
      "Enter under the official 'BLOCK - II' header sign."
    ],
    details: "Core hub for Computer Science & Engineering, Information Technology, AI & Data Science labs, and seminar halls."
  },
  {
    id: "cse",
    name: "Computer Science & Engineering (CSE)",
    category: "Departments",
    categoryLabel: "Department",
    icon: "💻",
    meta: "Block II • Department Office & Faculty Cabins",
    block: "Block 2",
    floor: "1st & 2nd Floor",
    distance: 180,
    x: 60,
    y: 67,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Located inside Block II",
    directions: [
      "Enter Block II via the terracotta garden walkway.",
      "Take the central stairs to the 1st or 2nd floor.",
      "Follow the wall signage for CSE HOD cabin, faculty rooms, and student sections."
    ],
    details: "Largest department at AITR. Includes specialized computing clusters, faculty mentors, and project labs."
  },
  {
    id: "lab",
    name: "Advanced Computer Labs",
    category: "Labs",
    categoryLabel: "Laboratory",
    icon: "🧪",
    meta: "High-Performance Computing • Cloud & AI Labs",
    block: "Block 2",
    floor: "Ground & 1st Floor",
    distance: 175,
    x: 58,
    y: 68,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Computing labs inside Block II",
    directions: [
      "Enter Block II.",
      "Proceed down the main corridor.",
      "Labs 1 through 8 are arranged on the ground and first floor with biometric entry."
    ],
    details: "Equipped with high-speed internet, Linux/Windows workstations, GPU computing for AI, and hackathon test environments."
  },
  {
    id: "block3",
    name: "Academic Block 3",
    category: "Blocks",
    categoryLabel: "Academic Block",
    icon: "🏢",
    meta: "Core Engineering • Seminar Halls • Auditorium",
    block: "Block 3",
    floor: "Ground - 3rd Floor",
    distance: 220,
    x: 65,
    y: 60,
    photo: "assets/tour/08-avenue-to-block2.jpg",
    photoCaption: "Avenue extending to Block 3 beside CDC Lawn",
    directions: [
      "Continue past Block 2 along the central road.",
      "Keep the CDC Lawn on your left.",
      "Block 3 is directly ahead on your right with spacious verandas."
    ],
    details: "Hosts Electronics, Mechanical, Civil departments, conference rooms, and major lecture theaters."
  },
  {
    id: "cdc",
    name: "CDC Lawn (Central Lawn)",
    category: "Facilities",
    categoryLabel: "Landmark",
    icon: "🌳",
    meta: "Central Campus Orientation Hub • Green Park",
    block: "Central",
    floor: "Outdoors",
    distance: 190,
    x: 53,
    y: 59,
    photo: "assets/tour/08-avenue-to-block2.jpg",
    photoCaption: "Lush green lawn opposite Blocks 2 & 3",
    directions: [
      "Walk straight down the main avenue past Block 1 and Block 2.",
      "The expansive green landscaped lawn on your left is the CDC Lawn.",
      "Use this as your landmark to navigate between Blocks 2, 3, and the Sports Complex."
    ],
    details: "Iconic central green space of AITR campus, used for college events, student discussions, and cultural gatherings."
  },
  {
    id: "sports",
    name: "Sports Complex",
    category: "Sports",
    categoryLabel: "Sports & Recreation",
    icon: "🏋️",
    meta: "Indoor Badminton • Gymnasium • Table Tennis",
    block: "Sports Hub",
    floor: "Ground Floor",
    distance: 260,
    x: 52,
    y: 48,
    photo: "assets/tour/05-academic-approach.jpg",
    photoCaption: "Sports Complex north of CDC Lawn",
    directions: [
      "Follow the main road past CDC Lawn heading north.",
      "Take the left pathway toward the dedicated athletic zone.",
      "The Sports Complex building is right next to the outdoor court."
    ],
    details: "Full indoor fitness facility with equipment, badminton courts, table tennis, and sports director office."
  },
  {
    id: "basketball",
    name: "Basketball Court",
    category: "Sports",
    categoryLabel: "Outdoor Sports",
    icon: "🏀",
    meta: "Regulation Blue Surface Court • Floodlit",
    block: "Sports Hub",
    floor: "Outdoors",
    distance: 275,
    x: 59,
    y: 47,
    photo: "assets/tour/05-academic-approach.jpg",
    photoCaption: "Outdoor blue basketball court beside sports facility",
    directions: [
      "Walk past the CDC Lawn toward the sports section.",
      "The bright blue outdoor regulation basketball court is clearly visible next to the sports building."
    ],
    details: "Home court for AITR basketball teams. Equipped with floodlights for evening tournament matches."
  },
  {
    id: "canteen",
    name: "Main Campus Canteen",
    category: "Food",
    categoryLabel: "Food & Dining",
    icon: "🍴",
    meta: "Full Meals • Thali • Snacks • Seating Area",
    block: "Dining Zone",
    floor: "Ground Floor",
    distance: 250,
    x: 66,
    y: 46,
    photo: "assets/tour/04-central-avenue.jpg",
    photoCaption: "Campus dining complex near Sports & AcroCafe",
    directions: [
      "Walk along the main road past Block 3.",
      "The Canteen is located on the right side across from the Sports Complex.",
      "Spacious covered dining hall with daily hot meals."
    ],
    details: "Affordable hot breakfast, lunch thalis, South Indian snacks, sandwiches, and cold beverages for students and staff."
  },
  {
    id: "cafe",
    name: "AcroCafe",
    category: "Food",
    categoryLabel: "Cafe & Hangout",
    icon: "☕",
    meta: "Coffee • Beverages • Quick Bites • Student Hangout",
    block: "Dining Zone",
    floor: "Ground Floor",
    distance: 290,
    x: 71,
    y: 43,
    photo: "assets/tour/04-central-avenue.jpg",
    photoCaption: "AcroCafe along the central road",
    directions: [
      "Continue further north along the main internal avenue.",
      "AcroCafe is on the right side past the main canteen area.",
      "Features outdoor umbrella seating."
    ],
    details: "Trendy campus coffee shop serving brewed coffee, shakes, burgers, pastries, and quick grab-and-go snacks."
  },
  {
    id: "ground",
    name: "Athletics & Cricket Ground",
    category: "Sports",
    categoryLabel: "Sports Field",
    icon: "⚽",
    meta: "Full-Size Cricket & Football Ground",
    block: "East Perimeter",
    floor: "Outdoors",
    distance: 360,
    x: 78,
    y: 31,
    photo: "assets/tour/04-central-avenue.jpg",
    photoCaption: "Main sports ground on the eastern perimeter",
    directions: [
      "Walk past AcroCafe and take the eastern connecting road.",
      "The large open sports ground opens up on the right side."
    ],
    details: "Spacious multi-sport field hosting annual sports fests, inter-college cricket, football, and athletics tournaments."
  },
  {
    id: "management",
    name: "Faculty of Management & Research (AFMR)",
    category: "Departments",
    categoryLabel: "Department",
    icon: "🎓",
    meta: "MBA • BBA • Research Center",
    block: "Management Complex",
    floor: "Ground - 2nd Floor",
    distance: 380,
    x: 43,
    y: 30,
    photo: "assets/tour/04-central-avenue.jpg",
    photoCaption: "Management faculty building on northwest campus",
    directions: [
      "Follow the main road north past the sports complex.",
      "Follow the road curving northwest.",
      "The dedicated Faculty of Management & Research building is directly ahead."
    ],
    details: "Dedicated academic building for management programs, case-study halls, executive training rooms, and research archives."
  },
  {
    id: "computerfaculty",
    name: "Faculty of Computer Applications (MCA/BCA)",
    category: "Departments",
    categoryLabel: "Department",
    icon: "💻",
    meta: "MCA • BCA • North-East Academic Wing",
    block: "NE Academic Wing",
    floor: "Ground - 2nd Floor",
    distance: 430,
    x: 88,
    y: 15,
    photo: "assets/tour/04-central-avenue.jpg",
    photoCaption: "North-east academic complex near Radcliffe school",
    directions: [
      "Follow the main road all the way north-east towards Radcliffe School.",
      "The Faculty of Computer Applications building is located on the right wing."
    ],
    details: "Advanced software engineering, database management, and postgraduate computer application programs."
  },
  {
    id: "transport",
    name: "Transport Office & Bus Stand",
    category: "Offices",
    categoryLabel: "Campus Transit",
    icon: "🚌",
    meta: "Bus Pass • Route Details • Fleet Office",
    block: "South-West Perimeter",
    floor: "Ground Floor",
    distance: 140,
    x: 32,
    y: 83,
    photo: "assets/tour/03-campus-curve.jpg",
    photoCaption: "Transport Office towards south-west outer loop",
    directions: [
      "From the Main Gate, take the immediate left roadway towards the south-west loop.",
      "Follow the road 140m towards the bus parking depot.",
      "The Transport Office is on the left by the transit yard."
    ],
    details: "Manages over 50+ college buses connecting Indore, Dewas, Ujjain, and Mhow. Issue point for semester bus passes."
  }
];

// Photo tour stops in sequential order from Main Gate inward
const tourStops = [
  {
    title: "1. Main Campus Gate",
    desc: "Primary security entrance with guard cabin, gate barrier, and guidelines board.",
    img: "assets/tour/01-main-gate.jpg",
    tag: "Start Point"
  },
  {
    title: "2. Pedestrian Crosswalk",
    desc: "Zebra crossing just inside the gate, passing the modern glass admin facade.",
    img: "assets/tour/02-gate-crosswalk.jpg",
    tag: "30m inside"
  },
  {
    title: "3. Entrance Curve & Parking",
    desc: "Roadway curving right with designated student two-wheeler parking.",
    img: "assets/tour/03-campus-curve.jpg",
    tag: "60m mark"
  },
  {
    title: "4. Central Campus Avenue",
    desc: "Spacious tree-lined boulevard connecting all academic blocks.",
    img: "assets/tour/04-central-avenue.jpg",
    tag: "Main Avenue"
  },
  {
    title: "5. Academic Approach & Emergency Post",
    desc: "Solar quad-head streetlamp, barricades, and Acropolis Ambulance station.",
    img: "assets/tour/05-academic-approach.jpg",
    tag: "Safety Point"
  },
  {
    title: "6. Block-1 Approach",
    desc: "Approaching Block 1, marked by the tall 'SPORTS ACHIEVEMENTS' monolith board.",
    img: "assets/tour/06-block1-approach.jpg",
    tag: "Near Block 1"
  },
  {
    title: "7. Academic Block-1 Entrance",
    desc: "Courtyard with Indian National Flag, Admission Cell on Ground Floor, Central Library on 1st Floor.",
    img: "assets/tour/07-block1-entrance.jpg",
    tag: "Block 1 & Library"
  },
  {
    title: "8. Tree-Lined Avenue to Block-II",
    desc: "Scenic palm-lined walkway continuing towards Block 2 and CDC Lawn.",
    img: "assets/tour/08-avenue-to-block2.jpg",
    tag: "To Block 2"
  },
  {
    title: "9. Academic Block-II Entrance",
    desc: "Dedicated red-terracotta tiled path with potted plants leading to CSE & IT labs.",
    img: "assets/tour/09-block2-entrance.jpg",
    tag: "Block II (CSE/IT)"
  }
];

// State
let selectedLocation = null;
let currentFilter = "all";
let mapMode = "clean"; // 'clean' or 'annotated'
let currentTourIndex = 0;
let mapZoom = 1;

// Elements
const gridEl = document.getElementById("locationGrid");
const mapMarkersEl = document.getElementById("mapMarkers");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const routeSvgLine = document.getElementById("routeSvgLine");
const campusMapImg = document.getElementById("campusMapImg");
const toastEl = document.getElementById("toast");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  renderLocationCards();
  renderMapMarkers();
  initSearch();
  initCategoryFilters();
  initMapControls();
  initPhotoTour();
  initAiAssistant();
  
  // Select Block 1 by default for demonstration
  selectLocation("block1", false);
});

// Render location cards
function renderLocationCards(filteredList = null) {
  const list = filteredList || (currentFilter === "all" ? locations : locations.filter(l => l.category === currentFilter));
  gridEl.innerHTML = list.map(loc => `
    <article class="loc-card ${selectedLocation && selectedLocation.id === loc.id ? 'active' : ''}" data-id="${loc.id}">
      <div class="loc-card-header">
        <span class="loc-badge">${loc.categoryLabel}</span>
        <span class="loc-distance">${loc.distance}m</span>
      </div>
      <div class="loc-card-body">
        <div class="loc-icon-bubble">${loc.icon}</div>
        <div>
          <h3>${loc.name}</h3>
          <p class="loc-meta">${loc.meta}</p>
        </div>
      </div>
      <div class="loc-card-footer">
        <span class="loc-floor-pill">📍 ${loc.block} • ${loc.floor}</span>
        <button class="nav-arrow-btn" title="Navigate here">Navigate →</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".loc-card").forEach(card => {
    card.addEventListener("click", () => selectLocation(card.dataset.id, true));
  });
}

// Render markers on the interactive map
function renderMapMarkers() {
  mapMarkersEl.innerHTML = locations.map(loc => `
    <button class="map-pin ${selectedLocation && selectedLocation.id === loc.id ? 'selected' : ''}" 
            data-id="${loc.id}" 
            style="left:${loc.x}%; top:${loc.y}%;" 
            title="${loc.name}">
      <span class="pin-icon">${loc.icon}</span>
      <span class="pin-tooltip"><strong>${loc.name}</strong><br><small>${loc.block} • ${loc.floor}</small></span>
    </button>
  `).join("");

  document.querySelectorAll(".map-pin").forEach(pin => {
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      selectLocation(pin.dataset.id, true);
    });
  });
}

// Select a location and calculate route
function selectLocation(id, shouldScroll = false) {
  const loc = locations.find(l => l.id === id);
  if (!loc) return;
  selectedLocation = loc;

  // Update Dest Info in Panel
  document.getElementById("destName").textContent = loc.name;
  document.getElementById("destBlock").textContent = `${loc.block} • ${loc.floor}`;
  document.getElementById("destDetails").textContent = loc.details;
  document.getElementById("destDistance").textContent = `${loc.distance} m`;
  
  const walkMins = Math.max(1, Math.round(loc.distance / 65));
  document.getElementById("destWalkTime").textContent = `${walkMins} min`;
  document.getElementById("destSteps").textContent = `${Math.round(loc.distance * 1.35)}`;

  // Render Step-by-Step Directions
  const dirContainer = document.getElementById("destDirections");
  dirContainer.innerHTML = loc.directions.map((step, idx) => `
    <div class="direction-step">
      <span class="step-num">${idx + 1}</span>
      <p>${step}</p>
    </div>
  `).join("");

  // Update Photo cue in Directions Panel
  const photoPreview = document.getElementById("destPhotoPreview");
  if (loc.photo) {
    photoPreview.style.display = "block";
    document.getElementById("destPhotoImg").src = loc.photo;
    document.getElementById("destPhotoCaption").textContent = loc.photoCaption || loc.name;
  } else {
    photoPreview.style.display = "none";
  }

  // Draw Route SVG on Map
  // Starting point: Main Gate (x: 74, y: 91)
  drawRouteLine(74, 91, loc.x, loc.y);

  // Highlight marker
  document.querySelectorAll(".map-pin").forEach(p => {
    p.classList.toggle("selected", p.dataset.id === id);
  });

  // Highlight card
  document.querySelectorAll(".loc-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === id);
  });

  if (shouldScroll) {
    document.getElementById("mapSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Generate realistic road-following polyline coordinates
function drawRouteLine(startX, startY, endX, endY) {
  // If destination is the gate itself
  if (startX === endX && startY === endY) {
    routeSvgLine.setAttribute("points", "");
    return;
  }

  // Generate intermediate waypoint along the central avenue for realistic road bends
  const waypoints = [];
  waypoints.push(`${startX * 7.68},${startY * 10.24}`);

  // Route passes through the entrance curve
  if (endY < 85) {
    waypoints.push(`${67 * 7.68},${85 * 10.24}`);
  }
  // Route continues along central road
  if (endY < 72) {
    waypoints.push(`${62 * 7.68},${73 * 10.24}`);
  }
  // Route to north side past CDC Lawn
  if (endY < 55) {
    waypoints.push(`${63 * 7.68},${58 * 10.24}`);
  }

  // Final destination coordinate
  waypoints.push(`${endX * 7.68},${endY * 10.24}`);

  routeSvgLine.setAttribute("points", waypoints.join(" "));
}

// Search functionality with natural language synonyms
function initSearch() {
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (!val) {
      searchSuggestions.innerHTML = "";
      searchSuggestions.style.display = "none";
      return;
    }

    const matches = locations.filter(l => {
      const haystack = `${l.name} ${l.category} ${l.meta} ${l.block} ${l.details}`.toLowerCase();
      return haystack.includes(val);
    }).slice(0, 5);

    if (matches.length > 0) {
      searchSuggestions.innerHTML = matches.map(m => `
        <div class="suggestion-item" data-id="${m.id}">
          <span class="sugg-icon">${m.icon}</span>
          <div class="sugg-info">
            <strong>${m.name}</strong>
            <small>${m.block} • ${m.floor}</small>
          </div>
          <span class="sugg-dist">${m.distance}m</span>
        </div>
      `).join("");
      searchSuggestions.style.display = "block";

      document.querySelectorAll(".suggestion-item").forEach(item => {
        item.addEventListener("click", () => {
          searchInput.value = "";
          searchSuggestions.style.display = "none";
          selectLocation(item.dataset.id, true);
        });
      });
    } else {
      searchSuggestions.innerHTML = `<div class="suggestion-empty">No direct matches. Press Enter or ask the AI Assistant.</div>`;
      searchSuggestions.style.display = "block";
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSmartSearch(searchInput.value);
    }
  });

  document.getElementById("searchBtn").addEventListener("click", () => {
    performSmartSearch(searchInput.value);
  });

  // Hide suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.style.display = "none";
    }
  });
}

function performSmartSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    showToast("Type a destination like 'CSE', 'Library', or 'Block 2'");
    return;
  }

  // Exact matching
  let found = locations.find(l => l.name.toLowerCase().includes(q) || l.id.toLowerCase() === q);

  // Intelligent synonym resolution
  if (!found) {
    if (q.includes("library") || q.includes("book") || q.includes("study")) found = locations.find(l => l.id === "library");
    else if (q.includes("cse") || q.includes("computer science") || q.includes("coding")) found = locations.find(l => l.id === "cse");
    else if (q.includes("admission") || q.includes("fee") || q.includes("form") || q.includes("counseling")) found = locations.find(l => l.id === "admission");
    else if (q.includes("block 1") || q.includes("first block") || q.includes("b1")) found = locations.find(l => l.id === "block1");
    else if (q.includes("block 2") || q.includes("second block") || q.includes("b2")) found = locations.find(l => l.id === "block2");
    else if (q.includes("block 3") || q.includes("third block") || q.includes("b3")) found = locations.find(l => l.id === "block3");
    else if (q.includes("canteen") || q.includes("food") || q.includes("lunch") || q.includes("eat")) found = locations.find(l => l.id === "canteen");
    else if (q.includes("cafe") || q.includes("coffee") || q.includes("tea") || q.includes("acrocafe")) found = locations.find(l => l.id === "cafe");
    else if (q.includes("basketball") || q.includes("court")) found = locations.find(l => l.id === "basketball");
    else if (q.includes("sports") || q.includes("gym") || q.includes("badminton")) found = locations.find(l => l.id === "sports");
    else if (q.includes("ground") || q.includes("cricket") || q.includes("football")) found = locations.find(l => l.id === "ground");
    else if (q.includes("transport") || q.includes("bus")) found = locations.find(l => l.id === "transport");
    else if (q.includes("management") || q.includes("mba") || q.includes("bba")) found = locations.find(l => l.id === "management");
    else if (q.includes("gate") || q.includes("entry") || q.includes("exit")) found = locations.find(l => l.id === "gate");
    else if (q.includes("lawn") || q.includes("cdc") || q.includes("garden")) found = locations.find(l => l.id === "cdc");
    else if (q.includes("lab")) found = locations.find(l => l.id === "lab");
  }

  searchSuggestions.style.display = "none";
  if (found) {
    selectLocation(found.id, true);
    showToast(`Found destination: ${found.name}`);
  } else {
    showToast(`No exact location found for "${query}". Opening AI Assistant...`);
    openAiAssistantWithQuery(query);
  }
}

// Category filter tabs
function initCategoryFilters() {
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderLocationCards();
    });
  });
}

// Map view switcher & zoom
function initMapControls() {
  const toggleMapBtn = document.getElementById("toggleMapModeBtn");
  if (toggleMapBtn) {
    toggleMapBtn.addEventListener("click", () => {
      if (mapMode === "clean") {
        mapMode = "annotated";
        campusMapImg.src = "assets/campus-map-annotated.jpg";
        toggleMapBtn.textContent = "🗺️ Switch to Clean Map";
        showToast("Showing Annotated AITR Campus Blueprint");
      } else {
        mapMode = "clean";
        campusMapImg.src = "assets/campus-map.png";
        toggleMapBtn.textContent = "📌 Switch to Annotated Map";
        showToast("Showing Satellite Campus View");
      }
    });
  }

  document.getElementById("zoomInBtn").addEventListener("click", () => {
    mapZoom = Math.min(1.5, mapZoom + 0.15);
    campusMapImg.style.transform = `scale(${mapZoom})`;
  });

  document.getElementById("zoomOutBtn").addEventListener("click", () => {
    mapZoom = Math.max(1, mapZoom - 0.15);
    campusMapImg.style.transform = `scale(${mapZoom})`;
  });

  document.getElementById("startNavBtn").addEventListener("click", () => {
    if (selectedLocation) {
      showToast(`Navigation active! Follow the cyan path towards ${selectedLocation.name}.`);
    } else {
      showToast("Please choose a location first.");
    }
  });

  document.getElementById("campusModeBtn").addEventListener("click", () => {
    showToast("📍 Starting point set to AITR Main Entrance Gate.");
    selectLocation("gate", true);
  });
}

// Sequential Photo Tour Walkthrough
function initPhotoTour() {
  renderTourSlide(0);

  document.getElementById("tourPrevBtn").addEventListener("click", () => {
    if (currentTourIndex > 0) {
      renderTourSlide(currentTourIndex - 1);
    }
  });

  document.getElementById("tourNextBtn").addEventListener("click", () => {
    if (currentTourIndex < tourStops.length - 1) {
      renderTourSlide(currentTourIndex + 1);
    }
  });
}

function renderTourSlide(index) {
  currentTourIndex = index;
  const stop = tourStops[index];
  
  document.getElementById("tourImg").src = stop.img;
  document.getElementById("tourTitle").textContent = stop.title;
  document.getElementById("tourDesc").textContent = stop.desc;
  document.getElementById("tourTag").textContent = stop.tag;
  document.getElementById("tourIndicator").textContent = `${index + 1} of ${tourStops.length}`;

  document.getElementById("tourPrevBtn").disabled = index === 0;
  document.getElementById("tourNextBtn").disabled = index === tourStops.length - 1;
}

// AI Campus Assistant (Simulated Intelligent NLP Engine)
function initAiAssistant() {
  const modal = document.getElementById("aiModal");
  const openBtn = document.getElementById("openAiBtn");
  const heroAiBtn = document.getElementById("heroAiBtn");
  const closeBtn = document.getElementById("closeAiBtn");
  const sendBtn = document.getElementById("aiSendBtn");
  const inputEl = document.getElementById("aiInput");
  const chatMessages = document.getElementById("aiChatMessages");

  const openModal = () => {
    modal.classList.add("open");
    inputEl.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (heroAiBtn) heroAiBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Quick prompt chips
  document.querySelectorAll(".quick-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      inputEl.value = chip.textContent.replace(/[✦🤖📍🍴📚]/g, "").trim();
      handleAiSubmit();
    });
  });

  const handleAiSubmit = () => {
    const text = inputEl.value.trim();
    if (!text) return;
    appendUserMessage(text);
    inputEl.value = "";

    // Show typing indicator
    const typingId = showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator(typingId);
      const reply = generateAiReply(text);
      appendAssistantMessage(reply.text, reply.action);
    }, 600);
  };

  sendBtn.addEventListener("click", handleAiSubmit);
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAiSubmit();
  });
}

function appendUserMessage(text) {
  const container = document.getElementById("aiChatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg user-msg";
  div.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendAssistantMessage(text, action = null) {
  const container = document.getElementById("aiChatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg bot-msg";
  
  let actionHtml = "";
  if (action && action.locId) {
    actionHtml = `
      <div class="msg-action-box">
        <button class="msg-action-btn" onclick="triggerNavFromChat('${action.locId}')">
          🗺️ Show Route to ${action.name}
        </button>
      </div>
    `;
  }

  div.innerHTML = `
    <div class="bot-avatar">🤖</div>
    <div class="msg-bubble">
      <p>${text}</p>
      ${actionHtml}
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  const container = document.getElementById("aiChatMessages");
  const id = "typing-" + Date.now();
  const div = document.createElement("div");
  div.id = id;
  div.className = "chat-msg bot-msg typing-msg";
  div.innerHTML = `
    <div class="bot-avatar">🤖</div>
    <div class="msg-bubble typing-dots">
      <span></span><span></span><span></span>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function generateAiReply(query) {
  const q = query.toLowerCase();

  if (q.includes("library") || q.includes("book")) {
    return {
      text: "The **Central Library** is located in **Block 1 on the 1st Floor**, directly above the Admission Cell. Walk straight from the Main Gate (~100m) into Block 1 and take the stairs up.",
      action: { locId: "library", name: "Central Library" }
    };
  }
  if (q.includes("admission") || q.includes("fees") || q.includes("counseling")) {
    return {
      text: "The **Admission Cell** is on the **Ground Floor of Block 1**, right near the front entrance on the left. It's approximately 85 meters from the Main Gate.",
      action: { locId: "admission", name: "Admission Cell" }
    };
  }
  if (q.includes("cse") || q.includes("computer science") || q.includes("department")) {
    return {
      text: "The **Computer Science & Engineering (CSE) Department** is in **Block II**. Take the central avenue past Block 1 and enter via the terracotta garden walkway.",
      action: { locId: "cse", name: "CSE Department" }
    };
  }
  if (q.includes("lab") || q.includes("coding")) {
    return {
      text: "The **Advanced Computer Labs** (Labs 1–8) are situated in **Block II** on the ground and 1st floors with high-speed internet and development workstations.",
      action: { locId: "lab", name: "Computer Labs" }
    };
  }
  if (q.includes("block 1") || q.includes("first block")) {
    return {
      text: "**Block 1** is the first academic complex you reach from the main gate (~100m). Look for the Indian Flagpole and the tall Sports Achievements board.",
      action: { locId: "block1", name: "Block 1" }
    };
  }
  if (q.includes("block 2") || q.includes("block ii")) {
    return {
      text: "**Block II** is the central academic building hosting CSE and IT. It has a dedicated red-tile walkway lined with lush green plants.",
      action: { locId: "block2", name: "Block II" }
    };
  }
  if (q.includes("block 3") || q.includes("third block")) {
    return {
      text: "**Block 3** is located right beside the CDC Lawn. It houses Electronics, Mechanical, Civil departments, and the main auditorium.",
      action: { locId: "block3", name: "Block 3" }
    };
  }
  if (q.includes("canteen") || q.includes("food") || q.includes("lunch")) {
    return {
      text: "For meals, head to the **Main Campus Canteen** located near the Sports Complex. For coffee and snacks, **AcroCafe** is right along the road just past the canteen.",
      action: { locId: "canteen", name: "Main Canteen" }
    };
  }
  if (q.includes("cafe") || q.includes("coffee") || q.includes("acrocafe")) {
    return {
      text: "**AcroCafe** is our student coffee shop with outdoor seating along the central avenue, about 290m from the Main Gate.",
      action: { locId: "cafe", name: "AcroCafe" }
    };
  }
  if (q.includes("basketball") || q.includes("sports")) {
    return {
      text: "The **Basketball Court** and **Sports Complex** are located north of the CDC Lawn. The court has a regulation blue outdoor surface.",
      action: { locId: "basketball", name: "Basketball Court" }
    };
  }
  if (q.includes("transport") || q.includes("bus")) {
    return {
      text: "The **Transport Office** is in the south-west zone near the bus parking yard (~140m from the gate). They issue bus passes and maintain the 50+ college bus routes.",
      action: { locId: "transport", name: "Transport Office" }
    };
  }
  if (q.includes("ambulance") || q.includes("emergency") || q.includes("medical")) {
    return {
      text: "🚑 **Emergency Assistance**: The Acropolis Campus Ambulance is stationed along the main avenue near the Block 1 approach. Campus security is at the Main Gate.",
      action: { locId: "gate", name: "Main Security Gate" }
    };
  }

  return {
    text: `I understand you're looking for information on "${query}". You can browse all 17+ campus locations on our interactive map, or select a category below!`,
    action: { locId: "block1", name: "Explore Campus" }
  };
}

function openAiAssistantWithQuery(query) {
  const modal = document.getElementById("aiModal");
  modal.classList.add("open");
  const inputEl = document.getElementById("aiInput");
  inputEl.value = query;
  const sendBtn = document.getElementById("aiSendBtn");
  sendBtn.click();
}

window.triggerNavFromChat = function(locId) {
  const modal = document.getElementById("aiModal");
  modal.classList.remove("open");
  selectLocation(locId, true);
};

// Toast notification helper
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 3200);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

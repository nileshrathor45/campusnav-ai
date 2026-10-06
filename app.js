// ==============================================================================
// CampusNav AI - Acropolis Institute of Technology & Research (AITR)
// Complete Campus Dataset & Dual 2D/3D Navigation Engine
// Incorporating Detailed Floor & Departmental Specifications
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
    mx: 18,
    my: 76,
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
    id: "admission",
    name: "Admission Cell",
    category: "Offices",
    categoryLabel: "Administration",
    icon: "🪪",
    meta: "Block 1 • Ground Floor • Near Entrance",
    block: "Block 1",
    floor: "Ground Floor",
    distance: 85,
    x: 57,
    y: 81,
    mx: 27,
    my: 68,
    photo: "assets/tour/06-block1-approach.jpg",
    photoCaption: "Block 1 front wing housing Admission Cell",
    directions: [
      "From the Main Gate, walk ~85m along the main avenue.",
      "Take the gentle left branch towards the first academic complex.",
      "The Admission Cell is located on the ground floor at the front of Block 1 on the left."
    ],
    details: "First point of contact for new student admissions, fee verification, registration, and student counseling."
  },
  {
    id: "civil",
    name: "Civil Engineering Department",
    category: "Departments",
    categoryLabel: "Department",
    icon: "🏗️",
    meta: "Block 1 • Ground Floor",
    block: "Block 1",
    floor: "Ground Floor",
    distance: 95,
    x: 54,
    y: 77,
    mx: 38,
    my: 45,
    photo: "assets/tour/07-block1-entrance.jpg",
    photoCaption: "Block 1 Ground Floor Entrance",
    directions: [
      "Enter Block 1 through the main flag courtyard.",
      "Civil Engineering Department is situated right on the Ground Floor.",
      "Look for the Civil HOD cabin and structural engineering display."
    ],
    details: "Civil Engineering Department offices, Surveying & Geotechnical labs, concrete technology center, and departmental library."
  },
  {
    id: "block1",
    name: "Academic Block 1",
    category: "Blocks",
    categoryLabel: "Academic Block",
    icon: "🏢",
    meta: "Civil Dept (Ground) • Central Library (1st) • First Year Classes (1st & 2nd)",
    block: "Block 1",
    floor: "Ground - 3rd Floor",
    distance: 100,
    x: 51,
    y: 75,
    mx: 38,
    my: 45,
    photo: "assets/tour/07-block1-entrance.jpg",
    photoCaption: "Block 1 Entrance with Indian Flag & Sports billboard",
    directions: [
      "Walk ~100m from the Main Gate following the avenue.",
      "Look for the prominent 'SPORTS ACHIEVEMENTS' monolith board and Indian Flagpole.",
      "Enter through the paved courtyard into 'BLOCK - 1'."
    ],
    details: "Houses Civil Engineering on Ground Floor, Central Library on 1st Floor, and First Year Engineering lecture halls on upper floors."
  },
  {
    id: "firstyear",
    name: "First Year Engineering Classes",
    category: "Departments",
    categoryLabel: "Classrooms",
    icon: "🎒",
    meta: "Block 1 • 1st & 2nd Floors",
    block: "Block 1",
    floor: "1st & 2nd Floor",
    distance: 110,
    x: 51,
    y: 74,
    mx: 38,
    my: 43,
    photo: "assets/tour/07-block1-entrance.jpg",
    photoCaption: "Block 1 Upper Floors for Freshers",
    directions: [
      "Enter Block 1 through the main entrance.",
      "Ascend the main staircase to the 1st and 2nd Floors.",
      "Classrooms for Sections A through H are arranged along the central corridor."
    ],
    details: "Dedicated classrooms for all first-year B.Tech students (Physics, Chemistry, Maths, Engineering Graphics, Basic Mechanical & Electrical)."
  },
  {
    id: "library",
    name: "Central Library",
    category: "Facilities",
    categoryLabel: "Library",
    icon: "📚",
    meta: "Block 1 • 1st Floor (Directly Above Admission Cell)",
    block: "Block 1",
    floor: "1st Floor",
    distance: 120,
    x: 53,
    y: 74,
    mx: 25,
    my: 48,
    photo: "assets/tour/07-block1-entrance.jpg",
    photoCaption: "Located on 1st Floor of Block 1",
    directions: [
      "Head to the Block 1 main entrance.",
      "Enter the building and ascend the main staircase to the 1st Floor.",
      "The Central Library entrance is situated directly above the Admission Cell."
    ],
    details: "State-of-the-art campus library with 50,000+ technical volumes, digital reading terminals, IEEE access, quiet study zones, and journal repositories."
  },
  {
    id: "block2",
    name: "Academic Block II",
    category: "Blocks",
    categoryLabel: "Academic Block",
    icon: "🏢",
    meta: "Mechanical (Ground) • CS Labs (Ground) • Electrical & CSE (1st)",
    block: "Block 2",
    floor: "Ground - 3rd Floor",
    distance: 165,
    x: 62,
    y: 68,
    mx: 55,
    my: 42,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Block II Entrance with Terracotta Garden Walkway",
    directions: [
      "Walk past Block 1 along the central avenue lined with palm trees (~60m).",
      "Look for the dedicated terracotta-paved pathway lined with green potted plants.",
      "Enter under the official 'BLOCK - II' header sign."
    ],
    details: "Core engineering block housing Mechanical Dept and Computer Science Labs on Ground Floor, Electrical & CSE on 1st Floor, and AI Labs on 2nd Floor."
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering Department",
    category: "Departments",
    categoryLabel: "Department",
    icon: "⚙️",
    meta: "Block II • Ground Floor",
    block: "Block 2",
    floor: "Ground Floor",
    distance: 160,
    x: 61,
    y: 69,
    mx: 55,
    my: 43,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Block II Ground Floor Entrance",
    directions: [
      "Enter Block II via the red terracotta garden walkway.",
      "Mechanical Engineering Department offices and labs are on the Ground Floor.",
      "Workshops, CAD/CAM labs, and Thermodynamics facilities are located here."
    ],
    details: "Features manufacturing workshops, CNC machines, fluid mechanics lab, thermodynamics section, and department faculty cabins."
  },
  {
    id: "cslabs",
    name: "Computer Science Labs (Labs 1–8)",
    category: "Labs",
    categoryLabel: "Laboratory",
    icon: "🧪",
    meta: "Block II • Ground Floor",
    block: "Block 2",
    floor: "Ground Floor",
    distance: 170,
    x: 59,
    y: 68,
    mx: 56,
    my: 44,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Computing labs inside Block II",
    directions: [
      "Enter Block II on the Ground Floor.",
      "Turn right along the main lab corridor.",
      "CS Labs 1 through 8 are arranged consecutively with workstation terminals."
    ],
    details: "Equipped with high-speed internet, Linux/Windows workstations, compiler tools, Python/Java environments, and hackathon testbeds."
  },
  {
    id: "electrical",
    name: "Electrical Engineering Department",
    category: "Departments",
    categoryLabel: "Department",
    icon: "⚡",
    meta: "Block II • 1st Floor",
    block: "Block 2",
    floor: "1st Floor",
    distance: 180,
    x: 62,
    y: 67,
    mx: 55,
    my: 41,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "Block II 1st Floor",
    directions: [
      "Enter Block II via the terracotta walkway.",
      "Ascend to the 1st Floor using the central staircase.",
      "Electrical Engineering Department is located on the 1st floor corridor."
    ],
    details: "Power systems lab, electrical machines, control engineering, and instrumentation labs alongside faculty advisory rooms."
  },
  {
    id: "cse",
    name: "Computer Science & Engineering (CSE)",
    category: "Departments",
    categoryLabel: "Department",
    icon: "💻",
    meta: "Block II • 1st & 2nd Floors",
    block: "Block 2",
    floor: "1st & 2nd Floor",
    distance: 185,
    x: 60,
    y: 66,
    mx: 55,
    my: 40,
    photo: "assets/tour/09-block2-entrance.jpg",
    photoCaption: "CSE department located in Block II",
    directions: [
      "Enter Block II and ascend to the 1st or 2nd floor.",
      "Follow the wall signage for CSE HOD cabin, faculty rooms, and student sections."
    ],
    details: "Largest department at AITR. Includes specialized computing clusters, faculty mentors, and project labs."
  },
  {
    id: "block3",
    name: "Academic Block 3",
    category: "Blocks",
    categoryLabel: "Academic Block",
    icon: "🏢",
    meta: "Core Labs (Ground) • IT Department (1st & 2nd Floors)",
    block: "Block 3",
    floor: "Ground - 3rd Floor",
    distance: 220,
    x: 65,
    y: 60,
    mx: 74,
    my: 40,
    photo: "assets/tour/08-avenue-to-block2.jpg",
    photoCaption: "Avenue extending to Block 3 beside CDC Lawn",
    directions: [
      "Continue past Block 2 along the central road.",
      "Keep the CDC Lawn on your left.",
      "Block 3 is directly ahead on your right with spacious verandas."
    ],
    details: "Houses Core Engineering Labs on Ground Floor and the complete Information Technology (IT) Department on the 1st & 2nd Floors."
  },
  {
    id: "itdept",
    name: "Information Technology (IT) Department",
    category: "Departments",
    categoryLabel: "Department",
    icon: "🌐",
    meta: "Block 3 • 1st Floor & 2nd Floor",
    block: "Block 3",
    floor: "1st & 2nd Floor",
    distance: 235,
    x: 65,
    y: 59,
    mx: 74,
    my: 39,
    photo: "assets/tour/08-avenue-to-block2.jpg",
    photoCaption: "Block 3 IT Department",
    directions: [
      "Reach Block 3 situated alongside CDC Lawn.",
      "Take the central stairs up to the 1st or 2nd Floor.",
      "The entire IT Department, IT classrooms, and software labs span both floors."
    ],
    details: "Specialized in cloud computing, cybersecurity, web technologies, software engineering, and industry collaboration programs."
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
    mx: 45,
    my: 72,
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
    mx: 82,
    my: 22,
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
    mx: 85,
    my: 28,
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
    mx: 64,
    my: 74,
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
    mx: 69,
    my: 73,
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
    mx: 20,
    my: 25,
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
    mx: 88,
    my: 30,
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
    mx: 12,
    my: 80,
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
    desc: "Courtyard with Indian National Flag. Civil Dept on Ground Floor, Central Library on 1st Floor, First Year Classes above.",
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
    desc: "Terracotta garden path. Mechanical & CS Labs on Ground Floor, Electrical on 1st Floor.",
    img: "assets/tour/09-block2-entrance.jpg",
    tag: "Block II (Mech/CS/EE)"
  }
];

// Global State
let selectedLocation = null;
let currentFilter = "all";
let currentMapLayer = "annotated"; // 'annotated', 'model', or 'clean'
let currentTourIndex = 0;
let mapZoom = 1;
let campus3d = null;

// Live Navigation State
let isLiveNavActive = false;
let isLiveNavPaused = false;
let liveNavProgress = 0; // 0.0 to 1.0
let liveNavSpeed = 1; // 1, 2, or 4
let isVoiceEnabled = true;
let liveNavWaypoints = [];
let currentWaypointIndex = 0;
let lastSpokenIndex = -1;
let liveNavAnimFrame = null;

// DOM Elements
const gridEl = document.getElementById("locationGrid");
const mapMarkersEl = document.getElementById("mapMarkers");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const routeSvgLine = document.getElementById("routeSvgLine");
const routeSvgLayer = document.getElementById("routeSvgLayer");
const campusMapImg = document.getElementById("campusMapImg");
const mapOriginPin = document.getElementById("mapOriginPin");
const mapLiveWalker = document.getElementById("mapLiveWalker");
const mapLayerHint = document.getElementById("mapLayerHint");
const toastEl = document.getElementById("toast");

// Live Nav HUD Elements
const liveNavHud = document.getElementById("liveNavHud");
const hudStatusText = document.getElementById("hudStatusText");
const hudAudioToggleBtn = document.getElementById("hudAudioToggleBtn");
const hudAudioIcon = document.getElementById("hudAudioIcon");
const hudAudioLabel = document.getElementById("hudAudioLabel");
const hudStopNavBtn = document.getElementById("hudStopNavBtn");
const hudTurnIcon = document.getElementById("hudTurnIcon");
const hudNextDist = document.getElementById("hudNextDist");
const hudInstruction = document.getElementById("hudInstruction");
const hudUpcoming = document.getElementById("hudUpcoming");
const hudLandmarkImg = document.getElementById("hudLandmarkImg");
const hudLandmarkLabel = document.getElementById("hudLandmarkLabel");
const hudProgressBar = document.getElementById("hudProgressBar");
const hudDistRemaining = document.getElementById("hudDistRemaining");
const hudTimeRemaining = document.getElementById("hudTimeRemaining");
const hudStepsWalked = document.getElementById("hudStepsWalked");
const hudSpeedVal = document.getElementById("hudSpeedVal");
const hudPrevStepBtn = document.getElementById("hudPrevStepBtn");
const hudPlayPauseBtn = document.getElementById("hudPlayPauseBtn");
const hudNextStepBtn = document.getElementById("hudNextStepBtn");

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  renderLocationCards();
  renderMapMarkers();
  initSearch();
  initCategoryFilters();
  initMapControls();
  initPhotoTour();
  initAiAssistant();

  // Initialize 3D Engine
  if (window.Campus3D) {
    try {
      campus3d = new window.Campus3D("campus3dContainer");
      window.campus3d = campus3d;
    } catch (e) {
      console.warn("3D Engine init warning:", e);
    }
  }

  // Select Block 1 by default
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

// Render markers on the 2D interactive map (calibrated for active layer: model vs satellite)
function renderMapMarkers() {
  const isModel = currentMapLayer === "model";
  mapMarkersEl.innerHTML = locations.map(loc => {
    const posX = isModel ? (loc.mx ?? loc.x) : loc.x;
    const posY = isModel ? (loc.my ?? loc.y) : loc.y;
    return `
      <button class="map-pin ${selectedLocation && selectedLocation.id === loc.id ? 'selected' : ''}" 
              data-id="${loc.id}" 
              style="left:${posX}%; top:${posY}%;" 
              title="${loc.name}">
        <span class="pin-icon">${loc.icon}</span>
        <span class="pin-tooltip"><strong>${loc.name}</strong><br><small>${loc.block} • ${loc.floor}</small></span>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".map-pin").forEach(pin => {
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      selectLocation(pin.dataset.id, true);
    });
  });
}

// Select a location, focus 3D view and calculate 2D route
window.selectLocation = function(id, shouldScroll = false) {
  const loc = locations.find(l => l.id === id);
  if (!loc) return;
  selectedLocation = loc;

  // Update Dest Info in Panel
  document.getElementById("destName").textContent = loc.name;
  document.getElementById("destBlock").textContent = `${loc.block} • ${loc.floor}`;
  document.getElementById("destDetails").textContent = loc.details;
  document.getElementById("destDistance").textContent = `${loc.distance} m`;

  const walkMins = Math.max(1, Math.round(loc.distance / 65));
  document.getElementById("destWalkTime").textContent = `${walkMins} min walk`;
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

  // Draw 2D Route on Map according to active layer
  updateMapRouteForActiveLayer();

  // Focus 3D Viewport if 3D Engine is active
  if (campus3d) {
    const bId = loc.id.startsWith("block") ? loc.id : (loc.block.toLowerCase().replace(/ /g, ""));
    campus3d.focusBuilding(bId || loc.id);
  }

  // Highlight markers and cards
  document.querySelectorAll(".map-pin").forEach(p => {
    p.classList.toggle("selected", p.dataset.id === id);
  });
  document.querySelectorAll(".loc-card").forEach(c => {
    c.classList.toggle("active", c.dataset.id === id);
  });

  // If live navigation is already running, switch route to new destination smoothly
  if (isLiveNavActive) {
    startLiveNavigation();
  }

  if (shouldScroll) {
    document.getElementById("mapSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Update 2D route line and origin pin for active layer
function updateMapRouteForActiveLayer() {
  if (!selectedLocation) return;
  const isModel = currentMapLayer === "model";

  if (isModel) {
    // Model dimensions 1024 x 768
    routeSvgLayer.setAttribute("viewBox", "0 0 1024 768");
    mapOriginPin.style.left = "18%";
    mapOriginPin.style.top = "76%";
    drawRouteLineModel(18, 76, selectedLocation.mx ?? selectedLocation.x, selectedLocation.my ?? selectedLocation.y);
  } else {
    // Satellite dimensions 768 x 1024
    routeSvgLayer.setAttribute("viewBox", "0 0 768 1024");
    mapOriginPin.style.left = "74%";
    mapOriginPin.style.top = "91%";
    drawRouteLineSatellite(74, 91, selectedLocation.x, selectedLocation.y);
  }
}

// Generate realistic road-following polyline coordinates on Satellite map
function drawRouteLineSatellite(startX, startY, endX, endY) {
  if (startX === endX && startY === endY) {
    routeSvgLine.setAttribute("points", "");
    return;
  }
  const pts = [];
  pts.push(`${startX * 7.68},${startY * 10.24}`);
  if (endY < 88) pts.push(`${67 * 7.68},${85 * 10.24}`);
  if (endY < 72) pts.push(`${62 * 7.68},${73 * 10.24}`);
  if (endY < 55) pts.push(`${63 * 7.68},${58 * 10.24}`);
  pts.push(`${endX * 7.68},${endY * 10.24}`);
  routeSvgLine.setAttribute("points", pts.join(" "));
}

// Generate realistic passage/corridor polyline on Physical Architectural Model
function drawRouteLineModel(startX, startY, endX, endY) {
  if (startX === endX && startY === endY) {
    routeSvgLine.setAttribute("points", "");
    return;
  }
  const pts = [];
  pts.push(`${startX * 10.24},${startY * 7.68}`);
  // Path through entrance into long horizontal passage corridor (y ~ 65%)
  pts.push(`${27 * 10.24},${66 * 7.68}`);
  pts.push(`${endX * 10.24},${66 * 7.68}`);
  // Turn up into the specific block wing
  pts.push(`${endX * 10.24},${endY * 7.68}`);
  routeSvgLine.setAttribute("points", pts.join(" "));
}

// ==============================================================================
// LIVE NAVIGATION SYSTEM (Turn-by-Turn GPS Simulator & Voice Audio Guidance)
// ==============================================================================

// Generate multi-stage realistic route waypoints matching physical campus walking tour
function generateRouteWaypoints(dest) {
  const waypoints = [];
  const dist = dest.distance || 100;

  // 1. Origin (Main Gate)
  waypoints.push({
    title: "Main Campus Gate",
    turnIcon: "🚪",
    instruction: "Start at Main Gate. Pass through security verification checkpoint.",
    upcoming: "Next: Walk across pedestrian zebra crosswalk.",
    landmarkImg: "assets/tour/01-main-gate.jpg",
    landmarkLabel: "Security Cabin & Gate Entrance",
    sat: { x: 74, y: 91 },
    mod: { x: 18, y: 76 },
    pct: 0.0
  });

  // 2. Pedestrian Crosswalk
  waypoints.push({
    title: "Pedestrian Crosswalk",
    turnIcon: "⬆️",
    instruction: "Walk straight across the pedestrian crosswalk onto the internal avenue.",
    upcoming: "Next: Follow the gentle left curve lined with palm trees.",
    landmarkImg: "assets/tour/02-gate-crosswalk.jpg",
    landmarkLabel: "Zebra Crossing & Guard Outpost",
    sat: { x: 69, y: 87 },
    mod: { x: 23, y: 72 },
    pct: 0.18
  });

  // 3. Campus Palm Curve
  waypoints.push({
    title: "Campus Curve",
    turnIcon: "↖️",
    instruction: "Follow the gentle left curve along the palm-tree lined campus avenue.",
    upcoming: dest.id.includes("block1") || dest.id === "civil" || dest.id === "admission" || dest.id === "library" || dest.id === "firstyear"
      ? "Next: Veer left toward Block 1 entrance."
      : "Next: Continue straight on the central avenue.",
    landmarkImg: "assets/tour/03-campus-curve.jpg",
    landmarkLabel: "Avenue Curve with Palm Trees",
    sat: { x: 64, y: 83 },
    mod: { x: 28, y: 67 },
    pct: 0.38
  });

  // 4. Branching based on destination
  if (dest.id === "admission" || dest.id === "civil" || dest.id === "block1" || dest.id === "firstyear" || dest.id === "library") {
    waypoints.push({
      title: "Block 1 Approach",
      turnIcon: "⬅️",
      instruction: "Veer left toward Academic Block 1 terracotta complex.",
      upcoming: "Next: Indian Flagpole & Sports billboard courtyard.",
      landmarkImg: "assets/tour/06-block1-approach.jpg",
      landmarkLabel: "Block 1 Terracotta Approach",
      sat: { x: 57, y: 81 },
      mod: { x: 33, y: 58 },
      pct: 0.65
    });

    waypoints.push({
      title: "Flag Courtyard & Entrance",
      turnIcon: "⬆️",
      instruction: "Enter the paved courtyard with the Indian Flagpole & Sports billboard.",
      upcoming: `Next: Enter ground floor for ${dest.name}.`,
      landmarkImg: "assets/tour/07-block1-entrance.jpg",
      landmarkLabel: "Block 1 Entrance & Flagpole",
      sat: { x: 53, y: 76 },
      mod: { x: 38, y: 48 },
      pct: 0.85
    });
  } else if (dest.id === "block2" || dest.id === "mechanical" || dest.id === "cslabs" || dest.id === "electrical" || dest.id === "cse") {
    waypoints.push({
      title: "Central Avenue",
      turnIcon: "⬆️",
      instruction: "Continue straight along the central avenue past Academic Block 1.",
      upcoming: "Next: Look for the terracotta walkway into Block II.",
      landmarkImg: "assets/tour/04-central-avenue.jpg",
      landmarkLabel: "Central Campus Avenue",
      sat: { x: 62, y: 74 },
      mod: { x: 42, y: 65 },
      pct: 0.55
    });

    waypoints.push({
      title: "Block II Walkway Approach",
      turnIcon: "⬅️",
      instruction: "Turn left onto the dedicated terracotta walkway lined with green potted plants.",
      upcoming: "Next: Enter through the official 'BLOCK - II' header sign.",
      landmarkImg: "assets/tour/08-avenue-to-block2.jpg",
      landmarkLabel: "Walkway to Block II & CDC Lawn",
      sat: { x: 62, y: 69 },
      mod: { x: 52, y: 55 },
      pct: 0.78
    });

    waypoints.push({
      title: "Block II Entrance",
      turnIcon: "🚪",
      instruction: "Enter Academic Block II under the portico.",
      upcoming: `Next: Arrive at ${dest.floor}.`,
      landmarkImg: "assets/tour/09-block2-entrance.jpg",
      landmarkLabel: "Block II Main Entrance",
      sat: { x: 59, y: 68 },
      mod: { x: 55, y: 44 },
      pct: 0.90
    });
  } else {
    // Block 3, CDC Lawn, Sports, Canteen, Cafe, AFMR
    waypoints.push({
      title: "Central Avenue",
      turnIcon: "⬆️",
      instruction: "Walk straight down the main internal avenue past Blocks 1 & 2.",
      upcoming: "Next: Green CDC Lawn on your left.",
      landmarkImg: "assets/tour/04-central-avenue.jpg",
      landmarkLabel: "Main Avenue Northward",
      sat: { x: 63, y: 66 },
      mod: { x: 48, y: 65 },
      pct: 0.55
    });

    waypoints.push({
      title: "CDC Lawn & North Avenue",
      turnIcon: dest.id.includes("block3") || dest.id.includes("it") ? "⬅️" : "⬆️",
      instruction: dest.id.includes("block3") || dest.id.includes("it")
        ? "Turn left towards Block 3 alongside the CDC Lawn."
        : "Continue north past CDC Lawn towards the Sports & Dining complex.",
      upcoming: `Next: Arrive at ${dest.name}.`,
      landmarkImg: "assets/tour/08-avenue-to-block2.jpg",
      landmarkLabel: "CDC Lawn View",
      sat: { x: 64, y: 56 },
      mod: { x: 66, y: 54 },
      pct: 0.80
    });
  }

  // Final Arrival Waypoint
  waypoints.push({
    title: "Destination Reached",
    turnIcon: "🏁",
    instruction: `You have arrived at ${dest.name}! (${dest.block} • ${dest.floor}).`,
    upcoming: "Destination reached. Have a great session!",
    landmarkImg: dest.photo || "assets/tour/07-block1-entrance.jpg",
    landmarkLabel: dest.photoCaption || dest.name,
    sat: { x: dest.x, y: dest.y },
    mod: { x: dest.mx ?? dest.x, y: dest.my ?? dest.y },
    pct: 1.0
  });

  return waypoints;
}

// Start Live Turn-by-Turn Navigation
window.startLiveNavigation = function() {
  if (!selectedLocation) {
    showToast("Please choose a destination first!");
    return;
  }

  liveNavWaypoints = generateRouteWaypoints(selectedLocation);
  isLiveNavActive = true;
  isLiveNavPaused = false;
  liveNavProgress = 0;
  currentWaypointIndex = 0;
  lastSpokenIndex = -1;

  // Reveal UI HUD and 2D GPS Marker
  liveNavHud.style.display = "block";
  mapLiveWalker.style.display = "grid";
  hudPlayPauseBtn.textContent = "⏸️ Pause";
  hudStatusText.textContent = `LIVE GUIDANCE: ${selectedLocation.name.toUpperCase()}`;

  // Start 3D Walker if 3D scene is active
  if (campus3d) {
    const coordMap = {
      block1: new THREE.Vector3(-16, 0, 60),
      civil: new THREE.Vector3(-16, 0, 60),
      admission: new THREE.Vector3(-10, 0, 75),
      library: new THREE.Vector3(24, 0, 78),
      firstyear: new THREE.Vector3(-16, 0, 60),
      block2: new THREE.Vector3(-18, 0, -2),
      mechanical: new THREE.Vector3(-18, 0, -2),
      cslabs: new THREE.Vector3(-18, 0, -2),
      electrical: new THREE.Vector3(-18, 0, -2),
      cse: new THREE.Vector3(-18, 0, -2),
      block3: new THREE.Vector3(-16, 0, -68),
      itdept: new THREE.Vector3(-16, 0, -68),
      cdc: new THREE.Vector3(-18, 0, -30),
      basketball: new THREE.Vector3(-20, 0, -135),
      sports: new THREE.Vector3(-68, 0, -135),
      canteen: new THREE.Vector3(70, 0, -60),
      cafe: new THREE.Vector3(75, 0, -105),
      transport: new THREE.Vector3(-90, 0, 120),
      management: new THREE.Vector3(-85, 0, -140),
      computerfaculty: new THREE.Vector3(95, 0, -180)
    };
    const targetCoord = coordMap[selectedLocation.id] || new THREE.Vector3(-16, 0, 60);

    campus3d.setNavSpeed(liveNavSpeed);
    campus3d.startLiveNavigation(
      targetCoord,
      (progress3d) => {
        liveNavProgress = progress3d;
        updateLiveNavHUD(progress3d);
      },
      () => {
        onLiveNavFinished();
      }
    );
  }

  // Launch animation loop for 2D map update
  cancelAnimationFrame(liveNavAnimFrame);
  runLiveNavLoop();

  // Voice greeting announcement
  speakInstruction(`Starting live navigation to ${selectedLocation.name}. Proceed through the security gate.`);
  showToast(`🚀 Live Navigation Active: Navigating to ${selectedLocation.name}`);
};

// Main loop for live navigation simulation
function runLiveNavLoop() {
  if (!isLiveNavActive) return;

  if (!isLiveNavPaused) {
    // If not using 3D engine callback, advance tick manually
    if (!campus3d || !campus3d.isLiveNavActive) {
      liveNavProgress += 0.0016 * liveNavSpeed;
      if (liveNavProgress >= 1) {
        liveNavProgress = 1;
        updateLiveNavHUD(1);
        onLiveNavFinished();
        return;
      }
      updateLiveNavHUD(liveNavProgress);
    }
  }

  liveNavAnimFrame = requestAnimationFrame(runLiveNavLoop);
}

// Update HUD & 2D Walker position with real-time telemetry
function updateLiveNavHUD(progress) {
  if (!selectedLocation || liveNavWaypoints.length === 0) return;

  const pct = Math.max(0, Math.min(1, progress));
  hudProgressBar.style.width = `${pct * 100}%`;

  // Find active waypoint based on percentage
  let activeWpIndex = 0;
  for (let i = 0; i < liveNavWaypoints.length; i++) {
    if (pct >= liveNavWaypoints[i].pct) {
      activeWpIndex = i;
    }
  }
  const currentWp = liveNavWaypoints[activeWpIndex];
  const nextWp = liveNavWaypoints[Math.min(activeWpIndex + 1, liveNavWaypoints.length - 1)];

  // Update on-screen turn guidance
  hudTurnIcon.textContent = currentWp.turnIcon;
  hudInstruction.textContent = currentWp.instruction;
  hudUpcoming.textContent = currentWp.upcoming;
  hudLandmarkImg.src = currentWp.landmarkImg;
  hudLandmarkLabel.textContent = currentWp.landmarkLabel;

  // Real-time telemetry calculations
  const totalDist = selectedLocation.distance || 100;
  const distRemaining = Math.max(0, Math.round((1 - pct) * totalDist));
  hudDistRemaining.textContent = `${distRemaining} m`;
  hudNextDist.textContent = distRemaining > 0 ? `In ${Math.min(30, distRemaining)} meters` : "Destination Reached";

  const totalSeconds = Math.round(totalDist / 1.25);
  const secondsLeft = Math.max(0, Math.round((1 - pct) * totalSeconds));
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  hudTimeRemaining.textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  const totalSteps = Math.round(totalDist * 1.35);
  const stepsTaken = Math.min(totalSteps, Math.round(pct * totalSteps));
  hudStepsWalked.textContent = `${stepsTaken} / ${totalSteps}`;

  const currentSpeed = (4.5 * liveNavSpeed).toFixed(1);
  hudSpeedVal.textContent = `${currentSpeed} km/h`;

  // Spoken voice cue trigger when reaching new milestone
  if (activeWpIndex !== lastSpokenIndex) {
    lastSpokenIndex = activeWpIndex;
    speakInstruction(currentWp.instruction);
  }

  // Update 2D GPS Live Location Marker Position
  const isModel = currentMapLayer === "model";
  const startCoords = isModel ? currentWp.mod : currentWp.sat;
  const nextCoords = isModel ? nextWp.mod : nextWp.sat;

  // Linear interpolation between waypoints
  const segStartPct = currentWp.pct;
  const segEndPct = nextWp.pct === segStartPct ? (segStartPct + 0.01) : nextWp.pct;
  const segFraction = Math.max(0, Math.min(1, (pct - segStartPct) / (segEndPct - segStartPct)));

  const curX = startCoords.x + (nextCoords.x - startCoords.x) * segFraction;
  const curY = startCoords.y + (nextCoords.y - startCoords.y) * segFraction;

  mapLiveWalker.style.left = `${curX}%`;
  mapLiveWalker.style.top = `${curY}%`;

  // Heading calculation for arrow direction
  const dx = nextCoords.x - startCoords.x;
  const dy = nextCoords.y - startCoords.y;
  if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = (angleRad * 180) / Math.PI + 90;
    const pointer = mapLiveWalker.querySelector(".walker-heading-pointer");
    if (pointer) pointer.style.transform = `rotate(${angleDeg}deg)`;
  }
}

// Pause live navigation
function pauseLiveNavigation() {
  isLiveNavPaused = true;
  hudPlayPauseBtn.textContent = "▶️ Resume";
  if (campus3d) campus3d.pauseLiveNavigation();
  showToast("Navigation paused.");
}

// Resume live navigation
function resumeLiveNavigation() {
  isLiveNavPaused = false;
  hudPlayPauseBtn.textContent = "⏸️ Pause";
  if (campus3d) campus3d.resumeLiveNavigation();
  showToast("Navigation resumed.");
}

// Stop live navigation
function stopLiveNavigation() {
  isLiveNavActive = false;
  isLiveNavPaused = false;
  liveNavProgress = 0;
  cancelAnimationFrame(liveNavAnimFrame);

  liveNavHud.style.display = "none";
  mapLiveWalker.style.display = "none";

  if (campus3d) campus3d.stopLiveNavigation();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  showToast("Live navigation ended.");
}

// Skip to Next Waypoint
function nextNavStep() {
  if (liveNavWaypoints.length === 0) return;
  const nextIdx = Math.min(currentWaypointIndex + 1, liveNavWaypoints.length - 1);
  currentWaypointIndex = nextIdx;
  liveNavProgress = liveNavWaypoints[nextIdx].pct;
  if (campus3d) campus3d.setLiveWalkerProgress(liveNavProgress);
  updateLiveNavHUD(liveNavProgress);
}

// Go to Previous Waypoint
function prevNavStep() {
  if (liveNavWaypoints.length === 0) return;
  const prevIdx = Math.max(0, currentWaypointIndex - 1);
  currentWaypointIndex = prevIdx;
  liveNavProgress = liveNavWaypoints[prevIdx].pct;
  if (campus3d) campus3d.setLiveWalkerProgress(liveNavProgress);
  updateLiveNavHUD(liveNavProgress);
}

// Set simulation speed multiplier
function setNavSpeed(multiplier) {
  liveNavSpeed = multiplier;
  if (campus3d) campus3d.setNavSpeed(multiplier);
  document.querySelectorAll(".hud-speed-btn").forEach(btn => {
    btn.classList.toggle("active", parseFloat(btn.dataset.speed) === multiplier);
  });
  showToast(`Navigation pace set to ${multiplier}x speed.`);
}

// Toggle voice speech
function toggleVoiceAudio() {
  isVoiceEnabled = !isVoiceEnabled;
  hudAudioIcon.textContent = isVoiceEnabled ? "🔊" : "🔇";
  hudAudioLabel.textContent = isVoiceEnabled ? "Voice On" : "Muted";
  if (!isVoiceEnabled && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  showToast(isVoiceEnabled ? "🔊 Voice audio guidance enabled." : "🔇 Voice audio guidance muted.");
}

// Web Speech API Voice synthesizer
function speakInstruction(text) {
  if (!isVoiceEnabled || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#🏢📍🚪🏁⬆️↗️➡️↖️⬅️]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("Speech synthesis notice:", err);
  }
}

// Arrival handler
function onLiveNavFinished() {
  isLiveNavPaused = true;
  hudPlayPauseBtn.textContent = "🏁 Done";
  speakInstruction(`Congratulations! You have reached ${selectedLocation.name}.`);
  showToast(`🎉 You have arrived at ${selectedLocation.name}!`);
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
      const haystack = `${l.name} ${l.category} ${l.meta} ${l.block} ${l.floor} ${l.details}`.toLowerCase();
      return haystack.includes(val);
    }).slice(0, 6);

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
      searchSuggestions.innerHTML = `<div class="suggestion-empty">No direct match. Press Enter or ask the AI Assistant.</div>`;
      searchSuggestions.style.display = "block";
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") performSmartSearch(searchInput.value);
  });

  document.getElementById("searchBtn").addEventListener("click", () => {
    performSmartSearch(searchInput.value);
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.style.display = "none";
    }
  });
}

function performSmartSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    showToast("Type a destination like 'Civil', 'Mechanical', 'Electrical', or 'IT'");
    return;
  }

  let found = locations.find(l => l.name.toLowerCase().includes(q) || l.id.toLowerCase() === q);

  // Accurate departmental & floor resolution
  if (!found) {
    if (q.includes("civil")) found = locations.find(l => l.id === "civil");
    else if (q.includes("mechanical") || q.includes("workshop")) found = locations.find(l => l.id === "mechanical");
    else if (q.includes("electrical") || q.includes("ee")) found = locations.find(l => l.id === "electrical");
    else if (q.includes("it") || q.includes("information technology")) found = locations.find(l => l.id === "itdept");
    else if (q.includes("first year") || q.includes("fresher") || q.includes("1st year")) found = locations.find(l => l.id === "firstyear");
    else if (q.includes("cs lab") || q.includes("lab 1") || q.includes("computer lab")) found = locations.find(l => l.id === "cslabs");
    else if (q.includes("cse") || q.includes("computer science")) found = locations.find(l => l.id === "cse");
    else if (q.includes("library") || q.includes("book")) found = locations.find(l => l.id === "library");
    else if (q.includes("admission") || q.includes("counseling")) found = locations.find(l => l.id === "admission");
    else if (q.includes("block 1") || q.includes("b1")) found = locations.find(l => l.id === "block1");
    else if (q.includes("block 2") || q.includes("b2")) found = locations.find(l => l.id === "block2");
    else if (q.includes("block 3") || q.includes("b3")) found = locations.find(l => l.id === "block3");
    else if (q.includes("canteen") || q.includes("food") || q.includes("lunch")) found = locations.find(l => l.id === "canteen");
    else if (q.includes("cafe") || q.includes("coffee") || q.includes("acrocafe")) found = locations.find(l => l.id === "cafe");
    else if (q.includes("basketball") || q.includes("court")) found = locations.find(l => l.id === "basketball");
    else if (q.includes("sports") || q.includes("gym")) found = locations.find(l => l.id === "sports");
    else if (q.includes("transport") || q.includes("bus")) found = locations.find(l => l.id === "transport");
  }

  searchSuggestions.style.display = "none";
  if (found) {
    selectLocation(found.id, true);
    showToast(`Found: ${found.name} (${found.block} • ${found.floor})`);
  } else {
    showToast(`Searching AI Assistant for "${query}"...`);
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

// View switcher (3D Digital Twin ↔ 2D Map) & 3D Floor Slicer controls
function initMapControls() {
  const view3dContainer = document.getElementById("view3dContainer");
  const view2dContainer = document.getElementById("view2dContainer");
  const switch3dBtn = document.getElementById("switch3dBtn");
  const switch2dBtn = document.getElementById("switch2dBtn");

  if (switch3dBtn && switch2dBtn) {
    switch3dBtn.addEventListener("click", () => {
      switch3dBtn.classList.add("active");
      switch2dBtn.classList.remove("active");
      view3dContainer.style.display = "block";
      view2dContainer.style.display = "none";
      if (campus3d) campus3d.onResize();
      showToast("🎮 3D Digital Twin Active — Rotate & Zoom");
    });

    switch2dBtn.addEventListener("click", () => {
      switch2dBtn.classList.add("active");
      switch3dBtn.classList.remove("active");
      view3dContainer.style.display = "none";
      view2dContainer.style.display = "block";
      showToast("🗺️ 2D Interactive Map Active");
    });
  }

  // 3D Floor Level Slicer Buttons
  document.querySelectorAll(".floor-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".floor-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const level = btn.dataset.level;
      if (campus3d) {
        campus3d.setFloorLevel(level);
        showToast(`3D Floor Filter: ${btn.textContent.trim()}`);
      }
    });
  });

  // 3D Camera Presets
  const reset3dBtn = document.getElementById("reset3dBtn");
  if (reset3dBtn) {
    reset3dBtn.addEventListener("click", () => {
      if (campus3d) campus3d.resetCamera();
    });
  }

  // 2D Map Layer Switcher (Annotated Satellite vs Architectural Model vs Clean Satellite)
  document.querySelectorAll(".map-layer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-layer-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const layer = btn.dataset.layer;
      currentMapLayer = layer;

      if (layer === "annotated") {
        campusMapImg.src = "assets/campus-google-annotated.jpg";
        mapLayerHint.textContent = "📌 Showing Google Satellite Map with annotated campus landmarks";
        showToast("Showing Annotated AITR Satellite Survey");
      } else if (layer === "model") {
        campusMapImg.src = "assets/campus-model-blueprint.jpg";
        mapLayerHint.textContent = "📐 Showing Physical Architectural Scale Model (Entrance → Library → Passage → Blocks 1, 2, 3)";
        showToast("Showing AITR Physical Architectural Scale Model");
      } else {
        campusMapImg.src = "assets/campus-map.png";
        mapLayerHint.textContent = "🛰️ Clean Satellite Campus Map View";
        showToast("Showing Clean Satellite Map");
      }

      // Re-render markers and route lines with calibrated coordinate system
      renderMapMarkers();
      updateMapRouteForActiveLayer();

      // If live navigation is active, update walker marker position immediately
      if (isLiveNavActive) {
        updateLiveNavHUD(liveNavProgress);
      }
    });
  });

  // 2D Zoom & Recenter
  const zoomInBtn = document.getElementById("zoomInBtn");
  const zoomOutBtn = document.getElementById("zoomOutBtn");
  const recenterBtn = document.getElementById("recenterBtn");

  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
      mapZoom = Math.min(1.8, mapZoom + 0.15);
      campusMapImg.style.transform = `scale(${mapZoom})`;
    });
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
      mapZoom = Math.max(1, mapZoom - 0.15);
      campusMapImg.style.transform = `scale(${mapZoom})`;
    });
  }
  if (recenterBtn) {
    recenterBtn.addEventListener("click", () => {
      mapZoom = 1;
      campusMapImg.style.transform = `scale(1)`;
      showToast("🎯 Map recentered to default bounds.");
    });
  }

  // Live Navigation Trigger from Drawer
  const startNavBtn = document.getElementById("startNavBtn");
  if (startNavBtn) {
    startNavBtn.addEventListener("click", () => {
      startLiveNavigation();
    });
  }

  // HUD Play / Pause
  if (hudPlayPauseBtn) {
    hudPlayPauseBtn.addEventListener("click", () => {
      if (isLiveNavPaused) {
        resumeLiveNavigation();
      } else {
        pauseLiveNavigation();
      }
    });
  }

  // HUD Stop / Exit
  if (hudStopNavBtn) {
    hudStopNavBtn.addEventListener("click", () => {
      stopLiveNavigation();
    });
  }

  // HUD Next / Prev Step
  if (hudNextStepBtn) {
    hudNextStepBtn.addEventListener("click", () => {
      nextNavStep();
    });
  }
  if (hudPrevStepBtn) {
    hudPrevStepBtn.addEventListener("click", () => {
      prevNavStep();
    });
  }

  // HUD Speed Multipliers
  document.querySelectorAll(".hud-speed-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const speed = parseFloat(btn.dataset.speed);
      setNavSpeed(speed);
    });
  });

  // HUD Voice Audio Toggle
  if (hudAudioToggleBtn) {
    hudAudioToggleBtn.addEventListener("click", () => {
      toggleVoiceAudio();
    });
  }

  // Gate Origin Reset
  document.getElementById("campusModeBtn").addEventListener("click", () => {
    showToast("📍 Starting point set to AITR Main Entrance Gate.");
    selectLocation("gate", true);
  });
}

// Sequential Photo Tour Walkthrough
function initPhotoTour() {
  renderTourSlide(0);

  document.getElementById("tourPrevBtn").addEventListener("click", () => {
    if (currentTourIndex > 0) renderTourSlide(currentTourIndex - 1);
  });

  document.getElementById("tourNextBtn").addEventListener("click", () => {
    if (currentTourIndex < tourStops.length - 1) renderTourSlide(currentTourIndex + 1);
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
  const closeBtn = document.getElementById("closeAiBtn");
  const sendBtn = document.getElementById("aiSendBtn");
  const inputEl = document.getElementById("aiInput");

  const openModal = () => { modal.classList.add("open"); inputEl.focus(); };
  const closeModal = () => { modal.classList.remove("open"); };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  document.querySelectorAll(".quick-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      inputEl.value = chip.textContent.replace(/[✦🤖📍🍴📚🏗️⚙️⚡🌐]/g, "").trim();
      handleAiSubmit();
    });
  });

  const handleAiSubmit = () => {
    const text = inputEl.value.trim();
    if (!text) return;
    appendUserMessage(text);
    inputEl.value = "";

    const typingId = showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator(typingId);
      const reply = generateAiReply(text);
      appendAssistantMessage(reply.text, reply.action);
    }, 550);
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
          🗺️ Show 3D Route to ${action.name}
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

  if (q.includes("civil")) {
    return {
      text: "**Civil Engineering Department** is located in **Block 1 on the Ground Floor**. You'll find it right as you enter the Block 1 courtyard with the Indian Flagpole.",
      action: { locId: "civil", name: "Civil Dept (Block 1)" }
    };
  }
  if (q.includes("first year") || q.includes("fresher")) {
    return {
      text: "**First Year Engineering Classes** are held in **Block 1 on the 1st and 2nd Floors**. Ground floor has Civil & Admission, while upper floors are dedicated to fresher classes.",
      action: { locId: "firstyear", name: "First Year Classes (Block 1)" }
    };
  }
  if (q.includes("mechanical") || q.includes("workshop")) {
    return {
      text: "**Mechanical Engineering Department** is on the **Ground Floor of Block II**. Head through the terracotta garden walkway into Block II.",
      action: { locId: "mechanical", name: "Mechanical Dept (Block II)" }
    };
  }
  if (q.includes("electrical")) {
    return {
      text: "**Electrical Engineering Department** is located on the **1st Floor of Block II**. Enter Block II and take the central staircase up.",
      action: { locId: "electrical", name: "Electrical Dept (Block II)" }
    };
  }
  if (q.includes("cs lab") || q.includes("computer lab")) {
    return {
      text: "**Computer Science Labs (Labs 1–8)** are on the **Ground Floor of Block II**, equipped with high-speed development workstations and Linux environments.",
      action: { locId: "cslabs", name: "CS Labs (Block II)" }
    };
  }
  if (q.includes("it") || q.includes("information technology")) {
    return {
      text: "The **Information Technology (IT) Department** occupies both the **1st Floor and 2nd Floor of Block 3** (located alongside CDC Lawn).",
      action: { locId: "itdept", name: "IT Department (Block 3)" }
    };
  }
  if (q.includes("library") || q.includes("book")) {
    return {
      text: "The **Central Library** is located on the **1st Floor of Block 1**, positioned directly above the Admission Cell.",
      action: { locId: "library", name: "Central Library" }
    };
  }
  if (q.includes("admission") || q.includes("fee") || q.includes("counseling")) {
    return {
      text: "The **Admission Cell** is situated on the **Ground Floor of Block 1** at the front entrance, about 85m from the Main Gate.",
      action: { locId: "admission", name: "Admission Cell" }
    };
  }
  if (q.includes("canteen") || q.includes("food") || q.includes("lunch")) {
    return {
      text: "You can grab hot meals at the **Main Campus Canteen** across from the Sports Complex, or enjoy coffee & snacks at **AcroCafe** further along the central avenue.",
      action: { locId: "canteen", name: "Main Canteen" }
    };
  }
  if (q.includes("basketball") || q.includes("sports")) {
    return {
      text: "The **Regulation Blue Basketball Court** and **Sports Complex** are located north of the CDC Lawn. Outdoor court is floodlit for evening games.",
      action: { locId: "basketball", name: "Basketball Court" }
    };
  }

  return {
    text: `Looking for "${query}"? Check out our interactive 3D model with floor-by-floor slicing, or explore the location directory!`,
    action: { locId: "block1", name: "Explore 3D Campus" }
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

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 3200);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

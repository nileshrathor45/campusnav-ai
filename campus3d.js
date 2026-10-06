// ==============================================================================
// CampusNav AI - 3D Digital Twin Architecture Engine
// Built for Acropolis Institute of Technology & Research (AITR)
// Three.js WebGL Interactive 3D Campus Model with Floor-Level Slicing
// ==============================================================================

class Campus3D {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.buildings = {};
    this.floorMeshes = [];
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.activeRouteTube = null;
    this.activePinMarker = null;
    this.labels = [];
    this.selectedBuildingId = null;
    this.activeFloorLevel = "all"; // 'all', 'ground', 'first', 'second'

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 550;

    // 1. Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070e1b);
    this.scene.fog = new THREE.FogExp2(0x070e1b, 0.0035);

    // 2. Camera setup (Isometric tilt)
    this.camera = new THREE.PerspectiveCamera(42, width / height, 1, 2500);
    this.camera.position.set(220, 260, 320);

    // 3. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2.08; // Prevent looking underground
    this.controls.minDistance = 60;
    this.controls.maxDistance = 650;
    this.controls.target.set(0, 0, -20);

    // 5. Lighting
    this.setupLighting();

    // 6. Build 3D Campus World
    this.buildTerrain();
    this.buildRoads();
    this.buildBuildings();
    this.buildLandmarks();
    this.buildTreesAndDecorations();

    // 7. Event Listeners
    window.addEventListener("resize", () => this.onResize());
    this.renderer.domElement.addEventListener("click", (e) => this.onCanvasClick(e));
    this.renderer.domElement.addEventListener("mousemove", (e) => this.onCanvasHover(e));

    // 8. Animation Loop
    this.animate();
  }

  setupLighting() {
    // Ambient light with soft twilight-tech hue
    const ambient = new THREE.AmbientLight(0xd9e5ff, 0.65);
    this.scene.add(ambient);

    // Sunlight
    const sun = new THREE.DirectionalLight(0xfff6e6, 0.95);
    sun.position.set(160, 280, 140);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 800;
    sun.shadow.camera.left = -220;
    sun.shadow.camera.right = 220;
    sun.shadow.camera.top = 220;
    sun.shadow.camera.bottom = -220;
    sun.shadow.bias = -0.0005;
    this.scene.add(sun);

    // Soft cyan tech fill light from ground
    const fillLight = new THREE.DirectionalLight(0x38d7c0, 0.35);
    fillLight.position.set(-180, 100, -140);
    this.scene.add(fillLight);
  }

  buildTerrain() {
    // Base Ground Plane
    const groundGeo = new THREE.PlaneGeometry(750, 750);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0c1524,
      roughness: 0.92,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Campus Perimeter Grass Patch
    const campusGrassGeo = new THREE.PlaneGeometry(420, 520);
    const campusGrassMat = new THREE.MeshStandardMaterial({
      color: 0x12221b,
      roughness: 0.85
    });
    const campusGrass = new THREE.Mesh(campusGrassGeo, campusGrassMat);
    campusGrass.rotation.x = -Math.PI / 2;
    campusGrass.position.set(-10, 0.2, -30);
    campusGrass.receiveShadow = true;
    this.scene.add(campusGrass);

    // CDC Lawn (Central lush green lawn with curved border)
    const cdcGeo = new THREE.BoxGeometry(68, 1.2, 54);
    const cdcMat = new THREE.MeshStandardMaterial({
      color: 0x1d472c,
      roughness: 0.75
    });
    const cdc = new THREE.Mesh(cdcGeo, cdcMat);
    cdc.position.set(-18, 0.6, -30);
    cdc.receiveShadow = true;
    cdc.userData = { id: "cdc", name: "CDC Lawn", info: "Central Campus Orientation Landmark" };
    this.scene.add(cdc);

    // Flowerbed border on CDC Lawn
    const flowerBedGeo = new THREE.CylinderGeometry(10, 10, 1.6, 24);
    const flowerBedMat = new THREE.MeshStandardMaterial({ color: 0x2e6b43 });
    const flowerBed = new THREE.Mesh(flowerBedGeo, flowerBedMat);
    flowerBed.position.set(-18, 0.8, -30);
    this.scene.add(flowerBed);
  }

  buildRoads() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1c2430,
      roughness: 0.7,
      metalness: 0.15
    });

    const createRoad = (w, l, x, z, rotY = 0) => {
      const roadGeo = new THREE.PlaneGeometry(w, l);
      const road = new THREE.Mesh(roadGeo, roadMat);
      road.rotation.x = -Math.PI / 2;
      road.rotation.z = rotY;
      road.position.set(x, 0.4, z);
      road.receiveShadow = true;
      this.scene.add(road);
      return road;
    };

    // 1. Entrance road from Main Gate heading inward
    createRoad(22, 120, 48, 140, 0.2);

    // 2. Entrance curve past security crosswalk
    createRoad(22, 80, 36, 65, 0.05);

    // 3. Main Central Avenue (running from Block 1 north past Block 2 and 3)
    createRoad(26, 240, 30, -75, 0);

    // 4. Crossway between Block 1 and Block 2
    createRoad(18, 90, -15, 20, Math.PI / 2);

    // 5. Pathway around CDC Lawn
    createRoad(16, 110, -25, -75, 0);

    // 6. Northern road to Sports Complex and AcroCafe
    createRoad(20, 120, 20, -170, 0.1);

    // 7. Terracotta Walkway leading into Block II
    const walkwayGeo = new THREE.PlaneGeometry(12, 38);
    const walkwayMat = new THREE.MeshStandardMaterial({ color: 0x933827, roughness: 0.6 });
    const walkway = new THREE.Mesh(walkwayGeo, walkwayMat);
    walkway.rotation.x = -Math.PI / 2;
    walkway.position.set(2, 0.5, -2);
    this.scene.add(walkway);

    // White dashed center line markings on main road
    for (let z = 180; z >= -190; z -= 18) {
      const dashGeo = new THREE.PlaneGeometry(1.6, 8);
      const dashMat = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      const dash = new THREE.Mesh(dashGeo, dashMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(30, 0.45, z);
      this.scene.add(dash);
    }

    // Pedestrian Zebra Crosswalk at gate
    for (let x = 26; x <= 44; x += 3.5) {
      const stripeGeo = new THREE.PlaneGeometry(2, 9);
      const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(x, 0.46, 105);
      this.scene.add(stripe);
    }
  }

  buildBuildings() {
    // Helper to build multi-floor stacked academic blocks with floor-slicing support
    const createAcademicBlock = (config) => {
      const group = new THREE.Group();
      group.position.set(config.x, 0, config.z);
      group.userData = { id: config.id, name: config.name, floors: config.floorsData };

      const floorHeight = config.floorHeight || 11;
      const floorsGroup = [];

      config.floorsData.forEach((fData, idx) => {
        const floorGroup = new THREE.Group();
        const yBase = idx * floorHeight;
        floorGroup.position.y = yBase;
        floorGroup.userData = { level: fData.level, name: fData.name, depts: fData.departments };

        // Floor slab structure
        const slabGeo = new THREE.BoxGeometry(config.w, floorHeight - 1.2, config.d);
        const slabMat = new THREE.MeshStandardMaterial({
          color: config.color,
          roughness: 0.45,
          metalness: 0.12
        });
        const slab = new THREE.Mesh(slabGeo, slabMat);
        slab.position.y = (floorHeight - 1.2) / 2;
        slab.castShadow = true;
        slab.receiveShadow = true;
        slab.userData = { parentBuilding: config.id, floorIndex: idx, floorInfo: fData };
        floorGroup.add(slab);

        // Glass windows ribbon
        const windowGeo = new THREE.BoxGeometry(config.w + 0.3, 3.5, config.d - 6);
        const windowMat = new THREE.MeshStandardMaterial({
          color: 0x3d7eb8,
          roughness: 0.1,
          metalness: 0.85,
          transparent: true,
          opacity: 0.75
        });
        const windows = new THREE.Mesh(windowGeo, windowMat);
        windows.position.y = (floorHeight - 1.2) / 2;
        floorGroup.add(windows);

        // Floor separator trim line
        const trimGeo = new THREE.BoxGeometry(config.w + 0.6, 0.8, config.d + 0.6);
        const trimMat = new THREE.MeshStandardMaterial({ color: 0x223044 });
        const trim = new THREE.Mesh(trimGeo, trimMat);
        trim.position.y = floorHeight - 0.4;
        floorGroup.add(trim);

        group.add(floorGroup);
        floorsGroup.push(floorGroup);
        this.floorMeshes.push(slab);
      });

      // Rooftop trim / equipment
      const roofY = config.floorsData.length * floorHeight;
      const roofGeo = new THREE.BoxGeometry(config.w - 4, 2.5, config.d - 4);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x1f2b3c, roughness: 0.8 });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = roofY + 1.25;
      group.add(roof);

      // Entrance canopy
      const canopyGeo = new THREE.BoxGeometry(16, 1.2, 8);
      const canopyMat = new THREE.MeshStandardMaterial({ color: 0x38d7c0 });
      const canopy = new THREE.Mesh(canopyGeo, canopyMat);
      canopy.position.set(0, 7, config.d / 2 + 4);
      group.add(canopy);

      this.scene.add(group);
      this.buildings[config.id] = { group, floorsGroup, config };
      return group;
    };

    // =========================================================================
    // BLOCK 1 (Detailed based on your prompt: Civil Dept Ground, First Year above)
    // =========================================================================
    createAcademicBlock({
      id: "block1",
      name: "Academic Block 1",
      w: 62,
      d: 44,
      x: -16,
      z: 60,
      color: 0xd98642, // Warm terracotta/salmon from your photo
      floorsData: [
        {
          level: "ground",
          name: "Ground Floor",
          departments: ["Civil Engineering Department", "Admission Cell & Counseling Desk", "Dean (Academics) Office"]
        },
        {
          level: "first",
          name: "1st Floor",
          departments: ["Central Library (above Admission Cell)", "First Year Engineering Classes (Sections A-D)", "Applied Sciences Lab"]
        },
        {
          level: "second",
          name: "2nd Floor",
          departments: ["First Year Engineering Classrooms (Sections E-H)", "Physics & Chemistry Labs", "First Year Faculty Room"]
        }
      ]
    });

    // Courtyard in front of Block 1 with Indian Flagpole
    const flagpoleGeo = new THREE.CylinderGeometry(0.35, 0.45, 26, 16);
    const flagpoleMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.8 });
    const flagpole = new THREE.Mesh(flagpoleGeo, flagpoleMat);
    flagpole.position.set(16, 13, 66);
    this.scene.add(flagpole);

    // Indian Tricolor Flag
    const flagGeo = new THREE.PlaneGeometry(6, 4);
    const flagMat = new THREE.MeshBasicMaterial({ color: 0xff9933, side: THREE.DoubleSide });
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(19, 23.5, 66);
    this.scene.add(flag);

    // Sports Achievements Billboard
    const boardGeo = new THREE.BoxGeometry(2, 16, 9);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0xb55a42 });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(20, 8, 48);
    this.scene.add(board);

    // =========================================================================
    // BLOCK 2 (Detailed based on your prompt: Mechanical Ground & CS Labs, Electrical 1st)
    // =========================================================================
    createAcademicBlock({
      id: "block2",
      name: "Academic Block II",
      w: 68,
      d: 46,
      x: -18,
      z: -2,
      color: 0xdc8f49,
      floorsData: [
        {
          level: "ground",
          name: "Ground Floor",
          departments: ["Mechanical Engineering Department", "CS Labs (Labs 1–8 High Performance)", "Mechanical Workshop"]
        },
        {
          level: "first",
          name: "1st Floor",
          departments: ["Electrical Engineering Department", "CSE Department Cabins", "Electrical Machines & Control Lab"]
        },
        {
          level: "second",
          name: "2nd Floor",
          departments: ["Advanced AI & Cloud Computing Lab", "Project & Research Lab", "CSE HOD Office"]
        }
      ]
    });

    // Potted plants along the Block II walkway
    for (let z = 14; z >= -18; z -= 8) {
      [-5, 9].forEach(xOff => {
        const potGeo = new THREE.CylinderGeometry(1.2, 0.9, 2, 12);
        const potMat = new THREE.MeshStandardMaterial({ color: 0xa85d39 });
        const pot = new THREE.Mesh(potGeo, potMat);
        pot.position.set(xOff, 1, z);
        this.scene.add(pot);

        const bushGeo = new THREE.SphereGeometry(1.8, 10, 10);
        const bushMat = new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.9 });
        const bush = new THREE.Mesh(bushGeo, bushMat);
        bush.position.set(xOff, 2.5, z);
        this.scene.add(bush);
      });
    }

    // =========================================================================
    // BLOCK 3 (Detailed based on your prompt: 1st Floor & 2nd Floor IT Department)
    // =========================================================================
    createAcademicBlock({
      id: "block3",
      name: "Academic Block 3",
      w: 62,
      d: 42,
      x: -16,
      z: -68,
      color: 0xc87e38,
      floorsData: [
        {
          level: "ground",
          name: "Ground Floor",
          departments: ["Engineering Graphics Lab", "Seminar Hall 1", "Civil Material Testing Lab"]
        },
        {
          level: "first",
          name: "1st Floor",
          departments: ["IT Department (Information Technology)", "IT Software Lab", "Faculty Cabins"]
        },
        {
          level: "second",
          name: "2nd Floor",
          departments: ["IT Department Classrooms (IT-A, IT-B)", "Cybersecurity & Network Lab", "IT Project Lab"]
        }
      ]
    });

    // =========================================================================
    // PHYSICAL ARCHITECTURAL MODEL (Entrance -> Library -> Passage -> Blocks 1, 2, 3)
    // As captured in the verified AITR scale model blueprint photo
    // =========================================================================
    
    // 1. Long continuous covered Passage / Corridor connecting Library, Block 1, Block 2, Block 3
    const passageGeo = new THREE.BoxGeometry(14, 9, 160);
    const passageMat = new THREE.MeshStandardMaterial({
      color: 0x243242,
      roughness: 0.5,
      metalness: 0.25
    });
    const passage = new THREE.Mesh(passageGeo, passageMat);
    passage.position.set(16, 4.5, -4);
    passage.castShadow = true;
    passage.receiveShadow = true;
    passage.userData = { id: "passage", name: "Main Inter-Block Covered Passage / Corridor", info: "Continuous covered walkway linking Library, Block 1, Block 2, and Block 3" };
    this.scene.add(passage);

    // Continuous glass ribbon along the front passage
    const passageGlassGeo = new THREE.BoxGeometry(14.4, 3.8, 156);
    const passageGlassMat = new THREE.MeshStandardMaterial({
      color: 0x38d7c0,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.65
    });
    const passageGlass = new THREE.Mesh(passageGlassGeo, passageGlassMat);
    passageGlass.position.set(16, 5, -4);
    this.scene.add(passageGlass);

    // Architectural roof overhang on passage
    const passageRoofGeo = new THREE.BoxGeometry(18, 1.2, 164);
    const passageRoofMat = new THREE.MeshStandardMaterial({ color: 0x111c2a, roughness: 0.8 });
    const passageRoof = new THREE.Mesh(passageRoofGeo, passageRoofMat);
    passageRoof.position.set(16, 9.6, -4);
    passageRoof.castShadow = true;
    this.scene.add(passageRoof);

    // Support pillars along the passage facade
    for (let z = 70; z >= -78; z -= 14) {
      const pillarGeo = new THREE.CylinderGeometry(0.7, 0.7, 9, 8);
      const pillarMat = new THREE.MeshStandardMaterial({ color: 0xd98642 });
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(23, 4.5, z);
      pillar.castShadow = true;
      this.scene.add(pillar);
    }

    // 2. Central Library & Entrance Pavilion Wing (Front-Left as shown on physical model)
    const libWingGeo = new THREE.BoxGeometry(40, 18, 36);
    const libWingMat = new THREE.MeshStandardMaterial({
      color: 0xce7a38,
      roughness: 0.45,
      metalness: 0.15
    });
    const libWing = new THREE.Mesh(libWingGeo, libWingMat);
    libWing.position.set(24, 9, 78);
    libWing.castShadow = true;
    libWing.receiveShadow = true;
    libWing.userData = { id: "library", name: "Central Library Wing & Entrance Pavilion", info: "Front-left entrance wing housing Central Library and Dean offices" };
    this.scene.add(libWing);

    // Library entrance glass atrium
    const atriumGeo = new THREE.BoxGeometry(18, 12, 12);
    const atriumMat = new THREE.MeshStandardMaterial({
      color: 0x5ab2ff,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.7
    });
    const atrium = new THREE.Mesh(atriumGeo, atriumMat);
    atrium.position.set(24, 6, 96);
    this.scene.add(atrium);

    // Main Entrance Arch over the passage approach
    const archGeo = new THREE.BoxGeometry(22, 2.5, 8);
    const archMat = new THREE.MeshStandardMaterial({ color: 0x38d7c0 });
    const arch = new THREE.Mesh(archGeo, archMat);
    arch.position.set(24, 13, 98);
    this.scene.add(arch);

    // =========================================================================
    // FACULTY OF MANAGEMENT & RESEARCH (Northwest)
    // =========================================================================
    createAcademicBlock({
      id: "management",
      name: "Faculty of Management & Research (AFMR)",
      w: 52,
      d: 38,
      x: -85,
      z: -140,
      color: 0x8a9ba8,
      floorsData: [
        { level: "ground", name: "Ground Floor", departments: ["MBA Admissions", "Executive Seminar Hall", "Management Library"] },
        { level: "first", name: "1st Floor", departments: ["BBA Lecture Theaters", "Finance & Marketing Labs"] }
      ]
    });

    // =========================================================================
    // FACULTY OF COMPUTER APPLICATIONS (MCA/BCA - Northeast)
    // =========================================================================
    createAcademicBlock({
      id: "computerfaculty",
      name: "Faculty of Computer Applications",
      w: 48,
      d: 36,
      x: 95,
      z: -180,
      color: 0x7a8e9e,
      floorsData: [
        { level: "ground", name: "Ground Floor", departments: ["MCA Department", "Software Dev Lab"] },
        { level: "first", name: "1st Floor", departments: ["BCA Department", "Database & Web Systems Lab"] }
      ]
    });
  }

  buildLandmarks() {
    // 1. Main Security Gate
    const gateGroup = new THREE.Group();
    gateGroup.position.set(50, 0, 155);

    // Security Outpost Cabin
    const cabinGeo = new THREE.BoxGeometry(12, 9, 14);
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0x8c7365 });
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.set(16, 4.5, 0);
    cabin.castShadow = true;
    gateGroup.add(cabin);

    // Yellow Security Gates
    [-10, 4].forEach(x => {
      const gateBarGeo = new THREE.BoxGeometry(8, 6, 1);
      const gateBarMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b });
      const bar = new THREE.Mesh(gateBarGeo, gateBarMat);
      bar.position.set(x, 3, 0);
      gateGroup.add(bar);
    });
    this.scene.add(gateGroup);

    // 2. Regulation Blue Basketball Court
    const courtGeo = new THREE.BoxGeometry(48, 1, 32);
    const courtMat = new THREE.MeshStandardMaterial({
      color: 0x1d63b8, // Distinctive blue outdoor surface
      roughness: 0.6
    });
    const court = new THREE.Mesh(courtGeo, courtMat);
    court.position.set(-20, 0.5, -135);
    court.userData = { id: "basketball", name: "Outdoor Basketball Court" };
    this.scene.add(court);

    // Basketball Court White Line Inlay
    const courtLineGeo = new THREE.BoxGeometry(45, 0.2, 29);
    const courtLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const courtLine = new THREE.Mesh(courtLineGeo, courtLineMat);
    courtLine.position.set(-20, 1.1, -135);
    this.scene.add(courtLine);

    // Basketball Hoops
    [-42, 2].forEach(xOffset => {
      const poleGeo = new THREE.CylinderGeometry(0.3, 0.3, 10, 8);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0xdddddd });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(-20 + xOffset / 2, 5, -135);
      this.scene.add(pole);

      const boardGeo = new THREE.BoxGeometry(0.4, 3, 4);
      const boardMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const board = new THREE.Mesh(boardGeo, boardMat);
      board.position.set(-20 + xOffset / 2, 8.5, -135);
      this.scene.add(board);
    });

    // 3. Sports Complex Building (Indoor sports / gym)
    const sportsGeo = new THREE.BoxGeometry(50, 15, 36);
    const sportsMat = new THREE.MeshStandardMaterial({ color: 0x475569 });
    const sports = new THREE.Mesh(sportsGeo, sportsMat);
    sports.position.set(-68, 7.5, -135);
    sports.castShadow = true;
    sports.userData = { id: "sports", name: "Sports Complex & Gymnasium" };
    this.scene.add(sports);

    // 4. Main Campus Canteen
    const canteenGeo = new THREE.BoxGeometry(42, 10, 34);
    const canteenMat = new THREE.MeshStandardMaterial({ color: 0x9a4f32 });
    const canteen = new THREE.Mesh(canteenGeo, canteenMat);
    canteen.position.set(70, 5, -60);
    canteen.castShadow = true;
    canteen.userData = { id: "canteen", name: "Main Campus Canteen" };
    this.scene.add(canteen);

    // 5. AcroCafe (with outdoor umbrella tables)
    const cafeGeo = new THREE.BoxGeometry(32, 9, 28);
    const cafeMat = new THREE.MeshStandardMaterial({ color: 0x3b5368 });
    const cafe = new THREE.Mesh(cafeGeo, cafeMat);
    cafe.position.set(75, 4.5, -105);
    cafe.castShadow = true;
    cafe.userData = { id: "cafe", name: "AcroCafe" };
    this.scene.add(cafe);

    // Cafe Umbrella Tables
    for (let i = 0; i < 3; i++) {
      const umbrellaGeo = new THREE.ConeGeometry(3, 1.5, 8);
      const umbrellaMat = new THREE.MeshStandardMaterial({ color: 0x38d7c0 });
      const umbrella = new THREE.Mesh(umbrellaGeo, umbrellaMat);
      umbrella.position.set(54, 4.8, -100 + i * 9);
      this.scene.add(umbrella);

      const tablePoleGeo = new THREE.CylinderGeometry(0.15, 0.15, 4.5, 6);
      const tablePoleMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
      const pole = new THREE.Mesh(tablePoleGeo, tablePoleMat);
      pole.position.set(54, 2.25, -100 + i * 9);
      this.scene.add(pole);
    }

    // 6. Acropolis Campus Ambulance (from your photo near Block 1 approach)
    const ambulanceGroup = new THREE.Group();
    ambulanceGroup.position.set(40, 1.8, 28);
    const ambBodyGeo = new THREE.BoxGeometry(6, 4.5, 12);
    const ambBodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const ambBody = new THREE.Mesh(ambBodyGeo, ambBodyMat);
    ambulanceGroup.add(ambBody);

    const ambStripeGeo = new THREE.BoxGeometry(6.1, 1, 12);
    const ambStripeMat = new THREE.MeshBasicMaterial({ color: 0xd9383a });
    const ambStripe = new THREE.Mesh(ambStripeGeo, ambStripeMat);
    ambulanceGroup.add(ambStripe);

    const sirenGeo = new THREE.BoxGeometry(1.2, 0.6, 2);
    const sirenMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const siren = new THREE.Mesh(sirenGeo, sirenMat);
    siren.position.y = 2.6;
    ambulanceGroup.add(siren);

    this.scene.add(ambulanceGroup);

    // 7. Transport Office (Bus Depot)
    const busDepotGeo = new THREE.BoxGeometry(32, 8, 24);
    const busDepotMat = new THREE.MeshStandardMaterial({ color: 0x576472 });
    const busDepot = new THREE.Mesh(busDepotGeo, busDepotMat);
    busDepot.position.set(-90, 4, 120);
    busDepot.userData = { id: "transport", name: "Transport Office & Bus Stand" };
    this.scene.add(busDepot);

    // College Buses (Yellow)
    for (let i = 0; i < 3; i++) {
      const busGeo = new THREE.BoxGeometry(6, 4.5, 16);
      const busMat = new THREE.MeshStandardMaterial({ color: 0xf5b041 });
      const bus = new THREE.Mesh(busGeo, busMat);
      bus.position.set(-68 + i * 11, 2.25, 125);
      bus.castShadow = true;
      this.scene.add(bus);
    }
  }

  buildTreesAndDecorations() {
    const treeGeo = new THREE.ConeGeometry(5, 14, 7);
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x1b5e20, roughness: 0.85 });
    const trunkGeo = new THREE.CylinderGeometry(0.8, 1, 4, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });

    const createTree = (x, z) => {
      const tree = new THREE.Group();
      const foliage = new THREE.Mesh(treeGeo, treeMat);
      foliage.position.y = 9;
      foliage.castShadow = true;
      tree.add(foliage);

      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 2;
      tree.add(trunk);

      tree.position.set(x, 0, z);
      this.scene.add(tree);
    };

    // Trees along central avenue (matching your photos)
    for (let z = 120; z >= -120; z -= 24) {
      createTree(46, z);
      if (z < 30 && z > -90) {
        createTree(-58, z);
      }
    }

    // Trees around CDC Lawn
    createTree(-48, -12);
    createTree(-48, -48);
    createTree(12, -48);
  }

  // Set floor view mode (Slices/explodes building floors)
  setFloorLevel(level) {
    this.activeFloorLevel = level;
    const spacing = level === "all" ? 11 : 11; // Standard spacing

    Object.values(this.buildings).forEach(b => {
      b.floorsGroup.forEach((fGroup, idx) => {
        const floorData = fGroup.userData;
        if (level === "all" || level === floorData.level) {
          fGroup.visible = true;
          // Smoothly animate height if exploding
          fGroup.position.y = idx * spacing;
        } else {
          fGroup.visible = false;
        }
      });
    });
  }

  // Highlight specific building and focus 3D camera
  focusBuilding(buildingId) {
    this.selectedBuildingId = buildingId;
    let targetPos = new THREE.Vector3(0, 0, 0);

    const b = this.buildings[buildingId];
    if (b) {
      targetPos.copy(b.group.position);
      // Pulse animation
      const highlightBox = new THREE.BoxHelper(b.group, 0x38d7c0);
      this.scene.add(highlightBox);
      setTimeout(() => this.scene.remove(highlightBox), 2500);
    } else {
      // Named coordinates for outdoor landmarks
      const coordMap = {
        gate: new THREE.Vector3(50, 0, 155),
        cdc: new THREE.Vector3(-18, 0, -30),
        basketball: new THREE.Vector3(-20, 0, -135),
        sports: new THREE.Vector3(-68, 0, -135),
        canteen: new THREE.Vector3(70, 0, -60),
        cafe: new THREE.Vector3(75, 0, -105),
        transport: new THREE.Vector3(-90, 0, 120)
      };
      if (coordMap[buildingId]) {
        targetPos.copy(coordMap[buildingId]);
      }
    }

    // Animate camera target smoothly
    this.animateCameraTo(targetPos.x + 80, targetPos.y + 90, targetPos.z + 100, targetPos.x, targetPos.y + 10, targetPos.z);
    this.draw3DNavigationRoute(targetPos);
  }

  draw3DNavigationRoute(targetCoord) {
    if (this.activeRouteTube) {
      this.scene.remove(this.activeRouteTube);
      this.activeRouteTube = null;
    }

    // Path starting from Main Gate (50, 2, 155)
    const points = [
      new THREE.Vector3(50, 1.2, 155),
      new THREE.Vector3(38, 1.2, 100),
      new THREE.Vector3(30, 1.2, 30),
      new THREE.Vector3(30, 1.2, targetCoord.z),
      new THREE.Vector3(targetCoord.x, 2.5, targetCoord.z)
    ];

    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeo = new THREE.TubeGeometry(curve, 40, 1.2, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x38d7c0,
      transparent: true,
      opacity: 0.85,
      wireframe: false
    });
    this.activeRouteTube = new THREE.Mesh(tubeGeo, tubeMat);
    this.scene.add(this.activeRouteTube);

    // 3D Destination Beacon Pin
    if (this.activePinMarker) this.scene.remove(this.activePinMarker);
    const pinGeo = new THREE.ConeGeometry(3, 8, 12);
    const pinMat = new THREE.MeshStandardMaterial({ color: 0x38d7c0, emissive: 0x38d7c0, emissiveIntensity: 0.6 });
    this.activePinMarker = new THREE.Mesh(pinGeo, pinMat);
    this.activePinMarker.rotation.x = Math.PI;
    this.activePinMarker.position.set(targetCoord.x, 25, targetCoord.z);
    this.scene.add(this.activePinMarker);
  }

  animateCameraTo(x, y, z, tx, ty, tz) {
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const endPos = new THREE.Vector3(x, y, z);
    const endTarget = new THREE.Vector3(tx, ty, tz);

    let progress = 0;
    const tweenLoop = () => {
      progress += 0.04;
      this.camera.position.lerpVectors(startPos, endPos, progress);
      this.controls.target.lerpVectors(startTarget, endTarget, progress);
      if (progress < 1) {
        requestAnimationFrame(tweenLoop);
      }
    };
    tweenLoop();
  }

  resetCamera() {
    this.animateCameraTo(220, 260, 320, 0, 0, -20);
  }

  onCanvasClick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj && obj !== this.scene) {
        if (obj.userData && (obj.userData.id || obj.userData.parentBuilding)) {
          const locId = obj.userData.id || obj.userData.parentBuilding;
          if (window.selectLocation) {
            window.selectLocation(locId, false);
          }
          this.focusBuilding(locId);
          break;
        }
        obj = obj.parent;
      }
    }
  }

  onCanvasHover(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0 && intersects[0].object.userData && (intersects[0].object.userData.id || intersects[0].object.userData.parentBuilding)) {
      this.renderer.domElement.style.cursor = "pointer";
    } else {
      this.renderer.domElement.style.cursor = "grab";
    }
  }

  onResize() {
    if (!this.container || !this.renderer) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  // =========================================================================
  // LIVE 3D NAVIGATION WALKER & CHASE CAMERA SYSTEM
  // =========================================================================

  setupLiveWalker() {
    if (this.walkerGroup) return;

    this.walkerGroup = new THREE.Group();
    this.walkerGroup.visible = false;

    // 1. Glowing Avatar Core Sphere
    const coreGeo = new THREE.SphereGeometry(2.2, 24, 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x38d7c0,
      emissive: 0x1d9f8c,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.8
    });
    this.walkerSphere = new THREE.Mesh(coreGeo, coreMat);
    this.walkerSphere.position.y = 4.5;
    this.walkerSphere.castShadow = true;
    this.walkerGroup.add(this.walkerSphere);

    // 2. Directional Pointer (Points toward current walking heading)
    const arrowGeo = new THREE.ConeGeometry(1.2, 3.2, 8);
    const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.walkerPointer = new THREE.Mesh(arrowGeo, arrowMat);
    this.walkerPointer.rotation.x = Math.PI / 2;
    this.walkerPointer.position.set(0, 4.5, 3.8);
    this.walkerGroup.add(this.walkerPointer);

    // 3. Ground Radar Pulsing Ring
    const ringGeo = new THREE.RingGeometry(2, 4, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38d7c0,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    this.walkerRing = new THREE.Mesh(ringGeo, ringMat);
    this.walkerRing.rotation.x = -Math.PI / 2;
    this.walkerRing.position.y = 0.5;
    this.walkerGroup.add(this.walkerRing);

    // 4. Ground Spotlight to highlight walking path
    this.walkerLight = new THREE.PointLight(0x38d7c0, 2.5, 35);
    this.walkerLight.position.set(0, 5, 0);
    this.walkerGroup.add(this.walkerLight);

    this.scene.add(this.walkerGroup);

    // Navigation state variables
    this.isLiveNavActive = false;
    this.isNavPaused = false;
    this.walkerProgress = 0;
    this.walkerCurve = null;
    this.navSpeedMultiplier = 1;
    this.onNavProgress = null;
    this.onNavComplete = null;
    this.followWalkerCamera = true;
  }

  startLiveNavigation(targetCoord, onProgress, onComplete) {
    this.setupLiveWalker();

    // Set target waypoint coordinates
    const waypoints = [
      new THREE.Vector3(50, 1.2, 155),  // Main Gate Origin
      new THREE.Vector3(42, 1.2, 115),  // Crosswalk
      new THREE.Vector3(34, 1.2, 70),   // Gate Curve
      new THREE.Vector3(30, 1.2, 20),   // Central Avenue
      new THREE.Vector3(30, 1.2, targetCoord.z), // Avenue parallel to building
      new THREE.Vector3(targetCoord.x, 2.5, targetCoord.z) // Building Entry
    ];

    this.walkerCurve = new THREE.CatmullRomCurve3(waypoints);
    this.walkerProgress = 0;
    this.isLiveNavActive = true;
    this.isNavPaused = false;
    this.onNavProgress = onProgress;
    this.onNavComplete = onComplete;

    this.walkerGroup.visible = true;

    // Draw full glowing 3D path tube
    this.draw3DNavigationRoute(targetCoord);

    // Position camera for start
    const startPt = this.walkerCurve.getPointAt(0);
    this.walkerGroup.position.copy(startPt);
    this.camera.position.set(startPt.x + 25, 35, startPt.z + 40);
    this.controls.target.copy(startPt);
  }

  pauseLiveNavigation() {
    this.isNavPaused = true;
  }

  resumeLiveNavigation() {
    this.isNavPaused = false;
  }

  stopLiveNavigation() {
    this.isLiveNavActive = false;
    this.isNavPaused = false;
    this.walkerProgress = 0;
    if (this.walkerGroup) {
      this.walkerGroup.visible = false;
    }
    this.resetCamera();
  }

  setLiveWalkerProgress(pct) {
    this.walkerProgress = Math.max(0, Math.min(1, pct));
    if (this.walkerCurve && this.walkerGroup) {
      const pt = this.walkerCurve.getPointAt(this.walkerProgress);
      this.walkerGroup.position.copy(pt);
      if (this.followWalkerCamera) {
        this.camera.position.set(pt.x + 25, 35, pt.z + 40);
        this.controls.target.copy(pt);
      }
    }
  }

  setNavSpeed(multiplier) {
    this.navSpeedMultiplier = multiplier;
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();

    // Floating destination beacon animation
    if (this.activePinMarker) {
      this.activePinMarker.position.y = 25 + Math.sin(Date.now() * 0.005) * 3;
      this.activePinMarker.rotation.y += 0.03;
    }

    // Live Walker Movement & Camera Following
    if (this.isLiveNavActive && !this.isNavPaused && this.walkerCurve && this.walkerGroup) {
      // Advance along path curve
      this.walkerProgress += 0.0016 * this.navSpeedMultiplier;

      if (this.walkerProgress >= 1) {
        this.walkerProgress = 1;
        this.isLiveNavActive = false;
        if (this.onNavComplete) this.onNavComplete();
      }

      const currentPos = this.walkerCurve.getPointAt(this.walkerProgress);
      this.walkerGroup.position.copy(currentPos);

      // Orient walker toward forward tangent
      const tangent = this.walkerCurve.getTangentAt(Math.min(0.999, this.walkerProgress)).normalize();
      const lookTarget = currentPos.clone().add(tangent);
      this.walkerGroup.lookAt(lookTarget);

      // Radar pulse ring animation
      if (this.walkerRing) {
        const scale = 1 + Math.sin(Date.now() * 0.01) * 0.25;
        this.walkerRing.scale.set(scale, scale, scale);
      }

      // Smooth third-person camera chase
      if (this.followWalkerCamera) {
        const camOffset = new THREE.Vector3(-tangent.x * 32 + 18, 28, -tangent.z * 32 + 22);
        const desiredCamPos = currentPos.clone().add(camOffset);
        this.camera.position.lerp(desiredCamPos, 0.06);
        this.controls.target.lerp(currentPos, 0.08);
      }

      // Notify callback for HUD and 2D map sync
      if (this.onNavProgress) {
        this.onNavProgress(this.walkerProgress, currentPos);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Global instance exposed for app.js
window.Campus3D = Campus3D;

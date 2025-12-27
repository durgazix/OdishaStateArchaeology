// ================= MOBILE MENU =================
// Toggle mobile menu
function toggleMenu() {
  const navList = document.getElementById("navList");
  const menuToggle = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("closeMenuBtn");

  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    menuToggle.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    menuToggle.style.display = "block";
    closeBtn.style.display = "none";
  }
}

// Loder section

// Show loader on page load and hide when fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const pageLoader = document.getElementById("pageLoader");

  // Show loader on initial page load
  if (pageLoader) {
    pageLoader.classList.add("active");
  }
});

// Hide loader when page and all resources are fully loaded
window.addEventListener("load", function () {
  const pageLoader = document.getElementById("pageLoader");
  if (pageLoader) {
    setTimeout(function () {
      pageLoader.classList.remove("active");
    }, 500);
  }
});

// Show loader on home-icon click
document.addEventListener("DOMContentLoaded", function () {
  const homeIcon = document.querySelector(".home-icon a");
  const pageLoader = document.getElementById("pageLoader");

  if (homeIcon && pageLoader) {
    homeIcon.addEventListener("click", function (e) {
      e.preventDefault();

      // Show loader
      pageLoader.classList.add("active");

      // Navigate to home after delay
      setTimeout(function () {
        window.location.href = "/";
      }, 1500);
    });
  }
});
// ================= PDF VIEWER =================

function closePDFViewer() {
  const modal = document.getElementById("pdfViewerModal");
  if (modal) {
    modal.style.display = "none";
    document.getElementById("pdfViewerFrame").src = "";
  }
}

// ================= INITIALIZATION =================

document.addEventListener("DOMContentLoaded", function () {

  /* DROPDOWN TOGGLE (ONLY ICON / LI, NOT LINK) */
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {

        // Allow link clicks
        if (e.target.tagName === "A") return;

        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });

  /* CLOSE MENU ON LINK CLICK */
  const navLinks = document.querySelectorAll(".nav-list li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        const navList = document.getElementById("navList");

        navList.classList.remove("active");
        document.getElementById("menuToggle").style.display = "block";
        document.getElementById("closeMenuBtn").style.display = "none";
      }
    });
  });

  /* CLICK OUTSIDE TO CLOSE */
  document.addEventListener("click", function (e) {
    const navList = document.getElementById("navList");
    const menuToggle = document.getElementById("menuToggle");
    const closeBtn = document.getElementById("closeMenuBtn");

    if (
      navList &&
      !navList.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      !closeBtn.contains(e.target)
    ) {
      navList.classList.remove("active");
      menuToggle.style.display = "block";
      closeBtn.style.display = "none";
    }
  });

  /* WINDOW RESIZE FIX */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      const navList = document.getElementById("navList");
      navList.classList.remove("active");
      document.getElementById("menuToggle").style.display = "block";
      document.getElementById("closeMenuBtn").style.display = "none";
    }
  });

  // Initialize gallery if function exists
  if (window.initGallery) {
    window.initGallery();
  }
});

// ================= JS FILES CONTENT BELOW =================

// - header.js
function initTopBarLanguageToggle() {
  const langBtn = document.getElementById("langToggleBtn");
  if (!langBtn) return;

  let currentLang = localStorage.getItem("lang") || "en";

  function applyTopBarLanguage(lang) {
    langBtn.innerText = lang === "en" ? "ଓଡ଼ିଆ" : "English";

    const supportText = document.querySelector(".support");
    if (supportText) {
      supportText.childNodes[0].nodeValue =
        lang === "en" ? "📞 Support: " : "📞 ସହଯୋଗ: ";
    }

    localStorage.setItem("lang", lang);
    currentLang = lang;
  }

  applyTopBarLanguage(currentLang);

  langBtn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "od" : "en";
    applyTopBarLanguage(newLang);
  });
}

/* ---------- GLOBAL HOME HANDLER (UNCHANGED LOGIC) ---------- */
/* Init after header load */
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  if (!headerContainer) {
    initTopBarLanguageToggle();
    return;
  }

  const observer = new MutationObserver(() => {
    if (document.getElementById("langToggleBtn")) {
      initTopBarLanguageToggle();
      observer.disconnect();
    }
  });

  observer.observe(headerContainer, { childList: true, subtree: true });
});

// - mid-navbar.js
function openVirtualTour() {
  document.getElementById("virtualModal").style.display = "block";
}

function closeVirtualTour() {
  const modal = document.getElementById("virtualModal");
  modal.style.display = "none";
  modal.querySelector("video").pause();
}

function closeVirtualTour() {
  const modal = document.getElementById("virtualModal");
  const video = document.getElementById("virtualTourVideo");

  modal.style.display = "none";

  // Pause and reset video
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// Optional: Close modal when clicking outside the video
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("virtualModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeVirtualTour();
      }
    });
  }
});
// - hero.js
document.addEventListener("DOMContentLoaded", () => {
  const checkHero = setInterval(() => {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    if (slides.length > 0) {
      clearInterval(checkHero);
      initHero(slides, dots);
    }
  }, 100);
});

function initHero(slides, dots) {
  let current = 0;
  const total = slides.length;
  const interval = 5000;
  let timer;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i]?.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index]?.classList.add("active");

    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % total);
  }

  function prevSlide() {
    showSlide((current - 1 + total) % total);
  }

  // Auto slide
  function startAuto() {
    timer = setInterval(nextSlide, interval);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  // Arrows
  document.querySelector(".hero-arrow.next")?.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  document.querySelector(".hero-arrow.prev")?.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      resetAuto();
    });
  });

  // Pause on hover
  const hero = document.querySelector(".hero");
  hero.addEventListener("mouseenter", () => clearInterval(timer));
  hero.addEventListener("mouseleave", startAuto);

  // Start
  showSlide(0);
  startAuto();
}


// Wait for hero component to be loaded
const heroObserver = new MutationObserver(() => {
  if (document.querySelector(".hero-slide")) {
    initializeHeroSlider();
    heroObserver.disconnect();
  }
});

// Start observing when document is ready
document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("hero");
  if (heroContainer) {
    heroObserver.observe(heroContainer, { childList: true, subtree: true });
  }
});

// - news-about.js
let currentNewsIndex = 0;
let autoSlideInterval;

// ==============================
// UPDATE SLIDE (FADE + SLIDE)
// ==============================
function updateNewsSlide(index) {
  const newsContent = document.querySelector("#news-about .news-content");
  const newsTitle = document.querySelector("#news-about .news-title");

  if (!newsContent || !newsTitle) return;

  clearInterval(autoSlideInterval);

  // 🔴 FADE OUT
  // newsContent.classList.remove("show");

  setTimeout(() => {
    // Update content
    newsTitle.textContent = newsItems[index].title;

    newsContent.innerHTML = `
      <div class="row g-3">
        <div class="col-md-8">
          <p class="news-text small text-muted lh-base mb-3">
            ${newsItems[index].text}
          </p>
          <a href="#" class="news-more text-danger fw-semibold text-decoration-none"
             onclick="showNewsPage(); return false;">More..</a>
        </div>
        <div class="col-md-4">
          <img src="${newsItems[index].image}"
               class="news-image img-fluid rounded"
               alt="${newsItems[index].title}">
        </div>
      </div>
    `;

    // 🟢 FADE IN + SLIDE
    setTimeout(() => {
      newsContent.classList.add("show");
    }, 50);
  }, 350);

  currentNewsIndex = index;
  startAutoSlide();
}

// ==============================
// AUTO SLIDE
// ==============================
function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    const next = (currentNewsIndex + 1) % newsItems.length;
    updateNewsSlide(next);
  }, 5000);
}

// ==============================
// INIT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector("#news-about .nav-prev");
  const nextBtn = document.querySelector("#news-about .nav-next");

  document.querySelector(".news-content")?.classList.add("show");

  prevBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const prev = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
    updateNewsSlide(prev);
  });

  nextBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const next = (currentNewsIndex + 1) % newsItems.length;
    updateNewsSlide(next);
  });

  startAutoSlide();
});

// - loader.js
// - about-detail.js
window.showAboutPage = function () {
  // Hide all sections using the global function
  hideAllSections();

  const aboutDetailSection = document.getElementById("about-detail");
  const footerSection = document.getElementById("footer");

  // Show About Detail section
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "block";
    aboutDetailSection.classList.add("active");
  }

  // Show Footer
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to about detail section
  setTimeout(() => {
    if (aboutDetailSection && aboutDetailSection.classList.contains("active")) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;

      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const aboutPosition =
        aboutDetailSection.getBoundingClientRect().top +
        window.pageYOffset -
        totalOffset;

      window.scrollTo({
        top: aboutPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.closeDetailPage = function () {
  const aboutDetailSection = document.getElementById("about-detail");

  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }

  // Return to home
  goHome();
};
// - activities-notice-links.js
document.addEventListener("DOMContentLoaded", function () {
  const linksContent = document.querySelector(".links-content");
  if (linksContent) {
    linksContent.innerHTML += linksContent.innerHTML;
  }

  const container = document.querySelector(".links-scroll-container");
  if (container) {
    container.addEventListener("mouseenter", () => {
      linksContent.style.animationPlayState = "paused";
    });
    container.addEventListener("mouseleave", () => {
      linksContent.style.animationPlayState = "running";
    });
  }
});

// - monuments.js
/* ===== MONUMENTS - PDF VIEWER ===== */

// Open PDF Viewer
function openPDFViewer(pdfPath, pdfTitle) {
  const modal = document.getElementById("pdfViewerModal");
  const iframe = document.getElementById("pdfViewerFrame");
  const title = document.getElementById("pdfViewerTitle");
  const downloadBtn = document.getElementById("pdfDownloadBtn");

  if (!modal || !iframe || !title || !downloadBtn) return;

  // Set PDF source and title
  iframe.src = pdfPath;
  title.textContent = pdfTitle;
  downloadBtn.href = pdfPath;
  downloadBtn.download = pdfTitle + ".pdf";

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close PDF Viewer
function closePDFViewer() {
  const modal = document.getElementById("pdfViewerModal");
  const iframe = document.getElementById("pdfViewerFrame");

  if (!modal || !iframe) return;

  iframe.src = "";
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* ===== MODAL EVENTS ===== */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pdfViewerModal");

  // Close on background click
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePDFViewer();
      }
    });
  }

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closePDFViewer();
    }
  });
});

/* ===== NAVIGATION FUNCTION ===== */
/* Called from navbar.js */
window.showMonumentsPage = function () {
  // Hide all sections
  hideAllSections();

  // Show monuments section
  const monumentsSection = document.getElementById("monuments");
  if (monumentsSection) {
    monumentsSection.style.display = "block";
  }

  // Show footer
  const footerSection = document.getElementById("footer");
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// - monuments-central.js
// Simple version with only manual data
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("centralMonumentsTableBody");
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  
  if (!tableBody) return;
  
  const allMonuments = [
    // ... (same manual data array as above)
    // Add more monuments here as needed
  ];
  
  let displayedCount = 10;
  const incrementCount = 10;
  
  // Initial render
  renderTable();
  
  function renderTable() {
    // Clear existing rows except the first 10
    const rowsToRemove = tableBody.querySelectorAll("tr:nth-child(n+11)");
    rowsToRemove.forEach(row => row.remove());
    
    // Add more rows if needed
    if (displayedCount > 10) {
      for (let i = 10; i < Math.min(displayedCount, allMonuments.length); i++) {
        const monument = allMonuments[i];
        const row = document.createElement("tr");
        
        row.innerHTML = `
          <td>${i + 1}</td>
          <td><strong>${monument.monument}</strong></td>
          <td>${monument.location}</td>
          <td>${monument.state}</td>
          <td>${monument.builtBy}</td>
          <td>${monument.period}</td>
        `;
        
        tableBody.appendChild(row);
      }
    }
    
    // Update count display
    document.getElementById("shownCount").textContent = 
      Math.min(displayedCount, allMonuments.length);
    document.getElementById("totalCount").textContent = allMonuments.length;
    
    // Hide button if all loaded
    if (displayedCount >= allMonuments.length && viewMoreBtn) {
      viewMoreBtn.style.display = 'none';
    }
  }
  
  // View More button
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", () => {
      displayedCount += incrementCount;
      renderTable();
    });
  }
});


// - state-protected.js
// Wait for both DOM and XLSX to be ready
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit to ensure XLSX is loaded
  setTimeout(initializeMonumentsTable, 100);
});

function initializeMonumentsTable() {
  const tableBody = document.getElementById("monumentsTableBody");
  if (!tableBody) {
    console.error("Table body not found!");
    return;
  }

  let allMonuments = [];
  let displayedCount = 20;
  const incrementCount = 20;

  // // First, preserve any existing manual data
  function extractManualData() {
    const existingRows = tableBody.querySelectorAll("tr:not(.loading-message)");
    const manualData = [];
    
    existingRows.forEach((row, index) => {
      const cells = row.querySelectorAll("td");
      if (cells.length >= 6) {
        manualData.push({
          sl: index+4 ,
          district: cells[1].textContent.trim(),
          name: cells[2].textContent.trim(),
          location: cells[3].textContent.trim(),
          period: cells[4].textContent.trim(),
          remarks: cells[5].textContent.trim()
        });
      }
    });
    
    return manualData;
  }

  async function loadMonumentsData() {
    try {
      // First, get any existing manual data
      const manualData = extractManualData();
      
      // Try to load Excel data
      const response = await fetch("assets/state-protected/state_protected_monuments.xlsx");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const buffer = await response.arrayBuffer();

      // Check if XLSX is loaded
      if (typeof XLSX === 'undefined') {
        console.error("XLSX library not loaded!");
        useManualDataOnly(manualData);
        return;
      }

      const workbook = XLSX.read(buffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);

      // Combine manual data with Excel data
      allMonuments = [
        ...manualData,
        ...data.map((row, index) => ({
          sl: manualData.length + index + 1,
          district: row["District"] || "",
          name: row["Monument Name"] || "",
          location: row["Location"] || "",
          period: row["Period"] || "",
          remarks: row["Remarks"] || "State Protected",
        }))
      ];

      renderMonuments();
    } catch (err) {
      console.error("Error loading monuments:", err);
      // Fallback to manual data only
      const manualData = extractManualData();
      allMonuments = manualData;
      renderMonuments();
    }
  }

  function useManualDataOnly(manualData) {
    allMonuments = manualData;
    renderMonuments();
  }

  function renderMonuments() {
    // Clear loading message if exists
    const loadingRow = tableBody.querySelector(".loading-message");
    if (loadingRow) {
      loadingRow.closest("tr").remove();
    }

    // Clear any existing non-manual rows
    const existingRows = tableBody.querySelectorAll("tr");
    if (existingRows.length > 0) {
      // Keep first 3 manual rows if they exist
      for (let i = existingRows.length - 1; i >= 3; i--) {
        existingRows[i].remove();
      }
    }

    const slice = allMonuments.slice(0, displayedCount);

    slice.forEach((m) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${m.sl}</td>
        <td>${m.district}</td>
        <td>${m.name}</td>
        <td>${m.location}</td>
        <td>${m.period}</td>
        <td>${m.remarks}</td>
      `;
      tableBody.appendChild(row);
    });

    if (displayedCount < allMonuments.length) {
      // Remove existing view more row if exists
      const existingViewMore = tableBody.querySelector(".view-more-row");
      if (existingViewMore) {
        existingViewMore.remove();
      }

      const row = document.createElement("tr");
      row.className = "view-more-row";
      row.innerHTML = `
        <td colspan="6" class="view-more-cell">
          <button class="view-more-btn" id="viewMoreBtn">
            View More
          </button>
          <span class="monuments-count">
            Showing ${Math.min(displayedCount, allMonuments.length)} of ${allMonuments.length}
          </span>
        </td>
      `;
      tableBody.appendChild(row);

      document.getElementById("viewMoreBtn").onclick = () => {
        displayedCount += incrementCount;
        renderMonuments();
      };
    }
  }

  loadMonumentsData();
}


// - unprotected-monuments.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Unprotected Monuments page loaded");
});


// - archaeology-library.js
document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("archSliderTrack");
  const slides = document.querySelectorAll(".arch-slider-slide");
  const dots = document.querySelectorAll(".arch-dot");
  const prevBtn = document.getElementById("archPrevSlide");
  const nextBtn = document.getElementById("archNextSlide");
  const pausePlayBtn = document.getElementById("archPausePlayBtn");
  const readMoreBtn = document.getElementById("archLibraryReadMore");

  // ✅ SAFETY CHECK (important after layout changes)
  if (!sliderTrack || slides.length === 0) return;

  let currentSlide = 0;
  let autoPlayInterval = null;
  let isPlaying = true;

  /* =====================================
     SHOW SLIDE
  ===================================== */
  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  /* =====================================
     NAVIGATION
  ===================================== */
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  /* =====================================
     AUTOPLAY
  ===================================== */
  function startAutoPlay() {
    stopAutoPlay(); // prevent multiple intervals
    autoPlayInterval = setInterval(nextSlide, 4000);
    isPlaying = true;

    if (pausePlayBtn) {
      pausePlayBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
    isPlaying = false;

    if (pausePlayBtn) {
      pausePlayBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
  }

  /* =====================================
     EVENTS
  ===================================== */
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = Number(dot.dataset.slide);
      showSlide(slideIndex);
      startAutoPlay();
    });
  });

  if (pausePlayBtn) {
    pausePlayBtn.addEventListener("click", () => {
      isPlaying ? stopAutoPlay() : startAutoPlay();
    });
  }

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      showLibraryDetailPage();
    });
  }

  /* =====================================
     HOVER PAUSE
  ===================================== */
  sliderTrack.addEventListener("mouseenter", stopAutoPlay);
  sliderTrack.addEventListener("mouseleave", () => {
    if (isPlaying) startAutoPlay();
  });

  /* =====================================
     INIT
  ===================================== */
  showSlide(0);
  startAutoPlay();
});

// - library.js
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("librarySliderContainer");
  const slides = document.querySelectorAll(".slider-slide");
  const prevBtn = document.getElementById("prevArrow");
  const nextBtn = document.getElementById("nextArrow");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlide;

  function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateSlide();
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Button events
  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  // Pause on hover
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  // Swipe support
  let startX = 0;
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
  });

  // Init
  updateSlide();
  startAutoSlide();
});

// - books-journals.js
document.addEventListener("DOMContentLoaded", () => {
  // Books & Journals page initialization
  console.log("Books & Journals page loaded");
});

// - gallery.js
function scrollToGallery() {
  document
    .getElementById("gallery")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
document.addEventListener("DOMContentLoaded", function () {

  initGallery();
});

let galleryInitialized = false;

function initGallery() {
  // Prevent multiple initializations
  if (galleryInitialized) return;
  galleryInitialized = true;

  const photoTab = document.getElementById("photoTab");
  const videoTab = document.getElementById("videoTab");
  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");
  const photoViewMore = document.getElementById("photoViewMore");
  const photoViewLess = document.getElementById("photoViewLess");
  const videoViewMore = document.getElementById("videoViewMore");
  const videoViewLess = document.getElementById("videoViewLess");
  const extraPhotos = document.querySelectorAll(".extra-photo");
  const extraVideos = document.querySelectorAll(".extra-video");

  // Check if we're on the gallery page (has breadcrumb)
  const isGalleryPage = document.getElementById("gallery-breadcrumb") !== null;

  // Function to pause all videos
  function pauseAllVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  }
  // Tab switching functionality
  if (photoTab) {
    photoTab.addEventListener("click", function () {
      photoTab.classList.add("active");
      videoTab.classList.remove("active");
      photoGallery.classList.remove("d-none");
      videoGallery.classList.add("d-none");

      // Pause any playing videos when switching to photos
      pauseAllVideos();
    });
  }

  if (videoTab) {
    videoTab.addEventListener("click", function () {
      videoTab.classList.add("active");
      photoTab.classList.remove("active");
      videoGallery.classList.remove("d-none");
      photoGallery.classList.add("d-none");

      // Pause all videos when switching tab
      pauseAllVideos();
    });
  }

  // Photo View More/Less functionality
  if (photoViewMore) {
    photoViewMore.addEventListener("click", function () {
      // Show all extra photos
      extraPhotos.forEach(photo => {
        photo.classList.remove("d-none");
      });

      // Toggle buttons
      photoViewMore.classList.add("d-none");
      photoViewLess.classList.remove("d-none");
    });
  }

  if (photoViewLess) {
    photoViewLess.addEventListener("click", function () {
      // Hide all extra photos
      extraPhotos.forEach(photo => {
        photo.classList.add("d-none");
      });

      // Toggle buttons
      photoViewLess.classList.add("d-none");
      photoViewMore.classList.remove("d-none");
    });
  }

  // Video View More/Less functionality
  if (videoViewMore) {
    videoViewMore.addEventListener("click", function () {
      // Show all extra videos
      extraVideos.forEach(video => {
        video.classList.remove("d-none");
      });

      // Toggle buttons
      videoViewMore.classList.add("d-none");
      videoViewLess.classList.remove("d-none");

      // Pause videos when showing more
      pauseAllVideos();
    });
  }

  if (videoViewLess) {
    videoViewLess.addEventListener("click", function () {
      // Hide all extra videos
      extraVideos.forEach(video => {
        video.classList.add("d-none");
      });

      // Toggle buttons
      videoViewLess.classList.add("d-none");
      videoViewMore.classList.remove("d-none");

      // Pause videos when showing more
      pauseAllVideos();
    });
  }

  // On gallery page, show all photos by default
  if (isGalleryPage) {
    extraPhotos.forEach(photo => {
      photo.classList.remove("d-none");
    });
    if (photoViewMore) photoViewMore.classList.add("d-none");
    if (photoViewLess) photoViewLess.classList.remove("d-none");
  }

  // Initialize all videos to NOT autoplay
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(video => {
    // Remove autoplay attribute if it exists
    video.removeAttribute('autoplay');
    // Ensure controls are visible
    video.setAttribute('controls', '');
    // Set to not autoplay
    video.autoplay = false;
    // Set preload to metadata instead of auto
    video.preload = 'metadata';
  });
}

// - contact-us.js
// Handle contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const contactNo = document.getElementById("contactNo").value;
      const message = document.getElementById("message").value;

      // Basic validation
      if (!name || !email || !contactNo) {
        alert("Please fill in all required fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      alert("Thank you for your message! We will get back to you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Handle map link click - redirect to map app
  const viewLargerMapLink = document.getElementById("viewLargerMapLink");

  if (viewLargerMapLink) {
    viewLargerMapLink.addEventListener("click", function (e) {
      // The link already has target="_blank" and href to Google Maps
      // This will open in a new tab/window, or redirect to map app on mobile
      // Additional functionality can be added here if needed
    });
  }
});

// - act-rules.js
const pdfFiles = {
  act1: {
    title:"Odisha Development Authorities (Planning and Building Standards) Act & Rules 2020",
    file: "assets/act-rules-pdfs/Act&Rules_1.pdf",
  },
  act2: {
    title: "Orissa Ancient Monuments Preservation Rule, 1958",
    file: "assets/act-rules-pdfs/Act&Rules_1.pdf",
  },
  act3: {
    title: "Orissa Ancient Monuments Preservation Act, 1956",
    file: "assets/act-rules-pdfs/Act&Rules_1.pdf",
  },
};

window.openPDFViewer = function (id) {
  const modal = document.getElementById("pdfViewerModal");
  document.getElementById("pdfTitle").textContent = pdfFiles[id].title;
  document.getElementById("pdfFrame").src = pdfFiles[id].file;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closePDFViewer = function () {
  document.getElementById("pdfViewerModal").classList.remove("active");
  document.getElementById("pdfFrame").src = "";
  document.body.style.overflow = "";
};

window.downloadPDF = function (id) {
  const a = document.createElement("a");
  a.href = pdfFiles[id].file;
  a.download = pdfFiles[id].file.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// - rti.js
document.addEventListener("DOMContentLoaded", () => {
  const newRtiData = [
    {
      sl: "4.",
      rti: "Right to Information Act, 2005",
      officer: "Mr. Satyabrata Nayak",
      designation: "Assistant Public Information Officer",
      address: "Odisha State Archaeology, Bhubaneswar",
      contact: "6742390456",
    },
    {
      sl: "5.",
      rti: "Odisha Transparency in Public Service Act, 2012",
      officer: "Ms. Anjali Mishra",
      designation: "Public Information Officer",
      address: "Directorate of Archaeology, Odisha",
      contact: "6742390789",
    },
  ];

  const tableBody = document.querySelector(".acts-table-rti tbody");
  if (!tableBody) return;

  newRtiData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.sl}</td>
      <td>${item.rti}</td>
      <td>${item.officer}</td>
      <td>${item.designation}</td>
      <td>${item.address}</td>
      <td>${item.contact}</td>
    `;
    tableBody.appendChild(row);
  });
});

// ================= UTILITY FUNCTIONS =================

// // Go to home page
// function goHome() {
//   // Hide all sections
//   hideAllSections();

//   // Show home sections
//   const heroSection = document.getElementById("hero");
//   const newsAboutSection = document.getElementById("news-about");
//   const monumentsContainer = document.getElementById("monuments-container");
//   const activitiesSection = document.getElementById("activities-notice-links");
//   const gallerySection = document.getElementById("gallery");
//   const footerSection = document.getElementById("footer");

//   if (heroSection) heroSection.style.display = "block";
//   if (newsAboutSection) newsAboutSection.style.display = "block";
//   if (monumentsContainer) monumentsContainer.style.display = "block";
//   if (activitiesSection) activitiesSection.style.display = "block";
//   if (gallerySection) gallerySection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   // Scroll to top
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// Hide all sections
// function hideAllSections() {
//   const sections = [
//     'hero', 'news-about', 'monuments-container', 'monuments-central',
//     'state-protected', 'unprotected', 'archaeology-library', 'library-detail',
//     'books-journals', 'activities-notice-links', 'gallery', 'about-detail',
//     'staffing-pattern', 'news-page', 'contact-us', 'act-rules', 'rti'
//   ];

//   sections.forEach(id => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.style.display = "none";
//       element.classList.remove("active");
//     }
//   });

//   const monumentSection = document.querySelector(".monuments-section");
//   if (monumentSection) monumentSection.style.display = "none";

//   const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
//   if (galleryBreadcrumb) galleryBreadcrumb.style.display = "none";
// }

// Get total navbar offset
// function getTotalNavbarOffset() {
//   const navbar = document.querySelector(".main-navbar");
//   const header = document.getElementById("header");
//   const midNavbar = document.getElementById("mid-navbar");

//   return (navbar?.offsetHeight || 0) +
//          (header?.offsetHeight || 0) +
//          (midNavbar?.offsetHeight || 0);
// }

// Scroll to section with offset
// function scrollToSection(element, delay = 100) {
//   setTimeout(() => {
//     if (element) {
//       const totalOffset = getTotalNavbarOffset();
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - totalOffset;

//       window.scrollTo({
//         top: elementPosition,
//         behavior: "smooth",
//       });
//     }
//   }, delay);
// }

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

// ================= PAGE NAVIGATION FUNCTIONS =================

// Show Gallery page
// window.showGalleryPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const gallerySection = document.getElementById("gallery");
//   const footerSection = document.getElementById("footer");
//   const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");

//   if (galleryBreadcrumb) galleryBreadcrumb.style.display = "block";
//   if (gallerySection) gallerySection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(gallerySection);
// };

// Show About page
// window.showAboutPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const aboutDetailSection = document.getElementById("about-detail");
//   const footerSection = document.getElementById("footer");

//   if (aboutDetailSection) {
//     aboutDetailSection.style.display = "block";
//     aboutDetailSection.classList.add("active");
//   }
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(aboutDetailSection);
// };

// Show Staffing Pattern page
// window.showStaffingPatternPage = function () {
//   hideAllSections();

//   const staffingPatternSection = document.getElementById("staffing-pattern");
//   const footerSection = document.getElementById("footer");

//   if (staffingPatternSection) {
//     staffingPatternSection.style.display = "block";
//     staffingPatternSection.classList.add("active");
//   }
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(staffingPatternSection);
// };

// Show News page
// window.showNewsPage = function () {
//   hideAllSections();

//   const newsPageSection = document.getElementById("news-page");
//   const footerSection = document.getElementById("footer");

//   if (newsPageSection) {
//     newsPageSection.style.display = "block";
//     newsPageSection.classList.add("active");
//   }
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(newsPageSection);
// };

// Show Contact Us page
// window.showContactUsPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const contactUsSection = document.getElementById("contact-us");
//   const footerSection = document.getElementById("footer");

//   if (contactUsSection) contactUsSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(contactUsSection);
// };

// Show Act & Rules page
// window.showActRulesPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const actRulesSection = document.getElementById("act-rules");
//   const footerSection = document.getElementById("footer");

//   if (actRulesSection) actRulesSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(actRulesSection);
// };

// Show RTI page
// window.showRTIPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const rtiSection = document.getElementById("rti");
//   const footerSection = document.getElementById("footer");

//   if (rtiSection) rtiSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(rtiSection);
// };

// Show Monuments page
// window.showMonumentsPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const monumentSection = document.querySelector(".monuments-section");
//   const footerSection = document.getElementById("footer");

//   if (monumentSection) monumentSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(monumentSection);
// };

// Show Central Protected Monuments page
// window.showMonumentsCentralPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const monumentsCentralSection = document.getElementById("monuments-central");
//   const footerSection = document.getElementById("footer");

//   if (monumentsCentralSection) monumentsCentralSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(monumentsCentralSection);
// };

// Show State Protected Monuments page
// window.showStateMonumentsPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const stateProtectedSection = document.getElementById("state-protected");
//   const footerSection = document.getElementById("footer");

//   if (stateProtectedSection) stateProtectedSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(stateProtectedSection);
// };

// Show Unprotected Monuments page
// window.showUnprotectedMonumentsPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const unprotectedSection = document.getElementById("unprotected");
//   const footerSection = document.getElementById("footer");

//   if (unprotectedSection) unprotectedSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(unprotectedSection);
// };

// Show Archaeology Library page
// window.showArchaeologyLibraryPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const archaeologyLibrarySection = document.getElementById("archaeology-library");
//   const footerSection = document.getElementById("footer");

//   if (archaeologyLibrarySection) archaeologyLibrarySection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(archaeologyLibrarySection);
// };

// Show Library Detail page
// window.showLibraryDetailPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const libraryDetailSection = document.getElementById("library-detail");
//   const footerSection = document.getElementById("footer");

//   if (libraryDetailSection) libraryDetailSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(libraryDetailSection);
// };

// Show Books & Journals page
// window.showBooksJournalsPage = function () {
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   hideAllSections();

//   const booksJournalsSection = document.getElementById("books-journals");
//   const footerSection = document.getElementById("footer");

//   if (booksJournalsSection) booksJournalsSection.style.display = "block";
//   if (footerSection) footerSection.style.display = "block";

//   scrollToSection(booksJournalsSection);
// };

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
  // Handle dropdown clicks on mobile
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        const navList = document.getElementById("navList");
        if (!this.parentElement.classList.contains("dropdown")) {
          navList.classList.remove("active");
          document.getElementById("menuToggle").style.display = "block";
          document.getElementById("closeMenuBtn").style.display = "none";
        }
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    const navList = document.getElementById("navList");
    const menuToggle = document.getElementById("menuToggle");
    const closeBtn = document.getElementById("closeMenuBtn");
    const mobileIcons = document.querySelector(".mobile-icons");
    const mainNavbar = document.querySelector(".main-navbar");

    if (
      navList &&
      menuToggle &&
      closeBtn &&
      !navList.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      !closeBtn.contains(e.target) &&
      !mobileIcons?.contains(e.target) &&
      !mainNavbar?.contains(e.target) &&
      navList.classList.contains("active")
    ) {
      navList.classList.remove("active");
      menuToggle.style.display = "block";
      closeBtn.style.display = "none";
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    const navList = document.getElementById("navList");
    if (window.innerWidth > 992 && navList) {
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

// ================= ADD YOUR OTHER JS FILES CONTENT BELOW =================
// Copy content from:
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

const newsItems = [
  {
    title: "Preservation of Jagannath Temple Complex - A Living Monument",
    text: "The Jagannath Temple in Puri is one of Odisha's most sacred and architecturally significant monuments. The Department of Archaeology continues its dedicated efforts to preserve this 12th-century masterpiece.",
    image: "assets/news/Vallam-min_1.jpg",
  },
  {
    title: "Konark Sun Temple - Architectural Marvel of Odisha",
    text: "The Sun Temple at Konark is a UNESCO World Heritage Site and represents the pinnacle of Odishan medieval architecture.",
    image: "assets/news/Vallam-min_2.jpg",
  },
  {
    title: "Recent Archaeological Excavations Unveil Ancient Odisha",
    text: "Recent excavations across Odisha have revealed pottery, coins, and remains highlighting Odisha’s ancient civilization.",
    image: "assets/news/Vallam-min_3.jpg",
  },
];

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
/* ===== MONUMENT IMAGE VIEWER ===== */

const monumentImages = [
  "assets/central-monuments/img_1.jpg",
  "assets/central-monuments/img_2.jpg",
  "assets/central-monuments/img_3.jpg",
  "assets/central-monuments/img_4.jpg",
  "assets/central-monuments/img_5.jpg",
  "assets/central-monuments/img_6.jpg",
  "assets/central-monuments/img_7.jpg",
  "assets/central-monuments/img_8.jpg",
];

let currentIndex = 0;

function openImageViewer(index) {
  currentIndex = index;
  updateViewer();
  document.getElementById("monumentsViewer").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageViewer() {
  document.getElementById("monumentsViewer").classList.remove("active");
  document.body.style.overflow = "";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % monumentImages.length;
  updateViewer();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + monumentImages.length) % monumentImages.length;
  updateViewer();
}

function updateViewer() {
  document.getElementById("viewerImage").src = monumentImages[currentIndex];
  document.getElementById("viewerCurrent").textContent = currentIndex + 1;
  document.getElementById("viewerTotal").textContent = monumentImages.length;
}

/* ===== NAVIGATION ===== */
window.showMonumentsCentralPage = function () {
  hideAllSections();
  document.getElementById("monuments-central").style.display = "block";
  document.getElementById("footer").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// - state-protected.js
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("monumentsTableBody");
  if (!tableBody) return;

  let allMonuments = [];
  let displayedCount = 20;
  const incrementCount = 20;

  async function loadMonumentsData() {
    try {
      const response = await fetch(
        "assets/state-monuments/state_protected_monuments.xlsx"
      );
      const buffer = await response.arrayBuffer();

      const workbook = XLSX.read(buffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      allMonuments = data.map((row, index) => ({
        sl: index + 1,
        district: row["District"] || "",
        name: row["Monument Name"] || "",
        location: row["Location"] || "",
        period: row["Period"] || "",
        remarks: row["Remarks"] || "State Protected",
      }));

      renderMonuments();
    } catch (err) {
      console.error(err);
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="loading-message">
            Failed to load monuments data.
          </td>
        </tr>
      `;
    }
  }

  function renderMonuments() {
    tableBody.innerHTML = "";

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
      const row = document.createElement("tr");
      row.className = "view-more-row";
      row.innerHTML = `
        <td colspan="6" class="view-more-cell">
          <button class="view-more-btn" id="viewMoreBtn">
            View More
          </button>
          <span class="monuments-count">
            Showing ${displayedCount} of ${allMonuments.length}
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
});

// - unprotected-monuments.js
document.addEventListener("DOMContentLoaded", () => {
  // No dynamic content needed for now
  // This file is ready for future functionality
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

  // You can add any interactive functionality here if needed in the future
  // For now, this page is static content only
});
// - gallery.js
/* ===============================
   GALLERY INITIALIZATION
================================ */

window.initGallery = function () {
  const photoTab = document.getElementById("photoTab");
  const videoTab = document.getElementById("videoTab");

  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");

  const galleryItems = document.getElementById("galleryItems");

  const photoViewMore = document.getElementById("photoViewMore");
  const photoViewLess = document.getElementById("photoViewLess");

  const videoViewMore = document.getElementById("videoViewMore");
  const videoViewLess = document.getElementById("videoViewLess");

  const extraVideos = document.querySelectorAll(".extra-video");

  /* ================= PHOTO DATA ================= */
  const photoData = [
    { src: "assets/gallery/gallery_1.jpg", cap: "Ancient Temple" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Architecture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Painting" },
    { src: "assets/gallery/gallery_4.jpg", cap: "Historic Site" },
    { src: "assets/gallery/gallery_5.jpeg", cap: "Cultural Heritage" },
    { src: "assets/gallery/gallery_1.jpg", cap: "Monument" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Sculpture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Artifact" },
  ];

  /* ================= RENDER ================= */

  function renderPhotos(limit) {
    galleryItems.innerHTML = "";
    photoData.slice(0, limit).forEach((item) => {
      galleryItems.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="gallery-item">
            <img src="${item.src}" class="img-fluid">
            <div class="gallery-caption">${item.cap}</div>
          </div>
        </div>`;
    });
  }

  function showPreviewPhotos() {
    renderPhotos(4);
    photoViewMore.classList.remove("d-none");
    photoViewLess.classList.add("d-none");
  }

  function showAllPhotos() {
    renderPhotos(photoData.length);
    photoViewMore.classList.add("d-none");
    photoViewLess.classList.remove("d-none");
  }

  /* ================= INITIAL STATE ================= */
  showPreviewPhotos();
  photoGallery.classList.remove("d-none");
  videoGallery.classList.add("d-none");

  /* ================= TAB SWITCH ================= */

  photoTab.onclick = () => {
    photoTab.classList.add("active");
    videoTab.classList.remove("active");

    photoGallery.classList.remove("d-none");
    videoGallery.classList.add("d-none");

    showPreviewPhotos();
  };

  videoTab.onclick = () => {
    videoTab.classList.add("active");
    photoTab.classList.remove("active");

    videoGallery.classList.remove("d-none");
    photoGallery.classList.add("d-none");

    extraVideos.forEach((v) => v.classList.add("d-none"));
    videoViewMore.classList.remove("d-none");
    videoViewLess.classList.add("d-none");
  };

  /* ================= PHOTO VIEW MORE / LESS ================= */

  photoViewMore.onclick = () => {
    showGalleryFullPage("photo");
  };

  photoViewLess.onclick = () => {
    showPreviewPhotos();
    scrollToGallery();
  };

  /* ================= VIDEO VIEW MORE / LESS ================= */

  videoViewMore.onclick = () => {
    showGalleryFullPage("video");
  };

  videoViewLess.onclick = () => {
    extraVideos.forEach((v) => v.classList.add("d-none"));
    videoViewLess.classList.add("d-none");
    videoViewMore.classList.remove("d-none");
    scrollToGallery();
  };
};

/* ===============================
   FULL GALLERY PAGE HANDLER
================================ */

window.showGalleryFullPage = function (type) {
  hideAllSections();

  const gallery = document.getElementById("gallery");
  const breadcrumb = document.getElementById("gallery-breadcrumb");

  gallery.style.display = "block";
  breadcrumb.classList.remove("d-none");

  const photoTab = document.getElementById("photoTab");
  const videoTab = document.getElementById("videoTab");

  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");

  const galleryItems = document.getElementById("galleryItems");
  const extraVideos = document.querySelectorAll(".extra-video");

  if (type === "photo") {
    photoTab.classList.add("active");
    videoTab.classList.remove("active");

    photoGallery.classList.remove("d-none");
    videoGallery.classList.add("d-none");

    galleryItems.innerHTML = "";
    [
      "gallery_1.jpg",
      "gallery_2.jpg",
      "gallery_3.jpg",
      "gallery_4.jpg",
      "gallery_5.jpeg",
      "gallery_1.jpg",
      "gallery_2.jpg",
      "gallery_3.jpg",
    ].forEach((img) => {
      galleryItems.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="gallery-item">
            <img src="assets/gallery/${img}" class="img-fluid">
          </div>
        </div>`;
    });

    photoViewMore.classList.add("d-none");
    photoViewLess.classList.remove("d-none");
  }

  if (type === "video") {
    videoTab.classList.add("active");
    photoTab.classList.remove("active");

    videoGallery.classList.remove("d-none");
    photoGallery.classList.add("d-none");

    extraVideos.forEach((v) => v.classList.remove("d-none"));

    videoViewMore.classList.add("d-none");
    videoViewLess.classList.remove("d-none");
  }

  scrollToGallery();
};

/* ===============================
   SCROLL
================================ */

function scrollToGallery() {
  document
    .getElementById("gallery")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});

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
    title:
      "Odisha Development Authorities (Planning and Building Standards) Act & Rules 2020",
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
      contact: "0674-2390456",
    },
    {
      sl: "5.",
      rti: "Odisha Transparency in Public Service Act, 2012",
      officer: "Ms. Anjali Mishra",
      designation: "Public Information Officer",
      address: "Directorate of Archaeology, Odisha",
      contact: "0674-2390789",
    },
  ];

  const tableBody = document.querySelector(".acts-table tbody");
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

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
  const navItems = document.querySelectorAll(".nav-list > li");
  const currentPage = window.location.pathname.split("/").pop();

  navItems.forEach((li) => {
    const mainLink = li.querySelector(":scope > a");
    const subLinks = li.querySelectorAll(".dropdown-menu a");

    // RESET ACTIVE
    li.classList.remove("active");

    // ✅ CASE 1: MAIN LINK MATCH
    if (mainLink && mainLink.getAttribute("href") === currentPage) {
      li.classList.add("active");
    }

    // ✅ CASE 2: SUB MENU MATCH → ACTIVATE PARENT
    subLinks.forEach((subLink) => {
      if (subLink.getAttribute("href") === currentPage) {
        li.classList.add("active");
      }
    });
  });

  // ✅ HOME DEFAULT
  if (currentPage === "" || currentPage === "index.html") {
    document.querySelector(".home-icon")?.classList.add("active");
  }
});

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
document.addEventListener("DOMContentLoaded", () => {
  const imageViewer = document.getElementById("imageViewer");
  const videoViewer = document.getElementById("videoViewer");

  const viewerImage = document.getElementById("viewerImage");
  const viewerVideo = document.getElementById("viewerVideo");

  const imgCaption = document.getElementById("viewerCaption");
  const vidCaption = document.getElementById("videoCaption");

  /* IMAGE CLICK */
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      viewerImage.src = img.src;
      imgCaption.textContent = img.nextElementSibling?.innerText || "";
      imageViewer.classList.remove("d-none");
      document.body.style.overflow = "hidden";
    });
  });

  /* VIDEO CLICK */
  document.querySelectorAll(".video-card video").forEach((video) => {
    video.addEventListener("click", () => {
      viewerVideo.src = video.currentSrc;
      vidCaption.textContent =
        video.parentElement.querySelector("p")?.innerText || "";
      videoViewer.classList.remove("d-none");
      viewerVideo.play();
      document.body.style.overflow = "hidden";
    });
  });

  /* CLOSE BUTTONS */
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", closeAll);
  });

  /* CLICK OUTSIDE */
  [imageViewer, videoViewer].forEach((viewer) => {
    viewer.addEventListener("click", (e) => {
      if (e.target === viewer) closeAll();
    });
  });

  /* ESC KEY */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  function closeAll() {
    imageViewer.classList.add("d-none");
    videoViewer.classList.add("d-none");
    viewerImage.src = "";
    viewerVideo.pause();
    viewerVideo.src = "";
    document.body.style.overflow = "auto";
  }
});

// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".main-navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
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
let viewer = null;

function openVirtualTour() {
  const modal = document.getElementById("virtualModal");
  const panoDiv = document.getElementById("panoramaViewer");

  modal.style.display = "flex";

  if (!viewer) {
    const imageSrc = panoDiv.getAttribute("data-panorama");

    viewer = pannellum.viewer("panoramaViewer", {
      type: "equirectangular",
      panorama: imageSrc,
      autoLoad: true,
      compass: true,
      showFullscreenCtrl: true,
      mouseZoom: true,
    });
  }
}

function closeVirtualTour() {
  document.getElementById("virtualModal").style.display = "none";
}

// Close modal when clicking outside the video
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
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".hero-arrow.next");
  const prevBtn = document.querySelector(".hero-arrow.prev");
  const hero = document.querySelector(".hero");

  let current = 0;
  let timer;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev");

      if (i === index) {
        slide.classList.add("active");
      } else if (i === current) {
        slide.classList.add("prev");
      }
    });

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAutoSlide() {
    timer = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(timer);
  }

  // ▶ Buttons
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

  // ▶ Dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // ✅ PAUSE ON HOVER
  hero.addEventListener("mouseenter", () => {
    stopAutoSlide();
  });

  hero.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  // Start slider
  showSlide(0);
  startAutoSlide();
});

// - news-about.js

let currentNewsIndex = 0;
let autoSlideInterval = null;
let newsItems = [];

function loadNewsFromHTML() {
  const items = document.querySelectorAll("#news-data .news-item-data");

  if (!items.length) {
    console.warn("No news items found in #news-data");
    return false;
  }

  newsItems = Array.from(items).map((item) => ({
    title: item.querySelector("h3")?.textContent || "Untitled",
    text: item.querySelector("p")?.textContent || "",
    image: item.querySelector("img")?.getAttribute("src") || "",
    alt: item.querySelector("img")?.getAttribute("alt") || "",
  }));

  console.log(`Loaded ${newsItems.length} news items`);
  return true;
}

function updateNewsSlide(index) {
  const newsContent = document.querySelector("#news-about .news-content");
  const newsTitle = document.querySelector("#news-about .news-title");

  if (!newsContent || !newsTitle || !newsItems.length) return;

  if (index < 0 || index >= newsItems.length) index = 0;

  clearInterval(autoSlideInterval);

  // Fade out
  newsContent.classList.remove("show");

  setTimeout(() => {
    const item = newsItems[index];

    newsTitle.textContent = item.title;

    newsContent.innerHTML = `
      <div class="row g-3 align-items-start">
        <div class="col-md-8">
          <p class="news-text small text-muted lh-base mb-3">
            ${item.text}
          </p>
          <a href="news-page.html" class="news-more fw-semibold text-decoration-none">
            More..
          </a>
        </div>
        <div class="col-md-4">
          <img src="${item.image}"
               alt="${item.alt || item.title}"
               class="news-image img-fluid rounded w-100"
               loading="lazy">
        </div>
      </div>
    `;

    newsContent.classList.add("show");
  }, 300);

  currentNewsIndex = index;
  startAutoSlide();
}

function startAutoSlide() {
  clearInterval(autoSlideInterval);

  if (newsItems.length <= 1) return;

  autoSlideInterval = setInterval(() => {
    const next = (currentNewsIndex + 1) % newsItems.length;
    updateNewsSlide(next);
  }, 5000);
}

function initializeNewsSlider() {
  if (!loadNewsFromHTML()) {
    // newsItems = [
    //   {
    //     title: "Department of Archaeology",
    //     text: "Latest updates from the Department of Archaeology.",
    //     image: "assets/news/Vallam-min_6.jpg",
    //     alt: "News",
    //   },
    // ];
  }

  const prevBtn = document.querySelector("#news-about .nav-prev");
  const nextBtn = document.querySelector("#news-about .nav-next");

  updateNewsSlide(0);

  prevBtn?.addEventListener("click", () => {
    const prev = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
    updateNewsSlide(prev);
  });

  nextBtn?.addEventListener("click", () => {
    const next = (currentNewsIndex + 1) % newsItems.length;
    updateNewsSlide(next);
  });

  startAutoSlide();
}

document.addEventListener("DOMContentLoaded", () => {
  initializeNewsSlider();

  const newsBox = document.querySelector("#news-about");

  if (newsBox) {
    // newsBox.addEventListener("mouseenter", () => {
    //   clearInterval(autoSlideInterval);
    // });

    newsBox.addEventListener("mouseleave", () => {
      startAutoSlide();
    });
  }
});

//news-about.js
document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.querySelector(".about-text");

  if (!aboutText) return;

  const maxWords = 72;
  const maxChars = 625;

  let text = aboutText.innerText.trim();

  // Limit by characters
  if (text.length > maxChars) {
    text = text.substring(0, maxChars);
  }

  // Limit by words
  let words = text.split(/\s+/);
  if (words.length > maxWords) {
    text = words.slice(0, maxWords).join(" ");
  }

  aboutText.innerText = text + "...";
});

// - about-detail.js
window.showAboutPage = function () {
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
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".activity-item");

  items.forEach((item, index) => {
    if (index >= 4) {
      item.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".notice-content");

  items.forEach((item, index) => {
    if (index >= 4) {
      item.style.display = "none";
    }
  });
});
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
/* ===== EVENT LISTENERS FOR PDF VIEWER ===== */
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, setting up PDF viewer listeners"); // Debug log

  const modal = document.getElementById("pdfViewerModal");

  if (!modal) {
    console.error("PDF Viewer Modal not found in DOM!");
    return;
  }

  // Close on background click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closePDFViewer();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closePDFViewer();
    }
  });

  // Make entire PDF cards clickable (optional)
  const pdfCards = document.querySelectorAll(".pdf-card");
  pdfCards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      // Only trigger if not clicking on the button itself
      if (!e.target.closest(".pdf-btn")) {
        const btn = this.querySelector(".pdf-btn");
        if (btn) {
          btn.click();
        }
      }
    });
  });

  console.log("PDF viewer setup complete"); // Debug log
});

// - monuments-central.js

document.addEventListener("DOMContentLoaded", () => {
  initNationalTablePagination();
});

/* ===============================
   UNIQUE VARIABLES (NO CONFLICT)
================================ */
let nationalTableData = [];
let nationalCurrentPage = 1;
const nationalRowsPerPage = 10; // change to 10 later

/* ===============================
   INITIALIZE
================================ */
function initNationalTablePagination() {
  const tbody = document.getElementById("centralMonumentsTableBody");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");

  if (!tbody || !prevBtn || !nextBtn || !pageInfo) {
    console.error("National monuments pagination elements not found");
    return;
  }

  /* ===============================
     READ MANUAL ROWS
  =============================== */
  const manualRows = tbody.querySelectorAll("tr[data-manual='true']");

  manualRows.forEach((row, index) => {
    const cells = row.querySelectorAll("td");
    nationalTableData.push({
      sl: index + 1,
      name: cells[1].textContent.trim(),
      period: cells[2].textContent.trim(),
      locality: cells[3].textContent.trim(),
      district: cells[4].textContent.trim(),
    });
  });

  // Clear table after storing data
  tbody.innerHTML = "";

  /* ===============================
     FIRST RENDER
  =============================== */
  renderNationalPage();

  /* ===============================
     BUTTON EVENTS
  =============================== */
  prevBtn.addEventListener("click", () => {
    if (nationalCurrentPage > 1) {
      nationalCurrentPage--;
      renderNationalPage();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (
      nationalCurrentPage <
      Math.ceil(nationalTableData.length / nationalRowsPerPage)
    ) {
      nationalCurrentPage++;
      renderNationalPage();
    }
  });
}

/* ===============================
   RENDER FUNCTION
================================ */
function renderNationalPage() {
  const tbody = document.getElementById("centralMonumentsTableBody");
  const pageInfo = document.getElementById("pageInfo");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  tbody.innerHTML = "";

  const startIndex = (nationalCurrentPage - 1) * nationalRowsPerPage;
  const endIndex = startIndex + nationalRowsPerPage;

  nationalTableData.slice(startIndex, endIndex).forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.sl}</td>
      <td>${item.name}</td>
      <td>${item.period}</td>
      <td>${item.locality}</td>
      <td>${item.district}</td>
    `;
    tbody.appendChild(tr);
  });

  const totalPages = Math.ceil(
    nationalTableData.length / nationalRowsPerPage
  );

  pageInfo.textContent = `Page ${nationalCurrentPage} of ${totalPages}`;

  prevBtn.disabled = nationalCurrentPage === 1;
  nextBtn.disabled = nationalCurrentPage === totalPages;

  renderNationalPageNumbers(); // ✅ NEW
}
function renderNationalPageNumbers() {
  const container = document.getElementById("pageNumbers");
  container.innerHTML = "";

  const totalPages = Math.ceil(
    nationalTableData.length / nationalRowsPerPage
  );

  const maxVisiblePages = 5;

  let startPage = Math.max(
    1,
    nationalCurrentPage - Math.floor(maxVisiblePages / 2)
  );

  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  /* ---- LEFT ELLIPSIS ---- */
  if (startPage > 1) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "page-number";
    dots.onclick = () => {
      nationalCurrentPage = startPage - 1;
      renderNationalPage();
    };
    container.appendChild(dots);
  }

  /* ---- PAGE NUMBERS ---- */
  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("span");
    btn.textContent = i;
    btn.className = "page-number";

    if (i === nationalCurrentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      nationalCurrentPage = i;
      renderNationalPage();
    };

    container.appendChild(btn);
  }

  /* ---- RIGHT ELLIPSIS ---- */
  if (endPage < totalPages) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "page-number";
    dots.onclick = () => {
      nationalCurrentPage = endPage + 1;
      renderNationalPage();
    };
    container.appendChild(dots);
  }
}

function renderCentralTable() {
  const tbody = document.getElementById("centralMonumentsTableBody");
  tbody.innerHTML = "";

  const start = (centralCurrentPage - 1) * centralRowsPerPage;
  const end = start + centralRowsPerPage;

  centralMonuments.slice(start, end).forEach((m) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.sl}</td>
      <td>${m.name}</td>
      <td>${m.period}</td>
      <td>${m.locality}</td>
      <td>${m.district}</td>
    `;
    tbody.appendChild(tr);
  });

  const totalPages = Math.ceil(
    centralMonuments.length / centralRowsPerPage
  );

  document.getElementById("pageInfo").innerText =
    `Page ${centralCurrentPage} of ${totalPages}`;

  document.getElementById("prevPage").disabled =
    centralCurrentPage === 1;

  document.getElementById("nextPage").disabled =
    centralCurrentPage === totalPages;
}

function setupCentralPagination() {
  document.getElementById("prevPage").onclick = () => {
    if (centralCurrentPage > 1) {
      centralCurrentPage--;
      renderCentralTable();
    }
  };

  document.getElementById("nextPage").onclick = () => {
    if (
      centralCurrentPage <
      Math.ceil(centralMonuments.length / centralRowsPerPage)
    ) {
      centralCurrentPage++;
      renderCentralTable();
    }
  };
}

// - state-protected.js

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initializeTable, 100);
});

let allMonuments = [];
let currentPage = 1;
const rowsPerPage = 10;

function initializeTable() {
  const tbody = document.getElementById("monumentsTableBody");

  // ✅ 1. READ MANUAL DATA FIRST
  const manualRows = tbody.querySelectorAll("tr[data-manual='true']");
  const manualData = [];

  manualRows.forEach((row, index) => {
    const cells = row.querySelectorAll("td");
    manualData.push({
      sl: index + 1,
      name: cells[1].innerText.trim(),
      period: cells[2].innerText.trim(),
      locality: cells[3].innerText.trim(),
      district: cells[4].innerText.trim(),
    });
  });

  // Clear tbody AFTER reading manual data
  tbody.innerHTML = "";

  // Load Excel and merge
  loadExcelData(manualData);
}

async function loadExcelData(manualData) {
  try {
    const response = await fetch(
      "assets/state-protected/state_protected_monuments.xlsx"
    );
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData = XLSX.utils.sheet_to_json(sheet);

    const excelFormatted = excelData.map((row, index) => ({
      sl: manualData.length + index + 1,
      name: row["Name of the Monuments"] || row["Monument Name"] || "",
      period: row["Period"] || "",
      locality: row["Locality"] || row["Location"] || "",
      district: row["District"] || "",
    }));

    allMonuments = [...manualData, ...excelFormatted];
    renderTable();
    setupPagination();
  } catch (err) {
    console.error("Excel load failed, showing manual data only", err);
    allMonuments = manualData;
    renderTable();
    setupPagination();
  }
}

function renderTable() {
  const tbody = document.getElementById("monumentsTableBody");
  tbody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  allMonuments.slice(start, end).forEach((m) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.sl}</td>
      <td>${m.name}</td>
      <td>${m.period}</td>
      <td>${m.locality}</td>
      <td>${m.district}</td>
    `;
    tbody.appendChild(tr);
  });

  const totalPages = Math.ceil(allMonuments.length / rowsPerPage);

  document.getElementById("pageInfo").innerText =
    `Page ${currentPage} of ${totalPages}`;

  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;

  renderPageNumbers(); // ✅ NEW
}

function renderPageNumbers() {
  const container = document.getElementById("pageNumbers");
  container.innerHTML = "";

  const totalPages = Math.ceil(allMonuments.length / rowsPerPage);
  const maxVisiblePages = 5;

  let startPage = Math.max(
    1,
    currentPage - Math.floor(maxVisiblePages / 2)
  );

  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  /* ---------- LEFT ELLIPSIS ---------- */
  if (startPage > 1) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "page-number";
    dots.onclick = () => {
      currentPage = startPage - 1;
      renderTable();
    };
    container.appendChild(dots);
  }

  /* ---------- PAGE NUMBERS ---------- */
  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("span");
    btn.textContent = i;
    btn.className = "page-number";

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      currentPage = i;
      renderTable();
    };

    container.appendChild(btn);
  }

  /* ---------- RIGHT ELLIPSIS ---------- */
  if (endPage < totalPages) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "page-number";
    dots.onclick = () => {
      currentPage = endPage + 1;
      renderTable();
    };
    container.appendChild(dots);
  }
}

function setupPagination() {
  document.getElementById("prevPage").onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  };

  document.getElementById("nextPage").onclick = () => {
    if (currentPage < Math.ceil(allMonuments.length / rowsPerPage)) {
      currentPage++;
      renderTable();
    }
  };
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
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
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
      extraPhotos.forEach((photo) => {
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
      extraPhotos.forEach((photo) => {
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
      extraVideos.forEach((video) => {
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
      extraVideos.forEach((video) => {
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
    extraPhotos.forEach((photo) => {
      photo.classList.remove("d-none");
    });
    if (photoViewMore) photoViewMore.classList.add("d-none");
    if (photoViewLess) photoViewLess.classList.remove("d-none");
  }

  // Initialize all videos to NOT autoplay
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach((video) => {
    video.removeAttribute("autoplay");
    video.setAttribute("controls", "");
    video.autoplay = false;
    video.preload = "metadata";
  });
}

// ===============================
// IMAGE & VIDEO FULL VIEWER
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  /* ================= IMAGE VIEWER ================= */
  const imageViewer = document.getElementById("imageViewer");
  const viewerImage = document.getElementById("viewerImage");
  const imageCloseBtn = document.querySelector(".image-viewer-close");

  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      viewerImage.src = img.src;
      imageViewer.classList.remove("d-none");
      document.body.style.overflow = "hidden";
    });
  });

  imageCloseBtn?.addEventListener("click", closeImageViewer);

  imageViewer?.addEventListener("click", (e) => {
    if (e.target === imageViewer) closeImageViewer();
  });

  function closeImageViewer() {
    imageViewer.classList.add("d-none");
    viewerImage.src = "";
    document.body.style.overflow = "auto";
  }

  /* ================= VIDEO VIEWER ================= */
  const videoViewer = document.getElementById("videoViewer");
  const viewerVideo = document.getElementById("viewerVideo");
  const videoCloseBtn = document.querySelector(".video-viewer-close");

  document.querySelectorAll(".video-card video").forEach((video) => {
    video.addEventListener("click", () => {
      viewerVideo.src = video.currentSrc;
      videoViewer.classList.remove("d-none");
      viewerVideo.play();
      document.body.style.overflow = "hidden";
    });
  });

  videoCloseBtn?.addEventListener("click", closeVideoViewer);

  videoViewer?.addEventListener("click", (e) => {
    if (e.target === videoViewer) closeVideoViewer();
  });

  function closeVideoViewer() {
    viewerVideo.pause();
    viewerVideo.currentTime = 0;
    viewerVideo.src = "";
    videoViewer.classList.add("d-none");
    document.body.style.overflow = "auto";
  }

  // ESC key close for both
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeImageViewer();
      closeVideoViewer();
    }
  });
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

// Staffing Pattern JS

// const staffData = [
//   {
//     name: "Mr. Mohan Charan Majhi",
//     designation: "Chief Minister",
//     department: "Government of Odisha",
//     group: "Executive",
//     img: "assets/abouts/cm-logo.png",
//     about: "Mr. Mohan Charan Majhi is the Chief Minister of Odisha, responsible for overall governance and policy leadership of the state."
//   },
//   {
//     name: "Ms. Devjani Bhuyan, O.A.S SB",
//     designation: "Superintendent in-charge",
//     department: "Odisha State Archaeology",
//     group: "Group A",
//     img: "assets/staff/user.png",
//     about: "She oversees administrative and operational responsibilities of Odisha State Archaeology."
//   },
//   {
//     name: "Rudra Prasad Behera",
//     designation: "Assistant Curator",
//     department: "Odisha State Archaeology",
//     group: "Group B",
//     img: "assets/staff/user.png",
//     about: "Responsible for artifact curation, documentation, and preservation."
//   },
//   {
//     name: "Suvendu Prusty",
//     designation: "Conservation Assistant",
//     department: "Odisha State Archaeology",
//     group: "Group C",
//     img: "assets/staff/user.png",
//     about: "Supports conservation and restoration of archaeological monuments."
//   }
// ];


// function openProfile(index) {
//   document.getElementById("profileGrid").classList.add("d-none");
//   document.getElementById("profileDetail").classList.remove("d-none");

//   document.getElementById("detailImg").src = staffData[index].img;
//   document.getElementById("detailName").innerText = staffData[index].name;
//   document.getElementById("detailRole").innerText =
//     `${staffData[index].designation} | ${staffData[index].department}`;
//   document.getElementById("detailAbout").innerText = staffData[index].about;
// }

// function closeProfile() {
//   document.getElementById("profileDetail").classList.add("d-none");
//   document.getElementById("profileGrid").classList.remove("d-none");
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const grid = document.getElementById("profileGrid");
//   grid.innerHTML = "";

//   staffData.forEach((staff, index) => {
//     grid.innerHTML += `
//       <div class="col-lg-4 col-md-6 col-sm-12">
//         <div class="staff-card" onclick="openProfile(${index})" style="cursor:pointer;">
          
//           <div class="staff-avatar">
//             <img src="${staff.img}" alt="${staff.name}">
//           </div>

//           <div class="staff-designation">${staff.designation}</div>
//           <div class="staff-name">${staff.name}</div>
//           <div class="staff-group">${staff.group}</div>

//         </div>
//       </div>
//     `;
//   });
// });


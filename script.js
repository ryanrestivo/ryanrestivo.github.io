// ============================================================
// Ryan Restivo — Living Resume Portfolio
// Interactive JavaScript
// ============================================================

// === PRESS DATA (from web-yeseo Press.jsx and resume) ===
const pressData = [
  {
    title: "How The Oglethorpe Echo boosts newsroom with AI",
    source: "JournalismAI",
    url: "https://www.journalismai.info/programmes/innovation/innovation-challenge-2024/the-oglethorpe-echo",
    date: "Nov 2024",
    type: "press",
    featured: true,
  },
  {
    title: "Here's how 7 news audience directors are thinking about Google's AI Overviews",
    source: "Nieman Journalism Lab",
    url: "https://www.niemanlab.org/2024/08/how-7-news-audience-directors-are-thinking-about-responding-to-googles-ai-overviews/",
    date: "Aug 2024",
    type: "press",
    featured: true,
  },
  {
    title: "BBC, THE CITY and YESEO selected as award finalists for Excellence in AI Innovation",
    source: "Online News Association",
    url: "https://awards.journalists.org/2024/08/09/ona-reveals-the-2024-online-journalism-awards-finalists/",
    date: "Aug 2024",
    type: "award",
    featured: true,
  },
  {
    title: "How I built YESEO to help newsrooms incorporate SEO best practices",
    source: "International Journalists' Network",
    url: "https://ijnet.org/en/story/how-i-built-yeseo-help-newsrooms-incorporate-seo-best-practices",
    date: "Jul 2023",
    type: "press",
    featured: true,
  },
  {
    title: "Boost Your Visibility: How YESEO Enhances SEO for Journalists with Ryan Restivo",
    source: "AI in Journalism with Yumi Wilson",
    url: "https://saspod.com/ProfYumi/124/2797",
    date: "Sep 2024",
    type: "podcast",
  },
  {
    title: "When AI Goes Wrong: How to handle it and what to do",
    source: "SRCCON 2024",
    url: "https://2024.srccon.org/schedule/#_session-when-ai-goes-wrong",
    date: "Aug 2024",
    type: "speaking",
  },
  {
    title: "Streamlining Local News: How YESEO is Transforming Journalism Efficiency",
    source: "Small Press, Big Ideas (Podcast)",
    url: "https://localpod.co/streamlining-local-news-how-yesseo-is-transforming-journalism-efficiency/",
    date: "Aug 2024",
    type: "podcast",
  },
  {
    title: "2024 Online Journalism Awards Excellence in AI Innovation finalist: YESEO",
    source: "Online News Association",
    url: "https://awards.journalists.org/entries/yeseo/",
    date: "Aug 2024",
    type: "award",
  },
  {
    title: "Ryan Restivo on Creating and Building YESEO — ONA AI Innovator Collaborative",
    source: "Online News Association",
    url: "https://youtu.be/IYIm91Cujgs",
    date: "Jun 2024",
    type: "video",
  },
  {
    title: "YESEO app embraced by newsrooms looking to amp up SEO while keeping data safe",
    source: "Reynolds Journalism Institute",
    url: "https://rjionline.org/news/yeseo-app-embraced-by-newsrooms-looking-to-amp-up-seo-while-keeping-data-safe/",
    date: "May 2024",
    type: "press",
  },
  {
    title: "Navigating the SEO Landscape in Journalism: A Conversation with Ryan Restivo",
    source: "AImpactful",
    url: "https://aimpactful.com/navigating-the-seo-landscape-in-journalism-a-conversation-with-ryan-restivo/",
    date: "Jan 2024",
    type: "press",
  },
  {
    title: "The Journey Building YESEO: the SEO Slack App for Newsrooms",
    source: "JournalismAI Festival 2023",
    url: "https://youtu.be/ykuqOlKIWM0?feature=shared&t=336",
    date: "Dec 2023",
    type: "video",
  },
  {
    title: "Putting AI Where Reporters Actually Work, With Ryan Restivo",
    source: "The Media Copilot",
    url: "https://mediacopilot.substack.com/p/ai-seo-tool-yeseo-ryan-restivo",
    date: "Nov 2023",
    type: "podcast",
  },
  {
    title: "Creating a roadmap for building your Generative AI products",
    source: "SRCCON 2023",
    url: "https://2023.srccon.org/schedule/#_session-roadmap-ai-products",
    date: "Oct 2023",
    type: "speaking",
  },
  {
    title: "Elevate Your Stories with YESEO",
    source: "Mobile Me & You 2023",
    url: "https://www.youtube.com/watch?v=5VkWdn2g3Hg",
    date: "Oct 2023",
    type: "video",
  },
  {
    title: "Alumnus Develops YESEO App for Slack",
    source: "Marist College",
    url: "https://maristconnect.marist.edu/s/1516/GID2/17/interior.aspx?sid=1516&gid=2&pgid=3172&cid=6117",
    date: "Sep 2023",
    type: "press",
  },
  {
    title: "'The lens we need to view news': SEO tips for journalists",
    source: "National Press Club Journalism Institute",
    url: "https://www.pressclubinstitute.org/2023/09/20/the-lens-we-need-to-view-news-seo-tips-for-journalists/",
    date: "Sep 2023",
    type: "press",
  },
  {
    title: "From concept to launch: App creator offers tips on product development",
    source: "National Press Club Journalism Institute",
    url: "https://www.pressclubinstitute.org/2023/07/07/from-concept-to-launch-app-creator-offers-tips-on-product-development/",
    date: "Jul 2023",
    type: "press",
  },
  {
    title: "Elevate your headlines with YESEO: The SEO Slack tool for newsrooms",
    source: "Center for Cooperative Media",
    url: "https://www.youtube.com/watch?v=YPPWwtVfezs",
    date: "Jul 2023",
    type: "video",
  },
  {
    title: "Introducing the YESEO app",
    source: "Reynolds Journalism Institute",
    url: "https://rjionline.org/news/introducing-the-yeseo-app/",
    date: "Mar 2023",
    type: "press",
  },
  {
    title: "Introducing the 2022-2023 RJI Fellows",
    source: "Reynolds Journalism Institute",
    url: "https://rjionline.org/news/introducing-the-2022-2023-rji-fellows/",
    date: "Jun 2022",
    type: "press",
  },
  {
    title: "How Newsday Launched Community News Alerts on Mobile — Case Study in Product Thinking",
    source: "Northwestern University Knight Lab",
    url: "https://knightlab.northwestern.edu/resources/case-study-newsday-launches-mobile-alerts/",
    date: "Nov 2020",
    type: "press",
  },
];

// === PRESS GRID RENDERING ===
function renderPressGrid() {
  const grid = document.getElementById('press-grid');
  if (!grid) return;

  // Sort: featured first, then by date (newest first)
  const sorted = [...pressData].sort((a, b) => {
    if (a.featured !== b.featureed) return b.featured - a.featured;
    return new Date(b.date) - new Date(a.date);
  });

  grid.innerHTML = sorted.map((item, i) => `
    <a class="press-item reveal reveal-delay-${(i % 4) + 1}" href="${item.url}" target="_blank" rel="noopener">
      <h4>${item.title}</h4>
      <span class="press-source">${item.source}</span>
      <span class="press-date">${item.date}</span>
      <span class="press-type ${item.type}">${item.type}</span>
    </a>
  `).join('');
}

// === SCROLL REVEAL ===
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// === COUNTER ANIMATION ===
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target;
          }
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// === TYPED EFFECT FOR HERO BADGE (subtle) ===
function initHeroAnimation() {
  const heroContent = document.getElementById('hero-content');
  if (!heroContent) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      heroContent.style.animation = 'slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      observer.unobserve(heroContent);
    }
  }, { threshold: 0.3 });
  observer.observe(heroContent);
}

// === PARALLAX ON ORBS ===
function initParallaxOrbs() {
  const orbs = document.querySelectorAll('.hero-orb');
  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 0.03;
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

// === NAV HIGHLIGHT (active section) ===
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.hero-actions a, .footer-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Could add active class to nav links based on id
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));
}

// === INIT EVERYTHING ON DOM READY ===
document.addEventListener('DOMContentLoaded', () => {
  renderPressGrid();
  initScrollReveal();
  animateCounters();
  initSmoothScroll();
  initHeroAnimation();
  initParallaxOrbs();
  initNavHighlight();
});

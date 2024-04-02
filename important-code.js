<!-- smooth scroll -->
<script src="https://uploads-ssl.webflow.com/6330c0ebacf06abbc83b6eb3/64103732523ba652052e0223_lenis-bundled.txt"></script>
<script>
class Scroll extends Lenis {
  constructor() {
    super({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.5
    });

    this.time = 0;
    this.isActive = true;
    this.init();
  }

  init() {
    this.config();
    this.render();
    this.handleEditorView();
  }

  config() {
    // allow scrolling on overflow elements
    const overscroll = [
      ...document.querySelectorAll('[data-scroll="overscroll"]')
    ];

    if (overscroll.length > 0) {
      overscroll.forEach((item) =>
        item.setAttribute("onwheel", "event.stopPropagation()")
      );
    }

    // stop and start scroll btns
    const stop = [...document.querySelectorAll('[data-scroll="stop"]')];
    if (stop.length > 0) {
      stop.forEach((item) => {
        item.onclick = () => {
          this.stop();
          this.isActive = false;
        };
      });
    }

    const start = [...document.querySelectorAll('[data-scroll="start"]')];
    if (start.length > 0) {
      start.forEach((item) => {
        item.onclick = () => {
          this.start();
          this.isActive = true;
        };
      });
    }

    // toggle page scrolling
    const toggle = [...document.querySelectorAll('[data-scroll="toggle"]')];
    if (toggle.length > 0) {
      toggle.forEach((item) => {
        item.onclick = () => {
          if (this.isActive) {
            this.stop();
            this.isActive = false;
          } else {
            this.start();
            this.isActive = true;
          }
        };
      });
    }

    // anchor links
    const anchor = [...document.querySelectorAll("[data-scrolllink]")];
    if (anchor.length > 0) {
      anchor.forEach((item) => {
        const id = parseFloat(item.dataset.scrolllink);
        const target = document.querySelector(`[data-scrolltarget="${id}"]`);
        if (target) {
          //console.log(id, target);
          item.onclick = () => this.scrollTo(target);
        }
      });
    }
  }

  render() {
    this.raf((this.time += 10));
    window.requestAnimationFrame(this.render.bind(this));
  }

  /* ---- */
  handleEditorView() {
    const html = document.documentElement;
    const config = { attributes: true, childList: false, subtree: false };

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          const btn = document.querySelector(".w-editor-bem-EditSiteButton");
          const bar = document.querySelector(".w-editor-bem-EditorMainMenu");
          const addTrig = (target) =>
            target.addEventListener("click", () => this.destroy());

          if (btn) addTrig(btn);
          if (bar) addTrig(bar);
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(html, config);
  }
}

window.SmoothScroll = new Scroll();
</script>
<script>
        var tabs = document.querySelectorAll('.spotlighttab');
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                tab.classList.add('active');
            });
        });
</script>


<!-- nav hide animation -->
<script>
//nav hide animation
const navHolder = document.querySelector('.nav-wrapper');
const navMenuWrapper = document.querySelector('.nav-wrapper>.nav>.container>.nav-menu-wrap');
navMenuWrapper.setAttribute ('style', 'translate: transformY(-170%) !important;');

window.addEventListener('scroll', e=>{
  if(window.pageYOffset < 5 ) {
    navHolder.classList.remove('hide');
    navMenuWrapper.classList.remove('hide');
  } else {
    navHolder.classList.add('hide');
    navMenuWrapper.classList.add('hide');
  }
});
</script>


<!-- Auto Rotate Tabs (Original code from @irishbuckley www.flowbase.co -->
<script>
    var Webflow = Webflow || [];
    Webflow.push(function () {
      // DOMready has fired
      // May now use jQuery and Webflow api
// start everything
      var tabTimeout;
      clearTimeout(tabTimeout);
      tabLoop();

    // Cycle through all tabs. Match class names
    function tabLoop() {
        tabTimeout = setTimeout(function() {
            var $next = $('.menu').children('.w--current:first').next();

            if($next.length) {
                $next.click();  // user click resets timeout
            } else {
                $('.standard-tab:first').click();
            }
        }, 3000);  // 6 second tab loop (change this)
    }
    // Reset loop if a tab is clicked
    $('.standard-tab').click(function() {
        clearTimeout(tabTimeout);
        tabLoop();
        });
    });
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var tabLinks = document.querySelectorAll('.tab-link-2');
    var tabContents = document.querySelectorAll('.w-tab-pane');
    var allTexts = document.querySelectorAll('.tab-text');

    // Initially hide all tab contents except for the active tab
    tabContents.forEach(function(content) {
      content.classList.remove('w--tab-active');
    });

    // Initially hide all tab texts except for the active tab
    allTexts.forEach(function(text) {
      text.style.display = 'none';
    });

    tabLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var tabId = this.getAttribute('data-w-tab');
        var tabContent = document.querySelector('[data-w-tab="' + tabId + '"]');
        
        // Hide all tab contents
        tabContents.forEach(function(content) {
          content.classList.remove('w--tab-active');
        });

        // Show content for the clicked tab
        tabContent.classList.add('w--tab-active');

        // Hide all tab text
        allTexts.forEach(function(text) {
          text.style.display = 'none';
        });

        // Show text for the clicked tab
        var tabText = this.querySelector('.tab-text');
        tabText.style.display = 'block';
      });
    });
  });
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"></script>

<script>
var Webflow = Webflow || [];
Webflow.push(function () {
    var tabTimeout;
    clearTimeout(tabTimeout);
    function isMobile() {
        return $(window).width() <= 768;
    }
    function tabLoop() {
        tabTimeout = setTimeout(function() {
            var $next = $('.tab-menu').children('.w--current:first').next();
            if ($next.length) {
                if ($(".menu-button").hasClass("w--open") || isMobile()) {
                    tabLoop();
                } else {
                    $next.removeAttr("href").click();
                }
            } else {
                if ($(".menu-button").hasClass("w--open") || isMobile()) {
                    tabLoop();
                } else {
                    $('.auto-tab-link:first').removeAttr("href").click();
                }
            }
        }, 3000); 
    }
    $('.auto-tab-link').click(function() {
        clearTimeout(tabTimeout);
        tabLoop();
    });
    if (!isMobile()) {
        tabLoop();
    }
});
</script>
<!-- swipe.js 
<script>
  const cursor = new MouseFollower({
    speed: 0.8,
    skewing: 0,
    skewingText: 1,

  });
  const elements = document.querySelectorAll(".test");
  elements.forEach(function (element) {
    element.addEventListener("mouseenter", () => {
      if (element.classList.contains("test")) {
        document.querySelector('.mf-cursor').style.display = 'flex';
        cursor.setText("swipe");
      }
      else if(element.classList.contains("test")){
            cursor.setText("Click");
      }
      else if(element.classList.contains("test")){
            cursor.setText("Click");
      }
    });
    element.addEventListener("mouseleave", () => {
        cursor.removeText();
        document.querySelector('.mf-cursor').style.display = 'none';
    });
  });
</script>

-->



<script>
document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.removeEventListener("mouseleave", closeNavbar);
  }
});

// Function to close the navbar
function closeNavbar() {
  // Your existing code to close the navbar here
  // This might involve toggling CSS classes, changing styles, or using other JavaScript methods
}
</script>

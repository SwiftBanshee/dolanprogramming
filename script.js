/* ════════════════════════════════════════
   DOLAN PROGRAMMING — script.js
   ════════════════════════════════════════ */

// ════════════════════════════════════════
// HERO CANVAS — particle field
// ════════════════════════════════════════
(function(){
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = {x:-999,y:-999};

  function resize(){
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor(){this.reset(true);}
    reset(init){
      this.x = Math.random()*W;
      this.y = init ? Math.random()*H : H + 10;
      this.size = Math.random()*1.8 + 0.4;
      this.speedX = (Math.random()-0.5)*0.3;
      this.speedY = -(Math.random()*0.5+0.1);
      this.life = 0;
      this.maxLife = Math.random()*300+200;
      this.alpha = 0;
      const hue = Math.random() > 0.6 ? 'rgba(240,90,26,' : 'rgba(255,255,255,';
      this.color = hue;
    }
    update(){
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      const t = this.life/this.maxLife;
      this.alpha = t < 0.1 ? t*10*0.6 : t > 0.8 ? (1-t)*5*0.6 : 0.6;
      // mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if(dist < 100){
        this.x += dx/dist*1.2;
        this.y += dy/dist*1.2;
      }
      if(this.life >= this.maxLife) this.reset(false);
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for(let i=0;i<120;i++) particles.push(new Particle());

  // connection lines
  function drawConnections(){
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<90){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(240,90,26,${(1-d/90)*0.08})`;
          ctx.lineWidth=0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate(){
    ctx.clearRect(0,0,W,H);
    drawConnections();
    particles.forEach(p=>{p.update();p.draw();});
    requestAnimationFrame(animate);
  }
  animate();

  document.getElementById('home').addEventListener('mousemove',e=>{
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  document.getElementById('home').addEventListener('mouseleave',()=>{mouse.x=-999;mouse.y=-999;});
})();

// ════════════════════════════════════════
// MAGNETIC BUTTONS
// ════════════════════════════════════════
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.18}px,${y*0.18}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ════════════════════════════════════════
// 3D TILT on service cards
// ════════════════════════════════════════
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y*10}deg) rotateY(${x*10}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ════════════════════════════════════════
// TYPED TEXT
// ════════════════════════════════════════
const roles = ['Full Stack Developer','System Administrator','Game Designer','Web Developer','UX/UI Enthusiast'];
let rIdx=0,cIdx=0,deleting=false;
const typedEl = document.getElementById('typed-text');
function type(){
  const word=roles[rIdx];
  if(deleting){typedEl.textContent=word.slice(0,--cIdx);}
  else{typedEl.textContent=word.slice(0,++cIdx);}
  if(!deleting&&cIdx===word.length){setTimeout(()=>{deleting=true;setTimeout(type,80);},2000);return;}
  if(deleting&&cIdx===0){deleting=false;rIdx=(rIdx+1)%roles.length;}
  setTimeout(type,deleting?45:85);
}
setTimeout(type,800);

// ════════════════════════════════════════
// PARALLAX on orbs
// ════════════════════════════════════════
let lastScrollY = 0, ticking = false;
function updateParallax(){
  const sy = window.scrollY;
  document.querySelectorAll('.orb-1').forEach(o=>o.style.transform=`translateY(${sy*0.12}px)`);
  document.querySelectorAll('.orb-2').forEach(o=>o.style.transform=`translateY(${sy*0.08}px)`);
  document.querySelectorAll('.orb-3').forEach(o=>o.style.transform=`translateY(${sy*0.15}px)`);
  document.querySelector('.hero-ring') && (document.querySelector('.hero-ring').style.transform=`translateY(calc(-50% + ${sy*0.06}px))`);
  ticking=false;
}

// ════════════════════════════════════════
// REVEAL ON SCROLL
// ════════════════════════════════════════
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => observer.observe(el));

// ════════════════════════════════════════
// SKILL BARS
// ════════════════════════════════════════
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, {threshold:0.3});
document.querySelectorAll('#resume').forEach(el => skillObserver.observe(el));

// ════════════════════════════════════════
// STAGGER on portfolio grid entry
// ════════════════════════════════════════
const gridObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const items = e.target.querySelectorAll('.portfolio-item');
      items.forEach((item,i) => {
        setTimeout(()=> item.style.opacity = '1', i*60);
      });
    }
  });
},{threshold:0.05});
const pg = document.getElementById('portfolio-grid');
if(pg) gridObserver.observe(pg);

// ════════════════════════════════════════
// PROJECT DATA
// ════════════════════════════════════════
const projects = {
  'signable-vision':{title:'Signable Vision',subtitle:'Best practices improvements and front-end touchups for a professional document management platform.',tag:'Websites',subtag:'Best Practices',img:'static/img/signablevision/rsz_signable-vision-title.PNG',overview:'As part of a 5-person team, I worked with a web designer to help improve and future-proof small businesses\' online presence. For Signable Vision, our goal was to reduce user friction, improve accessibility, and strengthen the site\'s SEO performance.<br><br>The project involved refining an existing WordPress website that contained a large number of pages and blog posts, where outdated links and missing metadata had begun affecting usability and search rankings.',details: `
  <ul class="project-list">
    <li>Conducted a full site audit to identify SEO, accessibility, and usability issues</li>
    <li>Removed and repaired broken internal links and 404 error pages across the website</li>
    <li>Improved semantic HTML structure and overall site organization</li>
    <li>Added and optimized meta descriptions across key pages to improve accessibility and SEO</li>
    <li>Worked on accessibility improvements to better support users with disabilities</li>
    <li>Optimized image handling and page performance where possible</li>
    <li>Improved responsiveness and usability across desktop and mobile devices</li>
    <li>Collaborated directly with a web designer to modernize and refine the user experience</li>
  </ul>`,tech:['HTML5','CSS3','JavaScript','Accessibility','SEO','Performance']},
  'browns-camp':{title:'Browns Camp',subtitle:'Complete visual refresh and modernization for an outdoor recreation website.',tag:'Websites',subtag:'Website Facelift',img:'static/img/brownscamp/rsz_browns-camp-title.png',overview:'Browns Camp is an outdoor recreational destination that needed a modernized web presence while preserving its established brand identity and content structure.<br><br>As part of a 5-person team, I collaborated closely with a web designer to improve the usability, accessibility, and overall visual design of the existing website. The project focused on reorganizing cluttered content, enhancing responsiveness, and creating a cleaner, more user-friendly experience across the site.',details: `
  <div class="before-after-section">
    <h4>Homepage Redesign</h4>
    <p>The original homepage felt outdated and cluttered, making navigation difficult. We reorganized the layout and improved the visual hierarchy to create a cleaner, more modern experience.</p>

    <div class="before-after-grid">
      <div>
        <h5>Before</h5>
        <img src="static/img/brownscamp/before-home.png" alt="Old Browns Camp homepage" style="width:100%; max-width:650px; height:auto;">
      </div>

      <div>
        <h5>After</h5>
        <img src="static/img/brownscamp/after-home.png" alt="Updated Browns Camp homepage" style="width:100%; max-width:650px; height:auto;">
      </div>
    </div>

    <h4>Footer Improvements</h4>
    <p>The original footer had poor contrast, cramped spacing, and difficult-to-read links. I redesigned it to improve readability, accessibility, and consistency across the site.</p>

    <h4>Mobile & Content Improvements</h4>
    <p>The About page was difficult to read on mobile devices, so I reformatted the content and improved responsiveness to create a smoother experience across screen sizes. We also added a dedicated amenities and activities page to better organize information.</p>

    <div class="before-after-grid">
      <div>
        <h5>Before</h5>
        <img src="static/img/brownscamp/before-about.png" alt="Old Browns Camp about page" style="width:100%; max-width:650px; height:auto;">
      </div>

      <div>
        <h5>After</h5>
        <img src="static/img/brownscamp/after-activities.png" alt="New Browns Camp activities page" style="width:100%; max-width:650px; height:auto;">
      </div>
    </div>

    <ul class="project-list">
      <li>Redesigned layouts for a cleaner, more modern aesthetic</li>
      <li>Reorganized cluttered pages to improve navigation and readability</li>
      <li>Updated typography, spacing, and visual hierarchy across the site</li>
      <li>Improved mobile responsiveness for a smoother experience on all devices</li>
      <li>Redesigned the footer to improve accessibility and consistency</li>
      <li>Created a dedicated amenities/activities page to better organize content</li>
      <li>Optimized layouts and assets to improve page load speeds and performance</li>
      <li>Followed modern web best practices to deliver a polished, future-ready website</li>
    </ul>
  </div>`,tech:['HTML5','CSS3','WordPress','Responsive Design','PHP']},
  'on-the-trail':{title:'On The Trail',subtitle:'SEO strategy and implementation to dramatically improve search rankings.',tag:'Websites',subtag:'SEO',img:'static/img/onthetrail/rsz_on-the-trail-title.png',overview:'On The Trail is a bike and trail-focused Shopify website that needed stronger search visibility and improved SEO foundations.<br><br>As part of a 5-person team, I worked alongside a web designer to help modernize and future-proof small business websites. For this project, our primary focus was reducing user friction, improving technical SEO, and implementing web best practices that were previously missing from the site.',details: `
  <div class="before-after-section">
    <h4>Search Visibility Improvements</h4>
    <p>Over the course of 3 weeks, we implemented a variety of SEO and performance improvements that significantly boosted the website’s search presence. By the end of the project, On The Trail was appearing on Google search results and ranking as one of the top results for local bike store searches.</p>

    <div class="before-after-grid">
      <div>
        <h5>Before</h5>
        <img src="static/img/onthetrail/google-before.png" alt="On The Trail before SEO improvements" style="width:100%; max-width:650px; height:auto;">
      </div>

      <div>
        <h5>After</h5>
        <img src="static/img/onthetrail/google-after.png" alt="On The Trail after SEO improvements" style="width:100%; max-width:650px; height:auto;">
      </div>
    </div>

    <h4>Traffic Growth</h4>
    <p>The improvements led to a major increase in visibility and engagement, growing the site from an average of 1 monthly user to over 250 active users per month.</p>

    <div class="analytics-image">
      <img src="static/img/onthetrail/active-users.png" alt="On The Trail active users analytics" style="width:100%; max-width:650px; height:auto;">
    </div>

    <ul class="project-list">
      <li>Conducted a full SEO audit to identify technical and content-related issues</li>
      <li>Improved search rankings by implementing SEO best practices across the site</li>
      <li>Optimized page titles, metadata, alt text, and site structure</li>
      <li>Reduced user friction through usability and navigation improvements</li>
      <li>Improved overall accessibility and responsiveness across devices</li>
      <li>Worked within Shopify to enhance site performance and visibility</li>
      <li>Helped increase monthly traffic from approximately 1 user to over 250 users</li>
      <li>Collaborated directly with a web designer to refine the site’s user experience</li>
    </ul>
  </div>`,tech:['SEO','Shopify','Google Search Console','Accessibility','Performance','Responsive Design']},
  'mulberry':{title:'Mulberry Waldorf School',subtitle:'Complete website facelift focused on improving usability, organization, and visual appeal for a local educational institution.',tag:'Websites',subtag:'Website Facelift',img:'static/img/mulberry/rsz_mulberry-title.png',overview:'Mulberry Waldorf School needed a refreshed online presence that better reflected the school’s welcoming atmosphere while improving usability for parents and prospective families.<br><br>As part of a 5-person team, I worked closely with a web designer to modernize the existing Weebly website by reducing user friction, reorganizing content, and improving the overall user experience. The project focused on streamlining navigation, removing duplicate information, and creating a cleaner, more polished design that worked well across devices.',details: `
    <div class="before-after-section">
      <h4>Website Facelift</h4>
      <p>The original website contained cluttered layouts, inconsistent content structure, and navigation issues that made it difficult for users to quickly find important information. We refreshed the overall design to create a cleaner, more welcoming experience.</p>

      <div class="before-after-grid">
        <div>
          <h5>Before</h5>
          <img src="static/img/mulberry/before-flowchart.png" alt="Old Mulberry Waldorf School website structure" style="width:100%; max-width:650px; height:auto;">
        </div>

        <div>
          <h5>After</h5>
          <img src="static/img/mulberry/after-flowchart.png" alt="Updated Mulberry Waldorf School website structure" style="width:100%; max-width:650px; height:auto;">
        </div>
      </div>

      <h4>Content & UX Improvements</h4>
      <p>We reviewed the site's content structure and removed duplicate or unnecessary information to simplify the user journey. Layouts were reorganized to improve readability and create a smoother browsing experience for parents and visitors.</p>

      <h4>Responsive Modernization</h4>
      <p>The refreshed design improved consistency across pages and ensured the website worked more effectively on mobile devices and modern browsers.</p>

      <ul class="project-list">
        <li>Redesigned page layouts to create a cleaner, more modern appearance</li>
        <li>Reduced user friction by improving navigation and content organization</li>
        <li>Removed duplicate and unnecessary content across the site</li>
        <li>Improved readability through better spacing, typography, and hierarchy</li>
        <li>Enhanced mobile responsiveness and cross-browser compatibility</li>
        <li>Collaborated with a web designer to modernize the existing Weebly website</li>
        <li>Applied modern UX and web design best practices throughout the redesign</li>
        <li>Delivered a polished, future-ready website within a 3-week project timeline</li>
      </ul>
    </div>`,tech:['HTML5','CSS3','Weebly','UX/UI','Responsive Design']},'lauras':{title:"Laura's",subtitle:'Modernized website for a local business with improved UX and visual appeal.',tag:'Websites',subtag:'Website Facelift',img:'static/img/lauras/rsz_lauras-title.png',overview:"Laura's required a contemporary redesign to better showcase their offerings and improve customer engagement.",details:'Revamped the homepage layout, modernized styling elements, improved call-to-action placement, and enhanced the mobile experience.',tech:['HTML5','CSS3','JavaScript','Responsive Design','WordPress']},
  'lanark-cedar':{title:'Lanark Cedar',subtitle:'Website improvements and branding refresh focused on usability, navigation, and customer accessibility.',tag:'Websites',subtag:'Website Facelift',img:'static/img/lanarkcedar/rsz_lanark-title.png',overview:'Lanark Cedar needed updates to its online presence to improve usability, strengthen branding consistency, and create a smoother shopping experience for customers.<br><br>As part of a 5-person team, I worked closely with a web designer to modernize the existing SquareSpace website by reducing user friction and implementing modern web best practices. The project focused on improving navigation, fixing usability issues, and reinforcing the company’s visual identity throughout the site.',details: `
    <div class="before-after-section">
      <h4>Branding & Footer Redesign</h4>
      <p>The original website lacked strong visual consistency and branding elements throughout the layout. We incorporated the brown accent color from the company logo and applied it across key sections of the website to create a more cohesive brand identity.</p>

      <div class="before-after-grid">
        <div>
          <h5>Before</h5>
          <img src="static/img/lanarkcedar/before-footer.png" alt="Old Lanark Cedar footer design" style="width:100%; max-width:450px; height:auto;">
        </div>

        <div>
          <h5>After</h5>
          <img src="static/img/lanarkcedar/after-footer.png" alt="Updated Lanark Cedar footer with branding colors" style="width:100%; max-width:450px; height:auto;">
        </div>
      </div>

      <h4>Navigation Improvements</h4>
      <p>To reduce friction while browsing the online shop, we implemented a sticky header that allowed users to navigate the site more easily without needing to scroll back to the top of the page.</p>

      <h4>Accessibility & Usability Updates</h4>
      <p>We also improved the footer experience by fixing broken links and adding clickable contact links for email, phone, and location information, making it easier for customers to connect with the business.</p>

      <ul class="project-list">
        <li>Implemented a sticky navigation header to improve shop usability</li>
        <li>Applied consistent branding colors across the website layout</li>
        <li>Redesigned the footer for improved branding and readability</li>
        <li>Removed broken links and outdated content</li>
        <li>Added clickable email, phone, and location links for easier customer access</li>
        <li>Improved overall navigation and reduced user friction</li>
        <li>Collaborated with a web designer to modernize the existing SquareSpace website</li>
        <li>Applied modern UX and web design best practices during the redesign process</li>
      </ul>
    </div>`,tech:['HTML5','CSS3','SquareSpace','UX/UI','Responsive Design']},
  'lauras':{title:'Lauras',subtitle:'Shopify website improvements focused on navigation, product visibility, and customer engagement.',tag:'Websites',subtag:'Website Facelift',img:'static/img/lauras/rsz_lauras-title.png',overview:'Lauras needed improvements to its Shopify storefront to create a smoother shopping experience and better highlight important information for customers.<br><br>As part of a 5-person team, I collaborated with a web designer to modernize the existing website by improving navigation usability, reorganizing content, and enhancing the homepage experience. The project focused on reducing user friction, improving product discoverability, and creating a cleaner, more engaging storefront.',details: `
    <div class="before-after-section">
      <h4>Navigation Bar Improvements</h4>
      <p>The original navigation structure made it difficult for customers to quickly browse products and access important sections of the store. We redesigned the navigation layout to improve usability and included featured shop items directly within the menu for easier access.</p>

      <div class="before-after-grid">
        <div>
          <h5>Before</h5>
          <img src="static/img/lauras/before-nav.png" alt="Old Lauras navigation bar" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>After</h5>
          <img src="static/img/lauras/after-nav.png" alt="Updated Lauras navigation bar" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Homepage Layout Updates</h4>
      <p>We reorganized the homepage layout to better showcase products and create a cleaner shopping experience. Product visibility and overall page flow were improved to help users navigate the site more efficiently.</p>

      <h4>Customer Engagement Features</h4>
      <p>To help promote one of the business’s key selling points, we added a timed popup notification that informed visitors about free shipping across Canada after spending several seconds on the site.</p>

      <div class="before-after-grid">
        <div>
          <h5>Free Shipping Popup</h5>
          <img src="static/img/lauras/popup.png" alt="Lauras free shipping popup notification" style="width:100%; max-width:350px; height:auto;">
        </div>
      </div>

      <ul class="project-list">
        <li>Redesigned the navigation bar to improve usability and product discovery</li>
        <li>Added featured shop items directly into navigation menus</li>
        <li>Removed sold out products to create a cleaner storefront experience</li>
        <li>Improved homepage layout and content organization</li>
        <li>Added a timed popup promoting free shipping across Canada</li>
        <li>Reduced user friction and improved overall customer navigation flow</li>
        <li>Collaborated with a web designer to modernize the existing Shopify website</li>
        <li>Applied modern UX and eCommerce best practices throughout the redesign</li>
      </ul>
    </div>`,tech:['HTML5','CSS3','Shopify','UX/UI','Responsive Design']},
  'wjm':{title:'WJM',subtitle:'Website migration and expansion with improved SEO, structure, and online booking functionality.',tag:'Websites',subtag:'Website Facelift',img:'static/img/wjm/rsz_wjm-title.png',overview:'WJM needed a stronger online presence beyond a basic contact page, with improved structure, visibility, and functionality.<br><br>As part of a 5-person team, I collaborated with a web designer to migrate the site from a private host to WordPress and expand its content to better communicate what the business offers. The project focused on improving SEO, organizing information into dedicated pages, and enhancing user functionality through a booking system integration.',details: `
    <div class="before-after-section">
      <h4>Website Migration & Expansion</h4>
      <p>The original website consisted primarily of a single contact page with limited information. We migrated the site to WordPress and expanded it into a full multi-page structure to better represent the business and improve search visibility.</p>

      <div class="before-after-grid">
        <div>
          <h5>Before</h5>
          <img src="static/img/wjm/before-home.png" alt="Old WJM homepage" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>After</h5>
          <img src="static/img/wjm/after-home.png" alt="Updated WJM homepage" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Content & SEO Improvements</h4>
      <p>We created multiple new pages to clearly explain the services offered, improving both user understanding and search engine optimization. This helped transform the site from a minimal contact page into a structured informational website.</p>

      <h4>Booking System Integration</h4>
      <p>To improve client convenience, we added a booking feature that allows users to schedule appointments directly through the website and sync them with the business calendar.</p>

      <div class="before-after-grid">
        <div>
          <h5>Booking Feature</h5>
          <img src="static/img/wjm/booking.png" alt="WJM booking calendar integration" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <ul class="project-list">
        <li>Migrated website from a private host to WordPress</li>
        <li>Expanded a single-page site into a multi-page structure</li>
        <li>Improved SEO through better content organization and page creation</li>
        <li>Added pages explaining services and business offerings</li>
        <li>Integrated an online booking system linked to a calendar</li>
        <li>Enhanced overall site usability and user flow</li>
        <li>Collaborated with a web designer as part of a 5-person team</li>
        <li>Applied modern UX and web development best practices during migration</li>
      </ul>
    </div>`,tech:['HTML5','CSS3','WordPress','SEO','UX/UI','Responsive Design']},
  'park-provisioners':{title:'Park Provisioners',subtitle:'SEO optimization and usability improvements for an eCommerce website with accessibility enhancements.',tag:'Websites',subtag:'Website Facelift',img:'static/img/parkprovisioners/rsz_park-provisioners-title.png',overview:'Park Provisioners needed improvements to both its search visibility and overall usability to better showcase its products online.<br><br>As part of a 5-person team, I collaborated with a web designer to enhance the existing HostPapa website by applying SEO best practices and improving accessibility and navigation. The project focused on making the product catalog more discoverable, improving visual clarity, and strengthening overall site structure.',details: `
    <div class="before-after-section">
      <h4>Product Catalog Improvements</h4>
      <p>The original catalog experience made it difficult for users to understand the full range of clothing available in-store. We redesigned the slideshow catalog to better showcase products and improve overall discoverability.</p>

      <div class="before-after-grid">
        <div>
          <h5>Before</h5>
          <img src="static/img/parkprovisioners/before-catalog.png" alt="Old Park Provisioners catalog slideshow" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>After</h5>
          <img src="static/img/parkprovisioners/after-catalog.png" alt="Updated Park Provisioners catalog slideshow" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>SEO & Content Optimization</h4>
      <p>We implemented SEO improvements across the entire website by adding relevant keywords and meta descriptions to each page, helping increase search visibility and improve discoverability.</p>

      <h4>Navigation & Accessibility Enhancements</h4>
      <p>To improve usability, we introduced a sticky header and redesigned the navigation bar to be more visible and accessible, particularly improving readability for users with visual impairments.</p>

      <ul class="project-list">
        <li>Added keywords and meta descriptions across all pages for SEO improvement</li>
        <li>Redesigned product catalog slideshow to better showcase clothing items</li>
        <li>Improved product discoverability and visual presentation</li>
        <li>Implemented a sticky header for easier navigation</li>
        <li>Updated navigation bar for better visibility and accessibility</li>
        <li>Enhanced usability for visually impaired users</li>
        <li>Collaborated with a web designer as part of a 5-person team</li>
        <li>Applied SEO and UX best practices to an existing HostPapa website</li>
      </ul>
    </div>`,tech:['HTML5','CSS3','HostPapa','SEO','UX/UI','Responsive Design']},
  'munchy-guru':{title:'Munchy Guru',subtitle:'Website facelift with branding refresh, navigation improvements, and expanded site structure for better SEO.',tag:'Websites',subtag:'Website Facelift',img:'static/img/munchyguru/rsz_munchy-guru-title.png',overview:'Munchy Guru needed a stronger online presence with improved navigation, clearer branding, and better search visibility.<br><br>As part of a 5-person team, I worked alongside a web designer to enhance the existing SquareUp website by improving usability, strengthening brand consistency, and expanding the site structure. The project focused on reducing user friction, modernizing the visual identity, and improving SEO through additional content and pages.',details: `
    <div class="before-after-section">
      <h4>Homepage & Navigation Improvements</h4>
      <p>The original homepage and navigation structure made it difficult for users to efficiently explore the shop. We introduced a sticky header and improved layout structure to make browsing smoother and more intuitive.</p>

      <div class="before-after-grid">
        <div>
          <h5>Before</h5>
          <img src="static/img/munchyguru/before-home.png" alt="Old Munchy Guru homepage" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>After</h5>
          <img src="static/img/munchyguru/after-home.png" alt="Updated Munchy Guru homepage and navigation" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Branding Refresh</h4>
      <p>We updated the site’s visual identity by introducing a consistent green branding color and refreshing the logo usage across the website. This was applied throughout the navigation and footer to create a more cohesive brand experience.</p>

      <h4>Site Expansion & SEO Improvements</h4>
      <p>To improve search visibility and better represent the business, we expanded the website by adding multiple new pages, including sections for catering, private chef services, and a new blog area for future content marketing.</p>

      <ul class="project-list">
        <li>Added sticky header to improve navigation and reduce user friction</li>
        <li>Applied a consistent green branding color across the website</li>
        <li>Updated logo usage for improved visual identity</li>
        <li>Expanded website by adding 8+ new pages</li>
        <li>Added sections for catering and private chef services</li>
        <li>Created a blog section to support future SEO growth</li>
        <li>Improved homepage layout and navigation structure</li>
        <li>Collaborated with a web designer as part of a 5-person team</li>
        <li>Applied UX and SEO best practices to a SquareUp website</li>
      </ul>
    </div>`,tech:['HTML5','CSS3','SquareUp','SEO','UX/UI','Responsive Design']},
  'gem-hunt':{title:'Gem Text Adventure',subtitle:'A 2D text-based RPG with ASCII art, random encounters, and multiple endings.',tag:'Games',subtag:'Game Development',img:'static/img/gemgame/rsz_gem-title.png',  overview:'Gem Text Adventure is a 2D text-based RPG developed independently, focused on exploration, combat, and decision-making.<br><br>The objective is to find the GEM and unlock its power and wealth while surviving random encounters, managing upgrades, and progressing through a branching story. The game emphasizes replayability, immersive ASCII visuals, and dynamic gameplay systems such as day/night cycles and procedural encounters.',details: `
    <div class="before-after-section">
      <h4>Core Gameplay</h4>
      <p>The player moves through a text-based world, encountering enemies, collecting upgrades, and progressing toward the ultimate goal of finding the GEM. Combat and exploration are driven by random encounters and progression systems.</p>

      <div class="before-after-grid">
        <div>
          <h5>ASCII Art & World Design</h5>
          <img src="static/img/gemhunt/ascii-art.png" alt="ASCII art from Gem Text Adventure" style="width:100%; max-width:450px; height:auto;">
        </div>

        <div>
          <h5>Shop System</h5>
          <img src="static/img/gemhunt/shop-art.png" alt="Shop interface ASCII art" style="width:100%; max-width:450px; height:auto;">
        </div>
      </div>

      <h4>Day & Night Mechanics</h4>
      <p>Gameplay changes depending on the time of day. During the day, enemies are less aggressive, while nighttime increases difficulty. Players can encounter a tent system at night to rest and restore health, adding a survival strategy layer.</p>

      <h4>Game Systems & Code Structure</h4>
      <p>The project was structured using multiple core classes that manage gameplay logic, character progression, and narrative flow. These systems work together to create a cohesive and replayable experience.</p>

      <div class="before-after-grid">
        <div>
          <h5>Game Class</h5>
          <img src="static/img/gemhunt/game-class.png" alt="Game class code structure" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Character & Story Systems</h5>
          <img src="static/img/gemhunt/character-story.png" alt="Character and story class code structure" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Replayability</h4>
      <p>The game features over 10 different endings, encouraging multiple playthroughs and exploration of different choices and strategies.</p>

      <ul class="project-list">
        <li>Developed a fully playable 2D text-based RPG independently</li>
        <li>Implemented random encounters and progression systems</li>
        <li>Designed day/night mechanics affecting gameplay difficulty</li>
        <li>Created shop and rest systems for upgrades and survival</li>
        <li>Built multiple interconnected game classes for structure and logic</li>
        <li>Added ASCII art and narrative elements for immersion</li>
        <li>Implemented over 10 different endings to increase replayability</li>
        <li>Focused on storytelling and player choice-driven progression</li>
      </ul>
    </div>`,tech:['Java','OOP','Game Development','ASCII Art','Storytelling']},
  'candy-crypt':{title:'Candy Crypt',subtitle:'A 2D dungeon crawler with procedural generation and competitive scoring gameplay.',tag:'Games',subtag:'Game Development',img:'static/img/candycrypt/rsz_candy-crypt-title.png',overview:'Candy Crypt is a 2D dungeon crawler developed collaboratively with a team of classmates, inspired by classic roguelike gameplay such as Binding of Isaac.<br><br>The objective is to survive procedurally generated dungeons, defeat enemies, collect power-ups, and achieve the highest score possible. The game emphasizes replayability, competition, and dynamic level generation to ensure each run feels unique.',details: `
    <div class="before-after-section">
      <h4>Gameplay & Objective</h4>
      <p>Players compete to survive as long as possible while defeating enemies and collecting power-ups such as hearts, speed boosts, and protective gear. Score is earned through combat performance, encouraging skillful and strategic play.</p>

      <div class="before-after-grid">
        <div>
          <h5>Assets & Visuals</h5>
          <img src="static/img/candycrypt/assets.png" alt="Candy Crypt game assets" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Procedural World Map</h5>
          <img src="static/img/candycrypt/candy-crypt-map.png" alt="Procedurally generated world map in Candy Crypt" style="width:100%; max-width:550px; height:auto;">
        </div>
		<div>
          <img src="static/img/candycrypt/candy-crypt-credits.png" alt="Credits for Candy Crypt" style="width:100%; max-width:450px; height:auto;">
        </div>
      </div>

      <h4>Procedural Level Generation</h4>
      <p>The dungeon is generated dynamically each run, with randomized placement of enemies, barriers, and power-ups. This ensures no two playthroughs are the same and significantly increases replayability.</p>

      <h4>Technical Implementation</h4>
      <p>I primarily contributed to the procedural level generation system, focusing on ensuring maps spawned correctly and efficiently. Instead of relying heavily on Unity’s built-in tools, the environment was generated at runtime through custom object instantiation.</p>

      <div class="before-after-grid">
        <div>
          <h5>Room & Map Systems</h5>
          <img src="static/img/candycrypt/create-room.png" alt="Create room system code" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Map Generation Logic</h5>
          <img src="static/img/candycrypt/draw-map.png" alt="Draw map system code" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Replayability & Competition</h4>
      <p>The game is designed around replayability and competition, allowing players to compare scores and challenge each other to progress further through increasingly difficult dungeon layouts.</p>

      <ul class="project-list">
        <li>Developed a 2D dungeon crawler with a team of 7 people</li>
        <li>Implemented procedural level generation for replayable gameplay</li>
        <li>Created runtime-based map, room, and enemy spawning systems</li>
        <li>Optimized level generation for performance and consistency</li>
        <li>Designed scoring system based on enemy elimination</li>
        <li>Integrated power-ups including health, speed, and defense upgrades</li>
        <li>Focused on competitive replayability and player progression</li>
        <li>Collaborated with teammates on gameplay systems and design</li>
      </ul>
    </div>`,tech:['Unity','C#','Procedural Generation','Game Development','OOP']},
  'falsetto':{title:'Falsetto',subtitle:'A 2D side-scrolling runner with sound-based mechanics and procedural obstacle generation.',tag:'Games',subtag:'Game Development',img:'static/img/falsetto/rsz_falsetto-title.png',overview:'Falsetto is a 2D side-scrolling endless runner developed collaboratively with a team of friends, inspired by Jetpack Joyride.<br><br>The goal is to survive as long as possible while dodging obstacles and using sound pitch mechanics to interact with the environment. The game combines reflex-based gameplay with audio-driven mechanics to create a unique twist on the endless runner genre.',details: `
    <div class="before-after-section">
      <h4>Gameplay & Objective</h4>
      <p>Players navigate a continuously scrolling environment, avoiding obstacles such as walls and glass barriers. Certain obstacles require the player to match sound pitches in order to break through and continue progressing.</p>

      <div class="before-after-grid">
        <div>
          <h5>Game Art & Design</h5>
          <img src="static/img/falsetto/falsetto-art.png" alt="Falsetto game art" style="width:100%; max-width:350px; height:auto;">
        </div>

        <div>
          <h5>Rules & Mechanics</h5>
          <img src="static/img/falsetto/falsetto-rules.png" alt="Falsetto game rules" style="width:100%; max-width:650px; height:auto;">
        </div>
      </div>

      <h4>Sound-Based Gameplay</h4>
      <p>A core mechanic of the game involves breaking glass obstacles by producing the correct sound pitch. This introduces an audio interaction layer that distinguishes it from traditional endless runners.</p>

      <h4>Procedural Scrolling & Level Generation</h4>
      <p>I worked primarily as one of the main programmers, focusing on background scrolling systems and procedural obstacle generation to ensure smooth and varied gameplay.</p>

      <div class="before-after-grid">
        <div>
          <h5>Random Level Generation</h5>
          <img src="static/img/falsetto/random-levels.png" alt="Random level generation code" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Level Randomization Logic</h5>
          <img src="static/img/falsetto/random-flip.png" alt="Randomization flip system code" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Team Development</h4>
      <p>Each team member was assigned specific responsibilities, and I contributed primarily to core programming systems, including level generation and movement mechanics.</p>

      <ul class="project-list">
        <li>Developed a 2D endless runner with a team of 6 people</li>
        <li>Implemented background scrolling system for continuous gameplay</li>
        <li>Created procedural obstacle generation for replayability</li>
        <li>Integrated sound-based mechanics for gameplay interaction</li>
        <li>Worked on core gameplay programming and system logic</li>
        <li>Collaborated with teammates on design and feature implementation</li>
        <li>Inspired by Jetpack Joyride-style endless runner mechanics</li>
      </ul>
    </div>`,tech:['Unity','C#','Game Development','Audio Mechanics','Procedural Generation']},
  'networking-game':{title:'Turn-Based Networking Game',subtitle:'A multiplayer text-based strategy game built with client-server networking and turn-based combat.',tag:'Games',subtag:'Networked Game Development',img:'static/img/networkinggame/rsz_networking-game-title.png',overview:'This is a turn-based multiplayer text strategy game built with a client-server architecture.<br><br>Players either host a server or connect as a client, then compete in tactical combat where each player controls game pieces and attempts to eliminate the opponent. The project focuses on networking fundamentals, synchronization, and turn-based game logic.',details: `
    <div class="before-after-section">
      <h4>Gameplay Overview</h4>
      <p>Players take turns moving and attacking within a grid-based system, with each unit limited to one movement and one attack per turn. The objective is to eliminate the opponent’s game pieces through strategic positioning and timing.</p>

      <div class="before-after-grid">
        <div>
          <h5>Gameplay Example</h5>
          <img src="static/img/networking/gameplay.png" alt="Turn-based multiplayer gameplay" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Game Loop System</h5>
          <img src="static/img/networking/gameloop.png" alt="Game loop implementation code" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Client-Server Architecture</h4>
      <p>The game allows one player to host a server while others connect as clients. The server manages connections, distributes players, and coordinates game state across sessions.</p>

      <h4>Networking Implementation</h4>
      <p>I worked on implementing TCP-based networking to handle communication between clients and the server. The system supports multiple matches simultaneously, pairing players into separate sessions after connection.</p>

      <div class="before-after-grid">
        <div>
          <h5>TCP Connection System</h5>
          <img src="static/img/networking/tcp-connection.png" alt="TCP connection class implementation" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Server Management</h5>
          <img src="static/img/networking/server-connection.png" alt="Server connection handling code" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Game Session Handling</h4>
      <p>The server supports multiple concurrent game sessions by pairing connected players and distributing them into isolated matches. A random seed system is used to determine player order and maintain consistency.</p>

      <ul class="project-list">
        <li>Developed a turn-based multiplayer text strategy game</li>
        <li>Implemented client-server architecture using TCP networking</li>
        <li>Supported multiple concurrent game sessions on a single server</li>
        <li>Created turn-based movement and attack mechanics</li>
        <li>Built game loop and synchronization system for multiplayer consistency</li>
        <li>Used random seed logic to assign player order</li>
        <li>Managed player pairing and session distribution on the server</li>
      </ul>
    </div>`,tech:['Java','Networking','TCP/IP','Multiplayer Systems','Game Development','OOP']},
  'opengl':{title:'OpenGL Terrain Demo',subtitle:'A 3D procedural block world with shaders, lighting, and first-person movement.',tag:'Graphics',subtag:'OpenGL Project',img:'static/img/opengl/rsz_opengl-title.png',overview:'This project is a small Minecraft-inspired 3D terrain demo built using OpenGL and GLSL shaders.<br><br>The focus of the project was on real-time rendering techniques, including lighting models, terrain generation, and camera movement. The environment features procedurally generated blocky terrain and basic player navigation using transformation matrices.',details: `
    <div class="before-after-section">
      <h4>3D Block Terrain</h4>
      <p>The world is constructed from block-based geometry similar to voxel-style environments. Terrain is generated procedurally with height variation and smoothing to create more natural transitions between regions.</p>

      <div class="before-after-grid">
        <div>
          <h5>Block World</h5>
          <img src="static/img/opengl/blocks.png" alt="3D block terrain in OpenGL" style="width:100%; max-width:350px; height:auto;">
        </div>

        <div>
          <h5>Texture Mapping</h5>
          <img src="static/img/opengl/textures.png" alt="OpenGL texture mapping example" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Lighting & Shaders</h4>
      <p>Custom GLSL shaders were used to implement ambient, specular, and fog effects, improving depth perception and visual realism.</p>

      <div class="before-after-grid">
        <div>
          <h5>Shader Effects</h5>
          <img src="static/img/opengl/shaders.png" alt="OpenGL shader lighting effects" style="width:100%; max-width:550px; height:auto;">
        </div>

        <div>
          <h5>Movement & Camera</h5>
          <img src="static/img/opengl/movement.png" alt="Player movement using transformation matrices" style="width:100%; max-width:550px; height:auto;">
        </div>
      </div>

      <h4>Procedural Terrain Generation</h4>
      <p>The terrain is generated using height-based algorithms that consider surrounding blocks to create smoother, more natural-looking landscapes.</p>

      <h4>Camera & Matrix Transformations</h4>
      <p>First-person movement is implemented using transformation matrices, enabling navigation through the 3D world without a physics engine.</p>

      <ul class="project-list">
        <li>Built a Minecraft-inspired 3D terrain system using OpenGL</li>
        <li>Implemented GLSL shaders for lighting, fog, and visual depth</li>
        <li>Created procedural block-based terrain generation</li>
        <li>Applied ambient, specular, and atmospheric lighting models</li>
        <li>Used transformation matrices for first-person camera movement</li>
        <li>Implemented texture mapping for block surfaces</li>
        <li>Focused on real-time rendering and graphics pipeline fundamentals</li>
      </ul>
    </div>`,tech:['C++','OpenGL','GLSL','Computer Graphics','Linear Algebra']},};

// ════════════════════════════════════════
// PROJECT OPEN / CLOSE
// ════════════════════════════════════════
function openProject(id){
  const p=projects[id]; if(!p) return;
  document.getElementById('proj-hero-img').src=p.img;
  document.getElementById('proj-title').textContent=p.title;
  document.getElementById('proj-subtitle').textContent=p.subtitle;
  document.getElementById('proj-tag').textContent=p.tag;
  document.getElementById('proj-sub-tag').textContent=p.subtag;
  document.getElementById('proj-overview').innerHTML = p.overview;
  document.getElementById('proj-details').innerHTML = p.details;
  const techEl=document.getElementById('proj-tech');
  techEl.innerHTML='';
  p.tech.forEach(t=>{const c=document.createElement('span');c.className='tech-chip';c.textContent=t;techEl.appendChild(c);});
  const page=document.getElementById('project-page');
  page.classList.add('active');page.scrollTop=0;
  document.body.classList.add('no-scroll');
  history.pushState({project:id},'',`#project-${id}`);
}
function closeProject(){
  document.getElementById('project-page').classList.remove('active');
  document.body.classList.remove('no-scroll');
  history.pushState({},'','#work');
}
window.addEventListener('popstate',e=>{
  if(!e.state||!e.state.project){
    document.getElementById('project-page').classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});
document.getElementById('portfolio-grid').addEventListener('click',e=>{
  const item=e.target.closest('.portfolio-item');
  if(item) openProject(item.dataset.project);
});

// ════════════════════════════════════════
// FILTER
// ════════════════════════════════════════
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach((item,i)=>{
      const cats=item.dataset.category||'';
      const show=filter==='all'||cats.includes(filter);
      if(show){
        item.classList.remove('hidden');
        item.style.opacity='0';
        setTimeout(()=>{item.style.transition='opacity 0.4s ease, transform 0.4s ease';item.style.opacity='1';},i*40);
      } else {
        item.classList.add('hidden');
        item.style.opacity='0';
      }
    });
  });
});

// ════════════════════════════════════════
// MOBILE NAV
// ════════════════════════════════════════
document.getElementById('nav-toggle').addEventListener('click',function(){
  this.classList.toggle('open');
  document.getElementById('nav-menu').classList.toggle('open');
});
document.querySelectorAll('#nav-menu .nav-link').forEach(a=>{
  a.addEventListener('click',()=>{
    document.getElementById('nav-toggle').classList.remove('open');
    document.getElementById('nav-menu').classList.remove('open');
  });
});

// ════════════════════════════════════════
// SMOOTH SCROLL
// ════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// ════════════════════════════════════════
// SECTION ENTRANCE — number counter
// ════════════════════════════════════════
function animateCounters(){
  document.querySelectorAll('.hero-stat-num').forEach(el=>{
    const match = el.textContent.match(/(\d+)/);
    if(!match) return;
    const target = parseInt(match[1]);
    const suffix = el.innerHTML.replace(/\d+/,'');
    let count = 0;
    const inc = Math.ceil(target/40);
    const t = setInterval(()=>{
      count = Math.min(count+inc, target);
      el.innerHTML = count + suffix;
      if(count>=target) clearInterval(t);
    }, 35);
  });
}
const heroObserver = new IntersectionObserver(e=>{
  if(e[0].isIntersecting) animateCounters();
},{threshold:0.5});
heroObserver.observe(document.getElementById('home'));

// ════════════════════════════════════════
// SCROLL-LINKED HERO TEXT PARALLAX
// ════════════════════════════════════════
window.addEventListener('scroll',()=>{
  const sy = window.scrollY;
  const heroContent = document.querySelector('.hero-content');
  if(heroContent && sy < window.innerHeight){
    heroContent.style.transform = `translateY(${sy * 0.22}px)`;
    heroContent.style.opacity = 1 - (sy / (window.innerHeight * 0.6));
  }
},{passive:true});

// ════════════════════════════════════════
// HEADER SCROLL STATE + PROGRESS BAR
// ════════════════════════════════════════
window.addEventListener('scroll', () => {
  // Header shrink
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Progress bar
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
  document.getElementById('progress-bar').style.width = pct + '%';

  // Parallax orbs (requestAnimationFrame throttled)
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

// ════════════════════════════════════════
// ACTIVE NAV LINK on scroll
// ════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

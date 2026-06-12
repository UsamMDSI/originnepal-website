/* ============================================================
   SHARED COMPONENTS — Injects nav + footer into every page
   ============================================================ */

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Origin Nepal Traders - Home">
      <svg class="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Himalayan mountain peak + leaf mark -->
        <circle cx="20" cy="20" r="19" fill="var(--color-primary)" opacity="0.1" stroke="var(--color-primary)" stroke-width="1.5"/>
        <!-- Mountain peaks -->
        <path d="M6 28 L14 14 L20 20 L26 10 L34 28Z" fill="var(--color-primary)" opacity="0.15"/>
        <path d="M6 28 L14 14 L20 20 L26 10 L34 28" stroke="var(--color-primary)" stroke-width="2" stroke-linejoin="round" fill="none"/>
        <!-- Leaf/grain accent -->
        <path d="M20 22 C20 22 24 19 26 22 C24 25 20 28 20 28 C20 28 16 25 14 22 C16 19 20 22 20 22Z" fill="var(--color-accent)" opacity="0.9"/>
        <!-- Stem -->
        <line x1="20" y1="22" x2="20" y2="30" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <div class="nav-logo-text">
        <span class="nav-logo-name">Origin Nepal</span>
        <span class="nav-logo-tagline">Trading with Trust</span>
      </div>
    </a>

    <ul class="nav-links" role="list">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li class="nav-dropdown">
        <a href="products.html" class="nav-link">
          Products
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown-menu">
          <a href="products.html#domestic" class="nav-dropdown-item">Domestic Market</a>
          <a href="products.html#international" class="nav-dropdown-item">International Market</a>
          <a href="products.html#agri" class="nav-dropdown-item">Agriculture & Farming</a>
          <a href="products.html#sports" class="nav-dropdown-item">Sports & Recreation</a>
          <a href="products.html#handicrafts" class="nav-dropdown-item">Handicrafts & Decorative</a>
        </div>
      </li>
      <li><a href="about.html" class="nav-link">About Us</a></li>
      <li><a href="media.html" class="nav-link">Media</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>

    <div class="nav-actions">
      <button class="theme-toggle" data-theme-toggle aria-label="Toggle dark mode">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <a href="contact.html#enquiry" class="btn btn-primary hide-mobile">Get a Quote</a>
      <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-mobile">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<div class="nav-mobile" id="nav-mobile" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <a href="index.html" class="nav-mobile-link">Home</a>
  <a href="products.html" class="nav-mobile-link">Products</a>
  <a href="products.html#domestic" class="nav-mobile-link nav-mobile-sub">— Domestic Market</a>
  <a href="products.html#international" class="nav-mobile-link nav-mobile-sub">— International Market</a>
  <a href="about.html" class="nav-mobile-link">About Us</a>
  <a href="media.html" class="nav-mobile-link">Media Center</a>
  <a href="contact.html" class="nav-mobile-link">Contact Us</a>
  <div style="padding: var(--space-4) 0;">
    <a href="contact.html#enquiry" class="btn btn-primary" style="width: 100%; justify-content: center;">Get a Quote</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="footer-brand-logo" aria-label="Origin Nepal Traders">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="var(--color-primary)" opacity="0.1" stroke="var(--color-primary)" stroke-width="1.5"/>
            <path d="M6 28 L14 14 L20 20 L26 10 L34 28Z" fill="var(--color-primary)" opacity="0.15"/>
            <path d="M6 28 L14 14 L20 20 L26 10 L34 28" stroke="var(--color-primary)" stroke-width="2" stroke-linejoin="round" fill="none"/>
            <path d="M20 22 C20 22 24 19 26 22 C24 25 20 28 20 28 C20 28 16 25 14 22 C16 19 20 22 20 22Z" fill="var(--color-accent)" opacity="0.9"/>
            <line x1="20" y1="22" x2="20" y2="30" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="footer-brand-name">Origin Nepal Traders</span>
        </a>
        <p class="footer-brand-desc">A Kathmandu-based trading firm importing and exporting quality goods — from agri products to handicrafts — connecting Nepal to the world since 2012.</p>
        <div class="footer-social">
          <a href="#" class="footer-social-link" aria-label="Facebook" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="Instagram" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://wa.me/9779828714486" class="footer-social-link" aria-label="WhatsApp" rel="noopener" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.549 4.126 1.516 5.857L0 24l6.335-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.366l-.358-.213-3.762.882.923-3.661-.235-.376A9.784 9.784 0 0 1 2.182 12C2.182 6.59 6.59 2.182 12 2.182c5.41 0 9.818 4.408 9.818 9.818 0 5.41-4.408 9.818-9.818 9.818z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <p class="footer-col-title">Products</p>
        <ul class="footer-links">
          <li><a href="products.html#agri">Agriculture & Farming</a></li>
          <li><a href="products.html#industrial">Industrial Supplies</a></li>
          <li><a href="products.html#sports">Sports & Recreation</a></li>
          <li><a href="products.html#handicrafts">Handicrafts & Felt</a></li>
          <li><a href="products.html#international">Export Products</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-col-title">Company</p>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#team">Our Team</a></li>
          <li><a href="about.html#network">Our Network</a></li>
          <li><a href="media.html">Media Center</a></li>
          <li><a href="contact.html#become-seller">Become a Partner</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-col-title">Contact</p>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Banasthali-16, Kathmandu, Nepal</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>+977-1-4987972<br>+977 9828714486</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>originnepal2022@gmail.com</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-bottom-text">© 2025 Origin Nepal Traders. All rights reserved. | Kathmandu, Nepal 🇳🇵</p>
      <ul class="footer-bottom-links">
        <li><a href="contact.html#faq">FAQ</a></li>
        <li><a href="contact.html#enquiry">Enquiry</a></li>
        <li><a href="contact.html#become-seller">Partner With Us</a></li>
      </ul>
    </div>
  </div>
</footer>

<button id="back-to-top" aria-label="Back to top" style="position:fixed;bottom:var(--space-6);right:var(--space-6);width:44px;height:44px;border-radius:var(--radius-full);background:var(--color-primary);color:white;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-lg);opacity:0;transform:translateY(8px);transition:opacity 0.3s,transform 0.3s;pointer-events:none;z-index:50;border:none;cursor:pointer;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>
</button>
<style>#back-to-top.visible{opacity:1;transform:translateY(0);pointer-events:auto;}</style>
`;

// Inject into DOM
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Re-initialize scripts that depend on injected DOM
  document.dispatchEvent(new Event('componentsLoaded'));
});

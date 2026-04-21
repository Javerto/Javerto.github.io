// ============================================
// PORTFOLYO SİTESİ - ANA SCRIPT DOSYASI
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');

  // --- Navbar scroll efekti ---
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  

  // --- Case Study Modal Logic ---
  // --- Mobil menü aç/kapa ---
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');

});
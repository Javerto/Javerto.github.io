# Yiğit Tenekeci Portfolyo & Blog Projesi

Bu proje, Finansal Veri Analisti Yiğit Tenekeci'nin profesyonel deneyimlerini, projelerini ve teknik yazılarını sergilediği modern, duyarlı (responsive) bir portfolyo web sitesidir.

## 🚀 Proje Genel Bakışı

Proje, kişisel marka bilincini güçlendirmek ve teknik yetkinlikleri (Finansal Analiz, SQL, Python, ETL süreçleri) potansiyel işverenlere ve topluluğa sunmak amacıyla geliştirilmiştir. Statik bir web sitesi yapısında olup, dinamik içeriklerini harici API'ler ve gömülü araçlarla sağlar.

### Ana Özellikler:
- **Dinamik GitHub Entegrasyonu:** `script.js` üzerinden GitHub API kullanılarak projeler otomatik olarak çekilir ve filtrelenebilir.
- **Üçlü Tema Desteği:** Kullanıcılara Açık, Sıcak (Warm) ve Koyu tema seçenekleri sunulur. Tema tercihleri `localStorage` ile saklanır.
- **Canlı Finansal Dashboard:** Streamlit üzerinde çalışan bir ETL boru hattının çıktısı iframe ile siteye gömülüdür.
- **Vaka Analizleri (Case Studies):** Önemli projeler için modal yapısı içinde detaylı problem/çözüm/sonuç analizleri sunulur.
- **Blog Sistemi:** Sektörel notlar ve teknik makaleler için HTML tabanlı bir blog yapısı mevcuttur.
- **İletişim Formu:** EmailJS kütüphanesi ile sunucu tarafı kod yazmadan e-posta gönderimi sağlanır.

## 🛠 Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3 (Custom Properties & Flexbox/Grid), Modern JavaScript (ES6+)
- **Dış Kaynaklar & API'ler:** 
  - [EmailJS](https://www.emailjs.com/) (İletişim Formu)
  - [GitHub API](https://docs.github.com/en/rest) (Repo listeleme)
  - [Google Fonts](https://fonts.google.com/) (Inter yazı tipi)
- **Veri Araçları:** Streamlit (Dashboard), yfinance, PostgreSQL, GitHub Actions (ETL boru hattı altyapısı).

## 📂 Dizin Yapısı

- `index.html`: Ana sayfa, hakkımda, öne çıkan projeler ve iletişim bölümlerini içerir.
- `blog.html`: Yayınlanan tüm blog yazılarının ve notların listelendiği merkezdir.
- `style.css`: Tüm temaları ve animasyonları (IntersectionObserver tabanlı reveal efektleri) içeren ana stil dosyasıdır.
- `script.js`: Tema yönetimi, GitHub API entegrasyonu ve modal sistemini yöneten mantık katmanıdır.
- `weekly-data-notes-*.html`: Belirli tarihlere ait teknik notları içeren içerik sayfalarıdır.
- `yigit-cv.pdf`: İndirilebilir özgeçmiş dosyası.

## ⚙️ Geliştirme ve Çalıştırma

Bu proje statik bir web sitesi olduğu için herhangi bir derleme (build) sürecine ihtiyaç duymaz.

1.  **Yerel Çalıştırma:** `index.html` dosyasını bir tarayıcıda açmanız veya VS Code "Live Server" eklentisini kullanmanız yeterlidir.
2.  **API Anahtarları:** EmailJS entegrasyonu için `script.js` içindeki `emailjs.init("...")` ve `service_id`, `template_id` alanları kullanıcıya özeldir.

## 📝 Notlar ve Kurallar

- **Tema Uyumu:** Yeni eklenen CSS sınıfları mutlaka `:root`, `[data-theme="warm"]` ve `[data-theme="dark"]` değişkenleriyle uyumlu olmalıdır.
- **Dinamik İçerik:** GitHub repolarının açıklamaları repo ayarlarından çekildiği için, repolardaki "Description" alanlarının güncel tutulması önerilir.
- **Mobil Öncelik:** Tasarım mobil öncelikli (mobile-first) prensibiyle hazırlanmıştır, yapılan değişikliklerde bu uyum korunmalıdır.

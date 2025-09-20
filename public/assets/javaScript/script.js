document.addEventListener("DOMContentLoaded", function () {
  // ambil nama file dari path
  const current = (window.location.pathname.split("/").pop() || "index.html")
    .split("?")[0]
    .split("#")[0];

  document.querySelectorAll(".nav-links ul li").forEach(function (li) {
    const a = li.querySelector("a");
    if (!a) return;

    let href = a.getAttribute("href").split("/").pop() || "index.html";
    href = href.split("?")[0].split("#")[0];

    if (href === current) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // 1) Sesuaikan padding-top body sesuai tinggi navbar (otomatis)
  function adjustPadding() {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  }
  adjustPadding();
  window.addEventListener('resize', adjustPadding);

  // 2) Tandai menu yang aktif berdasarkan nama file URL
  const current = (window.location.pathname.split('/').pop() || 'index.html').split('?')[0].split('#')[0];

  document.querySelectorAll('.nav-links ul li').forEach(function(li) {
    const a = li.querySelector('a');
    if (!a) return;

    let href = a.getAttribute('href').split('/').pop() || 'index.html';
    href = href.split('?')[0].split('#')[0];

    if (href === current) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
});



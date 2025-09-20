export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold">
            Terima kasih sudah mengunjungi web ini
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Follow me on social media
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/maulanafikriash"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition text-2xl"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/maulanafikriash/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-pink-400 hover:text-pink-300 transition text-2xl"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maulanafikriash/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-sky-400 hover:text-sky-300 transition text-2xl"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p>Created by @maulanafikriash</p>
          <p>&#169; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

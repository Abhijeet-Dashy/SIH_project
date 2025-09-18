import React from 'react';

const IconLink: React.FC<{ href: string; label: string; path: string }> = ({ href, label, path }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-brand-text hover:bg-slate-50 hover:-translate-y-0.5 transition"
    target="_blank"
    rel="noreferrer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d={path} />
    </svg>
  </a>
);

const SiteFooter: React.FC = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-10 mt-10 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="text-xl font-bold text-brand-text">Samatva</div>
          <p className="text-brand-text-light mt-1">Well-being for every student.</p>
        </div>
        <div className="flex items-center gap-3">
          <IconLink href="https://twitter.com" label="Twitter" path="M19.633 7.997c.013.18.013.36.013.54 0 5.49-4.18 11.82-11.82 11.82-2.35 0-4.53-.69-6.37-1.88.33.04.65.05.99.05 1.94 0 3.72-.66 5.14-1.78-1.81-.03-3.34-1.22-3.86-2.85.25.04.5.06.76.06.37 0 .74-.05 1.08-.14-1.89-.38-3.31-2.05-3.31-4.05v-.05c.55.31 1.18.5 1.85.53-1.1-.74-1.82-1.99-1.82-3.41 0-.75.2-1.45.55-2.05 2 2.46 5.01 4.07 8.39 4.24-.06-.3-.09-.61-.09-.93 0-2.24 1.81-4.06 4.05-4.06 1.17 0 2.22.49 2.96 1.27.92-.18 1.8-.52 2.58-.99-.3.93-.93 1.72-1.76 2.22.82-.1 1.6-.31 2.33-.63-.54.81-1.23 1.52-2.02 2.09z" />
          <IconLink href="https://instagram.com" label="Instagram" path="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.5a2.5 2.5 0 1 1-.001 5.001A2.5 2.5 0 0 1 12 9.5zM17.5 6A1.5 1.5 0 1 0 17.5 9 1.5 1.5 0 0 0 17.5 6z" />
          <IconLink href="https://github.com" label="GitHub" path="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07 .9 1.57 2.36 1.12 2.94.85 .09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05 .8-.23 1.65-.35 2.5-.35s1.7.12 2.5.35C17.2 6.16 18.04 6.43 18.04 6.43c.56 1.4.21 2.44.1 2.7 .64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.82-4.57 5.08 .36.32.68.95.68 1.91 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.28 10.28 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </div>
      </div>
      <div className="mt-6 text-sm text-brand-text-light">© {new Date().getFullYear()} Samatva. All rights reserved.</div>
    </footer>
  );
};

export default SiteFooter;



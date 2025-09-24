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
         
        </div>
        <div className="flex items-center gap-3">
          
        </div>
      </div>
      <div className="mt-6 text-sm text-brand-text-light">© {new Date().getFullYear()} Samatva. All rights reserved.</div>
    </footer>
  );
};

export default SiteFooter;



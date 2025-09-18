import React, { useState } from 'react';

type QA = { id: string; q: string; a: string };

const QAS: QA[] = [
  { id: 'q1', q: 'Is my data private?', a: 'Yes. We prioritize privacy and never sell your data. You can control and delete your data anytime.' },
  { id: 'q2', q: 'Does it work offline?', a: 'Core sessions are available offline after your first load, so you can find calm anywhere.' },
  { id: 'q3', q: 'How is this different?', a: 'We combine cognitive science with delightful design to make well-being a daily habit you look forward to.' },
];

const FAQ: React.FC<{ items?: QA[] }> = ({ items = QAS }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section className="px-4 md:px-8 lg:px-16 py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text text-center mb-8">FAQs</h2>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm">
          {items.map((qa) => {
            const open = openId === qa.id;
            return (
              <div key={qa.id}>
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between"
                  onClick={() => setOpenId(open ? null : qa.id)}
                  aria-controls={`panel-${qa.id}`}
                >
                  <span className="font-semibold text-brand-text">{qa.q}</span>
                  <span className={`ml-4 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div id={`panel-${qa.id}`} className={`px-5 overflow-hidden transition-all ${open ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                  <p className="text-brand-text-light">{qa.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;



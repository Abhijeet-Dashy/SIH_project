import React from 'react';

export const PaperclipIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
  </svg>
);

export const MicIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export const ArrowRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const LoadingSpinnerIcon: React.FC = () => (
  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export const SparkleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L13.88 8.12L22 10L13.88 11.88L12 20L10.12 11.88L2 10L10.12 8.12L12 0Z" />
    </svg>
);

export const CloudIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" />
    </svg>
);

export const StarIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const AppleAwardIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1,10.68a.38.38,0,0,0-.31.18,1,1,0,0,1-1.09.68,1.15,1.15,0,0,1-.8-.43A3.79,3.79,0,0,0,14.28,10a3.63,3.63,0,0,0-2.3,1,3.42,3.42,0,0,0-1.28,2.6,4.6,4.6,0,0,0,.19,1.46A4.32,4.32,0,0,0,12.5,18.5a4.34,4.34,0,0,0,3.32-1.63,1.17,1.17,0,0,1,1.12-.67,1,1,0,0,1,.73.39,1.14,1.14,0,0,0,.8.41,1.12,1.12,0,0,0,1.11-1.1,4.42,4.42,0,0,0-2.31-3.75,4.37,4.37,0,0,0-2.12-.57,2.2,2.2,0,0,1,1.69-2.28A2.16,2.16,0,0,1,19.1,10.68Zm-5.3-2.22a2.38,2.38,0,0,0-1.53,2.83,2.44,2.44,0,0,0,2.94-1.42A2.43,2.43,0,0,0,13.8,8.46Z" />
    </svg>
);

export const HeadphoneAwardIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3a9 9 0 00-9 9v6a3 3 0 003 3h1.5a1.5 1.5 0 001.5-1.5V15a1.5 1.5 0 00-1.5-1.5H7.5a4.5 4.5 0 014.5-4.5A4.5 4.5 0 0116.5 13.5H15a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5H16.5a3 3 0 003-3v-6a9 9 0 00-9-9z"/>
    </svg>
);

export const ContentFaceIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 14.5C8.5 14.5 9.5 15.5 12 15.5C14.5 15.5 15.5 14.5 15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 10H9.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 10H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const HappyFaceIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 14.5C8.5 14.5 9.5 16.5 12 16.5C14.5 16.5 15.5 14.5 15.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 9.5C9.33333 9.16667 9.6 9 10 9C10.4 9 10.6667 9.16667 11 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 9.5C13.3333 9.16667 13.6 9 14 9C14.4 9 14.6667 9.16667 15 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const CalmFaceIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8.5 10C8.5 10 9.16667 9 10 9C10.8333 9 11.5 10 11.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12.5 10C12.5 10 13.1667 9 14 9C14.8333 9 15.5 10 15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const FlameIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.65 9.6C17.41 6.2 14.28 4.22 12.55 3.16C12.24 2.96 11.76 2.96 11.45 3.16C9.72 4.22 6.59 6.2 6.35 9.6C6.15 12.31 8.04 15.58 12 21C15.96 15.58 17.85 12.31 17.65 9.6Z"/>
    </svg>
);
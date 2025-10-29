import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'de', name: 'Deutsch', icon: '🇩🇪' },
  { code: 'es', name: 'Español', icon: '🇪🇸' },
  { code: 'fr', name: 'Français', icon: '🇫🇷' },
  { code: 'en', name: 'English', icon: '🇬🇧' },
];

export default function LanguageSwitcherDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          cursor: 'pointer',
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>{currentLang.icon}</span>
        <span>{currentLang.name}</span>
      </button>

      {open && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            margin: 0,
            padding: '5px 0',
            listStyle: 'none',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '150px',
            zIndex: 1000,
          }}
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleChange(lang.code)}
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: '5px 10px',
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  opacity: i18n.language === lang.code ? 1 : 0.7,
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

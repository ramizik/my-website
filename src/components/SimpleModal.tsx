import React, { useEffect } from "react";

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SimpleModal({ isOpen, onClose, children }: SimpleModalProps) {
  console.log('SimpleModal render - isOpen:', isOpen);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener when modal is open
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Check if dark mode is active
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div
        className="rounded-lg p-6 max-w-4xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto relative shadow-lg border"
        onClick={(e) => e.stopPropagation()}
        style={{
          zIndex: 10000,
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          color: isDarkMode ? '#f9fafb' : '#111827',
          borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
          scrollBehavior: 'smooth'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl font-bold"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function SettingsModal({ onClose }) {
  const { theme, changeTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      marketing: false,
      updates: true,
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showBio: true,
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      reducedMotion: false,
    },
    language: 'english'
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeTab, setActiveTab] = useState('notifications');

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Update settings with current theme
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        theme: theme
      }
    }));
  }, [theme]);

  const handleSave = async () => {
    setLoading(true);
    try {
      // Update theme if changed
      if (settings.appearance.theme !== theme) {
        changeTheme(settings.appearance.theme);
      }
      
      // Save other settings to localStorage
      localStorage.setItem('userSettings', JSON.stringify(settings));
      setSuccessMessage('Settings saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const languages = [
    'english',
    'spanish',
    'french',
    'german',
    'chinese',
    'japanese'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-4">
              {['appearance', 'language'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-green-500 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === 'appearance' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Appearance Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Theme
                    </label>
                    <select
                      value={settings.appearance.theme}
                      onChange={(e) => setSettings({
                        ...settings,
                        appearance: {
                          ...settings.appearance,
                          theme: e.target.value
                        }
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Font Size
                    </label>
                    <select
                      value={settings.appearance.fontSize}
                      onChange={(e) => setSettings({
                        ...settings,
                        appearance: {
                          ...settings.appearance,
                          fontSize: e.target.value
                        }
                      })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.appearance.reducedMotion}
                        onChange={(e) => setSettings({
                          ...settings,
                          appearance: {
                            ...settings.appearance,
                            reducedMotion: e.target.checked
                          }
                        })}
                        className="rounded border-gray-300 dark:border-gray-600 text-green-500 focus:ring-green-500 dark:bg-gray-700"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'language' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Language Settings</h3>
                <div>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({
                      ...settings,
                      language: e.target.value
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="pt-6">
              <button
                onClick={handleSave}
                disabled={loading}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors disabled:bg-green-300"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 
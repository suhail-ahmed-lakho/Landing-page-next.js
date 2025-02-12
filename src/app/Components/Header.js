'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './Logo.svg';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import ProfileDashboard from './ProfileDashboard';
import SettingsModal from './SettingsModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, [showProfile]); // Re-run when profile modal closes to get updated data

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setShowLogin(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={150}
              priority
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Community</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Blog</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Pricing</a>
            
            {currentUser ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green-500">
                    {currentUser.profileImage ? (
                      <Image
                        src={currentUser.profileImage}
                        alt={currentUser.fullName}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm font-medium">
                          {currentUser.fullName?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="font-medium">{currentUser.fullName}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 w-56 mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{currentUser.fullName}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser.email}</p>
                  </div>
                  <button
                    onClick={() => setShowProfile(true)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                  >
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowSignup(true)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Register Now
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Features</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Community</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Pricing</a>
              {currentUser ? (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                  <div className="px-3 py-2 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green-500">
                      {currentUser.profileImage ? (
                        <Image
                          src={currentUser.profileImage}
                          alt={currentUser.fullName}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm font-medium">
                            {currentUser.fullName?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{currentUser.fullName}</span>
                  </div>
                  <button
                    onClick={() => setShowProfile(true)}
                    className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSignup(true)}
                  className="block w-full px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          switchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          switchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showProfile && (
        <ProfileDashboard onClose={() => setShowProfile(false)} />
      )}

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </nav>
  );
};

export default Header;

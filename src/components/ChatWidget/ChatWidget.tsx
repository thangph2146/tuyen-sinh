'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.chat-widget')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const widgetClasses = [
    'chat-widget',
    isOpen ? 'chat-widget--open' : '',
    isHovered ? 'chat-widget--hover' : ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={widgetClasses} 
      aria-label="Chat support options"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="chat-widget__buttons">
        {/* Zalo Chat */}
        <a
          href="https://zalo.me/0888353488"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-widget__btn chat-widget__btn--zalo"
          aria-label="Chat qua Zalo"
        >
          <Icon icon="simple-icons:zalo" className="chat-widget__icon" width={24} height={24} />
          <span className="chat-widget__tooltip">Chat Zalo tư vấn</span>
        </a>

        {/* AI Chat */}
        <a
          href="#"
          className="chat-widget__btn chat-widget__btn--ai"
          aria-label="AI Chat tư vấn 24/7"
        >
          <Icon icon="mdi:robot" className="chat-widget__icon" width={24} height={24} />
          <span className="chat-widget__tooltip">AI tư vấn 24/7</span>
        </a>

        {/* Facebook Messenger */}
        <a
          href="https://m.me/hubuniversity"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-widget__btn chat-widget__btn--messenger"
          aria-label="Chat qua Facebook Messenger"
        >
          <Icon icon="mdi:facebook-messenger" className="chat-widget__icon" width={24} height={24} />
          <span className="chat-widget__tooltip">Chat tư vấn tuyển sinh</span>
        </a>
      </div>

      {/* Mobile toggle button */}
      <button
        className="chat-widget__toggle"
        onClick={toggleChat}
        aria-label={isOpen ? "Đóng menu chat" : "Mở menu chat"}
        aria-expanded={isOpen}
      >
        <Icon 
          icon="mdi:chat" 
          className="chat-widget__toggle-icon chat-widget__toggle-icon--chat"
          width={28}
          height={28}
        />
        <Icon 
          icon="mdi:close" 
          className="chat-widget__toggle-icon chat-widget__toggle-icon--close"
          width={28}
          height={28}
        />
      </button>
    </div>
  );
};

export default ChatWidget;

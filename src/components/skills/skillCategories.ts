"use client";
import { SkillItem } from './SkillGrid';

export const skillCategories = {
  development: {
    languages: [
      { name: 'Python', logoUrl: '/images/python-logo.png' },
      { name: 'HTML', logoUrl: '/images/html-logo.png' }
    ],
    tools: [
      { name: 'AWS', logoUrl: '/images/aws-logo.png' },
      { name: 'Hugging Face', logoUrl: '/images/hugging-face-logo.png' },
      { name: 'Google Firebase', logoUrl: '/images/firebase-logo.png' },
      { name: 'Lovable Dev', logoUrl: '/images/lovable-dev-logo.png' },
      { name: 'Windsurf', logoUrl: '/images/windsurf-logo.png' },
      { name: 'Cursor', logoUrl: '/images/cursor-logo.png' },
      { name: 'Drupal', logoUrl: '/images/drupal-logo.png' },
      { name: 'Adobe Enterprise Manager', logoUrl: '/images/aem-logo.png' }
    ]
  },
  ai: [
    { name: 'ChatGPT', logoUrl: '/images/chatgpt-logo.png' },
    { name: 'Gemini', logoUrl: '/images/gemini-logo.png' },
    { name: 'Claude', logoUrl: '/images/claude-logo.png' },
    { name: 'DeepSeek', logoUrl: '/images/deepseek-logo.png' },
    { name: 'Stable Diffusion', logoUrl: '/images/stable-diffusion-logo.png' },
    { name: 'Leonardo AI', logoUrl: '/images/leonardo-ai-logo.png' },
    { name: 'Midjourney', logoUrl: '/images/midjourney-logo.png' },
    { name: 'Suno', logoUrl: '/images/suno-logo.png' },
    { name: 'Udio', logoUrl: '/images/udio-logo.png' },
    { name: 'Kling AI', logoUrl: '/images/kling-ai-logo.png' },
    { name: 'Sora', logoUrl: '/images/sora-logo.png' }
  ],
  analytics: [
    { name: 'Google Search Console', logoUrl: '/images/google-search-console-logo.png' },
    { name: 'Google Analytics', logoUrl: '/images/google-analytics-logo.png' },
    { name: 'SEMrush', logoUrl: '/images/semrush-logo.png' },
    { name: 'HubSpot', logoUrl: '/images/hubspot-logo.png' }
  ],
  productivity: [
    { name: 'Microsoft 365', logoUrl: '/images/microsoft-365-logo.png' },
    { name: 'Word', logoUrl: '/images/word-logo.png' },
    { name: 'Excel', logoUrl: '/images/excel-logo.png' },
    { name: 'PowerPoint', logoUrl: '/images/powerpoint-logo.png' },
    { name: 'Trados', logoUrl: '/images/trados-logo.png' }
  ],
  creative: {
    audio: [
      { name: 'FL Studio', logoUrl: '/images/fl-studio-logo.png' },
      { name: 'Ableton', logoUrl: '/images/ableton-logo.png' }
    ],
    video: [
      { name: 'YouTube', logoUrl: '/images/youtube-logo.png' },
      { name: 'Adobe Premiere', logoUrl: '/images/adobe-premiere-logo.png' },
      { name: 'Sony Vegas', logoUrl: '/images/sony-vegas-logo.png' },
      { name: 'CapCut', logoUrl: '/images/capcut-logo.png' },
      { name: 'Camtasia', logoUrl: '/images/camtasia-logo.png' },
      { name: 'OBS Studio', logoUrl: '/images/obs-studio-logo.png' }
    ],
    design: [
      { name: 'Adobe Photoshop', logoUrl: '/images/adobe-photoshop-logo.png' },
      { name: 'Canva', logoUrl: '/images/canva-logo.png' }
    ]
  }
};

export default skillCategories; 

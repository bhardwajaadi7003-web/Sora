import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import {
  X,
  Smartphone,
  ExternalLink,
  Download,
  Copy,
  Check,
  ShieldCheck,
  Share2,
  Sparkles,
  Layers
} from 'lucide-react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // The active development URL that is guaranteed to be running and responding
  const activeUrl = 'https://ais-dev-4ewqkvs6i5ui3wsbvqkyvt-750935430308.asia-east1.run.app';
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : activeUrl;
  const targetUrl = currentOrigin.includes('localhost') ? activeUrl : currentOrigin;

  const [copiedManifest, setCopiedManifest] = useState(false);

  const manifestJsonString = JSON.stringify(
    {
      id: '/',
      name: 'SORA Aerocity — A Journey Above the Clouds',
      short_name: 'SORA',
      description: "Delhi's premier rooftop Pan-Asian sky lounge at Worldmark 3, Aerocity. Authentic Japanese Robatayaki, sushi, and runway views.",
      start_url: targetUrl,
      scope: '/',
      display: 'standalone',
      orientation: 'any',
      theme_color: '#121212',
      background_color: '#121212',
      icons: [
        {
          src: `${targetUrl}/pwa-192x192.png`,
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${targetUrl}/pwa-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${targetUrl}/pwa-maskable-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      screenshots: [
        {
          src: `${targetUrl}/pwa-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          form_factor: 'wide',
          label: 'SORA Aerocity Rooftop Sky Lounge',
        },
        {
          src: `${targetUrl}/pwa-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          form_factor: 'narrow',
          label: 'SORA Aerocity Menu',
        },
      ],
    },
    null,
    2
  );

  const handleCopyManifest = () => {
    navigator.clipboard.writeText(manifestJsonString);
    setCopiedManifest(true);
    setTimeout(() => setCopiedManifest(false), 2500);
  };

  const handleCopy = (urlToCopy: string) => {
    navigator.clipboard.writeText(urlToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDirect = (urlToOpen: string) => {
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  };

  const pwabuilderUrl = `https://www.pwabuilder.com/?url=${encodeURIComponent(targetUrl)}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-[#181818] border border-[#D4AF37]/50 rounded-sm shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] border-b border-[#2A2A2A] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A3A3A3] hover:text-[#F8F8F8] p-1.5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">
            <Smartphone className="w-4 h-4" />
            <span>Mobile App & Direct Access</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#F8F8F8]">
            Experience SORA on Mobile & Full-Screen
          </h3>
          <p className="text-xs text-[#A3A3A3] mt-1">
            View without the AI Studio preview bar or install directly as a native app on Android & iOS.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="p-6 space-y-6">
          
          {/* Method 1: View Direct / Without Preview Frame */}
          <div className="p-4 bg-[#121212] border border-[#262626] rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#F8F8F8] flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                1. View Full-Screen (No Preview Frame)
              </span>
              <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-wider">
                Instant
              </span>
            </div>
            <p className="text-xs text-[#8E8E8E] leading-relaxed">
              Open the direct web address in your browser (Chrome, Safari, Brave, or Firefox) on your phone or desktop:
            </p>

            <div className="flex items-center gap-2 bg-[#1A1A1A] p-2.5 rounded-sm border border-[#333333]">
              <span className="text-xs font-mono text-[#C5C5C5] truncate flex-1 select-all">
                {targetUrl}
              </span>
              <button
                onClick={() => handleCopy(targetUrl)}
                className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Link'}
              </button>
            </div>

            <button
              onClick={() => handleOpenDirect(targetUrl)}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F8F8] bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#D4AF37] rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
              Open Live Site in New Window
            </button>
          </div>

          {/* Method 2: Instant PWA Install (No APK Needed) */}
          <div className="p-4 bg-[#121212] border border-[#262626] rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#F8F8F8] flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#D4AF37]" />
                2. Install Mobile App (PWA)
              </span>
              <span className="text-[10px] uppercase font-mono text-emerald-400 tracking-wider">
                Recommended
              </span>
            </div>

            <p className="text-xs text-[#8E8E8E] leading-relaxed">
              Progressive Web Apps install directly to your device home screen with full offline caching, gold app icon, and no browser URL bar:
            </p>

            {isInstalled ? (
              <div className="p-3 bg-[#1A1A1A] border border-[#D4AF37]/50 rounded-sm text-center text-xs text-[#D4AF37] flex items-center justify-center gap-2">
                <Check className="w-4 h-4" /> SORA is already installed as a standalone app!
              </div>
            ) : isInstallable ? (
              <button
                onClick={install}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#121212] bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" /> Install SORA App on This Device
              </button>
            ) : isIOS ? (
              <div className="p-3 bg-[#1A1A1A] border border-[#333333] rounded-sm text-xs text-[#C5C5C5] space-y-1">
                <span className="text-[#D4AF37] font-semibold block">How to install on iPhone / iPad:</span>
                <p>1. Open this link in Safari.</p>
                <p>2. Tap the <strong>Share</strong> button (box with upward arrow) at the bottom.</p>
                <p>3. Tap <strong>"Add to Home Screen"</strong>.</p>
              </div>
            ) : (
              <div className="p-3 bg-[#1A1A1A] border border-[#333333] rounded-sm text-xs text-[#C5C5C5] space-y-1">
                <span className="text-[#D4AF37] font-semibold block">Android Chrome / Edge:</span>
                <p>Tap the <strong>⋮ (three dots)</strong> menu in your browser, then tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</p>
              </div>
            )}
          </div>

          {/* Method 3: Download / Build Android APK */}
          <div className="p-4 bg-[#121212] border border-[#262626] rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#F8F8F8] flex items-center gap-2">
                <Download className="w-4 h-4 text-[#D4AF37]" />
                3. Download Android APK (.apk file)
              </span>
              <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-wider">
                Direct Download
              </span>
            </div>

            <p className="text-xs text-[#8E8E8E] leading-relaxed">
              If PWABuilder times out due to cloud server security verification, use <strong>WebIntoApp</strong> to generate and download an installable <code>.apk</code> in 45 seconds:
            </p>

            <a
              href={`https://www.webintoapp.com/free-url-to-app-converter?url=${encodeURIComponent(targetUrl)}&name=SORA%20Aerocity`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-gradient-to-r from-[#D4AF37] to-[#EEDB91] hover:brightness-110 rounded-sm transition-all flex items-center justify-center gap-2 font-mono"
            >
              <span>Generate Direct .APK via WebIntoApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2 border-t border-[#262626]">
              <span className="text-[11px] font-semibold text-[#C5C5C5] block mb-1.5">
                Or using PWABuilder (Fix "Manifest Missing"):
              </span>
              <ol className="text-[11px] text-[#A3A3A3] list-decimal list-inside space-y-1 bg-[#161616] p-2.5 rounded-sm border border-[#262626]">
                <li>Tap <strong>"Click here to customize it!"</strong> on PWABuilder.</li>
                <li>Tap <strong>"Copy Ready-to-Paste Manifest"</strong> below.</li>
                <li>Paste it into PWABuilder &rarr; tap Save &rarr; <strong>"Package for Stores"</strong> unlocks!</li>
              </ol>

              <button
                onClick={handleCopyManifest}
                className="w-full mt-2 py-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                {copiedManifest ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedManifest ? 'Manifest JSON Copied!' : 'Copy Ready-to-Paste Manifest JSON'}
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141414] border-t border-[#262626] flex items-center justify-between text-xs text-[#777777]">
          <span>SORA Aerocity · PWA & Android Ready</span>
          <button
            onClick={onClose}
            className="text-xs text-[#A3A3A3] hover:text-[#F8F8F8] uppercase tracking-wider"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

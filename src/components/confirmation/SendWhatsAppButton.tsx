import React, { useState } from 'react';
import { MessageSquare, ExternalLink, Copy, Check, Eye } from 'lucide-react';
import { Order } from '../../types/order';
import { getWhatsAppUrl, generateWhatsAppMessage } from '../../lib/whatsapp';

interface SendWhatsAppButtonProps {
  order: Order;
}

export const SendWhatsAppButton: React.FC<SendWhatsAppButtonProps> = ({ order }) => {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const whatsappUrl = getWhatsAppUrl(order);
  const messageText = generateWhatsAppMessage(order);

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-stone-800">
      
      <div className="space-y-2 text-center sm:text-left">
        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
          Core Feature (FEAT-08)
        </span>
        <h3 className="text-2xl font-extrabold font-serif text-white">
          Dispatch Order via WhatsApp
        </h3>
        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
          Click below to launch WhatsApp with your formatted order summary automatically pre-filled.
        </p>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.99]"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span>Send Order via WhatsApp Now</span>
        <ExternalLink className="w-5 h-5 ml-1" />
      </a>

      {/* Message Preview Accordion */}
      <div className="border border-stone-800 rounded-2xl overflow-hidden bg-stone-950">
        <div className="flex items-center justify-between px-4 py-3 bg-stone-900 border-b border-stone-800 text-xs">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 font-bold text-stone-300 hover:text-white"
          >
            <Eye className="w-4 h-4 text-amber-500" />
            <span>{showPreview ? 'Hide' : 'View'} Live WhatsApp Message Preview</span>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Text</span>
              </>
            )}
          </button>
        </div>

        {showPreview && (
          <div className="p-4 text-xs font-mono whitespace-pre-wrap text-emerald-300/90 leading-relaxed max-h-60 overflow-y-auto">
            {messageText}
          </div>
        )}
      </div>

    </div>
  );
};

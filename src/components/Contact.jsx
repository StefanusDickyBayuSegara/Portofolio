import { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, contactContent } from '../data/content';
import ExternalLink from './ui/ExternalLink';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

export default function Contact() {
  const { t, language } = useLanguage();

  // State untuk form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State status pengiriman form
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  // Handle perubahan input form
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Salin alamat email ke clipboard dengan feedback visual
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback jika navigator.clipboard tidak diizinkan
      const el = document.createElement('textarea');
      el.value = personalInfo.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Handle submit form ke endpoint Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(contactContent.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // Teks sapaan otomatis saat klik WhatsApp
  const waGreeting = encodeURIComponent(
    language === 'id'
      ? `Halo Stefanus Dicky, saya melihat website portofolio Anda dan ingin berdiskusi terkait peluang proyek / kerja.`
      : `Hi Stefanus Dicky, I came across your portfolio website and would like to connect regarding an opportunity / project.`
  );
  const waUrl = `${personalInfo.whatsappUrl}?text=${waGreeting}`;

  return (
    <section id="kontak" className="py-20 md:py-28 border-t border-dark-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-xs font-mono text-primary mb-3">
            <MessageSquare size={14} />
            <span>
              {language === 'id' ? 'Terhubung & Berdiskusi' : 'Get In Touch'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            {t(contactContent.sectionTitle)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            {t(contactContent.subtitle)}
          </p>
        </div>

        {/* Layout 2 Kolom: Info Kontak & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Kolom Kiri: Kontak Langsung (5 dari 12 kolom) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Kartu Chat WhatsApp Langsung */}
            <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageSquare size={18} />
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Fast Response
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100 mb-1">
                WhatsApp
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {personalInfo.phone}
              </p>

              <ExternalLink
                href={waUrl}
                showIcon={true}
                className="w-full justify-center px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium text-xs sm:text-sm transition-all"
              >
                {t(contactContent.labels.directChat)}
              </ExternalLink>
            </div>

            {/* Kartu Email + Salin Email */}
            <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-primary/40 transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                  <Mail size={18} />
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Email
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100 mb-1">
                {personalInfo.email}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {language === 'id' ? 'Untuk korespondensi formal & dokumen' : 'For formal inquiries & documents'}
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 text-center px-4 py-2 rounded-xl bg-dark-bg hover:bg-dark-hover border border-dark-border text-slate-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  {language === 'id' ? 'Kirim Email' : 'Send Email'}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-dark-bg hover:bg-dark-hover border border-dark-border text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Salin Alamat Email"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">{t(contactContent.labels.copied)}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>{t(contactContent.labels.copyEmail)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Info Lokasi & Link Sosial */}
            <div className="p-6 rounded-2xl bg-dark-surface/50 border border-dark-border flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin size={15} className="text-primary shrink-0" />
                <span>{t(personalInfo.location)}</span>
              </div>

              <div className="pt-3 border-t border-dark-border/60 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">
                  Socials:
                </span>
                <ExternalLink
                  href={personalInfo.github}
                  className="px-3 py-1.5 rounded-lg bg-dark-bg border border-dark-border text-xs text-slate-300 hover:text-primary transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </ExternalLink>
                <ExternalLink
                  href={personalInfo.linkedin}
                  className="px-3 py-1.5 rounded-lg bg-dark-bg border border-dark-border text-xs text-slate-300 hover:text-primary transition-colors"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </ExternalLink>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Form Kontak Sederhana (7 dari 12 kolom) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-surface border border-dark-border shadow-sm">
              <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                <span>
                  {language === 'id' ? 'Kirim Pesan Langsung' : 'Send a Direct Message'}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {language === 'id'
                  ? 'Formulir ini terhubung langsung ke inbox email saya.'
                  : 'This form sends a message directly to my inbox.'}
              </p>

              {/* Status Sukses */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5" />
                  <p>{t(contactContent.labels.successMessage)}</p>
                </div>
              )}

              {/* Status Error */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm">
                  <p>{t(contactContent.labels.errorMessage)}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Nama */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    {t(contactContent.labels.name)} <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t(contactContent.labels.namePlaceholder)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border focus:border-primary focus:outline-none text-slate-100 text-sm placeholder:text-slate-500 transition-colors"
                  />
                </div>

                {/* Input Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    {t(contactContent.labels.email)} <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t(contactContent.labels.emailPlaceholder)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border focus:border-primary focus:outline-none text-slate-100 text-sm placeholder:text-slate-500 transition-colors"
                  />
                </div>

                {/* Input Pesan */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    {t(contactContent.labels.message)} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t(contactContent.labels.messagePlaceholder)}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-bg border border-dark-border focus:border-primary focus:outline-none text-slate-100 text-sm placeholder:text-slate-500 transition-colors resize-none"
                  />
                </div>

                {/* Tombol Kirim */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-slate-950 font-semibold text-sm hover:bg-sky-400 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-primary/20 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>{t(contactContent.labels.sending)}</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>{t(contactContent.labels.sendButton)}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


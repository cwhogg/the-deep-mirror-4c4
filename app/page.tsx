'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"The Deep Mirror","url":"https://the-deep-mirror.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"The Deep Mirror","url":"https://the-deep-mirror.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Has the Enneagram been debunked by psychology research?","acceptedAnswer":{"@type":"Answer","text":"The Enneagram framework itself has strong theoretical foundations, but most testing methods are scientifically flawed. The issue isn't the system—it's that static surveys can't capture the complexity needed for accurate typing."}},{"@type":"Question","name":"What makes this different from other Enneagram test sites?","acceptedAnswer":{"@type":"Answer","text":"Every existing tool relies on questionnaires that users can consciously or unconsciously game. Our AI conducts actual psychological interviews, following up on inconsistencies and probing deeper into motivations like a human expert would."}},{"@type":"Question","name":"How much does clinical-grade Enneagram assessment typically cost?","acceptedAnswer":{"@type":"Answer","text":"Professional tools like iEQ9 charge $30-60 per assessment plus expensive certification requirements. We're building a more accessible solution that delivers superior accuracy through AI rather than manual interpretation."}},{"@type":"Question","name":"What do professional psychologists think of Enneagram testing accuracy?","acceptedAnswer":{"@type":"Answer","text":"Most criticism centers on poor testing methodology rather than the Enneagram itself. Static surveys suffer from social desirability bias and oversimplification—exactly the problems our conversational approach is designed to solve."}},{"@type":"Question","name":"Why do so many people get mistyped on traditional Enneagram tests?","acceptedAnswer":{"@type":"Answer","text":"Static questionnaires can't distinguish between surface behaviors and core motivations. Our AI interviewer explores the 'why' behind your answers, catching the subtle distinctions that separate, for example, a success-driven Type 3 from a knowledge-seeking Type 5."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Deep Mirror
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Why Enneagram Tests Are Inaccurate—And How AI Conversations Fix It
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Replace static surveys with dynamic psychological interviewing. Get clinical-grade Enneagram typing through AI-powered conversations that adapt, probe deeper, and eliminate social desirability bias.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Get Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why The Deep Mirror?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Clinical-Grade Enneagram Testing That Actually Works" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Clinical-Grade Enneagram Testing That Actually Works</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Our AI interviewer probes inconsistencies and follows up on responses like a skilled therapist, delivering accuracy that static questionnaires simply cannot match.</p>
          </section>
          <section aria-label="HR Enneagram Assessment Tools Built for Professionals" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">HR Enneagram Assessment Tools Built for Professionals</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Designed specifically for executive coaches and HR leaders who need reliable personality insights, not entertainment-focused results that mislead teams.</p>
          </section>
          <section aria-label="Eliminates Social Desirability Bias Through Smart Conversations" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Eliminates Social Desirability Bias Through Smart Conversations</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Traditional surveys let users game the system. Our conversational AI catches contradictions and explores motivations to reveal authentic personality patterns.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Has the Enneagram been debunked by psychology research?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">The Enneagram framework itself has strong theoretical foundations, but most testing methods are scientifically flawed. The issue isn't the system—it's that static surveys can't capture the complexity needed for accurate typing.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What makes this different from other Enneagram test sites?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Every existing tool relies on questionnaires that users can consciously or unconsciously game. Our AI conducts actual psychological interviews, following up on inconsistencies and probing deeper into motivations like a human expert would.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How much does clinical-grade Enneagram assessment typically cost?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Professional tools like iEQ9 charge \$30-60 per assessment plus expensive certification requirements. We're building a more accessible solution that delivers superior accuracy through AI rather than manual interpretation.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What do professional psychologists think of Enneagram testing accuracy?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Most criticism centers on poor testing methodology rather than the Enneagram itself. Static surveys suffer from social desirability bias and oversimplification—exactly the problems our conversational approach is designed to solve.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Why do so many people get mistyped on traditional Enneagram tests?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Static questionnaires can't distinguish between surface behaviors and core motivations. Our AI interviewer explores the 'why' behind your answers, catching the subtle distinctions that separate, for example, a success-driven Type 3 from a knowledge-seeking Type 5.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 The Deep Mirror. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

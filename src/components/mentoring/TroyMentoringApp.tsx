import { useState } from 'react';
import {
  CheckCircle,
  Calendar,
  ArrowLeft,
  Video,
  MessageSquare,
  Lightbulb,
  ClipboardList,
  Check,
} from 'lucide-react';

type Screen =
  | 'landing'
  | 'qualifier'
  | 'apply'
  | 'book'
  | 'confirmed'
  | 'blocked-age'
  | 'blocked-readiness';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const PROGRAMS = [
  {
    title: 'Gambling Recovery',
    subtitle: '30-Day 1-on-1 Mentoring',
    description: 'Stop the cycle, control urges, and build a life without gambling.',
    weeks: ['Stop the Cycle', 'Control Urges', 'Change Your Thinking', 'Stay on Track'],
  },
  {
    title: 'Drug & Alcohol Recovery',
    subtitle: '30-Day 1-on-1 Mentoring',
    description: 'Get clean and sober with real accountability and a clear plan.',
    weeks: ['Stop the Cycle', 'Control Cravings', 'Change Your Thinking', 'Clean and Sober'],
  },
  {
    title: 'Gambling + Drugs & Alcohol',
    subtitle: '30-Day Combined Mentoring',
    description:
      'Both are part of your story — comprehensive support to tackle them together.',
    weeks: ['Tackle both cycles', 'Dual urge control', 'Mindset shift', 'Integrated plan'],
  },
];

const SITUATION_OPTIONS = [
  "I know I need to stop but don't know how",
  "I've tried before but keep going back",
  'Things are getting bad — I need help now',
  "I'm ready — I just need accountability and a plan",
];

export default function TroyMentoringApp() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [selectedProgram, setSelectedProgram] = useState(0);
  const [qualifierStep, setQualifierStep] = useState(0);
  const [readinessAnswer, setReadinessAnswer] = useState('');
  const [situationAnswer, setSituationAnswer] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  function goToQualifier(programIndex: number) {
    setSelectedProgram(programIndex);
    setQualifierStep(0);
    setReadinessAnswer('');
    setSituationAnswer('');
    setScreen('qualifier');
  }

  function handleQualifierAge(isAdult: boolean) {
    if (!isAdult) {
      setScreen('blocked-age');
    } else {
      setQualifierStep(1);
    }
  }

  function handleReadiness(answer: string) {
    setReadinessAnswer(answer);
    if (answer === 'Just looking into options') {
      setScreen('blocked-readiness');
    } else {
      setQualifierStep(2);
    }
  }

  function handleSituationContinue() {
    if (situationAnswer) {
      setScreen('apply');
    }
  }

  function validateForm(): boolean {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'First name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit() {
    if (validateForm()) {
      setScreen('book');
    }
  }

  // ─── LANDING ───────────────────────────────────────────────────────────────
  if (screen === 'landing') {
    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-10">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full px-4 py-1.5">
              1-on-1 Mentoring with Troy
            </span>
          </div>

          {/* Hero */}
          <h1 className="text-4xl font-bold text-center leading-tight mb-4">
            Ready to make a real change?
          </h1>
          <p className="text-gray-300 text-center text-base leading-relaxed mb-8">
            30 days of private, personalised 1-on-1 support to stop gambling, stop using, or
            both — with a real plan and daily accountability.
          </p>

          {/* Troy's photo */}
          <div className="flex justify-center mb-10">
            <img
              src="/troy.jpg"
              alt="Troy — Addiction Recovery Mentor"
              className="w-36 h-36 rounded-full object-cover border-4 border-amber-400"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* What's included */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold mb-4">What's included</h2>
            <ul className="space-y-3">
              {[
                {
                  icon: <Video className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
                  text: '2 x private 1-on-1 calls per week (8 total over 30 days)',
                },
                {
                  icon: <MessageSquare className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
                  text: 'Daily text or voice check-ins with Troy',
                },
                {
                  icon: <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
                  text: 'Practical tools for urges, triggers and blocks',
                },
                {
                  icon: <ClipboardList className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
                  text: 'A simple 4-week plan — one clear focus each week',
                },
              ].map(({ icon, text }) => (
                <li key={text} className="flex gap-3 text-gray-300 text-sm">
                  {icon}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Choose your program */}
          <h2 className="text-2xl font-bold text-center mb-2">Choose your program</h2>
          <p className="text-gray-400 text-sm text-center mb-6">
            All 3 programs are the same price. Private 1-on-1 only — not group sessions.
          </p>
          <div className="space-y-5 mb-12">
            {PROGRAMS.map((program, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-2xl p-6"
              >
                <div className="mb-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {program.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-300 text-sm mb-5">{program.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {program.weeks.map((week, wi) => (
                    <div
                      key={wi}
                      className="bg-[#08090d] border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-400"
                    >
                      <span className="text-amber-400 font-semibold">W{wi + 1}</span>{' '}
                      {week}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => goToQualifier(index)}
                  className="w-full bg-amber-400 text-black font-semibold rounded-xl py-3 hover:bg-amber-300 transition-colors"
                >
                  Apply for this program
                </button>
              </div>
            ))}
          </div>

          {/* How it works */}
          <h2 className="text-2xl font-bold text-center mb-6">How it works</h2>
          <div className="space-y-5 mb-12">
            {[
              {
                step: '1',
                title: 'Apply in 2 minutes',
                desc: 'A short application so Troy can review your situation before you speak.',
              },
              {
                step: '2',
                title: 'Book a free call with Troy',
                desc: 'A 20–30 min honest conversation about whether this is the right fit.',
              },
              {
                step: '3',
                title: 'Start your 30 days',
                desc: 'First session within 48 hours of joining. Real support, real accountability.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-amber-400 text-black font-bold text-sm flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs pb-10">
            All 3 programs are the same price. Private 1-on-1 only — not group sessions.
          </p>
        </div>
      </div>
    );
  }

  // ─── QUALIFIER ─────────────────────────────────────────────────────────────
  if (screen === 'qualifier') {
    const progress = ((qualifierStep + 1) / 3) * 100;

    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-10">

          <button
            onClick={() => setScreen('landing')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Program badge */}
          <div className="mb-6">
            <span className="text-xs font-semibold text-amber-400 border border-amber-400/30 rounded-full px-3 py-1">
              {PROGRAMS[selectedProgram].title}
            </span>
          </div>

          {/* Step 0: Age gate */}
          {qualifierStep === 0 && (
            <div key="q0" className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">Are you 18 or older?</h2>
              <p className="text-gray-400 text-sm mb-8">
                Troy's program is available to adults only.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleQualifierAge(true)}
                  className="w-full bg-amber-400 text-black font-semibold rounded-xl py-4 hover:bg-amber-300 transition-colors text-lg"
                >
                  Yes — I'm 18 or older
                </button>
                <button
                  onClick={() => handleQualifierAge(false)}
                  className="w-full bg-[#111827] border border-gray-700 text-white font-medium rounded-xl py-4 hover:border-gray-500 transition-colors"
                >
                  No — I'm under 18
                </button>
              </div>
            </div>
          )}

          {/* Step 1: Readiness */}
          {qualifierStep === 1 && (
            <div key="q1" className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">
                How serious are you about making a change right now?
              </h2>
              <p className="text-gray-400 text-sm mb-8">Choose the one that fits best.</p>
              <div className="space-y-3">
                {[
                  'Just looking into options',
                  'Getting serious — I know I need to do something',
                  '100% ready to commit — I want to start now',
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleReadiness(option)}
                    className={`w-full text-left rounded-xl px-5 py-4 text-sm font-medium border transition-colors ${
                      readinessAnswer === option
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-[#111827] border-gray-700 hover:border-amber-400/50 hover:bg-[#1a2234]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Situation */}
          {qualifierStep === 2 && (
            <div key="q2" className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-2">
                What best describes where you're at right now?
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                This helps Troy prepare for your call.
              </p>
              <div className="space-y-3 mb-8">
                {SITUATION_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSituationAnswer(option)}
                    className={`w-full text-left rounded-xl px-5 py-4 text-sm font-medium border transition-colors ${
                      situationAnswer === option
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-[#111827] border-gray-700 hover:border-amber-400/50 hover:bg-[#1a2234]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleSituationContinue}
                disabled={!situationAnswer}
                className="w-full bg-amber-400 text-black font-semibold rounded-xl py-4 hover:bg-amber-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {/* Progress bar */}
          <div className="mt-12">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Step {qualifierStep + 1} of 3</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── APPLY ─────────────────────────────────────────────────────────────────
  if (screen === 'apply') {
    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-10">

          <button
            onClick={() => setScreen('qualifier')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <h1 className="text-3xl font-bold mb-1">Tell us about you</h1>
          <p className="text-gray-400 text-sm mb-8">Troy reviews every application personally.</p>

          {/* Program selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">Program</label>
            <div className="space-y-2">
              {PROGRAMS.map((program, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProgram(index)}
                  className={`w-full text-left rounded-xl px-4 py-3 text-sm border transition-colors ${
                    selectedProgram === index
                      ? 'bg-amber-400/10 border-amber-400 text-white font-semibold'
                      : 'bg-[#111827] border-gray-700 text-gray-300 hover:border-amber-400/40'
                  }`}
                >
                  {program.title}
                </button>
              ))}
            </div>
          </div>

          {/* Form fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                First name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                }}
                placeholder="Your first name"
                className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              {formErrors.name && (
                <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                }}
                placeholder="you@email.com"
                className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              {formErrors.email && (
                <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Phone number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                }}
                placeholder="+61 4XX XXX XXX"
                className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              {formErrors.phone && (
                <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Briefly, what's your situation?{' '}
                <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share as much or as little as you like..."
                rows={4}
                className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-amber-400 text-black font-semibold rounded-xl py-4 hover:bg-amber-300 transition-colors text-base"
          >
            Book My Free Call →
          </button>

          <p className="text-center text-gray-500 text-xs mt-4 pb-10">
            No payment now. This is just to book your free assessment call.
          </p>
        </div>
      </div>
    );
  }

  // ─── BOOK ──────────────────────────────────────────────────────────────────
  if (screen === 'book') {
    // REPLACE THIS with Troy's actual Calendly URL (e.g. https://calendly.com/troy-smith)
    const calendlyBase = 'https://calendly.com/TROY_CALENDLY_URL';
    const calendlyUrl = `${calendlyBase}?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`;

    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-10">

          <button
            onClick={() => setScreen('apply')}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <h1 className="text-3xl font-bold mb-2">
            One last step — pick a time with Troy
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            This is a free 20–30 min call. Troy will assess if this is the right fit.
          </p>

          {/* Book card */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-5">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-6 h-6 text-amber-400" />
              <h2 className="text-lg font-semibold">Book Your Free Call</h2>
            </div>
            <p className="text-gray-400 text-sm mb-5">
              Choose a time that works for you. Troy personally takes every call.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-amber-400 text-black font-semibold rounded-xl py-4 hover:bg-amber-300 transition-colors"
            >
              Choose a Time →
            </a>
          </div>

          {/* What to expect card */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold mb-4">What to expect on the call</h3>
            <ul className="space-y-3">
              {[
                'Troy will ask about your situation',
                "You'll talk through what you're struggling with",
                "He'll explain how the program works",
                "If it's a good fit, he'll send a secure payment link after the call",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center pb-10">
            <button
              onClick={() => setScreen('confirmed')}
              className="text-gray-400 hover:text-amber-400 text-sm underline transition-colors"
            >
              Already booked?
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── CONFIRMED ─────────────────────────────────────────────────────────────
  if (screen === 'confirmed') {
    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-16 text-center">

          <CheckCircle className="w-16 h-16 text-amber-400 mx-auto mb-6" />

          <h1 className="text-3xl font-bold mb-3">
            You're booked{formData.name ? `, ${formData.name}` : ''}.
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Troy will review your details before the call.
          </p>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 text-left mb-8">
            <h2 className="font-semibold mb-5">What happens next</h2>
            <ol className="space-y-5">
              {[
                {
                  n: '1',
                  title: 'Troy reviews your application',
                  desc: 'He reads your details before the call.',
                },
                {
                  n: '2',
                  title: 'Your free call',
                  desc: 'A 20–30 min honest conversation, no pressure.',
                },
                {
                  n: '3',
                  title: "If it's a good fit",
                  desc: 'Troy sends a secure payment link after the call.',
                },
                {
                  n: '4',
                  title: 'You start',
                  desc: 'First session within 48 hours of payment.',
                },
              ].map(({ n, title, desc }) => (
                <li key={n} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {n}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="text-gray-500 text-xs">Keep an eye on your phone and email.</p>
        </div>
      </div>
    );
  }

  // ─── BLOCKED AGE ───────────────────────────────────────────────────────────
  if (screen === 'blocked-age') {
    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-16">

          <h1 className="text-2xl font-bold mb-4">
            We can only support adults 18 and over
          </h1>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Troy's program is for adults. If you're under 18 and need support, please reach
            out to a service that can help you right now.
          </p>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-amber-400 font-semibold mb-4">Get help now</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-medium text-white">Kids Helpline</p>
                <p className="text-gray-400">1800 55 1800 — free, 24/7</p>
              </li>
              <li>
                <p className="font-medium text-white">Lifeline</p>
                <p className="text-gray-400">13 11 14 — 24/7</p>
              </li>
              <li>
                <p className="font-medium text-white">ReachOut</p>
                <p className="text-gray-400">au.reachout.com</p>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setScreen('landing')}
            className="text-gray-400 hover:text-white text-sm underline transition-colors"
          >
            Back to homepage
          </button>
        </div>
      </div>
    );
  }

  // ─── BLOCKED READINESS ─────────────────────────────────────────────────────
  if (screen === 'blocked-readiness') {
    return (
      <div className="animate-fade-in bg-[#08090d] text-white min-h-screen">
        <div className="max-w-lg mx-auto px-4 py-16">

          <h1 className="text-2xl font-bold mb-4">That's completely okay.</h1>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            This program works best when you're ready to commit. When the time is right, Troy
            will be here.
          </p>

          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-amber-400 font-semibold mb-4">Free support available now</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-medium text-white">Gambling Help Online</p>
                <p className="text-gray-400">gamblinghelponline.org.au</p>
              </li>
              <li>
                <p className="font-medium text-white">SMART Recovery Australia</p>
                <p className="text-gray-400">smartrecoveryaustralia.com.au</p>
              </li>
              <li>
                <p className="font-medium text-white">Lifeline</p>
                <p className="text-gray-400">13 11 14 — 24/7</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setScreen('landing')}
              className="w-full bg-amber-400 text-black font-semibold rounded-xl py-4 hover:bg-amber-300 transition-colors"
            >
              Come back when you're ready
            </button>
            <div className="text-center">
              <button
                onClick={() => {
                  setQualifierStep(1);
                  setScreen('qualifier');
                }}
                className="text-gray-400 hover:text-white text-sm underline transition-colors"
              >
                Actually, I am ready — go back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

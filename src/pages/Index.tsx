
import { BookOpen, GraduationCap, Users } from "lucide-react";

const features = [
  {
    icon: <BookOpen size={32} className="text-primary" />,
    title: "Smart Notes & Flashcards",
    description: "Generate, organize, and study smarter with AI-powered notes, summaries, and interactive flashcards.",
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Group Study & Collaboration",
    description: "Form study groups, chat in real time, and tackle assignments together seamlessly.",
  },
  {
    icon: <GraduationCap size={32} className="text-primary" />,
    title: "Track Your Progress",
    description: "Set goals, monitor your learning streaks, and see your improvement on elegant dashboards.",
  },
];

const Index = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 font-inter">
      {/* Hero Section */}
      <header className="pt-24 pb-20 px-8 xl:px-0 max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1 rounded-full mb-4 shadow-sm">Welcome to Study Mate</span>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          Ace your learning with <span className="text-primary">Study Mate</span>
        </h1>
        <p className="mb-9 text-lg sm:text-xl text-muted-foreground max-w-2xl">
          Supercharge your studies with smart notes, powerful collaboration, and real progress tracking—all in one friendly app.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-lg font-semibold bg-primary text-white shadow-lg hover:scale-105 transition-transform duration-150 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Get Started for Free
        </a>
      </header>
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 xl:px-0 mt-2 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-5 shadow-sm">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Sticky CTA Footer on Mobile */}
      <div className="fixed bottom-0 inset-x-0 md:hidden z-50">
        <div className="bg-white/80 backdrop-blur px-8 py-4 flex justify-center shadow-t">
          <a
            href="#"
            className="rounded-lg bg-primary text-white px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform duration-150 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Start Now
          </a>
        </div>
      </div>
    </main>
  );
};

export default Index;

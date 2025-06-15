
import Navbar from "@/components/Navbar";

const About = () => (
  <main className="w-full min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 font-inter">
    <Navbar />
    <section className="max-w-2xl mx-auto mt-20 text-center px-4">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">About Study Mate</h2>
      <p className="text-lg text-muted-foreground">
        Study Mate is your ultimate companion for smarter, collaborative, and productive learning.
        Our platform uses AI to simplify note-taking, boost group study, and help you reach your academic goals with ease.
      </p>
    </section>
  </main>
);

export default About;

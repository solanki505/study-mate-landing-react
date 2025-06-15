
import Navbar from "@/components/Navbar";

const Contact = () => (
  <main className="w-full min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 font-inter">
    <Navbar />
    <section className="max-w-2xl mx-auto mt-20 text-center px-4">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Contact Us</h2>
      <p className="text-lg text-muted-foreground mb-5">
        Have questions, suggestions, or need support? We'd love to hear from you!
      </p>
      <div className="flex flex-col gap-2 text-base text-gray-700">
        <span>Email: <a className="text-primary underline" href="mailto:support@studymate.com">support@studymate.com</a></span>
        <span>Discord: <a className="text-primary underline" href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer">Study Mate Community</a></span>
      </div>
    </section>
  </main>
);

export default Contact;

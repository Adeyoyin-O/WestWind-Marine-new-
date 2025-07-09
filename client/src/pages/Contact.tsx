import { useState, useEffect } from "react";
import { 
  Building2, 
  PhoneCall, 
  MailOpen
} from "lucide-react";
import { setupHashNavigation } from "@/lib/hashNavigation";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Setup hash navigation for any potential hash links
  useEffect(() => {
    const cleanup = setupHashNavigation(undefined, 100);
    return cleanup;
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid email address");
      return;
    }

    if (name.trim().length < 2) {
      setSubmitStatus("error");
      setStatusMessage("Name must be at least 2 characters");
      return;
    }

    if (subject.trim().length < 3) {
      setSubmitStatus("error");
      setStatusMessage("Subject must be at least 3 characters");
      return;
    }

    if (message.trim().length < 10) {
      setSubmitStatus("error");
      setStatusMessage("Message must be at least 10 characters");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim()
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! We'll get back to you within 24 hours.");
        // Clear form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h1>
              <p className="text-lg text-slate-600">
                Ready to discuss your project? Contact our expert team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-slate-300 rounded-lg flex items-center justify-center">
                  <Building2 className="text-slate-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Office Addresses</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-700 font-medium">Nigeria Office:</p>
                      <p className="text-slate-600">
                        Plot 8, The Providence Street<br />
                        Lekki Phase 1, Lagos<br />
                        Nigeria
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium">Senegal Office:</p>
                      <p className="text-slate-600">
                        West Wind Marine Electronics Sarl<br />
                        Cité Keur Gorgui<br />
                        Immeuble UNIPAX<br />
                        BP: 25 916 Dakar<br />
                        Senegal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-slate-300 rounded-lg flex items-center justify-center">
                  <PhoneCall className="text-slate-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone Numbers</h3>
                  <p className="text-slate-600">
                    Tel: +234 703 250 9442<br />
                    Mobile: +234 806 465 1345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-slate-300 rounded-lg flex items-center justify-center">
                  <MailOpen className="text-slate-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email Address</h3>
                  <p className="text-slate-600">admin@westwindmarineelectronics.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">{statusMessage}</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800">{statusMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is this about?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project requirements..."
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
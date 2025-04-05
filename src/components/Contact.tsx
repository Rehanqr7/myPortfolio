import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_9kbtxum",        
        "template_immtwh5",        
        formRef.current,
        "PAq2GWGmZ6uLWXNqM"        
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
        Have a question or want to work together? Drop me a message!
      </p>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            required
            className="mt-1 block w-full rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm focus:border-blue-600 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>

        {success && (
          <p className="text-green-600 text-center">Message sent successfully!</p>
        )}
      </motion.form>
    </div>
  );
}

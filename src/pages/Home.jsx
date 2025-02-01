// src/pages/Home.jsx
import React, { useEffect, useState, useContext } from 'react';
import FAQCard from '../components/FAQCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { LanguageContext } from '../contexts/LanguageContext';
import { getFAQs } from '../services/api';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await getFAQs(language);
        setFaqs(data);
        setError(null);
      } catch (err) {
        setError('Failed to load FAQs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadFAQs();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">FAQs</h1>
          <LanguageSwitcher />
        </div>
        
        {error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : faqs.length > 0 ? (
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQCard
                key={faq._id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No FAQs available.</p>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
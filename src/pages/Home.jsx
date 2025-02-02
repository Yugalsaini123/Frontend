// src/pages/Home.jsx
import React, { useEffect, useState, useContext } from 'react';
import FAQCard from '../components/FAQCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { LanguageContext } from '../contexts/LanguageContext';
import { getFAQs } from '../services/api';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import "../styles.css";


export const Home = () => {
  const { language } = useContext(LanguageContext);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        setLoading(true);
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

  return (
    <div>
      <Navbar />
      <main className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>
            Frequently Asked Questions
          </h1>
          <LanguageSwitcher />
        </div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <div className="spinner" />
          </div>
        ) : error ? (
          <div className="alert alert-error">{error}</div>
        ) : faqs.length > 0 ? (
          <div>
            {faqs.map((faq) => (
              <FAQCard
                key={faq._id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
              No FAQs found. Check back later!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};


export default Home;
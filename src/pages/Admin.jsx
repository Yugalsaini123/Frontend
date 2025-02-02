// src/pages/Admin.jsx
import React, { useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { createFAQ } from "../services/api";
import Navbar from "../components/Navbar";
import "../styles.css";

export const Admin = () => {
  const [formData, setFormData] = useState({ question: '', answer: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await createFAQ(formData);
      setFormData({ question: '', answer: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container">
        <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '2rem' }}>
            FAQ Management
          </h1>

          {success && (
            <div className="alert alert-success">FAQ created successfully!</div>
          )}

          {error && (
            <div className="alert alert-error">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Question</label>
              <input
                type="text"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="form-input"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Answer</label>
              <div className="editor-container">
                <RichTextEditor
                  value={formData.answer}
                  onChange={(content) => setFormData({ ...formData, answer: content })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="button button-primary"
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create FAQ'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};


export default Admin;
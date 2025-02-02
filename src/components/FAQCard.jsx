// src/components/FAQCard.jsx
import "../styles.css";
export const FAQCard = ({ question, answer }) => {
  return (
    <div className="faq-card">
      <h3 className="faq-question">{question}</h3>
      <div 
        className="faq-answer"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default FAQCard;
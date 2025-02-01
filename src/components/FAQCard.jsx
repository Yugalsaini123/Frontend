// src/components/FAQCard.jsx
const FAQCard = ({ question, answer }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-bold mb-2">{question}</h3>
        <p className="text-gray-700">{answer}</p>
      </div>
    );
  };
  
  export default FAQCard;
// src/components/RichTextEditor.jsx
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles.css";

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="bg-white"
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ]
        }}
      />
    </div>
  );
};

export default RichTextEditor;
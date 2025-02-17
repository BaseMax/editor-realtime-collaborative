export const DEFAULT_CODE = `# Building a Custom Markdown Editor with Real-Time Collaboration

Welcome to this **comprehensive demonstration** of our custom Markdown editor built with **React.js**. This editor enables real-time collaborative editing, live preview, syntax highlighting, and more!

## Key Features

- **Real-Time Collaboration:** Multiple users can edit the document simultaneously.
- **Live Preview:** See your Markdown rendered instantly as you type.
- **Syntax Highlighting:** Code blocks are beautifully formatted.
- **Auto-Save:** Changes are automatically saved and synchronized.
- **Customizable Interface:** Tailor the editor to suit your style.

## Demo Code Example

Here's a snippet of how the editor component is implemented in React:

\`\`\`jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [text, setText] = useState('# Welcome to the Markdown Editor!\n\nStart editing...');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <textarea
        style={{ width: '50%', height: '90vh', padding: '1rem', fontFamily: 'monospace' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ width: '50%', padding: '1rem', borderLeft: '1px solid #ccc' }}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
\`\`\`

## Real-Time Collaboration Workflow

1. **User A** opens the editor and starts typing.
2. **User B** joins the session and sees changes in real time.
3. Changes are broadcast instantly via **Socket.IO** to ensure a seamless collaboration experience.

> *"Collaborative editing brings multiple perspectives together, enhancing creativity and productivity."*

## Performance Optimizations

To ensure a smooth editing experience, we have implemented several optimizations:

- **Debounced Input:** Limits the frequency of updates to reduce network traffic.
- **Optimized Rendering:** Uses React’s hooks and memoization to minimize unnecessary re-renders.
- **Efficient State Management:** Manages local and shared state to ensure real-time updates are fast and responsive.

## About the Speaker

**Seyyed Ali Mohammadiyeh**, also known as **Max Base**, is a renowned software engineer and open-source maintainer at GitHub. With over 10 years of programming experience, he specializes in:

- **Group Theory & Computational Algebra**
- **Coding Theory**
- **Real-Time Collaborative Systems**

Discover more about his work on [GitHub](https://github.com).

## Conclusion

This custom Markdown editor demonstrates how modern web technologies can be combined to build powerful, real-time collaborative tools. We invite you to explore, experiment, and enjoy the future of editing!

---

*Happy Editing!*
`;

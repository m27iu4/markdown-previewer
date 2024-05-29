import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/docco.css';

import './App.css';

function App() {
  
  const [input, setInput] = useState();

    return(
      <div className='App'>
        <textarea
            autoFocus
            className='textarea'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        >
        </textarea>

        <ReactMarkdown 
        children={input} 
        className='markdown'
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        
        />
        </div>
    )
}

export default App;



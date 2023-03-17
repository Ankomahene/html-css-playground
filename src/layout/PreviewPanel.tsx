import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

export const PreviewPanel = () => {
  const { state } = useContext(Context);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const srcDoc = `
        <html>
        <style> ${state.css}</style>
        <body>${state.html}</body>
        </html>
      `;
      setSrcDoc(srcDoc);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [state.html, state.css]);

  return (
    <div className="p-3 border-bottom mx-1">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
};

import React from 'react';
import Split from 'react-split';
import { EditorPanel } from './EditorPanel';
import { PreviewPanel } from './PreviewPanel';

export const Layout = () => {
  return (
    <Split
      className="split mb-2"
      sizes={[40, 60]}
      minSize={300}
      //   direction={isLgScreen ? 'horizontal' : 'vertical'}
      //   style={{
      //     flexDirection: isLgScreen ? 'row' : 'column',
      //   }}
    >
      <EditorPanel />
      <PreviewPanel />
    </Split>
  );
};

import MEditor from '@monaco-editor/react';
import { useContext } from 'react';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { editorOptions } from '../config';
import { Context } from '../context';

export const EditorPanel = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="h-100 py-1 position-relative">
      <div className="dropdown position-absolute end-0 me-1">
        <ThemeSwitcher />
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active rounded-0 px-5"
            id="html"
            data-bs-toggle="tab"
            data-bs-target="#html-pane"
            type="button"
            role="tab"
            aria-controls="html-pane"
            aria-selected="true"
          >
            HTML
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link rounded-0 px-5"
            id="css"
            data-bs-toggle="tab"
            data-bs-target="#css-pane"
            type="button"
            role="tab"
            aria-controls="css-pane"
            aria-selected="false"
          >
            CSS
          </button>
        </li>
      </ul>
      <div className="tab-content h-100" id="myTabContent">
        <div
          className="tab-pane fade show active h-100"
          id="html-pane"
          role="tabpanel"
          aria-labelledby="html"
          tabIndex={0}
        >
          <MEditor
            options={editorOptions}
            theme={state.theme === 'dark' ? 'vs-dark' : state.theme}
            height="100%"
            defaultLanguage="html"
            value={state.html}
            onChange={(value) =>
              dispatch((prevState) => ({
                ...prevState,
                html: value ? value : '',
              }))
            }
          />
        </div>
        <div
          className="tab-pane fade h-100"
          id="css-pane"
          role="tabpanel"
          aria-labelledby="css"
          tabIndex={0}
        >
          <MEditor
            options={editorOptions}
            theme={state.theme === 'dark' ? 'vs-dark' : state.theme}
            height="100%"
            defaultLanguage="css"
            value={state.css}
            onChange={(value) =>
              dispatch((prevState) => ({
                ...prevState,
                css: value ? value : '',
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

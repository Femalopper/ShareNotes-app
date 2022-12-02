import About from './components/About/About';
import Create from './components/Create/Create';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Note from './components/Note/Note';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

const list = {
  nav: [
    { link: '/', text: 'Main' },
    { link: '/note', text: 'Note' },
    { link: '/create', text: 'Create' },
    { link: '/about', text: 'About' },
  ],
};

const App = () => {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Header data={list} />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="create" element={<Create />} />
            <Route path="note" element={<Note />}>
              <Route path=":noteURL" element={<Note />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

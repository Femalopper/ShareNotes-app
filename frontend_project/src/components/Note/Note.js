import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../../env.json';
import './Note.css';

const Note = () => {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [buttonHide, setButtonHide] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');
  const urlRef = React.createRef();

  useEffect(() => {
    console.log('effect');
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
            setButtonHide('hide');
          } else {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('');
            setButtonHide('');
          }
        });
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
      setButtonHide('hide');
    }
  }, [noteURL]);

  const getNote = (event) => {
    event.preventDefault();
    const url = urlRef.current.value.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  };

  const searchNote = () => {
    window.location.href = env.url;
  };

  const classForError = `${errorClass} form-control error-hash`;

  return (
    <div className="create">
      {console.log('render')}
      <div className={lineClass}>
        <div className="note-message">
          <h4>Note: {noteURL}</h4>
          <div className="note-text">{noteText}</div>
          <div>Внимание! Скопируйте заметку. После показа заметка будет удалена!</div>
        </div>
        <div>
          <button onClick={searchNote} className="btn btn-primary">
            Искать другой Note
          </button>
        </div>
      </div>
      <div className={classForError}>Произошла ошибка. Такой Note не найден.</div>
      <div className={buttonHide}>
        <button onClick={searchNote} className="btn btn-primary">
          Искать другой Note
        </button>
      </div>
      <div className={formClass}>
        <form onSubmit={getNote}>
          <label htmlFor="">Введите hash заметки</label>
          <input id="note" className="form-control" ref={urlRef}></input>
          <button type="submit" className="btn btn-primary">
            Искать Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Note;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../../env.json';
import './Note.css';
import classNames from 'classnames';

const Note = () => {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [line, setLineHide] = useState(true);
  const [form, setFormHide] = useState(true);
  const [buttonHide, setButtonHide] = useState(true);
  const [error, setErrorHide] = useState(true);
  const urlRef = React.createRef();

  useEffect(() => {
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
          if (response.result) {
            setNoteText(response.note);
            setLineHide(false);
            setFormHide(true);
            setErrorHide(true);
            setButtonHide(true);
          } else {
            setLineHide(true);
            setFormHide(true);
            setErrorHide(false);
            setButtonHide(false);
          }
        });
    } else {
      setLineHide(true);
      setFormHide(false);
      setErrorHide(true);
      setButtonHide(true);
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

  return (
    <div className="create">
      <div className={classNames({ hide: line })}>
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
      <div className={classNames({ hide: error }, 'form-control', 'alert', 'alert-danger')}>
        Произошла ошибка. Такой Note не найден.
      </div>
      <div className={classNames({ hide: buttonHide })}>
        <button onClick={searchNote} className="btn btn-primary">
          Искать другой Note
        </button>
      </div>
      <div className={classNames({ hide: form })}>
        <form onSubmit={getNote}>
          <label htmlFor="">Введите hash заметки</label>
          <input id="note" className="form-control alert alert-primary" ref={urlRef}></input>
          <button type="submit" className="btn btn-primary">
            Искать Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Note;

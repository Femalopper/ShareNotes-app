import { useState } from 'react';
import env from '../../env.json';
import React from 'react';
import './Create.css';

const Create = () => {
  const [url, setURL] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');
  const textRef = React.createRef();

  const hideSwitcher = () => {
    setFormClass('');
    setLineClass('hide');
    setURL('');
    textRef.current.value = 'Test';
  };

  const sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');

    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setURL(env.url + '/' + response.url);
        }
      });
  };

  const loadDataFromForm = (event) => {
    event.preventDefault();
    const note = textRef.current.value;
    if (note === '') {
      alert('Заполните поля');
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div className="create">
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="">Введите заметку</label>
        <textarea id="note" defaultValue="Test" ref={textRef} maxLength="1000"></textarea>
        <div>
          <b>Внимание!</b> Максимальная длина заметки 1000 символов.
        </div>
        <button type="submit" className="btn btn-primary">
          Создать
        </button>
      </form>
      <div className={lineClass}>
        <div className="link form-control alert alert-primary">{url}</div>
        <div className="copyurl">
          Скопируйте URL и передайте адресату. Внимание! Посмотреть заметку можно один раз!
        </div>
        <div>
          <button onClick={hideSwitcher} className="btn btn-primary">
            Создать еще Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;

import classes from './form.module.scss';
import searchImg from '../../../../../assets/imgs/search.svg'
import imgAPI, { IData, Options } from '../../../../../services/ImgAPI';
import { useState } from 'react';

interface IFormProps {
  search: (imgs: IData) => void,
}

function Form(props: IFormProps) {
  const [value, setValue] = useState('');

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (value.trim().length === 0) {
      return;
    }
    const imgs: IData = await imgAPI.get({option: Options.search, query: value});
    props.search(imgs);
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
        <input className={classes.input} type="text" placeholder='Search...' value={value} onChange={event => setValue(event.target.value)}/>
        <button className={classes.submit}>
          <img src={searchImg} alt="" />
        </button>
    </form>
  );
}

export default Form;

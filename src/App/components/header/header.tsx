import { IData } from '../../../services/ImgAPI';
import Form from './components/form/form';
import classes from './header.module.scss';

interface IHeaderProps {
  appName: string,
  search: (imgs: IData) => void,
}

function Header(props: IHeaderProps) {
  return (
    <header className={classes.header}>
        <div className={classes.container}>
          <h1 className={classes.h1}>{props.appName}</h1>
          <Form search={props.search}></Form>
        </div>
    </header>
  );
}

export default Header;

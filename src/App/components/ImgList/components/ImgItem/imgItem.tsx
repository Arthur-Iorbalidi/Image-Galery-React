import { IImg } from '../../../../../services/ImgAPI';
import classes from './imgItem.module.scss';

interface IImgItemProps {
  img: IImg,
}

function ImgItem({ img }:  IImgItemProps) {
  return (
    <a className={classes.link} href={img.urls.full} target="_blank">
        <img className={classes.img} src={img.urls.full} alt={img.description} />
    </a>
  );
}

export default ImgItem;

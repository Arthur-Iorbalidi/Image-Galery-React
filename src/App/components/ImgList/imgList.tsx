import { IData } from '../../../services/ImgAPI';
import ImgItem from './components/ImgItem/imgItem';
import classes from './imgList.module.scss';

interface IImgListProps {
  imgs: IData | null,
}

function ImgList({ imgs }:  IImgListProps) {
  return (
    <div className={classes.imgList}>
        <div className={classes.container}>
          {imgs?.results.map((img) => <ImgItem img={img} key={img.id}></ImgItem>)}
        </div>
    </div>
  );
}

export default ImgList;

import { useEffect, useState } from 'react';
import './App.scss';
import ImgList from './components/ImgList/imgList';
import Header from './components/header/header';
import imgAPI, { IData, Options } from '../services/ImgAPI';

function App() {
  const [imgs, setImgs] = useState<IData | null>(null);

  async function fetchImgs() {
    setImgs(await imgAPI.get({option: Options.search, query: 'Nature'}));
  }

  useEffect(() => {
    fetchImgs();
  }, []);

  function search(imgs: IData) {
    setImgs(imgs);
  }

  return (
    <>
      <Header appName='Image Galery' search={search}></Header>
      <ImgList imgs={imgs}></ImgList>
    </>
  );
}

export default App;

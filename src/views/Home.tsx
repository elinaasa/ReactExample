import {useEffect, useState} from 'react';
import {MediaItem} from '../types/DBTypes';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import { fetchData } from '../lib/functions';

const Home = () => {
  const [MediaArray, setMediaArray] = useState<MediaItem[]>([]);

  const getMedia = async () => {
    try {
    const data = await fetchData<MediaItem[]>(import.meta.env.VITE_API_URL + '/media');
    setMediaArray(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMedia();
  }
  , []);
  //console.log(mediaArray);

  return (
    <>
      {selectedItem && <SingleView item={selectedItem} setSelectedItem={setSelectedItem}/>}
      <h2>My Media</h2>
      <p>{selectedItem?.media_id}</p>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;

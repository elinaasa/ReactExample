// SingleView.tsx
import {MediaItem} from '../types/DBTypes';

const SingleView = (props: {
  item: MediaItem | null;
  setSelectedItem: (item: MediaItem | null) => void;
}) => {
  const {item, setSelectedItem} = props;
  return (
    <dialog></dialog>
    // TODO: Add JSX for displaying a mediafile here
    // - use e.g. a <dialog> element for creating a modal
    // - use item prop to render the media item details
    // - use img tag for displaying images
    // - use video tag for displaying videos
  );
};
export default SingleView;

// Home.tsx
import SingleView from './SingleView';

<SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

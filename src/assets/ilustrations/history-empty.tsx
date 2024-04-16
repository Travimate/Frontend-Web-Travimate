import { memo } from 'react';
import imageEmpty from "../images/empty-history.png"


// ----------------------------------------------------------------------

function HistoryIllustration() {
  return (
    <div className='flex flex-row justify-center content-center items-center'>
      <img src={imageEmpty} className='w-full h-full items-center' alt="" />
    </div>
  );
}

export default memo(HistoryIllustration);

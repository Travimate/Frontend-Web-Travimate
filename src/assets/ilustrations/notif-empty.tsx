import { memo } from 'react';
import imageEmpty from "../images/notif-empty.png"


// ----------------------------------------------------------------------

function NotifIllustration() {
  return (
    <div className='flex flex-row justify-center content-center items-center'>
      <img src={imageEmpty} className='w-full h-full items-center' alt="" />
    </div>
  );
}

export default memo(NotifIllustration);

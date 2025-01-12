import React, { useEffect } from 'react';
import '../App.css';
import CustomNotificationButton from "./CustomNotificationButton";

function Page() {
  return (
    <div>
      <div className={`page3-container`}>
        <div>Page3</div>
        <CustomNotificationButton width={80} height={80} title="Page 2" />
      </div>
    </div>
  );
}

export default Page;

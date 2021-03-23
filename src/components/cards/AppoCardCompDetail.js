import React from 'react';

const UserCardDetail = ({
  docName,
  docSpec,
  type,
  location,

  address,
  docPhone,
}) => {
  const types = () => {
    if (type === '1') {
      return <p>type: Virtual</p>;
    } else if (type === '2') {
      return <p>type: Face to face</p>;
    }
  };

  return (
    <>
      <h3 className="mt-4">Health Care Professional</h3>
      <div className="docListComp lol">
        <div className="left">
          <p>{docName}</p>
        </div>
        <div className="middle">
          <p>{docSpec}</p>
          <p>{docPhone}</p>
          <p>{address}</p>
        </div>
      </div>
      <h3 className="mt-4">Details</h3>
      <div className="docListComp lol">
        <div className="left">
          {/* <p>{time}</p> */}
          <p>{location}</p>
        </div>
        <div className="middle">
          {types()}
          <p>Price: £60</p>

          {/* <p>Booking fee: £8.5</p> */}
        </div>
      </div>
    </>
  );
};

export default React.memo(UserCardDetail);

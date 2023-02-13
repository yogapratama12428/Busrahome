import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import Switch from '@mui/material/Switch';

const ListDevice = () => {
  // set default state
  const [devices, setDevice] = useState([]);
  // const [checked, setChecked] = useState(false);

  var state_device;

  useEffect(() => {
    getDevice();
  }, []);

  //fectching all data
  const getDevice = async () => {
    const response = await axios.get('https://sn85sk.deta.dev/device');
    console.log(response.data);
    setDevice(response.data);
  };

  //update data
  const updateDevice = async (id, state_device) => {
    try {
      const response = await axios.post(
        `https://sn85sk.deta.dev/device/${id}/update`,
        {
          state: state_device,
        }
      );
      console.log(response.data);
      getDevice();
    } catch (error) {
      console.log(error);
    }
  };

  //handlechange
  // const handlechange = (e) => {
  //   setChecked(e.target.checked);
  // };

  return (
    <div className="container">
      <div className="columns is-multiline is-mobile is-dekstop">
        {devices.map((device) => (
          <div
            key={device._id}
            className="column is-narrow is-half box has-text-centered py-5 px-5"
          >
            <h2 className="is-size-3 py-3">{device.device}</h2>

            <EmojiObjectsIcon fontSize="large" />

            {device.state === false ? (
              <>
                {' '}
                <button
                  className="button is-rounded is-medium is-fullwidth is-success mx-auto my-3"
                  onClick={() =>
                    updateDevice(device._id, (state_device = true))
                  }
                >
                  ON
                </button>
                {/* <Switch checked={checked} onChange={handlechange} /> */}
              </>
            ) : (
              <>
                {' '}
                <button
                  className="button is-rounded is-medium is-fullwidth is-danger mx-auto my-3"
                  onClick={() =>
                    updateDevice(device._id, (state_device = false))
                  }
                >
                  OFF
                </button>
                {/* <Switch checked={checked} onChange={handlechange} /> */}
              </>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ListDevice;

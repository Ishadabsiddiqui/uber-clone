import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24h,near Chutiya Campus,BBIT, Lucknow",
    "24C,near Shahu Cinema,NMIT, Lucknow",
    "24D,near Sahara Ganj,DNIT, Lucknow",
    "24h,near Kerala Cafe,FNIT, Lucknow",
    "24h,near AIOT Campus,JNIT, Lucknow",
  ];
  return (
    <div>
      {/* this is the sample data */}
      {locations.map(function (loc, index) {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex items-center border-2 border-gray-100 active:border-black p-3 rounded-xl  gap-4 my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{loc}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;

import React, { Fragment } from "react";

const BelajarUseMemo = (props) => {
  let [menu, setMenu] = React.useState([]);
  let DaftarMakanan = function () {
    return ["nasi padang", "nasi uduk", "nasi gudeg"];
  };

  React.useMemo(() => {
    if (props.wilayah === "jabar") return setMenu([...menu, "petis"]);
    return setMenu(DaftarMakanan());
  }, [props.wilayah]);
  return (
    <Fragment>
      <ol>
        {menu.map((makanan) => (
          <li>{makanan}</li>
        ))}
      </ol>
    </Fragment>
  );
};

export default BelajarUseMemo;

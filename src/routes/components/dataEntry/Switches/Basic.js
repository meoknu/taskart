import React from "react";
import {Card, Switch} from "antd";

const Basic = () => {
  function onChange(checked) {
  }

  return (
    <Card className="gx-card" title="Basic">
      <Switch defaultChecked onChange={onChange}/>
    </Card>
  );
};

export default Basic;

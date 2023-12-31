import { Button } from "antd";
import React, { Fragment } from "react";
import { ConfigProvider } from "antd";

export default function RefreshButton({ children, width = "20%" }) {
  return (
    <Fragment>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#0e1171",
          },
        }}
      >
        <Button
          type="primary"
          // onClick={onClickFunction}
          style={{ width: width }}
          htmlType="submit"
        >
          {children}
        </Button>
      </ConfigProvider>
    </Fragment>
  );
}

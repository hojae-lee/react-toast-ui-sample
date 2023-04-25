import { useEffect } from "react";
import Grid from "@toast-ui/react-grid";
import "tui-grid/dist/tui-grid.css";
import columns from "./options/column";
import data from "./options/data";
import sleep from "../plugins/sleep";

const Sheet = () => {
  useEffect(() => {
    (async () => {
      await sleep(30);
    })();
  }, []);

  return (
    <Grid
      data={data}
      columns={columns}
      rowHeight={40}
      bodyHeight={100}
      heightResizable={true}
      rowHeaders={["rowNum"]}
    />
  );
};

export default Sheet;

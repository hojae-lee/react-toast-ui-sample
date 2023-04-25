import { useEffect } from "react";
import Grid from "@toast-ui/react-grid";
import "tui-grid/dist/tui-grid.css";

const sleep = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

function App() {
  const data = [
    { id: 1, name: "Editor" },
    { id: 2, name: "Grid" },
    { id: 3, name: "Chart" },
  ];

  const columns = [
    { name: "id", header: "ID" },
    { name: "name", header: "Name" },
  ];

  useEffect(() => {
    sleep(30);
  }, []);
  return (
    <div className="App">
      <Grid
        data={data}
        columns={columns}
        rowHeight={25}
        bodyHeight={100}
        heightResizable={true}
        rowHeaders={["rowNum"]}
      />
    </div>
  );
}

export default App;

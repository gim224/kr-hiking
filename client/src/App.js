import logo from "./mountain-984083_640.jpg";

import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import Header from "./components/Header.js";

const App = () => {
  return <Bootstrap></Bootstrap>;
};

const AgGrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      setRowData(data);
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  const sizeToFit = () => {
    gridApi.sizeColumnsToFit();
  };

  const autoSizeAll = (skipHeader) => {
    var allColumnIds = [];
    gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div className="outer-div">
        <div className="button-bar">
          <button onClick={() => sizeToFit()}>Size to Fit</button>
          <button onClick={() => autoSizeAll(false)}>Auto-Size All</button>
          <button onClick={() => autoSizeAll(true)}>
            Auto-Size All (Skip Header)
          </button>
        </div>
        <div className="grid-wrapper">
          <div
            id="myGrid"
            style={{
              height: "400px",
              width: "100%",
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              defaultColDef={{ resizable: true }}
              rowData={rowData}
              onGridReady={onGridReady}
            >
              <AgGridColumn
                field="athlete"
                width={150}
                suppressSizeToFit={true}
              />
              <AgGridColumn
                field="age"
                headerName="Age of Athlete"
                width={90}
                minWidth={50}
                maxWidth={150}
              />
              <AgGridColumn field="country" width={120} />
              <AgGridColumn field="year" width={90} />
              <AgGridColumn field="date" width={110} />
              <AgGridColumn field="sport" width={110} />
              <AgGridColumn field="gold" width={100} />
              <AgGridColumn field="silver" width={100} />
              <AgGridColumn field="bronze" width={100} />
              <AgGridColumn field="total" width={100} />
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bootstrap = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Row>
        <Col md="auto">
          <Image src={logo} alt="logo" fluid />
        </Col>
      </Row>

      <Row>
        <Col md={2}>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col md={2}>3 of 3</Col>
      </Row>
      <AgGrid></AgGrid>
    </Container>
  );
};

export default App;

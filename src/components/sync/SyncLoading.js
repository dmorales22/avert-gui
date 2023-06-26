import {Spinner, SpinnerSize } from "@blueprintjs/core";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "bootstrap/dist/css/bootstrap-utilities.min.css";

function SyncLoading() {
  return (
    <div>
        <Row>
            <Col className="text-center">
                <h1>Syncing files, please wait...</h1>
            </Col>
        </Row>

        <Row className="my-5">
            <Col>
                <Spinner intent="primary" size={SpinnerSize.LARGE}>

                </Spinner>
            </Col>
        </Row>
    </div>
  );
}


export default SyncLoading;
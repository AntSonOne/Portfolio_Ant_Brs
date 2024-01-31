import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github <strong className="yellow">Code</strong> streak
      </h1>
      <GitHubCalendar
        username="AntSonOne"
        blockSize={15}
        blockMargin={5}
        color="#0077b6"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

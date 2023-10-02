import React, { useState } from "react";
import styled from "styled-components";
import WeekCalendar from "./Dashboard/WeekCalendar";
import Today from "./Dashboard/Today";
import CheckList from "./Dashboard/CheckList";
import RightDashboard from "./Dashboard/RightDashboard";

const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  min-width: 80%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 23px;
`;

const DashboardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const Panel = styled.div`
  display: flex;
  flex: 1;
  height: ${(props) =>
    props.expanded ? "700px" : "300px"}; /* 높이를 조절할 수 있도록 설정 */
  transition: height 0.3s ease-in-out; /* transition 추가 */
`;

const Left = styled.div`
  padding: 20px;
  border-radius: 40px 0 0 40px;
  background-color: white;
  flex-basis: 50%;
  height: ${(props) => (props.expanded ? "700px" : "300px")};
  overflow-y: auto;
`;

const Line = styled.div`
  height: 50px;
`;

// const Right = styled.div`
//   padding: 20px;
//   border-radius: 0 40px 40px 0;
//   border-left: 2px solid black;
//   background-color: white;
//   flex-basis: 50%;
//   height: ${(props) => (props.expanded ? "700px" : "300px")};
// `;
const NewPanel = styled.button`
  height: 300px;
  width: 100%;
  background-color: blue;
  border-radius: 40px;
  transition: height 0.3s ease-in-out; /* transition 추가 */
`;
const ExpandButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  return (
    <DashboardBox>
      <Title>Dashboard</Title>
      <DashboardBody>
        <Panel>
          <Left>
            <WeekCalendar />
            <Line />
            <Today />
            <CheckList />
          </Left>
          <Line />
          <RightDashboard />
        </Panel>
        {expanded && <NewPanel />}
      </DashboardBody>
      <ExpandButton onClick={toggleExpansion}>
        {expanded ? "접기" : "더보기"}
      </ExpandButton>
    </DashboardBox>
  );
};

export default Dashboard;

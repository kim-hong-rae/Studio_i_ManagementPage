import React from "react";
import Header from "../../Components/common/header";
import Dashboard from "./Dashboard";
import RecentArticle from "./RecentArticle";
import RecentProject from "./RecentProject";
import styled from "styled-components";

const MainBody = styled.div`
    /* max-width : 1184px; */
    //이거 가운데로 놓기 ~
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: gray; 


`;

const Wrapper = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    /* max-width: 100%; */
    flex-wrap: wrap; /* 화면 크기가 작아지면 아래로 내려갈 수 있도록 설정 */
`;

const InternalMainpage = () => {
    return (
        <>
        <Header />
        <MainBody>
            <Dashboard></Dashboard>
            <Wrapper>
                <RecentArticle/>
                <RecentProject/>
            </Wrapper>
        </MainBody>
        </>
    )
}
export default InternalMainpage;
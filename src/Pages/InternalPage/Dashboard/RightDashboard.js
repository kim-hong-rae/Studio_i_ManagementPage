import React,{useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RightDashboardBox = styled.div`
    border-radius: 0 40px 40px 0;
    border-left: 2px solid black;
    background-color: white;
    flex-basis: 50%;
    

`;

const RightboardBody = styled.div`
    width: 90%;
    height: 31%;
    margin: 0.3rem;
    flex-direction: column;
    background-color: white;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    flex: 1;

`;

const BoardTitleDiv = styled.div`
    display: flex;
    text-align: center;
    height: 30%;
`;

const BoardContentDiv = styled.div`
    display: flex;
    text-align: center;
     height: 70%;
`;

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 1.5rem;

`;


const GoButton = styled.div`
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
     margin-left: auto;
`;

const RightDashboard = () => {
    const navigate = useNavigate();

    const goToPlanPage = () => {
            navigate("/PlanMain");
    };

    const goToMakingPage = () => {
            navigate("/MakingMain");
    };

    const goToEditPage = () => {
        navigate("/EditMain");
    };


    return(
        <RightDashboardBox>
            <RightboardBody>
                <BoardTitleDiv>
                    <SubTitle>
                        기획
                    </SubTitle>
                    <GoButton onClick={goToPlanPage}>
                        +
                    </GoButton>
                </BoardTitleDiv>
                <BoardContentDiv>

                </BoardContentDiv>
            </RightboardBody>
            <RightboardBody>
                <BoardTitleDiv>
                    <SubTitle>
                        제작
                    </SubTitle>
                    <GoButton onClick={goToMakingPage}>
                        +
                    </GoButton>
                </BoardTitleDiv>
            </RightboardBody>
            <RightboardBody>
                <BoardTitleDiv>
                    <SubTitle>
                        편집
                    </SubTitle>
                    <GoButton onClick={goToEditPage}>
                        +
                    </GoButton>
                </BoardTitleDiv>
            </RightboardBody>
        </RightDashboardBox>
    )
}
export default RightDashboard;

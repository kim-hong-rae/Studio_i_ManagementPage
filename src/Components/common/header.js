import React from 'react';
import styled from 'styled-components';
import Responsive from './responsive';
import Button from './Button';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  
  .logo {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 2px;
    white-space: nowrap;
    
    @media(max-width: 390px){
    font-size: 1.625rem;
    }
  }
  .menu{
    width: 10%;
    padding-left: 1rem;

  }
  .search{
    width: 30%;
  }
  
  .right {
    display: flex;
    align-items: center;
    margin-left: 20%;
    width: 20%;
    justify-content: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">STUDIO I</div>
                    <div className="menu">
                    <CgMenuGridO className="MenuIcon" size="2rem" />
                    </div>
                    <div className="search">
                    <SearchBar />
                    </div>
                    <div className="right">
                        <Button>
                            <Link to="/LoginPage">로그인</Link>
                        </Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );

};

export default Header;
import completed from './completed.png';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const media = {
    mobileWithImage: 'only screen and (max-width: 850px)',
    mobile: 'only screen and (max-width: 390px)'
};

const LoginContainer = styled.div`
  background: #E9E9E9;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 40px 80px;
  
  @media ${media.mobileWithImage} {
    padding: 20px;
    display: inherit;
  }
`;

const LoginForm = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: inherit;
`;

const LoginImage = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 1; /* 초기 투명도 설정 */
  transition: opacity 1s ease; /* 투명도 변경에 대한 트랜지션 설정 */
  
  @media ${media.mobileWithImage} {
    opacity: 0; /* 미디어 쿼리 범위에서 이미지를 초기 상태로 설정 */
    transition: opacity 1s ease; /* 트랜지션 설정 */
    /*display: none;*/
    height: 0;
  }
`;

const AlignLeft = styled.div`
  align-self: flex-start;
`;

const TitleLeft = styled.div`
  display: block;
`;

const HorizontalLine = styled.div`
  border-top: 1px solid #ccc; /* 가로 선 스타일 */
  margin: 0.5rem 0; /* 원하는 간격 설정 */
  width: 100%;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #ccc; /* 세로선 색상과 스타일 지정 */
  height: 400px; /* 세로선의 높이를 부모 요소에 맞게 설정 */
  margin: 0.5rem;
  
  @media ${media.mobileWithImage} {
    display: none;
  }
`;

const InputSize = styled.input`
  border: 1px solid #A8A8A8;
  border-radius: 3px;
  width: 100%;
  min-width: 288px;
  height: 32px;
  margin: 8px;
`;

const Margin8px = styled.div`
  margin: 0.5rem;
`;

const Padding8px = styled.div`
  padding: 0rem 0.5rem;
`;

const LoginPageButton = styled.button`
  background-color: #363636;
  color: #fff;
  width: 100%;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 변화 시 부드러운 전환 효과 */
  margin: 0.5rem;
  &:hover {
    background-color: #cccccc;
  }
`;

const TitleLg = styled.div`
  font-size: 3rem;
  font-weight: 600;
  
  @media ${media.mobile}{
    font-size: 1.875rem;
    font-weight: 600;
  }
`;

const TitleMd = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  @media ${media.mobile}{
    font-size: 1.625rem;
    font-weight: 600;
  }
`;

const TitleSm = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  @media ${media.mobile}{
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const TextLg = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  @media ${media.mobile}{
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const TextMd = styled.div`
  font-size: 1rem;
  font-weight: normal;
  @media ${media.mobile}{
    font-size: 1.125rem;
    font-weight: normal;
  }
`;

const TextSm = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  @media ${media.mobile}{
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Caption = styled.div`
  font-size: 0.75rem;
  font-weight: normal;
  @media ${media.mobile}{
    font-size: 0.875rem;
    font-weight: normal;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 부모 요소의 색상 상속 */
  cursor: pointer; /* 포인터 커서 표시 */
  width: 100%;
  display: inline-block; /* 또는 block로 설정 */
`


function LoginPage() {
  return (
    <LoginContainer>
        <TitleLeft>
          <Margin8px><TitleLg>Login </TitleLg></Margin8px>
        <LoginBox>
          <LoginForm>
            <AlignLeft><TextMd>아이디</TextMd></AlignLeft>
            <InputSize />
            <AlignLeft><TextMd>비밀번호</TextMd></AlignLeft>
            <InputSize />
            <LoginPageButton><TextMd>로그인</TextMd></LoginPageButton>
            <HorizontalLine></HorizontalLine>
            <LoginPageButton><TextMd><StyledLink to="/SignInPage">회원가입</StyledLink></TextMd></LoginPageButton>
        </LoginForm>
            <VerticalLine></VerticalLine>
        <LoginImageBox>
            <LoginImage src={completed}/>
          </LoginImageBox>
      </LoginBox>
      </TitleLeft>
    </LoginContainer>
  );
}

export default LoginPage;

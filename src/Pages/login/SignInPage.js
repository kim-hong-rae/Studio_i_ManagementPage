import styled from "styled-components";

const media = {
    mobile: 'only screen and (max-width: 390px)'
};

const SignInContainer = styled.div`
  background: #E9E9E9;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 100vh;
`;

const TitleLeft = styled.div`
  display: block;
`;

const SignInBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 160px 320px;

  @media ${media.mobile} {
    padding: 20px;
    display: inherit;
  }
`;

const SignInForm = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubInputForm = styled.div`
  align-items: flex-start;
`;

const SubInputFormWithButton = styled.div`
  display: flex;
  width: auto;
`;

const Margin8px = styled.div`
  margin: 0.5rem;
`;

const HorizontalLine = styled.div`
  border-top: 1px solid #ccc; /* 가로 선 스타일 */
  margin: 0.5rem 0; /* 원하는 간격 설정 */
  width: 100%;
`;

const InputSize = styled.input`
  border: 1px solid #A8A8A8;
  border-radius: 3px;
  width: 288px;
  height: 32px;
  margin: 8px 0px;
`;

const InputSizeWithBtn = styled.input`
  border: 1px solid #A8A8A8;
  border-radius: 3px;
  width: 192px;
  height: 32px;
  margin: 8px 4px 8px 0px;
`;

const SignInPageButton = styled.button`
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

const BtnWithInput = styled.button`
  background-color: #363636;
  color: #fff;
  width: 90px;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 변화 시 부드러운 전환 효과 */
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

const TextMd = styled.div`
  font-size: 1rem;
  font-weight: normal;
  @media ${media.mobile}{
    font-size: 1.125rem;
    font-weight: normal;
  }
`;


function SignInPage(){
    return(
        <SignInContainer>
            <TitleLeft>
            <Margin8px>
                <TitleLg>Sign In</TitleLg>
            </Margin8px>
            <SignInBox className="SignInBox">
                <SignInForm className="SignInForm">
                    <SubInputForm className="SubInputForm">
                        <TextMd>메일주소</TextMd>
                        <InputSizeWithBtn />
                        <BtnWithInput>인증</BtnWithInput>
                    </SubInputForm>
                    <SubInputForm className="SubInputFormWithButton">
                        <TextMd>비밀번호</TextMd>
                        <InputSize />
                    </SubInputForm>
                    <SubInputForm className="SubInputForm">
                        <TextMd>비밀번호 확인</TextMd>
                        <InputSize />
                    </SubInputForm>
                <HorizontalLine></HorizontalLine>
                <SignInPageButton>회원가입</SignInPageButton>
                </SignInForm>
            </SignInBox>
            </TitleLeft>
        </SignInContainer>
    );
}

export default SignInPage;

import completed from './completed.png';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="title-left">
        <div className="padding-8px" id="title-lg">Sign In</div>
        <div className="login-box">
          <div className="login-form">
            <div className="align-left" id="text-md">아이디</div>
            <input className="input_size margin-8px" />
            <div className="align-left" id="text-md">비밀번호</div>
            <input className="input_size  margin-8px" />
            <button className="login-page-button margin-8px" id="text-md">로그인</button>
            <div className="horizontal-line"></div>
            <button className="login-page-button margin-8px" id="text-md">회원가입</button>
        </div>
            <div className="vertical-line margin-8px"></div>
        <div className="login-image">
            <img className="image-disappear" id="login-image" src={completed}/>
          </div>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;

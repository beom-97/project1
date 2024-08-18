import './Login.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const handleLogin = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        // 로그인 로직을 여기에 추가할 수 있습니다.
        navigate('/home'); // 로그인 성공 후 홈 페이지로 이동
    };

    return (
        <div id="login-container">
            <div id="loginbox">
                <input type="text" id="idinputfield" placeholder="아이디를 입력하세요"></input>
                <input type="password" id="passwordinputfield" placeholder="비밀번호를 입력하세요"></input>
                <div id="buttonfield">
                    <button type="button" onClick={handleSignup}>회원가입</button>
                    <button type="submit" onClick={handleLogin}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
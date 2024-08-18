import './SignupPage.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/'); // 로그인 페이지로 이동
    };

    return (
        <div id="signup-container">
            <div id="signupbox">
                <div id='maintextbox'>
                    <p id="text1">회원가입</p>
                </div>

                <input
                    type="text"
                    id="idinputfield"
                    placeholder="아이디를 입력하세요"
                    required="required"></input>
                <input
                    type="password"
                    id="passwordinputfield"
                    placeholder="비밀번호를 입력하세요"
                    required="required"></input>
                <input
                    type="email"
                    id="emailinputfield"
                    placeholder="이메일을 입력하세요"
                    required="required"></input>
                <input
                    type="date"
                    id="brithdayinputfield"
                    placeholder="생년월일"
                    required="required"></input>
                <input
                    type="number"
                    id="phoninputfield"
                    placeholder="핸드폰번호를 입력하세요"
                    required="required"></input>
                <input
                    type="text"
                    id="codeinputfield"
                    placeholder="추천코드를 입력하세요"
                    required="required"></input>
                <div id="buttonfield">
                    <button type="button" onClick={handleLoginRedirect}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
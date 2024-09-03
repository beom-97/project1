import './SignupPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();

    // 입력 필드 상태 설정
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState(''); // 오류 메시지를 관리할 상태

    const handleLoginRedirect = () => {
        navigate('/'); // 로그인 페이지로 이동
    };

    const handleSignup = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        // 유효성 검사
        if (!username || !password || !email || !birthday || !phone || !code) {
            alert('모든 정보를 입력하세요');
            return;
        }

        // 서버와의 통신 부분은 주석 처리됨
        // 실제 서버와 연동할 때는 아래 주석을 해제하고 URL을 실제 서버 URL로 변경합니다.
        /*
        fetch('http://localhost:8080/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                email,
                birthday,
                phone,
                code
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('회원가입에 실패했습니다.');
            }
            return response.json();
        })
        .then(data => {
            console.log('회원가입 성공:', data);
            navigate('/'); // 회원가입 성공 후 로그인 페이지로 이동
        })
        .catch(err => {
            setError(err.message); // 오류 메시지 설정
        });
        */

        // 서버 통신을 대체하는 콘솔 로그
        console.log('회원가입 정보:', {
            username,
            password,
            email,
            birthday,
            phone,
            code
        });

        // 성공적으로 회원가입 후 로그인 페이지로 리다이렉트
        navigate('/');
    };

    return (
        <div id="signup-container">
            <div id="signupbox">
                <div id='maintextbox'>
                    <p id="text1">회원가입</p>
                </div>

                {error && <div id="error-message">{error}</div>} {/* 오류 메시지 표시 */}

                <input
                    type="text"
                    id="idinputfield"
                    placeholder="아이디를 입력하세요"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    id="passwordinputfield"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="email"
                    id="emailinputfield"
                    placeholder="이메일을 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="date"
                    id="brithdayinputfield"
                    placeholder="생년월일"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    id="phoninputfield"
                    placeholder="핸드폰번호를 입력하세요"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="text"
                    id="codeinputfield"
                    placeholder="추천코드를 입력하세요"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <div id="buttonfield">
                    <button type="button" onClick={handleSignup}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
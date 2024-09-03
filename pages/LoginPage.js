import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // 오류 메시지를 관리할 상태

    const handleSignup = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const handleLogin = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        // 로그인 로직을 여기에 추가할 수 있습니다. 테스트용 아이디와 비밀번호
        const testUsername = 'test';
        const testPassword = 'test';

        // 입력 값 유효성 검사
        if (!username) {
            alert('아이디를 입력하세요');
            return;
        }
        if (!password) {
            alert('비밀번호를 입력하세요');
            return;
        }
        /*
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });
        }

        if (!response.ok) {
            throw new Error('아이디나 비밀번호가 틀렸습니다.');
        }
        navigate('/home'); // 로그인 성공 시 홈 페이지로 이동
    } catch (err) {
        setError(err.message)
    }
        */
        // 인증 로직 (백엔드가 없으므로 클라이언트에서 처리)
        if (username === testUsername && password === testPassword) {
            setError(''); // 오류 메시지 초기화
            navigate('/home'); // 로그인 성공 후 홈 페이지로 이동
        } else {
            alert('아이디나 비밀번호가 틀렸습니다.'); // 오류 팝업
        }

    };


    return (
        <div id="login-container">
            <div id="loginbox">
                <input
                    type="text"
                    id="idinputfield"
                    placeholder="아이디를 입력하세요"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}></input>
                <input
                    type="password"
                    id="passwordinputfield"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <div id="buttonfield">
                    <button type="button" onClick={handleSignup}>회원가입</button>
                    <button type="submit" onClick={handleLogin}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
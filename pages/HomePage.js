import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {

    const navigate = useNavigate();

    const gotologout = () => {
        navigate("/");
    }
    const gotoaisa = () => {
        navigate("/asinventory");
    }
    const gotoamerica = () => {
        navigate("/aminventory");
    }
    const gotoeurope = () => {
        navigate("/euinventory");
    }
    const gotoAfricaOceania = () => {
        navigate("/aoinventory");
    }
    const gotomypage = () => {
        navigate("/");
    }

    return (
        <div id="home-container">
            <div class="category">
                <div class="categorybox1">
                    <button id="asia" class="e" onClick={gotoaisa}>아시아 대륙</button>
                    <button id="america" class="e" onClick={gotoamerica}>아메리카 대륙</button>
                    <button id="europe" class="e" onClick={gotoeurope}>유럽 대륙</button>
                    <button id="america&oceania" class="e" onClick={gotoAfricaOceania}>아프리카&오세아니아 대륙</button>
                    <button id="mypage" class="e" onClick={gotomypage}>마이페이지</button>
                    <button id="logout" class="e" onClick={gotologout}>로그아웃</button>
                </div>
            </div>
            <div id="main">
                <div id="container">
                    <div class="box2">
                        <div id="titletext" onClick={gotoaisa}>
                            아시아 대륙
                        </div>
                        <div class="textbox">
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                    <div class="box2">
                        <div id="titletext">
                            <p class="titletext" onClick={gotoamerica}>아메리카 대륙</p>
                        </div>
                        <div class="textbox">
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                    <div class="box2">
                        <div id="titletext">
                            <p class="titletext" onClick={gotoeurope}>유럽 대륙</p>
                        </div>
                        <div class="textbox">
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                    <div class="box2">
                        <div id="titletext">
                            <p class="titletext" onClick={gotoAfricaOceania}>아프리카&오세아니아 대륙</p>
                        </div>
                        <div class="textbox">
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                            <div class="text">
                                <tr>
                                    <td>
                                        <p class="no">2548</p>
                                    </td>
                                    <td>
                                        <p class="title">제목입니다</p>
                                    </td>
                                    <td>
                                        <p class="Author">작성자</p>
                                    </td>
                                    <td>
                                        <p class="postdate">2024.01.02</p>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
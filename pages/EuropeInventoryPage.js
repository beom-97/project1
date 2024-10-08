import "./InventoryPage.css"
import { useNavigate } from 'react-router-dom';

function EuropeInventoryPage() {

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
    const gotoAmericAoceania = () => {
        navigate("/aoinventory");
    }
    const gotomypage = () => {
        navigate("/");
    }
    const gotohomepage = () => {
        navigate("/home");
    }
    const gotocreatepage = () => {
        navigate("/create");
    }

    return (
        <div class="inventory-container">
            <div class="category">
                <div class="categorybox1">
                    <button id="asia" class="e" onClick={gotoaisa}>아시아 대륙</button>
                    <button id="america" class="e" onClick={gotoamerica}>아메리카 대륙</button>
                    <button id="europe" class="e" onClick={gotoeurope}>유럽 대륙</button>
                    <button id="america&oceania" class="e" onClick={gotoAmericAoceania}>아프리카&오세아니아 대륙</button>
                    <button id="mypage" class="e" onClick={gotomypage}>마이페이지</button>
                    <button id="logout" class="e" onClick={gotologout}>로그아웃</button>
                </div>
            </div>

            <div class="inventorymainbox">

                <div class="mainbox">

                    <div class="maintitle1">유럽대륙 여행</div>

                    <div class="buttonbox">
                        <button class="button" onClick={gotohomepage}>뒤로가기</button>
                        <button class="button" onClick={gotocreatepage}>글쓰기</button>
                    </div>

                    <div class="top">
                        <div class="num">NO</div>
                        <div class="title">제목</div>
                        <div class="writer">작성자</div>
                        <div class="date">조회날자</div>
                    </div>

                    <div class="main1">
                        <div class="middle">
                            <div class="num">1</div>
                            <div class="title">
                                <a href="#">독일여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">2</div>
                            <div class="title">
                                <a href="#">베를린여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.08</div>
                        </div>
                        <div class="middle">
                            <div class="num">3</div>
                            <div class="title">
                                <a href="#">로마여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">4</div>
                            <div class="title">
                                <a href="#">유럽여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">5</div>
                            <div class="title">
                                <a href="#">스페인여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">6</div>
                            <div class="title">
                                <a href="#">터키여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">7</div>
                            <div class="title">
                                <a href="#">파리여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">8</div>
                            <div class="title">
                                <a href="#">바르셀로나여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">9</div>
                            <div class="title">
                                <a href="#">그리스여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">10</div>
                            <div class="title">
                                <a href="#">이탈리아여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>
                        <div class="middle">
                            <div class="num">11</div>
                            <div class="title">
                                <a href="#">필란드여행</a>
                            </div>
                            <div class="writer">작성자</div>
                            <div class="date">2024.01.01</div>
                        </div>

                    </div>
                    <div class="board_page">
                        <a href="#" class="bt first">{'<<'}</a>
                        <a href="#" class="bt prev">{'<'}</a>
                        <a href="#" class="num on">1</a>
                        <a href="#" class="num">2</a>
                        <a href="#" class="num">3</a>
                        <a href="#" class="num">4</a>
                        <a href="#" class="num">5</a>
                        <a href="#" class="num">6</a>
                        <a href="#" class="num">7</a>
                        <a href="#" class="num">8</a>
                        <a href="#" class="num">9</a>
                        <a href="#" class="num">10</a>
                        <a href="#" class="bt next">{'>'}</a>
                        <a href="#" class="bt last">{'>>'}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EuropeInventoryPage;
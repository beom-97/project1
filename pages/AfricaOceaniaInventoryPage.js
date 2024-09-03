import "./InventoryPage.css"
import { useNavigate } from 'react-router-dom';

function AfricaOceaniaInventoryPage() {

    const navigate = useNavigate();

    const gotologout = () => {
        navigate("/");
    }
    const gotoasia = () => {
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
    const gotohomepage = () => {
        navigate("/home");
    }
    const gotocreatepage = () => {
        navigate("/create");
    }

    return (
        <div className="inventory-container">
            <div className="category">
                <div className="categorybox1">
                    <button id="asia" className="e" onClick={gotoasia}>아시아 대륙</button>
                    <button id="america" className="e" onClick={gotoamerica}>아메리카 대륙</button>
                    <button id="europe" className="e" onClick={gotoeurope}>유럽 대륙</button>
                    <button id="africa&oceania" className="e" onClick={gotoAfricaOceania}>아프리카 & 오세아니아 대륙</button>
                    <button id="mypage" className="e" onClick={gotomypage}>마이페이지</button>
                    <button id="logout" className="e" onClick={gotologout}>로그아웃</button>
                </div>
            </div>

            <div className="inventorymainbox">
                <div className="mainbox">
                    <div className="maintitle1">아프리카 & 오세아니아 대륙 여행</div>

                    <div className="buttonbox">
                        <button className="button" onClick={gotohomepage}>뒤로가기</button>
                        <button className="button" onClick={gotocreatepage}>글쓰기</button>
                    </div>

                    <div className="top">
                        <div className="num">NO</div>
                        <div className="title">제목</div>
                        <div className="writer">작성자</div>
                        <div className="date">조회날자</div>
                    </div>

                    <div className="main1">
                        <div className="middle">
                            <div className="num">1</div>
                            <div className="title">
                                <a href="#">남아프리카공화국 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.01.01</div>
                        </div>
                        <div className="middle">
                            <div className="num">2</div>
                            <div className="title">
                                <a href="#">케냐 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.01.08</div>
                        </div>
                        <div className="middle">
                            <div className="num">3</div>
                            <div className="title">
                                <a href="#">이집트 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.01.15</div>
                        </div>
                        <div className="middle">
                            <div className="num">4</div>
                            <div className="title">
                                <a href="#">모로코 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.01.22</div>
                        </div>
                        <div className="middle">
                            <div className="num">5</div>
                            <div className="title">
                                <a href="#">탄자니아 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.01.29</div>
                        </div>
                        <div className="middle">
                            <div className="num">6</div>
                            <div className="title">
                                <a href="#">사하라사막 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.02.05</div>
                        </div>
                        <div className="middle">
                            <div className="num">7</div>
                            <div className="title">
                                <a href="#">호주 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.02.12</div>
                        </div>
                        <div className="middle">
                            <div className="num">8</div>
                            <div className="title">
                                <a href="#">뉴질랜드 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.02.19</div>
                        </div>
                        <div className="middle">
                            <div className="num">9</div>
                            <div className="title">
                                <a href="#">피지 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.02.26</div>
                        </div>
                        <div className="middle">
                            <div className="num">10</div>
                            <div className="title">
                                <a href="#">사모아 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.03.04</div>
                        </div>
                        <div className="middle">
                            <div className="num">11</div>
                            <div className="title">
                                <a href="#">하와이 여행</a>
                            </div>
                            <div className="writer">작성자</div>
                            <div className="date">2024.03.11</div>
                        </div>
                    </div>

                    <div className="board_page">
                        <a href="#" className="bt first">{'<<'}</a>
                        <a href="#" className="bt prev">{'<'}</a>
                        <a href="#" className="num on">1</a>
                        <a href="#" className="num">2</a>
                        <a href="#" className="num">3</a>
                        <a href="#" className="num">4</a>
                        <a href="#" className="num">5</a>
                        <a href="#" className="num">6</a>
                        <a href="#" className="num">7</a>
                        <a href="#" className="num">8</a>
                        <a href="#" className="num">9</a>
                        <a href="#" className="num">10</a>
                        <a href="#" className="bt next">{'>'}</a>
                        <a href="#" className="bt last">{'>>'}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AfricaOceaniaInventoryPage;
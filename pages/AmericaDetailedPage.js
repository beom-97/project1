import './DetailedPage.css'
import { useNavigate } from 'react-router-dom';

function AmericaDetailedPage() {

    const navigate = useNavigate();

    const gotologout = () => {
        navigate("/");
    }
    const gotoaisa = () => {
        navigate("/");
    }
    const gotoamerica = () => {
        navigate("/");
    }
    const gotoeurope = () => {
        navigate("/euinventory");
    }
    const gotoAmericAoceania = () => {
        navigate("/");
    }
    const gotomypage = () => {
        navigate("/");
    }

    return (
        <div class="detailed-container">
            <div class="category">
                <div class="categorybox1">
                    <button id="asia" class="e" onClick={gotoaisa}>아시아 대륙</button>
                    <button id="america" class="e" onClick={gotoamerica}>아메리카 대륙</button>
                    <button id="europe" class="e" onClick={gotoeurope}>유럽 대륙</button>
                    <button id="america&oceania" class="e" onClick={gotoAmericAoceania}>아메리카&오세아니아 대륙</button>
                    <button id="mypage" class="e" onClick={gotomypage}>마이페이지</button>
                    <button id="logout" class="e" onClick={gotologout}>로그아웃</button>
                </div>
            </div>
            <div class='detailedpagebox'>
                <div class='detailedbox1'>
                    <div class='detailedtextbox1'>
                        <p>아메리카 대륙 게시판</p>
                    </div>
                    <div class='detailedtitle'></div>
                    <div class='detailedtextbox2'></div>
                    <div class='buttonfield'>
                        <button class="backtolist" /*onClick={List}*/>뒤로가기</button>
                    </div>
                </div>
            </div>
        </div >

    );

}

export default AmericaDetailedPage;
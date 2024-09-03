import { useNavigate } from 'react-router-dom';
import './CreatePage.css'

function CreatePage() {

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
        navigate("/create");
    }
    const back = () => {
        navigate(-1); // 이전 페이지로 이동
    }

    return (
        <div class="create-container">
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
            <div class="createbox1">
                <div class="mainbox1">
                    <div class="titletextbox1">글쓰기</div>
                    <div id='box1'>
                        <div class="categoryscroll1">
                            <select name="catagory">
                                <option value="Asia">아시아 대륙</option>
                                <option value="America">아메리카 대륙</option>
                                <option value="Europe">유럽 대륙</option>
                                <option value="AfricaOceania">아프리카&오세아니아 대륙</option>
                            </select>
                        </div>
                        <input type='text' class="createtitlebox"></input>
                    </div>
                    <input type='text' class="writetitle"></input>
                    <div class="button">
                        <button class="" onClick={back}>뒤로가기</button>
                        <button class="">등록하기</button>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default CreatePage;
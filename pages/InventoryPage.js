import { useNavigate } from "react-router-dom";
import "./InventoryPage.css"


function InventoryPage() {

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
        <div id="inventory-container">
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
            <div id="inventorymainbox">
                <div id="mainbox">
                    <div id=""></div>
                    <div id=""></div>
                    <div id=""></div>
                    <div id=""></div>
                </div>

            </div>



        </div>
    );
}
export default InventoryPage;
import './EditPage.css'

function EditPage() {
    return (
        <div class="create-container">
            <div class="category">
                <div class="categorybox1"></div>
                <div class="categorybox1"></div>
                <div class="categorybox1"></div>
            </div>
            <div class="createbox1">
                <div class="mainbox1">
                    <div class="titletextbox1">글수정</div>
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
                        <button class="">뒤로가기</button>
                        <button class="">수정하기</button>
                        <button class="">삭제하기</button>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default EditPage;
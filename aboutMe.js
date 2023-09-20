// var enterNameInput = document.getElementById('username')

function showHiddenContent() {
    var hidding_info = document.getElementById('info_hiding')
    var hello_username = document.getElementById('hello_username')
    var enterNameInput = document.getElementById('username')
    if (enterNameInput.value == ""){
        alert("Nhập cái tên đi bạn eyy:)))")
    }else if(enterNameInput.value == "09/10/2011"){
        alert("Làm sao mi biết ngày sinh của tau😡😡")
    }else if (enterNameInput.value == "Đoàn Anh Quân") {
        alert("Không được giống tên của thằng cha tạo web=)))")
    }else{
        hello_username.innerHTML = "Xin chào " + enterNameInput.value + ". Tui là Quân, nice to meet you:))"
        hidding_info.style.display = "block"
        VoHieuHoa()
    }
    
}

function VoHieuHoa() {
    var button_thing = document.getElementById('first_quest_requires')
    var input_thing = document.getElementById('username')
    button_thing.style.pointerEvents = "none"
    input_thing.style.pointerEvents = "none"
    button_thing.style.userSelect = "none"
    input_thing.style.userSelect = "none"
}
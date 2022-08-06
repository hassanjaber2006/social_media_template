function show_hide_passwor(){
    var btn_shp = document.getElementById('btn_shp')
    if (password_input.type == 'password'){
        password_input.type = 'text';
        btn_shp.classList = 'fa-solid fa-eye-slash'
    }
    else{
        password_input.type = 'password';
        btn_shp.classList = 'fa-solid fa-eye';
    }
}

function add_comment_shf(){
    var inputs = document.getElementById('add-comment-input');
    var input = document.getElementById('add-commentInput')
    if (inputs.style.display == 'none'){
        inputs.style.display = 'flex';
        input.setAttribute('required','')
    }
    else{
        inputs.style.display = 'none';
        input.removeAttribute('required','')
    }
}


function search_box_shf(){
    btn = document.getElementById('search-box-btn');
    if (window.innerWidth < 700) {
        box = document.getElementById('search-box-2'); 
        if (box.style.display == 'none'){
            box.style = `
            display: block !important;
            width: 100%;
            margin: 10px 0;
            `
            btn.style.color = '#ffe300'
            box.firstElementChild.style = `
            border-radius: 2px ;
            background: #fff;
            padding: 2px 0;
            `
            form = box.firstElementChild;
            form.firstElementChild.style.width = '92%'
            form.firstElementChild.focus()
        }
        else{
            box.style = `
            display: none;
            `
            btn.style.color = '#000'
        }
    }
    else{
        box = document.getElementById('search-box-2'); 
        box.style = `
        display: none;
        `
        btn.style.color = '#000'
    }
}

function notifications_shf(){
    var inputs = document.getElementById('notification-box');
    if (inputs.style.display === 'none'){
        inputs.style.display = 'block';
    }
    else{
        inputs.style.display = 'none';
    }
}

function aside_settings_shf(){
    var aside = document.getElementById('user-settings1');
    var aside2 = document.getElementById('user-settings2');
    btn = document.getElementById('OC_aside');
    if (aside.style.display == 'none'){
        aside.style.display = 'flex';
        aside2.style.display = 'none'
        aside.style.width = '45%';
        btn.classList = 'fa-solid fa-xmark'
    }
    else{
        aside.style.display = 'none';
        aside2.style.display = 'flex'
        aside.style.width = '50px';
        btn.classList = 'fa-solid fa-angles-right'
    }
}

function settings_description_shf(boxId){
    box = document.getElementById(boxId)
    if (box.style.display == 'none'){
        box.style.display = 'block'
    }
    else{
        box.style.display = 'none'
    }
}



function auto_click(id) {
    btn = document.getElementById(id);
    if (btn != null){
        btn.click()
    }
}

auto_click('search-box-btn')
auto_click('search-box-btn')
auto_click('add-comment-btn')
auto_click('not-btn')
auto_click('settings-btn-mention')
auto_click('settings-btn-posts')
auto_click('settings-btn-privacy')
if (window.innerWidth < 601){
auto_click('OC_aside')
}




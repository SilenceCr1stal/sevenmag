$(document).ready(function() {
    $.each($('.opinion-site-radio'), function(index, val) {
        if($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        } 
    });
    $(document).on('click', '.opinion-site-radio', function(event) {
        $(this).parents('.opinion-site').find('.opinion-site-radio').removeClass('active');
        $(this).parents('.opinion-site').find('.opinion-site-radio input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });
    $('.header-burger').click(function(event) {
        $(".header-burger, .navigation-block").toggleClass("active");
        $("body").toggleClass("lock");
    });
});
let asides = () => {
    if ($(window).width() <= '425') {
        $('.aside').addClass('margin-block');
    } else {
        $('.aside').removeClass('margin-block');
    }
}
$(window).on('load resize', asides);
let docMain = document.querySelector('main');
// let sectionMain = docMain.children[0];
// let appChild = () => {
//     let mainChild = sectionMain.cloneNode(true);
//     docMain.appendChild(mainChild);
// }
// appChild();
// let parent = document.getElementsByClassName('tag')[6];
// let oldChild = document.getElementsByClassName('span-inside-news')[8];
// let oldChild = parent.children[0];
let parent = document.getElementsByClassName('tag')[6];
let oldChild = parent.children[0];
let appChild = () => {
    let child = document.createElement('span');
    let text = document.createTextNode('Hello');
    child.appendChild(text);
    // node.appendChild(child);
    // docMain.appendChild(node);
    // console.log(parent.parentNode);
    parent.replaceChild(child, oldChild);
}
let news = () => {
    let marginLeftRight = 12;
    if (($(window).width() <= 375) && ($('#news-in-picture')) == 'news-in-picture') {
        console.log('a');
    }
}
let picture = document.getElementById('l-news-inside');
let scale = () => {
    for (let i = 0; i < picture.children.length; i++) {
        picture.children[i].style.transition = 'all .5s ease';
        picture.children[i].style.transform = 'scale(1.1)';
    }
    console.log(picture);
    // picture.removeEventListener('dblclick', scale);
    setTimeout(() => {
        for (let i = 0; i < picture.children.length; i++) {
            picture.children[i].style.transform = 'initial';
        }
    }, 1000);
}
picture.addEventListener('dblclick', scale, false); 
let block = document.getElementsByClassName('l-news')[0];

let hide = () => {
    block.children[0].style.visibility = 'hidden';
}
block.addEventListener('click', hide, false);

let nik = 'CRISTAL'
let obj = 'user'
let username = {
[obj + 'name_' + nik.slice(0, 2).toLowerCase() + 1 + nik.slice(3).toLowerCase()]: 17
}
// console.log(username.username_cr1stal)

let person = {
    name: null,
    age: 33,
    sex: 'female',
    activity: 'working',
    married: false
};
let student = Object.assign({age: 18, surname: 'Putin'}, person,
    {age: 17, sex: 'male', name: 'Nikita', working: 'student'});
const keys = Object.keys(student);
let funcKeys = keys.forEach((key) => {
    // console.log(key + ': ');
    // console.log(student[key]);
});
let careWorker = Object.assign({salary: 15000}, person, {name: "Nikita"});
let keyWorker = Object.keys(careWorker);
// let aboutMe = keyWorker.forEach((key) => console.log(key + ": " + careWorker[key]));
let ages = [13, 14, 16, 17, 18, 27];
let [Timoha, Dima, , Nekit] = ages;
let countries = () => {
    return ['Russia', 'USA', 'China'];
}
let [Nikitos, , Kirill] = countries();
let age = 17, broAge = 27, mumAge = 48;
[age, yourAge, fatherAge] = [broAge, , 50];
console.log(age, broAge, fatherAge, yourAge);   
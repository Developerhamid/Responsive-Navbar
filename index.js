    const links = document.querySelector('.links');
    const navToggle = document.querySelector('.toggle-btn');


    navToggle.addEventListener('click',() =>{
        // console.log(links.classList.contains('show-links'));

        // if(links.classList.contains('show-links')){
        //     links.classList.remove('show-links');
        // }
        // else{
        //     links.classList.add('show-links');
        // }

        links.classList.toggle('show-links');
    });
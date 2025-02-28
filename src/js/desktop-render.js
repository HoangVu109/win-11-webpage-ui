function initDesktop(){
    for (let i = 0; i < 9; i++) {
        for(let j = 0; j < 20; j++) {
            document.write(`<a class="grid-item" id="cell-${j*9+i+1}"></a>`);
        }
    }
}

function addShortcut(){
    shortcuts = [ 
        {
            iconPath : './src/imgs/facebookicon128.png',
            shortcutName: 'Facebook',
            link: 'https://www.facebook.com/vvhoang109'        
        },{
            iconPath : './src/imgs/githubicon128.png',
            shortcutName: 'Github',
            link: 'https://github.com/HoangVu109'
                 
        },
    ]
    var count = 1;
    shortcuts.forEach(shortcut => {
        console.log(count);
        elem = document.getElementById(`cell-${count}`)
        if(shortcut.hasOwnProperty('link')) {
            elem.setAttribute('href',shortcut.link)
            elem.setAttribute('target','_blank')
        } else {
            elem.setAttribute('href','#')
            elem.setAttribute('role','button')
        }
        elem.innerHTML =  `<img src=${shortcut.iconPath} alt=""> <p class='shorcutName'>${shortcut.shortcutName}</p>`
        count++;

        
    });
}
function initDesktop(){
    const col = 20
    const row = 9
    for (let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            document.write(`<a class="grid-item" id="cell-${j*row+i+1}"></a>`);
        }
    }
}

function addDesktopShortcut(){
    shortcuts = [ 
        {
            iconPath : './src/imgs/facebookicon128.png',
            shortcutName: 'Facebook',
            link: 'https://www.facebook.com/vvhoang109'        
        },{
            iconPath : './src/imgs/githubicon128.png',
            shortcutName: 'Github',
            link: 'https://github.com/HoangVu109'
                 
        }, {
            iconPath: './src/imgs/linkedicon128.png',
            shortcutName: 'LinkedIn',
            link:'https://www.linkedin.com/in/hoangvu109/'
        }
    ]
    var count = 1;
    shortcuts.forEach(shortcut => {
        console.log(count);
        addShortcutToIndex(shortcut,count)
        count++;
    });


    addShortcutToIndex({
        iconPath: './src/imgs/profileicon128.png',
        shortcutName: 'My Information',
    },10)

    addShortcutToIndex({
        iconPath: './src/imgs/foldericon128.png',
        shortcutName: 'My Skills',
    },11)
    addShortcutToIndex({
        iconPath: './src/imgs/foldericon128.png',
        shortcutName: 'My Projects',
    },12)

    addShortcutToIndex({
        iconPath : './src/imgs/githubicon128.png',
        shortcutName: 'Repo of this web',
        link: 'https://github.com/HoangVu109/win-11-webpage-ui'
             
    },180)
    addShortcutToIndex({
        iconPath : './src/imgs/xmlicon128.png',
        shortcutName: 'About this web',
             
    },171)
}

function addShortcutToIndex(shortcut ,i) {
    elem = document.getElementById(`cell-${i}`)
    if(shortcut.hasOwnProperty('link')) {
        elem.setAttribute('onClick',`openUrl('${shortcut.link}')`)
        elem.setAttribute('role','button')
    } else {
        //elem.setAttribute('href','#')
        elem.setAttribute('role','button')
    }
    elem.innerHTML =  `<img src=${shortcut.iconPath} alt=""> <p class='shorcutName'>${shortcut.shortcutName}</p>`
}
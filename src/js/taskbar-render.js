function addShortcut(shortcut) {
    url = ""
    console.log(shortcut);
    
    if(shortcut.hasOwnProperty('link')) {
        url = "openUrl(\'"+shortcut.link+"\');"
    }    
    document.write(`
        <div role="button" onclick="${url}" class="taskbar-icon">
                <div class="taskbar-icon-img">
                    <img src="${shortcut.iconPath}" alt="">
                </div>
            </div>
        `)
}

function initTaskbar() {
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

    shortcuts.forEach(shortcut => {
        addShortcut(shortcut)
    });
}
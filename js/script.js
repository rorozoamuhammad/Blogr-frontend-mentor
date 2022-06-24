const menuMob = document.getElementById('menu');
const burger = document.getElementById('burger');
const dropPro = document.getElementById('dropPro');
const dropComp = document.getElementById('dropComp');
const dropCont = document.getElementById('dropCon');
const downPro = document.getElementById('downPro');
const downComp = document.getElementById('downComp');
const downCont = document.getElementById('downCont');
const dropProMob = document.getElementById('downProMob');
const dropCompMob = document.getElementById('downCompMob');
const dropContMob = document.getElementById('downContMob');
const downProm = document.getElementById('downProm');
const downCompm = document.getElementById('downCompm');
const downContm = document.getElementById('downContm');

burger.addEventListener('click', () => {
    if(burger.dataset.burger == 'yes') {
        burger.dataset.burger = 'no';
        if(menuMob.dataset.display === 'none') {
            menuMob.dataset.display = 'flex';
        } else {
            menuMob.dataset.display = 'none';
        }
    } else {
        burger.dataset.burger = 'yes';
        if(menuMob.dataset.display === 'flex') {
            menuMob.dataset.display = 'none';
        } else {
            menuMob.dataset.display = 'flex';
        }
    }
});

dropPro.addEventListener('click', () => {
    if(dropPro.dataset.click === 'no') {
        dropPro.dataset.click = 'yes';
        if(downPro.dataset.down === 'up') {
            downPro.dataset.down = 'down';
        } else {
            downPro.dataset.down = 'up'
        }
    } else {
        dropPro.dataset.click = 'no';
        if(downPro.dataset.down === 'down') {
            downPro.dataset.down = 'up';
        } else {
            downPro.dataset.down = 'down'
        }
    }
});

dropComp.addEventListener('click', () => {
    if(dropComp.dataset.click === 'no') {
        dropComp.dataset.click = 'yes';
        if(downComp.dataset.down === 'up') {
            downComp.dataset.down = 'down';
        } else {
            downComp.dataset.down = 'up';
        }
    } else {
        dropComp.dataset.click = 'no';
        if(downComp.dataset.down === 'down') {
            downComp.dataset.down = 'up';
        } else {
            downComp.dataset.down = 'down';
        }
    }
});

dropCont.addEventListener('click', () => {
    if(dropCont.dataset.click === 'no') {
        dropCont.dataset.click = 'yes';
        if(downCont.dataset.down === 'up') {
            downCont.dataset.down = 'down';
        } else {
            downCont.dataset.down = 'up';
        }
    } else {
        dropCont.dataset.click = 'no';
        if(downCont.dataset.down === 'down') {
            downCont.dataset.down = 'up';
        } else {
            downCont.dataset.down = 'down';
        }
    }
});

dropProMob.addEventListener('click', () => {
    if(dropProMob.dataset.click === 'no') {
        dropProMob.dataset.click = 'yes';

        if(downProm.dataset.down === 'up') {
            downProm.dataset.down = 'down';
        } else {
            downProm.dataset.down = 'up';
        }
    } else {
        dropProMob.dataset.click = 'no';

        if(downProm.dataset.down === 'down') {
            downProm.dataset.down = 'up';
        } else {
            downProm.dataset.down = 'down';
        }
    }
});

dropCompMob.addEventListener('click', () => {
    if(dropCompMob.dataset.click === 'no') {
        dropCompMob.dataset.click = 'yes';

        if(downCompm.dataset.down === 'up') {
            downCompm.dataset.down = 'down';
        } else {
            downCompm.dataset.down = 'up';
        }
    } else {
        dropCompMob.dataset.click = 'no';

        if(downCompm.dataset.down === 'down') {
            downCompm.dataset.down = 'up';
        } else {
            downCompm.dataset.down = 'down';
        }
    }
});

dropContMob.addEventListener('click', () => {
    if(dropContMob.dataset.click === 'no') {
        dropContMob.dataset.click = 'yes';

        if(downContm.dataset.down === 'up') {
            downContm.dataset.down = 'down';
        } else {
            downContm.dataset.down = 'up';
        }
    } else {
        dropContMob.dataset.click = 'no';

        if(downContm.dataset.down === 'down') {
            downContm.dataset.down = 'up';
        } else {
            downContm.dataset.down = 'down';
        }
    }
});
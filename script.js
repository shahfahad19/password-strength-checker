var fill,
    wrong = '#EF5350',
    right = '#26A69A',
    color;
function animate() {
    var bar = document.getElementById('fill');
    var width = bar.offsetWidth;
    if (width < fill) {
        width += 2;
        bar.style.width = width + 'px';
        window.requestAnimationFrame(animate);
    } else if (width > fill) {
        width -= 2;
        bar.style.width = width + 'px';
        window.requestAnimationFrame(animate);
    }
    if (fill <= 50) color = '#F44336';
    else if (fill <= 100) color = '#EF6C00';
    else if (fill <= 150) color = '#F9A825';
    else if (fill <= 200) color = '#FDD835';
    else if (fill > 200) color = '#4CAF50';
    bar.style.backgroundColor = color;
}

function checkPassword() {
    fill = 0;
    var n = document.getElementById('num');
    var p = pass.value;
    pass.value = p.replace(' ', '');
    check('lc', p.match(/[a-z]/));
    check('uc', p.match(/[A-Z]/));
    check('sc', p.match(/[$-/:-?{-~!@#%&*()"^_`\[\]]/));
    check('len', p.length > 7);
    if (p.match(/[0-9]/)) check('num', true);
    else check('num', false);
    animate();
}

function check(id, c) {
    var el = document.getElementById(id);
    if (c == null || c == false) {
        el.style.color = wrong;
        el.style.textDecoration = 'line-through';
    } else {
        el.style.color = right;
        el.style.textDecoration = 'none';
        fill += 50;
    }
}

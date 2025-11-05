let disp = '0', expr = '', mem = 0, reset = false;
const dispEl = document.getElementById('display');
const exprEl = document.getElementById('expression');
const memInd = document.getElementById('memoryIndicator');

const update = () => { dispEl.textContent = disp; exprEl.textContent = expr; };
const format = n => { const r = Math.round(n * 1e8) / 1e8; return r.toString().length > 12 ? n.toExponential(6) : r.toString(); };

const error = () => {
    disp = 'Error'; expr = ''; reset = true; update();
    dispEl.parentElement.classList.add('shake');
    setTimeout(() => dispEl.parentElement.classList.remove('shake'), 300);
};

const addNum = v => {
    if (reset) { disp = v === '.' ? '0.' : v; reset = false; }
    else { if (v === '.' && disp.includes('.')) return; disp = disp === '0' && v !== '.' ? v : disp + v; }
    update();
};

const addOp = o => { if (expr && !reset) calc(); expr = disp + ' ' + o + ' '; reset = true; update(); };
const clear = () => { disp = '0'; expr = ''; reset = false; update(); };

const evaluate = str => {
    const tokens = [], prec = {'+': 1, '-': 1, '*': 2, '/': 2};
    let num = '';
    for (let c of str) {
        if (c >= '0' && c <= '9' || c === '.') num += c;
        else { if (num) tokens.push(parseFloat(num)); tokens.push(c); num = ''; }
    }
    if (num) tokens.push(parseFloat(num));
    
    const out = [], ops = [];
    for (let t of tokens) {
        if (typeof t === 'number') out.push(t);
        else { while (ops.length && prec[ops[ops.length-1]] >= prec[t]) out.push(ops.pop()); ops.push(t); }
    }
    while (ops.length) out.push(ops.pop());
    
    const stack = [];
    for (let t of out) {
        if (typeof t === 'number') stack.push(t);
        else {
            const b = stack.pop(), a = stack.pop();
            if (t === '+') stack.push(a + b);
            else if (t === '-') stack.push(a - b);
            else if (t === '*') stack.push(a * b);
            else if (t === '/') { if (b === 0) throw new Error(); stack.push(a / b); }
        }
    }
    return stack[0];
};

const calc = () => {
    if (!expr) return;
    try {
        const full = expr + disp;
        if (/\/\s*0(?:\s|$)/.test(full)) { error(); return; }
        const result = evaluate(full.replace(/×/g, '*').replace(/÷/g, '/').replace(/\s/g, ''));
        if (!isFinite(result)) { error(); return; }
        disp = format(result); expr = ''; reset = true; update();
    } catch(e) { error(); }
};

const actions = {
    clear: () => clear(),
    equals: () => calc(),
    percent: () => { const v = parseFloat(disp); if (!isNaN(v)) { disp = format(v / 100); reset = true; update(); }},
    sqrt: () => { const v = parseFloat(disp); if (isNaN(v) || v < 0) { error(); return; } disp = format(Math.sqrt(v)); reset = true; update(); },
    square: () => { const v = parseFloat(disp); if (!isNaN(v)) { disp = format(v * v); reset = true; update(); }},
    'memory-clear': () => { mem = 0; memInd.classList.remove('active'); },
    'memory-recall': () => { disp = mem.toString(); reset = true; update(); },
    'memory-add': () => { const v = parseFloat(disp); if (!isNaN(v)) { mem += v; if (mem !== 0) memInd.classList.add('active'); }},
    'memory-subtract': () => { const v = parseFloat(disp); if (!isNaN(v)) { mem -= v; mem !== 0 ? memInd.classList.add('active') : memInd.classList.remove('active'); }}
};

const backspace = () => {
    if (reset || disp === 'Error') { disp = '0'; reset = false; }
    else disp = disp.length > 1 ? disp.slice(0, -1) : '0';
    update();
};

document.querySelectorAll('.btn-number').forEach(btn => btn.addEventListener('click', () => addNum(btn.dataset.number)));
document.querySelectorAll('.btn-operator').forEach(btn => btn.addEventListener('click', () => addOp(btn.dataset.operator)));
document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => actions[btn.dataset.action]?.()));

document.addEventListener('keydown', e => {
    const k = e.key;
    if ((k >= '0' && k <= '9') || k === '.') { e.preventDefault(); addNum(k); }
    else if (['+', '-'].includes(k)) { e.preventDefault(); addOp(k); }
    else if (['*', 'x', 'X'].includes(k)) { e.preventDefault(); addOp('*'); }
    else if (['/', '÷'].includes(k)) { e.preventDefault(); addOp('/'); }
    else if (['Enter', '='].includes(k)) { e.preventDefault(); calc(); }
    else if (['Escape', 'c', 'C'].includes(k)) { e.preventDefault(); clear(); }
    else if (k === '%') { e.preventDefault(); actions.percent(); }
    else if (k === 'Backspace') { e.preventDefault(); backspace(); }
});

update();

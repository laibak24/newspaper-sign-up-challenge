const inputEl = document.getElementById('input-box');
const buttonEl = document.getElementById('subscribe');
const outputEl = document.getElementById('output');
const layerEl = document.getElementById('layerlevel');
const imageEl = document.getElementById('image');

function submissionAccept() {
    imageEl.style.display = 'none';
    layerEl.innerHTML = `
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>${inputEl.value}</b>. Please open it and click the button inside to accept your submission.</p>
        <button id="dismiss-btn">Dismiss message</button>
    `;
    layerEl.style.display = 'block';
    document.getElementById('dismiss-btn').style.backgroundColor='#36384e';
    document.getElementById('dismiss-btn').style.color='white';
    document.getElementById('dismiss-btn').style.height='40px';
    document.getElementById('dismiss-btn').style.width='100%';
    document.getElementById('dismiss-btn').style.border='none';
    document.getElementById('dismiss-btn').style.borderRadius ='2px';
    document.getElementById('dismiss-btn').style.boxSizing ='border-box';
    
    document.getElementById('dismiss-btn').addEventListener('click', () => {
        layerEl.style.display = 'none';
    });
}

function checkEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputEl.value == '') {
        outputEl.innerText = 'Email required.';
        inputEl.classList.add('invalid');
        return;
    } else if (!inputEl.value.match(validRegex)) {
        outputEl.innerText = 'Valid email required.';
        inputEl.classList.add('invalid');
        return;
    } else {
        inputEl.classList.remove('invalid');
        outputEl.innerText = '';
        submissionAccept();
    }
}

buttonEl.addEventListener('click', checkEmail);

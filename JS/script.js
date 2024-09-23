
const sm_blog = document.getElementById('sm-blog');
const lg_blog = document.getElementById('lg-blog');
let main_balance = document.getElementById('main-balance');
const donation = document.getElementById('donation');
const history = document.getElementById('history');
let noyakhali_balance = document.getElementById('n-khali-balance');
const noyakhali_input = document.getElementById('noyakhali-input');
const noyakhali_btn = document.getElementById('noyakhali-donate-btn');
let feni_balnce = document.getElementById('feni-blance');
const feni_input = document.getElementById('feni-input');
const feni_input_btn = document.getElementById('feni-input-btn');
let quata_balance = document.getElementById('quata-balance');
const quata_input = document.getElementById('quata-input');
const quata_input_btn = document.getElementById('quata-input-btn');

// Main Balnce..
let balance = 50000;
main_balance.innerText = balance;

// Balance calculation function...
function calculateBalance(previous_balance,current_donated_amount){
    let sum = 0;
    if(Number.isInteger(current_donated_amount) && current_donated_amount>0){
        
         sum = previous_balance + current_donated_amount;
    }
    else{
        alert('Inter valid amount..');
    }
    return sum;
}


// Noyakhali section's donation calculation...
let n_current_balance = 0;
noyakhali_btn.addEventListener('click',()=>{
    
    n_current_balance = calculateBalance(n_current_balance,parseFloat(noyakhali_input.value));
    noyakhali_balance.innerText = n_current_balance;
    balance = parseFloat(balance) - parseFloat(noyakhali_input.value);
    main_balance.innerText = balance;
    noyakhali_input.value = '';

})

// Feni section donation calculation....
let feni_current_balance = 0;
feni_input_btn.addEventListener('click',()=>{
    feni_current_balance = calculateBalance(feni_current_balance,parseFloat(feni_input.value));
    feni_balnce.innerText = feni_current_balance;
    balance = parseFloat(balance) - parseFloat(feni_input.value);
    main_balance.innerText = balance;
    feni_input.value = '';
})

// Quata section calculation...
let quata_current_balance = 0;
quata_input_btn.addEventListener('click',()=>{
    quata_current_balance = calculateBalance(quata_current_balance,parseFloat(quata_input.value));
    quata_balance.innerText = quata_current_balance;
    balance = parseFloat(balance) - parseFloat(quata_input.value);
    main_balance.innerText = balance;
    quata_input.value = '';
})

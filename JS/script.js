
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
const main_section = document.getElementById('main-section');
const history_section = document.getElementById('history-section');
const lg_blog_btn = document.getElementById('lg-blog');
const sm_blog_btn = document.getElementById('sm-blog');
const modal = document.getElementById('modal');

// Main Balnce..
let balance = 50000;
main_balance.innerText = balance;

// Date and time..
const time = new Date();
const now = time.toLocaleString();

// Balance calculation function...
function calculateBalance(previous_balance,current_donated_amount){
    let sum = 0;
    if(Number.isInteger(current_donated_amount) && current_donated_amount>0){
        
         sum = previous_balance + current_donated_amount;
         return sum;
    }
   
}


// Noyakhali section's donation calculation...
let n_current_balance = 0;
noyakhali_btn.addEventListener('click',()=>{
    
    if(noyakhali_input.value>0){

        n_current_balance = calculateBalance(n_current_balance,parseFloat(noyakhali_input.value));
        noyakhali_balance.innerText = n_current_balance;
        balance = parseFloat(balance) - parseFloat(noyakhali_input.value);
        main_balance.innerText = balance;
        
        const box = document.createElement('div');
        box.setAttribute('class', 'lg:w-2/3 mx-auto p-5 border border-black rounded-lg my-3')
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'text-center');
        paragraph.innerText = `${noyakhali_input.value} is Donated for Flood at Noakhali, Bangladesh at ${now}`;
        box.appendChild(paragraph);
        history_section.appendChild(box);
        modal.setAttribute('onclick',my_modal_5.showModal());
        noyakhali_input.value = '';
   }
   else{
       alert('Invalid Input Amount..');
       noyakhali_input.value = '';
   }
    
})

// Feni section donation calculation....
let feni_current_balance = 0;
feni_input_btn.addEventListener('click',()=>{

    if(feni_input.value>0){
        feni_current_balance = calculateBalance(feni_current_balance,parseFloat(feni_input.value));
        feni_balnce.innerText = feni_current_balance;
        balance = parseFloat(balance) - parseFloat(feni_input.value);
        main_balance.innerText = balance;
        const box = document.createElement('div');
        box.setAttribute('class', 'lg:w-2/3 mx-auto p-5 border border-black rounded-lg my-3')
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'text-center');
        paragraph.innerText = `${feni_input.value} is Donated for Flood Relief in Feni,Bangladesh at ${now}`;
        box.appendChild(paragraph);
        history_section.appendChild(box);
        modal.setAttribute('onclick',my_modal_5.showModal());
        feni_input.value = '';
    }
    else{
        alert('Invalid Input Amount..');
        feni_input.value = '';
    }
})

// Quata section calculation...
let quata_current_balance = 0;
quata_input_btn.addEventListener('click',()=>{
    if(quata_input.value>0){
        quata_current_balance = calculateBalance(quata_current_balance,parseFloat(quata_input.value));
        quata_balance.innerText = quata_current_balance;
        balance = parseFloat(balance) - parseFloat(quata_input.value);
        main_balance.innerText = balance;
    
        const box = document.createElement('div');
        box.setAttribute('class', 'lg:w-2/3 mx-auto p-5 border border-black rounded-lg my-3')
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'text-center');
        paragraph.innerText = `${quata_input.value} is Donated for Aid for Injured in the Quota Movement at ${now}`;
        box.appendChild(paragraph);
        history_section.appendChild(box);
        modal.setAttribute('onclick',my_modal_5.showModal());
        quata_input.value = '';
    }

    else{
        alert('Invalid Input Amount..');
        quata_input.value = '';
    }
})

// Donation and History button...
history.addEventListener('click',()=>{
    main_section.classList.add('hidden');
    history_section.classList.remove('hidden');
    donation.classList.remove('btn-bg');
    history.classList.add('btn-bg');
})

donation.addEventListener('click',()=>{
    history_section.classList.add('hidden');
    main_section.classList.remove('hidden');
    history.classList.remove('btn-bg');
    donation.classList.add('btn-bg');
})

lg_blog_btn.addEventListener('click',()=>{
    window.location.href = 'blog.html';
})

sm_blog_btn.addEventListener('click',()=>{
    window.location.href = 'blog.html';
})










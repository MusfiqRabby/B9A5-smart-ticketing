
const allBtn = document.getElementsByClassName('btn');

let count = 0;
let seatIncrement = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count++ ;
       
    const seatName = document.getElementById('seat-name');
    const seataNumber =(e.target.innerText);   

    if(seatIncrement < 4){
        seatIncrement ++;
     }
     else {
        return ;
    }
    
    const seatNumber =(e.target.innerText);
    const seetName = document.getElementById('seat-name');
    const h1 = document.createElement("h1");
    h1.innerText = seatNumber;
    seetName.appendChild(h1)
    btn.style.backgroundColor = ("#1DD100");
    btn.setAttribute('disabled', 'true');

    const className = document.getElementById('class-name');
    const h2 =  document.createElement('h2');
    h2.innerHTML = 'Economoy'
    className.appendChild(h2)

    const seatPrice = document.getElementById('seat-price');
     const h3 = document.createElement('h3');
     h3.innerHTML = '550'
    seatPrice.appendChild(h3)

    const decrementElement = document.getElementById('seats-left');
    const currentDecrementValue = parseInt(decrementElement.innerText);
    decrementElement.innerText = currentDecrementValue - 1;


    totalCost('total-price', parseInt(550));
    grandTotalCost('grand-total', parseInt(550) )
    setInnerText('seet-count', count);
    })
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function totalCost(id,value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotal = parseInt(totalPrice);
    const sum = convertedTotal + parseInt(value);
    setInnerText(id, sum);
}

function grandTotalCost(id,value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotal = parseInt(totalPrice);
    const sum = convertedTotal + parseInt(value);
    setInnerText(id, sum);
}

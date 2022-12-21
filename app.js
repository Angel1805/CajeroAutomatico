const Accounts = [
    { nombre: "Mali", saldo: 200, contraseña: 'mali123',url:"./img/mali.png"},
    { nombre: "Gera", saldo: 290, contraseña: 'gera123',url:"./img/gera.png" },
    { nombre: "Manuel", saldo: 67, contraseña:'manuel123',url:"./img/manuel.jpg" },
    { nombre: "Cristian", saldo: 120, contraseña:'cristian123',url:"./img/cristian.jpg" },
];

const inputSearch = document.getElementById('inputSearchCards');
const buttonSearch = document.getElementById('buttonSearchCards');
const containerCards = document.getElementById('containerCards');
const userNotFound = document.getElementById('userNotFound');

const filter = () =>{
    containerCards.innerHTML = '';
    const text = inputSearch.value.toLowerCase();

    for(let Account of Accounts ){
        let name = Account.nombre.toLowerCase();
        containerCards.childElementCount;

        if(name.indexOf(text) !== -1){
            containerCards.innerHTML += `<div class="cards">
            <div class="divFace">
                <img src="${Account.url}" alt="">
            </div>
            <div>
                <h2 class = "names">
                    ${Account.nombre}
                </h2>
            </div>
        </div>`
        };
        if(containerCards.childElementCount === 0){
            userNotFound.innerHTML = `<h2>Usuario no encontrado...</h2>`;
        }else if(containerCards.childElementCount > 0){
            userNotFound.innerHTML = '';
        };
    };

};

buttonSearch.addEventListener ('click' , filter);
inputSearch.addEventListener('keyup', filter);
filter();

//////

const btnCreateAccount = document.getElementById('btnCreateAccount');
const containerUser = document.querySelector('.containerUser');
const formCreateAccount = document.getElementById('formCreateAccount');

btnCreateAccount.addEventListener('click', ()=>{
    containerUser.style.display = 'none';
    btnCreateAccount.style.display = 'none';
    formCreateAccount.style.display = 'block';
});

/////////

const capture =  (name, balance, link, password) =>{

    function People(nameCreate, balance, link, password){

        this.nombre = nameCreate;
        this.saldo =  balance;
        this.contraseña = password;
        this.url = link;
    };
    const newPeople = new People(name, balance, link, password);
    Accounts.push(newPeople);
};

///////

const form = document.getElementById('form');
const btnCreateform = document.querySelector('.btnCreateform');

form.addEventListener( 'submit', e =>{
    e.preventDefault();

    let names = document.getElementById('name').value;
    let balance = parseInt(document.getElementById('balance').value);
    let link = document.getElementById('linkPhoto').value;
    let password = document.getElementById('password').value;

    console.log(balance);
    containerCards.childElementCount;
    
    capture(names, balance, link, password);
    
    containerUser.style.display = 'block';
    btnCreateAccount.style.display = 'block';
    formCreateAccount.style.display = 'none';
    
    filter();
    console.log("Estoy denttro de form listen",containerCards.childElementCount)
    eventCard();
});

const formEnterCard = document.getElementById('formEnterCard');
const welcomeMessage = document.getElementById('welcomeMessage');

const eventCard = () => {
    const cards = document.querySelectorAll("div.containerCards > div.cards");
    console.log(cards);
    cards.forEach( (oneCard) =>{
        oneCard.addEventListener("click", (evt) =>{
            // let card = evt.target;
            let cardName = oneCard.outerText;

            containerUser.style.display = 'none';
            btnCreateAccount.style.display = 'none';
            formEnterCard.style.display = 'block';
            section2.style.display = 'block';
            welcomeMessage.innerHTML = `<h2 id="welcome">Hola </h2>
            <h2 id="nameCard"> ${cardName}</h2>`


            console.log("di click en un hijo");
        });
    });
};
eventCard();
const section3 = document.getElementById('section3');
const section2 = document.getElementById('section2');
const checkBalance = document.getElementById('checkBalance');
const divBalanceWithdrawn = document.getElementById('divBalanceWithdrawn');
const divBtnsOption = document.getElementById('divBtnsOption');
const divBalanceEnter = document.getElementById('divBalanceEnter');
const welcomeUser = document.getElementById('welcomeUser');

const validateName = (name, password) =>{
    
    let namesM = name.toLowerCase();

    Accounts.forEach((oneAccount) =>{
        let names = oneAccount.nombre.toLowerCase();
  
        if(namesM === names){
            if(password === oneAccount.contraseña){
                welcomeUser.innerHTML = `<h2 id="welcomeName">Bienvenid@ ${name}</h2>`
                formEnterCard.style.display = 'none';
                welcomeMessage.style.display = 'none';
                section3.style.display = 'block';
                divBalanceWithdrawn.style.display = 'none';
                divBalanceEnter.style.display = 'none';

                checkBalanceF(name,oneAccount.saldo);
                enterBalanceU(name);
                returnOptionsF(name,oneAccount.saldo);
                WithdrawBalance(name);


                console.log(`Estas dentro de tu cuenta ${name} ${oneAccount.saldo} ${oneAccount.contraseña}`);

                // mostra consultar saldo , ingresar monto , retirar monto

            }else{
                alert("Contaseña incorrecta vuelve a intentar");
                // mostrar contraseña incorrecta vuelva a intentar
            };


        };
    });

};
const balanceH2 = document.querySelector('.balanceH2');
const btnCheckBalance = document.querySelector('.btnCheckBalance');
const divBtnReturn = document.querySelector(".divBtnReturn");
const btnWithdrawBalance = document.querySelector('.btnWithdrawBalance');
const containerDivBtnsOption = document.getElementById('containerDivBtnsOption');
const checkBalanceF = (name, balance) => {
    btnCheckBalance.addEventListener('click', () => {
        welcomeUser.innerHTML = `<h2 id="welcomeName">${name}</h2>`
        checkBalance.innerHTML =  `<h2 class="balanceH2">Tu saldo es ${balance}</h2>`
        returnOptions.style.display = 'block';
        containerDivBtnsOption.style.display = 'none';
        containerCheckBalance.style.display = 'block';
    });
};

const containerCheckBalance = document.getElementById('containerCheckBalance');
const returnOptions = document.querySelector(".returnOptions");
const returnOptionsF = (name, balance) =>{

    returnOptions.addEventListener('click', () =>{
        window.location.reload();
    });
};

const btnEnterBalance = document.querySelector('.btnEnterBalance');
const form4 = document.getElementById('form4');
const returnOptions2 = document.querySelector('.returnOptions2');
const enterBalanceU = (name) =>{
    btnEnterBalance.addEventListener('click', () =>{
        divBalanceEnter.style.display = 'block';
        containerDivBtnsOption.style.display = 'none';
        welcomeUser.innerHTML = `<h2 id="welcomeName">${name} Escribe el saldo que deseas ingresar a la cuenta.</h2>`;
    });

    let btnEnterBalance2 = document.querySelector('.btnEnterBalance2');
    form4.addEventListener('submit', e =>{
        e.preventDefault();
        let inputBalanceEnter = parseInt(document.getElementById('inputBalanceEnter').value);
        balanceVerificationEnter(name, inputBalanceEnter);
        returnOptions.style.display = 'block';
    })
}

const balanceVerificationEnter = (name, balanceEnter)=>{
    Accounts.forEach((oneAccount)=>{
        if(name === oneAccount.nombre){

            let balanceVerification = oneAccount.saldo + balanceEnter;

            if(balanceVerification > 10 && balanceVerification < 990){
                oneAccount.saldo = balanceVerification;
                console.log(Accounts);

                welcomeUser.innerHTML = `<h2 id="welcomeName"> El saldo ingresado es: ${balanceEnter} </h2>`
                checkBalance.innerHTML = `<h2> El Nuevo saldo de tu cuenta es : ${oneAccount.saldo} </h2>`

                divBalanceEnter.style.display = 'none';
                
            }else{
                welcomeUser.innerHTML = `<h2 id="welcomeName">El Valor ingresado excede el saldo permitido en la cuenta, Ingresa un nuevo valor.  </h2>`
            }
        }
    });
};

const WithdrawBalance = (name) => {

    let btnWithdrawBalance = document.querySelector('.btnWithdrawBalance');
    let welcomeName = document.getElementById('welcomeName');
    btnWithdrawBalance.addEventListener('click', () => {
        welcomeName.style.display = 'none';
        divBtnsOption.style.display = 'none';
        divBalanceWithdrawn.style.display = null;
        welcomeUser.innerHTML = `<h2 id="welcomeName">${name} Escribe el saldo que deseas retirar.</h2>`;
    });

    let btnWithdrawBalance2 = document.querySelector('.btnWithdrawBalance2');
    btnWithdrawBalance2.addEventListener('click', e => {
        e.preventDefault();
        let inputWithdrawBalance = parseInt(document.getElementById('inputWithdrawBalance').value);
        balanceVerificationWithdraw (name,inputWithdrawBalance );
        returnOptions.style.display = 'block';
    });
};

const balanceVerificationWithdraw =(name, withdrawEnter)=>{
    Accounts.forEach((oneAccount)=>{
        if(name === oneAccount.nombre){

            let balanceVerification = oneAccount.saldo - withdrawEnter;

            if(balanceVerification > 10 && balanceVerification < 990){
                oneAccount.saldo = balanceVerification;
                console.log(Accounts);

                welcomeUser.innerHTML = `<h2 id="welcomeName"> El saldo a retirar es: ${withdrawEnter} </h2>`
                checkBalance.innerHTML = `<h2> El Nuevo saldo de tu cuenta es : ${oneAccount.saldo} </h2>`

                divBalanceWithdrawn.style.display = 'none';
                
            }else{
                welcomeUser.innerHTML = `<h2 id="welcomeName">No puedes retirar ese monto porque la cuenta no puede quedar sin saldo.</h2>`
            };
        };
    });

};

const btnEnter = document.querySelector(".btnEnter");

btnEnter.addEventListener('click', e => {
    e.preventDefault();

    let inputPassword = document.getElementById('inputPassword').value;
    let nameCard = document.getElementById('nameCard');
    let nameM = nameCard.outerText;
    console.log(inputPassword);

    validateName(nameM, inputPassword);
});









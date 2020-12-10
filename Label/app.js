
(function myFunction() {

    //create label
    var firstNameLabel = document.createElement('label');
    firstNameLabel.classList.add('inp');
    firstNameLabel.setAttribute('for', 'inp');

    //create input
    var firstName = document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('id', 'inp');
    firstName.setAttribute('placeholder', ' ');


    //append input to label
    firstNameLabel.appendChild(firstName);


    //create a label span
    var labelSpan = document.createElement('span');
    labelSpan.classList.add('label');
    labelSpan.innerHTML = 'First Name';



    //append labelSpan to label
    firstNameLabel.appendChild(labelSpan);

    //create another span
    var mySpan = document.createElement('span');
    mySpan.classList.add('focus-bg');


    //append mySpan to label
    firstNameLabel.appendChild(mySpan);


    var body = document.getElementsByTagName('body')[0];
    body.append(firstNameLabel);


}())
   const birthDate = document.querySelector('#birthDate');
   const resultInput = document.querySelector('result'); 
    
   function nextBirthday() {     
     
    const futureBirthday = birthDate.value;

    const birthDatestr = Date.parse(futureBirthday);
    console.log(birthDatestr);

    const dateCurrent = Date.now();
    console.log(dateCurrent);

    const timeDiff = birthDatestr - dateCurrent;

    const daysBefore = Math.round(timeDiff / (1000 * 60 * 60 *24));
    console.log(daysBefore);

    resultInput.textContent = `До вашего дня рождения осталось ${daysBefore} дней`;
    
 }





function calculate() {
    // Inputs
    let dayInp = parseInt(document.getElementById('day').value);
    let monthInp = parseInt(document.getElementById('month').value);
    let yearInp = parseInt(document.getElementById('year').value);

    // Outputs
    let dayOtp = document.getElementById('DD');
    let monthOtp = document.getElementById('MM');
    let yearOtp = document.getElementById('YY');


  // Validation
  let errors = []; //
  // Day Validation
  if (isNaN(dayInp) || dayInp < 1 || dayInp > 31) {
    errors.push('day');
  }

  // Month validation
  if (isNaN(monthInp) || monthInp < 1 || monthInp > 12) {
    errors.push('month');
  }

  // Year validation
  if (isNaN(yearInp)) {
    errors.push('year');
  }

  // Display Errors
  for (let i = 0; i < errors.length; i++) {
    document.getElementById(errors[i] + '-label').classList.add('error');
    document.getElementById(errors[i]).classList.add('error-line');
    document.getElementById(errors[i] + '-error').style.visibility = 'visible';
  }

  // Clear Errors
  if (errors.length === 0) {
    document.getElementById('day-label').classList.remove('error');
    document.getElementById('day').classList.remove('error-line');
    document.getElementById('day-error').style.display = 'none';
    document.getElementById('month-label').classList.remove('error');
    document.getElementById('month').classList.remove('error-line');
    document.getElementById('month-error').style.display = 'none';
    document.getElementById('year-label').classList.remove('error');
    document.getElementById('year').classList.remove('error-line');
    document.getElementById('year-error').style.display = 'none';
  } else {
    return; 
  }


    // Today Date
    let todayDate = new Date();
    let currentDate = todayDate.getDate();
    let currentMonth = todayDate.getMonth() + 1;
    let currentYear = todayDate.getFullYear();

    // Birth Date
    let birthDate = new Date(yearInp, monthInp - 1, dayInp);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    // Age Calculation
    let ageInMilliseconds = todayDate - birthDate;
    let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    let ageInYears = currentYear - birthYear;
    let ageInMonths = currentMonth - birthMonth;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDay)) {
        ageInYears--;
        ageInMonths += 12;
    }

    if (currentDate < birthDay) {
        ageInMonths--;
        let lastMonthDate = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageInDays = lastMonthDate - birthDay + currentDate;
    } else {
        ageInDays = currentDate - birthDay;
    }

    // Display Results
    dayOtp.textContent = ageInDays;
    monthOtp.textContent = ageInMonths;
    yearOtp.textContent = ageInYears;
}

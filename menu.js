const printMenu = day => {
    switch (day.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu: Pav Bhaji');
        break;
      case 'tuesday':
        console.log('Tuesday Menu: Sandwich');
        break;
      case 'wednesday':
        console.log('Wednesday Menu: Vegetarian Stir-Fry');
        break;
      case 'thursday':
        console.log('Thursday Menu: Burger');
        break;
      case 'friday':
        console.log('Friday Menu: chesse Pizza');
        break;
      case 'saturday':
        console.log('Saturday Menu: Misal Pav');
        break;
      case 'sunday':
        console.log('Sunday Menu: Roast Beef Dinner');
        break;
      default:
        console.log('Invalid day. Please enter a valid day of the week.');
    }
  };
  printMenu('Monday');
  printMenu('tuesday');
  printMenu('Wednesday');
  printMenu('thursday');
  printMenu('friday');
  printMenu('saturday');
  printMenu('sunday');
  
  
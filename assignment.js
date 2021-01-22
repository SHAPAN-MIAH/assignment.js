

// function for convert kilometer to meter...................

function kilometerToMeter (kilometer) {

   // 1 kilometer = 1000 meter...
   const meter = kilometer * 1000;  
   return meter;

};
const calculateMeter1 = kilometerToMeter(67);
const calculateMeter2 = kilometerToMeter(93);  
const calculateMeter3 = kilometerToMeter(174);  
// function for convert kilometer to meter end................




// function for budget calculation................

function budgetCalculator (watch, phone, laptop) {

    let watchValuePerPice = 50;
    let phoneValuePerPice = 100;
    let laptopValuePerPice = 500;

    // calculate product value...........
    const calculateWatchValue = watchValuePerPice * watch;
    const calculatePhoneValue = phoneValuePerPice * phone;
    const calculateLaptopValue = laptopValuePerPice * laptop;

    // calculate total budget............
    const totalBudget = calculateWatchValue + calculatePhoneValue + calculateLaptopValue;
    return totalBudget;


};
const calculationTotalBudget = budgetCalculator(10, 14, 17);
// function for budget calculation end.............





// function for calculation hotelcost....................
   
   function hotelCost(days) {

      let hotelValue = 0;
      if(days <=10) { 
         hotelValue = days * 100;

      } else if (days <=20) {
         let firstTenDays = 10 * 100;
         let residualDays = days - 10;
         let secondTenDays = residualDays * 80;
         hotelValue = firstTenDays + secondTenDays;

      } else {
         let firstTenDays = 10 * 100;
         let secondTenDays = 10 * 80;
         let residualDays = days - 20;
         let thirdToInfiniteDays = residualDays * 50;

         // calculate total hotel value.................
         hotelValue = firstTenDays + secondTenDays + thirdToInfiniteDays;

      }
      return hotelValue;

}
   const totalHotelCost = hotelCost(25);
   
// function for calculation hotelcost end....................




// function for calculate megafriend.......................

function megaFriend (friendNames) {
   let largeName = [0];

   for (let i = 0; i < friendNames.length; i++) {
         let element = friendNames[i];
         if (element.length > largeName.length) {
            largeName = element;
         } else {
            console.log(Error!);
         }

   }
   return largeName;
}

const friends = megaFriend(["", "", "", "", ""]);

// function for calculate megafriend end.......................


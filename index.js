// class Days {
//   constructor(calendarElement) {
//     // console.log(this);
//     this.element = calendarElement;
//     this.day = this.element.querySelector('.week-tabs');
//     this.day = Array.from(this.day).map( dayElement => {
//       return new DayLink(dayElement, this);
//     });
//
//     this.activeLink = this.day[0];
//
//     this.init();//still unsure about this
//   }
//   init() {
//       this.activeLink.select();
//   }
//   updateActive(newActive){
//       this.activeLink.deselect();
//       this.activeLink = newActive;
//   }
//
//   getDayslist(data) {
//       return this.element.querySelector(`.day-tab[data-tab="${data}"]`)
//   }// getDayslist
// }// Days
//
// class DayLink {
//   constructor (dayElement, parent) {
//     this.link = dayElement;
//     this.day = parent;//idk what this represents in the other tabs site
//
//     this.dayList = parent.getDayslist(this.link.dataset.tab);
//
//     this.dayList = new DayList (this.dayList);
//
//     this.link.addEventListener('click', () => {
//       this.day.updateActive(this);
//       this.select();
//     }); // eventListener
//   };// constructor
//
//   select() {
//     this.link.classList.add('.day-tab-selected');
//     this.dayList.select();
//   }
//
//   deselect()  {
//     this.link.classList.remove('.day-tab-selected');
//     this.dayList.deselect();
//   }
// }// DayLink
//
// class DayList {
//   constructor(DayListElement) {
//     this.e = DayListElement;
//   }
//
//   select() {
//     this.e.classList.add('.day-list-selected');
//   }
//
//   deselect()  {
//     this.e.classList.remove('.day-list-selected');
//
//   }
// }
//
//
//
// let calendar = document.querySelectorAll('.calendar');
// console.log(calendar);
// calendar = Array.from(calendar).map( calendarElement => new Days (calendarElement));
// console.log(calendar);
//
//
// // let title = document.querySelector('.title');
// // title.addEventListener('click', ()=>{
// //   this.target.style.color: blue;
// // })
//--------------------------Sunday Edit -----------------------------------
let dayTab = document.querySelectorAll('.day-tab');
console.log(dayTab);
dayTab = Array.from(dayTab);
console.log(dayTab[0]);

let selectTab = function(element){
  this.element.classList.toggle(['selected-tab']);
};

dayTab.addEventListener('click', selectTab());

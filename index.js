class Days {
  constructor(calendarElement) {
    console.log(this);
    this.element = calendarElement;
    this.day = this.element.querySelectorAll('.day');
    console.log(this.day);
    this.day = Array.from(this.day).map( dayElement => {
      return new DayLink( dayElement, this);
    })
  }
}

class DayLink {
  constructor (dayElement, parent) {
    this.link = dayElement;
    this.monkey = parent;
    console.log(`this monkey = ${this.monkey}`);
    this.day = parent.getTab(this.link.dataset.tab);
    this.day = new TheDaysList (this.day);
    this.link.addEventListener('click', () => {
      this.monkey.updateActive(this);
      this.select();
    })
  }
}


let calendar = document.querySelectorAll('.calendar');
console.log(calendar);
calendar = Array.from(calendar).map( calendarElement => new Days (calendarElement))
console.log(calendar);

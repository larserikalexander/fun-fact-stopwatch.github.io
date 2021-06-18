/* TODO:
  Rename timer to stopwatch

*/

class Timer {

  constructor(id, category = "Category") {
    this.id = id;
    this.category = category;
    this.create();
    this.tsList = new ListOfTimestamps(this.placeholder, this.button, this.id);
    this.toggleActive();
  }

  toggle() {
    if (this.tsList.isRunning === true) {
      this.stop();
    } else {
      this.start();
    }
  }

  reset() {
    this.tsList.reset();
    this.toggleActive();

  }

  start() {
    if (this.tsList.isRunning === false) {
      this.tsList.add();
      this.toggleActive();
    }
  }

  stop() {
    if (this.tsList.isRunning === true) {
      this.tsList.add();
      this.toggleActive();
    }
  }

  toggleActive() {
    if (this.tsList.isRunning) {
      this.button.innerHTML = 'Stoppa';
      this.button.classList.toggle('btn-success', true);
      this.card.classList.toggle('border-success', true);
      this.card.classList.toggle('text-success', true);
    } else {
      this.button.innerHTML = 'Starta';
      this.button.classList.toggle('btn-success', false);
      this.card.classList.toggle('border-success', false);
      this.card.classList.toggle('text-success', false);
    }
  }

  create() {
    let body = document.getElementById('timers-section');
    let className = 'timer' + this.id;

    // Create article for card
    let article = document.createElement('article');
    let articleCss = [];
    for (let part of articleCss) {
      article.classList.add(part);
    }
    article.classList.add(className);
    body.appendChild(article);

    // Create card container for one category
    let card = document.createElement('div');
    let cardCss = ["card", "text-start", "shadow-sm"];
    for (let part of cardCss) {
      card.classList.add(part);
    }
    card.classList.add(className);
    card.id = className;
    article.appendChild(card);

    // Create header
    let header = document.createElement('p');
    let headerText = [this.id + 1] + ") " + this.category;
    header.innerHTML = headerText;
    let headerCss = ["card-header"];
    for (let part of headerCss) {
      header.classList.add(part);
    }
    header.classList.add(className);
    card.appendChild(header);

    // Create card body
    let cardBody = document.createElement('div');
    let cardBodyCss = ["card-body", "text-center"];
    for (let part of cardBodyCss) {
      cardBody.classList.add(part);
    }
    cardBody.classList.add(className);
    card.appendChild(cardBody);

    // Create timer placeholder
    let placeholder = document.createElement('time');
    let placeholderLabel = 'timerPlaceholder';
    placeholder.innerHTML = '00:00:00';
    let placeholderCss = ["card-title", "d-block", "display-6"];
    for (let part of placeholderCss) {
      placeholder.classList.add(part);
    }
    placeholder.classList.add(className, placeholderLabel);

    cardBody.appendChild(placeholder);

    // Create button
    let button = document.createElement('a');
    button.innerHTML = 'Starta';
    button.href = "#/";
    button.setAttribute("role", "button");
    let buttonCss = ["btn", "btn-primary", "col-12", "btn-lg", "stretched-link"];
    for (let part of buttonCss) {
      button.classList.add(part);
    }
    button.classList.add(className);
    let tempId = this.id; // Added to gain block scope of the tempId variable
    button.addEventListener('click', function() {
      toggleTimers(tempId);
    });
    cardBody.appendChild(button);

    // Store referenses to the DOM elements in the timer object
    let cardQuery = 'div.' + className;
    this.card = document.querySelector(cardQuery);
    let headerQuery = 'h1.' + className;
    this.header = document.querySelector(headerQuery);
    let placeholderQuery = '.' + placeholderLabel + '.' + className;
    this.placeholder = document.querySelector(placeholderQuery);
    let buttonQuery = 'a.' + className;
    this.button = document.querySelector(buttonQuery);
  }
}

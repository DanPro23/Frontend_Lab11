$(document).ready(function () {
    const words = [
      { word: "apple", translations: ["яблуко", "ябко"] },
      { word: "cat", translations: ["кіт", "котик", "пухнастий", "пухнастик"] },
      { word: "dog", translations: ["пес", "собака", "чотирилапий"] },
      { word: "book", translations: ["книга", "підручник"] },
      { word: "car", translations: ["машина", "автомобіль", "автівка"] },
      { word: "house", translations: ["будинок", "хата"] },
      { word: "flower", translations: ["квітка", "цвіт", "цвітка"] },
      { word: "tree", translations: ["дерево", "родовід"] },
      { word: "sun", translations: ["сонце", "сонечко", "світило"] },
      { word: "water", translations: ["вода", "водиця"] },
    ];
  
    let shuffledWords = [...words].sort(() => 0.5 - Math.random());
    let currentStep = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
  
    function renderCard() {
      if (currentStep < shuffledWords.length) {
        const currentWord = shuffledWords[currentStep];
        $(".card-container").html(`
          <div class="card">
            <p>${currentWord.word}</p>
            <input type="text" id="user-translation" placeholder="Enter translation">
            <button id="check-answer">Check</button>
          </div>
        `);
        $("#step").text(currentStep + 1);
      } else {
        $("#show-result").show();
        $(".card-container").html("<p>You've completed all steps!</p>");
      }
    }
  
    $(document).on("click", "#check-answer", function () {
      const userTranslation = $("#user-translation").val().trim().toLowerCase();
      const correctTranslations = shuffledWords[currentStep].translations.map(t => t.toLowerCase());
  
      if (correctTranslations.includes(userTranslation)) {
        correctAnswers++;
        alert("Correct!");
      } else {
        incorrectAnswers++;
        alert(`Incorrect! Possible translations are: ${correctTranslations.join(", ")}`);
      }
  
      currentStep++;
      $("#correct").text(correctAnswers);
      $("#incorrect").text(incorrectAnswers);
      renderCard();
    });
  
    $("#show-result").on("click", function () {
      $("#result").text(
        `Your score: ${correctAnswers} correct and ${incorrectAnswers} incorrect answers.`
      );
      $("#modal").fadeIn();
    });
  
    $("#close-modal").on("click", function () {
      $("#modal").fadeOut();
    });
  
    // Initialize the app
    renderCard();
  });
  
/* =========================================================
   ISTQB Foundation Level — Deneme Sınavı Uygulaması
   quiz.js — quiz-data.js'ten sonra yüklenmelidir (ISTQB_EXAMS global değişkeni)
   Vanilla JS, framework yok.
   ========================================================= */

const PASS_PERCENT = 65;
const letters = ["A", "B", "C", "D"];

const quizState = {
  examIndex: null,
  questionIndex: 0,
  answers: [],   // her soru için: null (boş) veya seçilen şık index'i (0-3)
};

document.addEventListener("DOMContentLoaded", () => {
  renderExamSelect();
  wireStaticButtons();
});

/* ---------------------------------------------------------
   Görünüm (view) değiştirme yardımcıları
   --------------------------------------------------------- */
function showView(id){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
  window.scrollTo({ top: document.getElementById("quiz-app")?.offsetTop - 90 || 0, behavior: "smooth" });
}

/* ---------------------------------------------------------
   1) Sınav Seçim Ekranı
   --------------------------------------------------------- */
function renderExamSelect(){
  const grid = document.getElementById("exam-select-grid");
  if (!grid || typeof ISTQB_EXAMS === "undefined") return;

  grid.innerHTML = "";
  ISTQB_EXAMS.forEach((exam, i) => {
    const card = document.createElement("div");
    card.className = "exam-card";
    card.innerHTML = `
      <div class="exam-num">DENEME SINAVI ${i + 1}</div>
      <h3>Sınav ${i + 1}</h3>
      <div class="exam-meta">${exam.length} soru · yaklaşık 60 dakika</div>
      <button class="btn btn-primary btn-block" type="button">Sınava Başla</button>
    `;
    card.querySelector("button").addEventListener("click", () => startExam(i));
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   2) Sınavı Başlat
   --------------------------------------------------------- */
function startExam(examIndex){
  quizState.examIndex = examIndex;
  quizState.questionIndex = 0;
  quizState.answers = new Array(ISTQB_EXAMS[examIndex].length).fill(null);

  const exam = ISTQB_EXAMS[examIndex];
  document.getElementById("quiz-exam-title").textContent = `Deneme Sınavı ${examIndex + 1}`;
  document.getElementById("quiz-subtitle").textContent = `${exam.length} soru · Geçme notu: %${PASS_PERCENT}`;

  renderQuestionList();
  renderQuestion(0);
  showView("quiz-view");
}

/* ---------------------------------------------------------
   3) Sol Soru Listesi
   --------------------------------------------------------- */
function renderQuestionList(){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const list = document.getElementById("question-list");
  list.innerHTML = "";

  exam.forEach((q, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.index = i;
    updateListButton(btn, i);
    btn.addEventListener("click", () => {
      quizState.questionIndex = i;
      renderQuestion(i);
    });
    list.appendChild(btn);
  });
}

function updateListButton(btn, i){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const given = quizState.answers[i];
  let statusClass = "";
  let statusText = "Boş";

  if (given !== null && given !== undefined){
    if (given === exam[i].answer){
      statusClass = "answered-correct";
      statusText = "Doğru";
    } else {
      statusClass = "answered-wrong";
      statusText = "Yanlış";
    }
  }

  btn.className = statusClass + (i === quizState.questionIndex ? " current" : "");
  btn.innerHTML = `<span class="q-badge">${i + 1}</span><span class="q-status">${statusText}</span>`;
}

function refreshQuestionListUI(){
  const list = document.getElementById("question-list");
  list.querySelectorAll("button").forEach(btn => {
    updateListButton(btn, Number(btn.dataset.index));
  });
}

/* ---------------------------------------------------------
   4) Soru Paneli
   --------------------------------------------------------- */
function renderQuestion(i){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const q = exam[i];
  quizState.questionIndex = i;

  document.getElementById("q-number-tag").textContent = `Soru ${i + 1} / ${exam.length}`;
  document.getElementById("question-text").textContent = q.q;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  const given = quizState.answers[i];
  const isAnswered = given !== null && given !== undefined;

  q.options.forEach((optText, optIdx) => {
    const optBtn = document.createElement("button");
    optBtn.type = "button";
    optBtn.className = "option-btn";
    optBtn.innerHTML = `<span class="opt-letter">${letters[optIdx]})</span><span>${optText}</span>`;

    if (isAnswered){
      optBtn.disabled = true;
      if (optIdx === q.answer) optBtn.classList.add("correct");
      if (optIdx === given && given !== q.answer) optBtn.classList.add("wrong");
      if (optIdx === given) optBtn.classList.add("selected");
    } else {
      optBtn.addEventListener("click", () => selectOption(i, optIdx));
    }

    optionsContainer.appendChild(optBtn);
  });

  renderFeedback(i);
  updateProgressBar();
  updateNavButtons();
  refreshQuestionListUI();
}

function selectOption(qIndex, optIndex){
  quizState.answers[qIndex] = optIndex;
  renderQuestion(qIndex);
}

function renderFeedback(i){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const q = exam[i];
  const given = quizState.answers[i];
  const box = document.getElementById("feedback-box");

  if (given === null || given === undefined){
    box.className = "feedback-box";
    box.textContent = "";
    return;
  }

  if (given === q.answer){
    box.className = "feedback-box show is-correct";
    box.textContent = "✓ Doğru cevap!";
  } else {
    box.className = "feedback-box show is-wrong";
    box.textContent = `✗ Yanlış cevap. Doğru cevap: ${letters[q.answer]}) ${q.options[q.answer]}`;
  }
}

/* ---------------------------------------------------------
   5) İlerleme Çubuğu ve Navigasyon Butonları
   --------------------------------------------------------- */
function updateProgressBar(){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const answeredCount = quizState.answers.filter(a => a !== null && a !== undefined).length;
  const pct = Math.round((quizState.questionIndex + 1) / exam.length * 100);

  document.getElementById("quiz-progress-fill").style.width = pct + "%";
  document.getElementById("quiz-progress-label").textContent =
    `Soru ${quizState.questionIndex + 1} / ${exam.length} · Cevaplanan: ${answeredCount}`;
}

function updateNavButtons(){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const isLast = quizState.questionIndex === exam.length - 1;

  document.getElementById("btn-prev-q").disabled = quizState.questionIndex === 0;
  document.getElementById("btn-next-q").style.display = isLast ? "none" : "inline-flex";
  document.getElementById("btn-finish-q").style.display = isLast ? "inline-flex" : "none";
}

function wireStaticButtons(){
  document.getElementById("btn-prev-q")?.addEventListener("click", () => {
    if (quizState.questionIndex > 0) renderQuestion(quizState.questionIndex - 1);
  });
  document.getElementById("btn-next-q")?.addEventListener("click", () => {
    const exam = ISTQB_EXAMS[quizState.examIndex];
    if (quizState.questionIndex < exam.length - 1) renderQuestion(quizState.questionIndex + 1);
  });
  document.getElementById("btn-finish-q")?.addEventListener("click", finishExam);
  document.getElementById("btn-finish-top")?.addEventListener("click", () => {
    if (confirm("Sınavı sonlandırmak istediğine emin misin? Boş sorular yanlış sayılacaktır.")){
      finishExam();
    }
  });
  document.getElementById("btn-retry-exam")?.addEventListener("click", () => {
    startExam(quizState.examIndex);
  });
  document.getElementById("btn-back-to-select")?.addEventListener("click", () => {
    showView("exam-select-view");
  });
  document.getElementById("review-toggle")?.addEventListener("click", () => {
    const list = document.getElementById("review-list");
    const isOpen = list.classList.toggle("show");
    document.getElementById("review-toggle").textContent =
      isOpen ? "Cevap incelemesini gizle ▲" : "Tüm cevapları incele ▼";
  });
}

/* ---------------------------------------------------------
   6) Sınavı Bitir ve Sonuç Ekranı
   --------------------------------------------------------- */
function finishExam(){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  let correct = 0, wrong = 0, empty = 0;

  exam.forEach((q, i) => {
    const given = quizState.answers[i];
    if (given === null || given === undefined) empty++;
    else if (given === q.answer) correct++;
    else wrong++;
  });

  const total = exam.length;
  const score = Math.round((correct / total) * 100);
  const passed = score >= PASS_PERCENT;

  document.getElementById("result-score").innerHTML = `${correct}<span> / ${total}</span>`;
  const badge = document.getElementById("result-badge");
  badge.textContent = passed ? `GEÇTİ · %${score}` : `KALDI · %${score}`;
  badge.className = "result-badge " + (passed ? "pass" : "fail");

  document.getElementById("result-correct-num").textContent = correct;
  document.getElementById("result-wrong-num").textContent = wrong;
  document.getElementById("result-empty-num").textContent = empty;
  document.getElementById("result-exam-label").textContent = `Deneme Sınavı ${quizState.examIndex + 1} sonucun`;

  renderReview();

  const reviewList = document.getElementById("review-list");
  if (reviewList) reviewList.classList.remove("show");
  const reviewToggle = document.getElementById("review-toggle");
  if (reviewToggle) reviewToggle.textContent = "Tüm cevapları incele ▼";

  showView("result-view");
}

function renderReview(){
  const exam = ISTQB_EXAMS[quizState.examIndex];
  const container = document.getElementById("review-list");
  if (!container) return;
  container.innerHTML = "";

  exam.forEach((q, i) => {
    const given = quizState.answers[i];
    const correctText = `${letters[q.answer]}) ${q.options[q.answer]}`;
    let yourAnswerHtml;

    if (given === null || given === undefined){
      yourAnswerHtml = `<div class="review-ans your-wrong">Senin cevabın: — (boş bırakıldı)</div>`;
    } else if (given === q.answer){
      yourAnswerHtml = `<div class="review-ans your-correct">Senin cevabın: ${letters[given]}) ${q.options[given]} ✓</div>`;
    } else {
      yourAnswerHtml = `
        <div class="review-ans your-wrong">Senin cevabın: ${letters[given]}) ${q.options[given]} ✗</div>
        <div class="review-ans correct-answer">Doğru cevap: ${correctText}</div>`;
    }

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `<div class="review-q">${i + 1}. ${q.q}</div>${yourAnswerHtml}`;
    container.appendChild(item);
  });
}

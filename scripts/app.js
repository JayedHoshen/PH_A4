let currentTab = "all";

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-container");

// switch tab and it's functionality
function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;
  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.add("btn-primary");
    } else {
      tabName.classList.remove("btn-primary");
    }
  }

  const pages = [allContainer, interviewContainer, rejectedContainer];
  for (const section of pages) {
    section.classList.add("hidden");
  }
  emptyState.classList.add("hidden");

  if (tab === "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  updateStat();
}

// stat update
const totalStat = document.getElementById("total-count");
const interviewStat = document.getElementById("interview-count");
const rejectStat = document.getElementById("rejected-count");
const availableStat = document.getElementById("jobs-count");

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".jobs-card");
    const parent = card.parentNode;
    const status = card.querySelector(".job-status");

    if (clickedElement.classList.contains("interview-btn")) {
      status.innerText = "Interview";
      interviewContainer.appendChild(card);
    }
    if (clickedElement.classList.contains("rejected-btn")) {
      status.innerText = "Rejected";
      rejectedContainer.appendChild(card);
    }
    if (clickedElement.classList.contains("delete-btn")) {
      parent.removeChild(card);
    }
    updateStat();
  });

// slat update
function updateStat() {
  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };

  totalStat.innerText = counts.all;
  interviewStat.innerText = counts.interview;
  rejectStat.innerText = counts.rejected;

  availableStat.innerText = counts[currentTab];

  if (counts[currentTab] < 1) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}
updateStat();

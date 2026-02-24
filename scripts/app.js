let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const availableJobsContent = document.getElementById("available-jobs-content");
const filterSection = document.getElementById("filtered-section");
const allCards = document.getElementById("all-cards");
const emptyCard = document.getElementById("empty-card");
const jobsCount = document.getElementById("jobs-count");

// counting
function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

function updateTopJobsCount() {
  const total = allCards.children.length;

  if (currentStatus === "interview-filter-btn") {
    jobsCount.innerText = interviewList.length + " of " + total;
  } else if (currentStatus === "rejected-filter-btn") {
    jobsCount.innerText = rejectedList.length + " of " + total;
  } else {
    jobsCount.innerText = total;
  }
}

// filter jobs
function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-primary");
  interviewFilterBtn.classList.remove("btn-primary");
  rejectedFilterBtn.classList.remove("btn-primary");

  // targeted id
  const selected = document.getElementById(id);
  currentStatus = id;

  // adding bg-primary for current id
  selected.classList.add("btn-primary");

  //   show / hidden particular section
  if (id === "interview-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id === "rejected-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  } else if (id === "all-filter-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");

    if (allCards.children.length === 0) {
      emptyCard.classList.remove("hidden");
    } else {
      emptyCard.classList.add("hidden");
    }
  }
  updateTopJobsCount();
}

// event delegation
availableJobsContent.addEventListener("click", function (event) {
  const cardParentNode = event.target.closest(".jobs-card");
  if (!cardParentNode) return;

  const companyName = cardParentNode.querySelector(".company-name").innerText;
  const position = cardParentNode.querySelector(".position").innerText;
  const location = cardParentNode.querySelector(".location").innerText;
  const description = cardParentNode.querySelector(".description").innerText;
  const statusBtn = cardParentNode.querySelector(".job-status");

  // for interview
  if (event.target.classList.contains("interview-btn")) {
    statusBtn.innerText = "Interview";
    statusBtn.classList.remove("btn-secondary", "btn-success");
    statusBtn.classList.add("btn-success");

    const cardInfo = {
      companyName,
      position,
      location,
      status: "Interview",
      description,
    };

    const jobExist = interviewList.find(
      (item) => item.companyName === cardInfo.companyName,
    );
    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    // removing jobs from rejectedList
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== cardInfo.companyName,
    );

    if (currentStatus === "rejected-filter-btn") {
      renderRejected();
    }
    if (currentStatus === "interview-filter-btn") {
      renderInterview();
    }
    calculateCount();
    updateTopJobsCount();
  }

  // for rejected
  else if (event.target.classList.contains("rejected-btn")) {
    statusBtn.innerText = "Rejected";
    statusBtn.classList.remove("btn-success", "btn-secondary");
    statusBtn.classList.add("btn-secondary");

    const cardInfo = {
      companyName,
      position,
      location,
      status: "Rejected",
      description,
    };

    const jobExist = rejectedList.find(
      (item) => item.companyName === cardInfo.companyName,
    );
    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    // removing jobs from interviewList
    interviewList = interviewList.filter(
      (item) => item.companyName !== cardInfo.companyName,
    );

    if (currentStatus === "interview-filter-btn") {
      renderInterview();
    }
    if (currentStatus === "rejected-filter-btn") {
      renderRejected();
    }
    calculateCount();
    updateTopJobsCount();
  }

  // delete jobs
  if (event.target.closest(".delete-btn")) {
    // removing jobs from interviewList
    let newInterview = [];
    for (const item of interviewList) {
      if (item.companyName !== companyName) newInterview.push(item);
    }
    interviewList = newInterview;

    // removing jobs from rejectedList
    let newRejected = [];
    for (const item of rejectedList) {
      if (item.companyName !== companyName) newRejected.push(item);
    }
    rejectedList = newRejected;

    // removing from currentCard
    cardParentNode.remove();

    // removing from all child
    for (const child of allCards.children) {
      const cmpName = child.querySelector(".company-name");
      if (cmpName && cmpName.innerText === companyName) {
        child.remove();
        break;
      }
    }

    calculateCount();
    updateTopJobsCount();

    if (currentStatus === "interview-filter-btn") {
      renderInterview();
    }
    if (currentStatus === "rejected-filter-btn") {
      renderRejected();
    }
    if (currentStatus === "all-filter-btn") {
      if (allCards.children.length === 0) emptyCard.classList.remove("hidden");
      else emptyCard.classList.add("hidden");
    }
  }
});

updateTopJobsCount();
calculateCount();

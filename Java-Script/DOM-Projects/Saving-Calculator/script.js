feather.replace();

const goalAmountInput = document.getElementById("goal-amount");
const currentSavingsAmountInput = document.getElementById("current-savings");
const monthlyContributionInput = document.getElementById(
  "monthly-contribution"
);

const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const goalAmount = parseFloat(goalAmountInput.value);
  const currentSavingsAmount = parseFloat(currentSavingsAmountInput.value);
  const monthlyContribution = parseFloat(monthlyContributionInput.value);

  if (isNaN(goalAmount) || isNaN(currentSavingsAmount)) {
    result.textContent = "Enter a valid amount.";
    result.classList.add("show");
    return;
  }

  if (monthlyContribution === 0) {
    result.textContent = "Monthly contribution cannot be zero.";
    result.classList.add("show");
    return;
  }

  const remainingAmount = goalAmount - currentSavingsAmount;
  const monthlyGoal = Math.ceil(remainingAmount / monthlyContribution);

  const progressPercentage = (currentSavingsAmount / goalAmount) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  result.classList.remove("show");

  setTimeout(() => {
    if (currentSavingsAmount >= goalAmount) {
      result.innerHTML = `Congrats! Your savings have reached your goal.`;
    } else {
      result.innerHTML = `You need ${monthlyGoal} months to reach your goal.`;
    }
    result.classList.add("show");
  }, 500); // Adding a small delay
});

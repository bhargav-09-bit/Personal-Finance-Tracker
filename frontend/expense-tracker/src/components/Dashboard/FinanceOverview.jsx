import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";
const COLORS = ["#875CF5", "#f61823ff", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expense", amount: totalExpense },
    // "Total Balance" is often not included in a pie chart of income vs expense,
    // but if you want it, this order might be more logical.
    { name: "Total Balance", amount: totalBalance },
];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Finance Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(totalBalance)}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;

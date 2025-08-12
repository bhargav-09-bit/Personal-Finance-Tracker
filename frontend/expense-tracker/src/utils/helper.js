import moment from "moment";

export const validateEmail = (email) => {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
};

export const getInitials = (name) => {
    if(!name) return "";

    const words = name.split(" ");
    let initials = "";

    for(let i=0; i< Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }

    return initials.toUpperCase();
};

export const formatToINR = (num) => {
  // Return an empty string if the input is not a valid number
  if (num == null || isNaN(num)) {
    return "";
  }

  // Create a formatter for the Indian English locale and INR currency
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return formatter.format(num);
};

export const prepareExpenseBarChartData = (data = []) => {
  if (!data || data.length === 0) {
    return [];
  }

  const dailyTotals = {};

  // Step 1: Group all expenses by their specific date and sum their amounts.
  data.forEach(item => {
    const date = moment(item.date).format("YYYY-MM-DD");
    if (!dailyTotals[date]) {
      dailyTotals[date] = { amount: 0, categories: [] };
    }
    dailyTotals[date].amount += item.amount;
    dailyTotals[date].categories.push(item.category);
  });

  // Step 2: Convert the grouped data into the exact format the chart component needs.
  const chartData = Object.keys(dailyTotals).map(date => {
    const sourceText = dailyTotals[date].categories.join(', ');

    return {
      date: moment(date).format("DD MMM"),      // Provides the 'date' key for the X-axis
      amount: dailyTotals[date].amount,      // Provides the 'amount' key for the bar height
      source: sourceText,                   // Provides the 'source' key for the tooltip
    };
  });

  // Step 3: Sort the final data by date to ensure the chart displays chronologically.
  return chartData.sort((a, b) => new Date(moment(a.date, "DD MMM").format("YYYY-MM-DD")) - new Date(moment(b.date, "DD MMM").format("YYYY-MM-DD")));
};


export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  const chartData = sortedData.map((item) => ({
    date: moment(item?.date).format('DD MMM'),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  if (!data || data.length === 0) {
    return [];
  }

  const dailyExpenses = {};

  // Group expenses by date and sum their amounts
  data.forEach((item) => {
    const date = moment(item.date).format("YYYY-MM-DD"); // Use a standard format for grouping

    if (!dailyExpenses[date]) {
      dailyExpenses[date] = {
        amount: 0,
        categories: [],
      };
    }

    // Add the amount to the daily total
    dailyExpenses[date].amount += item.amount;
    // Add the category to the list for the tooltip
    dailyExpenses[date].categories.push(item.category);
  });

  // Get the dates and sort them chronologically
  const sortedDates = Object.keys(dailyExpenses).sort((a, b) => new Date(a) - new Date(b));

  // Create the final chart data from the sorted, aggregated data
  const chartData = sortedDates.map((date) => ({
    month: moment(date).format("Do MMM"), // Format the date for display on the X-axis
    amount: dailyExpenses[date].amount, // The total amount for the day
    category: dailyExpenses[date].categories.join(', '), // Join categories for the tooltip
  }));

  return chartData;
};
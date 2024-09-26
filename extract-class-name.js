function extractClassName(sessionTitle) {
  const monthMapping = {
    Januar: 1,
    Februar: 2,
    März: 3,
    Maerz: 3, // Handling the alternate spelling
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Dezember: 12,
  };

  // Initialize monthNum to null
  let monthNum = null;

  // Loop through the keys of the monthMapping object
  for (let month in monthMapping) {
    // Check if the sessionTitle includes the current month
    if (sessionTitle.includes(month)) {
      monthNum = "0" + monthMapping[month]; // Get the month number from the mapping
      break; // Exit the loop once the month is found
    }
  }

  function containsFourDigitNumber(sessionTitle) {
    // Regular expression to match a four-digit number
    const regex = /\b\d{4}\b/; // \b ensures that the number is a whole word
    return regex.test(sessionTitle);
  }

  function extractFourDigitNumber(sessionTitle) {
    // Use regular expression to match a four-digit number
    const regex = /\b\d{4}\b/; // \b ensures that the number is a whole word
    const match = sessionTitle.match(regex); // Find the match

    // Return the matched number or null if not found
    return match ? match[0] : null;
  }

  if (
    sessionTitle.includes("Class") &&
    monthNum !== null &&
    containsFourDigitNumber(sessionTitle)
  ) {
    return extractFourDigitNumber(sessionTitle) + "-" + monthNum;
  } else {
    return null;
  }
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null

// regex

// f (
//   str.length >= 8 &&
//   /\d/.test(str) &&
//   /[A-Z]/.test(str) &&
//   /[a-z]/.test(str)
// )

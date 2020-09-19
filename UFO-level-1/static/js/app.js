// Using the data variable from data.js, write code that appends a table to web page
// then adds new rows of data for each UFO sighting

// Set up variable for table data from data.js
var tableData = data;

// Set up variable to get table references
var tbody = d3.select("tbody");

// Create function to build table data
function buildTable(data) {

  // Clear out any existing data
  tbody.html("");

  // Loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {

    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Create click function
function handleClick() {

  // Create variable to get the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  var filteredData = tableData;

  // Check to see if a date was entered and filter the data using that date
   if (date) {

    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);


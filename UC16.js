var correct_answer;

/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} zipId The element id that has the zip code
 */
function getQuestion() {
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                console.log("successful request!");
                displayQuestion(this.responseText);
            }
            else if (this.status === 404) {
                // No postal code found
                displayQuestion('{ "trivia" : "none" }');
            }
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    var url = "https://opentdb.com/api.php?amount=1&type=boolean";
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given zip code
 */
function displayQuestion(data) {
    var trivia = JSON.parse(data);
    correct_answer = trivia.results[0].correct_answer;
    console.log(correct_answer);
    if (trivia === "none") {
        document.getElementById("place").className = "alert alert-warning";
        document.getElementById("place").innerHTML = "No place matches that zip code."
    }
    else {
        document.getElementById("place").className = "alert alert-success";
        document.getElementById("place").innerHTML = trivia.results[0].question;
    }
}

function responseTrue(){
   if(respone.results[0]["correct_answer"] =="true");
    document.getElementById("answer").className = "alert alert-success";
    document.getElementById("answer").innerHTML = "Correct!"
}
    else {
        document.getElementById("answer").className = "alert alert-danger";
        document.getElementById("answer").innerHTML = "The Correct answer is " +
            response.results[0]["correct_answer"];
    }


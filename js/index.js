var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "b00836d8e4mshde3b1c4ca7088d3p13d1cfjsn79fb2adb7405");

xhr.send(data);
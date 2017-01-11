// Api js by: Banki Louis

var API = {
	getNewsFeed(){
		var apiKey = "07f849dffe3a478e8c61f1972343415f";
		var url =  "https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key="+ apiKey
		
		return fetch(url).then((res) => res.json());
	}
}

module.exports = API;
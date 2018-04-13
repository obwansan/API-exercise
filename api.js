/*create a component that displays the three most starred Javascript GitHub repos in 2017
*
*  Create component using HTML and CSS
*  Get all the repos returned by get request
*  Pull top 3 JS repos (objects) out of get response and put in an array
*  Use object notation to access required values from repo object
*  Use map to loop over 3 repos and print them out in html component
* */

// Get all the repos returned by get request
fetch('https://api.github.com/search/repositories?q=stars:>50000+language:javascript+sort:stars-desc')
    .then(function (data) {
        return data.json()
    }).then(function(data){
        let top3Repos = data.items.slice(0,3)
        console.log(top3Repos)
})

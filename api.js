/*create a component that displays the three most starred Javascript GitHub repos in 2017
*
*  Create component using HTML and CSS
*  Get all the repos returned by get request
*  Pull top 3 JS repos out of get response and put in an array
*  Use map to loop over 3 repos and print them out in html component
* */

fetch('https://api.github.com/search/repositories?q=stars:>50000+language:javascript+sort:stars-desc',
    {   method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(function (data) {
        console.log(data)
    })

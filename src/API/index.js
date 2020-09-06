export default function Api(){

    return{
        getRepositories : function () {
            return fetch('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc');
        }
    }
}

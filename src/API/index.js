export default function Api(){

    return{
        getrepos : function (last30days) {
            return fetch('https://api.github.com/search/repositories?q=created:>'+last30days+'&sort=stars&order=desc');
        }
    }
}

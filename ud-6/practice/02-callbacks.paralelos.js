const DEFAULT_RESOURCES = {
    "resource1": "The first resource",
    "resource2": "The second resource",
    "resource3": "The third resource",
    "whatINeed": "resource2"
}
function asyncRequest(resource, callback, resources = DEFAULT_RESOURCES) {
    const MIN_DELAY = 1_000;
    const RANDOM_DELAY = 2_000;
    var randomDelay = Math.round(Math.random() * RANDOM_DELAY) + MIN_DELAY;
    console.log("**Requesting: " + resource + "**");
    setTimeout(function () {
        console.log("**Returning: " + resources[resource] + "**");
        callback(resources[resource]);
    }, randomDelay);
}
// module.exports = asyncRequest;


let resources = {}
let count = 0

function printWhenComplete(){
    if (count === 3) {
        console.log('///////////')
        console.log(resources.resource1)
        console.log(resources.resource2)
        console.log(resources.resource3)
        console.log('///////////')
        console.log('Completado')
    }
}

asyncRequest( 'resource1', function(result1){
    resources.resource1 = result1
    count++
    printWhenComplete()

} )

asyncRequest( 'resource2', function(result2){
    resources.resource2 = result2
    count++
    printWhenComplete()

} )

asyncRequest( 'resource3', function(result3){
    resources.resource3 = result3
    count++
    printWhenComplete()

} )
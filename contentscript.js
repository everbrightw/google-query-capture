

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}




//Document ready
window.onload = function() {
 
    sendMessage();
}

//Get message from background page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   
    console.log(request.greeting);
    var current_url = request.greeting// current url
    var google_query = current_url.substring(current_url.search("q="), current_url.search("&oq"))// get the google query 

    
    // var isGoogleSearch = current_url.search("q=") + current_url.search("&oq");
    // if(isGoogleSearch == -2){
    //     console.log("This is not a google search");
    // }
    
    console.log("my current url is " + current_url);//
    console.log("test for indexing q=  " + current_url.search("q="))
    console.log("test for indexing end &op = " + current_url.search("&oq")); 
    console.log(current_url.substring(current_url.search("q="), current_url.search("&oq")));


    sendResponse({
        response: "Message received"
    });
});

//Send message to background page
function sendMessage() {
    //Construct & send message
    chrome.runtime.sendMessage({
        method: "postList",
        post_list: "ThePostList"
    });
}


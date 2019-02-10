// chrome.tabs.onUpdated.addListener(
//     function(tabId, changeInfo, tab) {
//       // read changeInfo data and do something with it
//       // like send the new url to contentscripts.js
//       if (changeInfo.url) {
//         chrome.tabs.sendMessage( tabId, {
//           message: 'hello!',
//           url: changeInfo.url
          
//         })
//       }
//       console.log(changeInfo.url);
//     }
//   );

// chrome.tabs.query({active: true}, function(tab) {
//         // Do stuff here
//         console.log(tab.url)
//         chrome.tabs.sendMessage( tab, {
//             message: 'hello!',
//             url: tab.url
            
//           })
        
//     });
//Get message from content script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        
        console.log("received")
        sendResponse({
            response: "Message received"
        });

        //get the current url ! and send it to the content script!!!!
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            console.log(url)
            sendDetails(url);
        });
       
    }
);

//Send message to content script
function sendDetails(sendData) {
    //Select tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //Construct & send message
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: sendData
        }, function(response) {
            //On response alert the response
            
        });
    });
}


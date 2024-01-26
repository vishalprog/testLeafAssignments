/* 
1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */

var firstname = "Vishal";
console.log(firstname,typeof firstname);
var companyName = "TestLeaf";
console.log(companyName,typeof companyName);
var mobileNumber = 9891112345;
console.log(mobileNumber,typeof mobileNumber);
var isAutomation = true;
console.log(isAutomation,typeof isAutomation);
var hasPlaywright;
console.log(hasPlaywright,typeof hasPlaywright);

const browserName = 'Chrome';
function getBrowserVersion(){
    var browserVersion = '10.2.1'

    if(browserName==='Chrome')
    {
        let browserVersion = '11.0.2';
console.log('Chrome BrowserVsersion is =>',browserVersion);
    }
}
getBrowserVersion();
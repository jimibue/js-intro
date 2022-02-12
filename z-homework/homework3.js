// CHALLENGE 2
// COIN CALCULATOR

// amount will always be a number 0 - 99
// return a string '#quarters,#dimes,#nickles,#pennies 
// should return the least amount of coins possible
// example 99 should return '3,2,0,4' because that is the
// the way that uses least amount of coins to add up to 99
// look at test to clarify requirements
const getChange = (amount) =>{
    // YOUR TODO
}
 
 // NOTE: BELOW CODE IS COMPLETED DON'T CHANGE UNLESS DOING BONUS
 // returns true if ALL tests pass, false if ONE OR MORE test fail
 testGetChange = () =>{
     // Assuming all test passed, but change it to false
     // if any fail 
     let passed = true
     if(getChange(0) !== '0,0,0,0'){
         console.log(`failed at: getChange(0) == '0,0,0,0'`)
         passed = false
     }
     if(getChange(1) !== '0,0,0,1'){
         console.log(`failed at: getChange(1) == '0,0,0,1' `)
         passed = false
     }
     if(getChange(5) !== '0,0,1,0'){
         console.log(`failed at: getChange(5) == '0,0,1,0' `)
         passed = false
     }
     if(getChange(10) !== '0,1,0,0'){
         console.log(`failed at: getChange(10) == '0,1,0,0' `)
         passed = false
     }
     if(getChange(25) !== '1,0,0,0'){
         console.log(`failed at: getChange(10) == '1,0,0,0' `)
         passed = false
     }
     if(getChange(26) !== '1,0,0,1'){
         console.log(`failed at: getChange(26) == '1,0,0,1'`)
         passed = false
     }
     if(getChange(99) !== '3,2,0,4'){
         console.log(`failed at: getChange(99) == '3,2,0,4'`)
         passed = false
     }
     return passed
 }
 
 if(testGetChange()){
     console.log('working good job')
 }
 
 // BONUS ADD your own test cases
 // BONUS Write another function that does the same but have it return an object {quartes:0, dimes:0, nickles:0 pennies:0}
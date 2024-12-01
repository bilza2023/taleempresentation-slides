here is a function eqsHealth which check if the incomming data is as per a specific structure or not. 
I am uploading the eqsHealth function and the data which it is designed to check.

here are my requirements

  1: the code is too complicated and can be divided into samll cleaner functions. for example checking of "items" can be seperated.

  2: Most of the time what we are doing is checking presence of a "field" in an object (either in slide or insdie one of items slide.item). if the field is not present we add a warning or error to report and if the problem is big we also add result = false. However if the fix == true then we take action.

    - keeping this in view we can write a seperate function "isFieldPresent" for this specific purpose and then can check all fields using it.
    - we are using if (!slide.slideExtra) which is not correct (i think because it will give error/false even if the field is present but have value like null , ''). I want that just the presence of a field on that object be checked. for this i think object.hasOwnproperty is suitable.

    - for now we just need to add this function isFieldPresent later we can add function to check field value type etc etc 
    
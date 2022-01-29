'use strict';

//Which Array Method to Use?

/*

What do I actually want from this method?
* Mutate Original Array?
    - Add to original:
        .push (end) / (value)
        .unshift (start) / (value)

    - Remove from original:
        .pop (end) / (value)
        .shift (start) / (value)
        .splice (any) / (index to start, num of element to replace, value)

    - Others:
        .reverse / (value)
        .sort / sorts in alphabetical order () / ((a,b) => a-b) for ascending or descending order
        .fill / (value)

* A New Array?
    - Computed from original:
        .map (loop) / (element, index, array => condition)

    - Filtered using condition:
        .filter / (element, index, array => condition)

    - Portion of original:
        .slice / (start, end)

    - Adding original to other:
        .concat / (array to combine, put after)

    - Flattening the original:
        .flat / (depth)
        .flatMap / (element, index, array => condition)

* An array index?
    - Based on value:
        .indexOf / (value)

    - Based on test condition:
        .findIndex / (element => condition)

* Retrieve an array element?
    - Based on test condition:
        .find / (element => condition)

* If an Array includes a certain element?
    - Based on value:
        .includes / (value)

    - Based on test condition:
        .some / (element => condition)
        .every / (element => condition)

* Get a new string?
    - Based on separator string:
        .join / (array)

* Transform the Array into a new value?
    - Based on accumulator:
        .reduce / (accumulator, element, index, array => condition, starting value of accumulator)
        (Boil down array to single value) 


* To loop over the array?
    - Based on callback:
        .forEach (element, index, array)
        (Does not create a new array)


*/

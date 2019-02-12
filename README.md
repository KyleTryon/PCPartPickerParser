# PcPartPickerParser

PCP3 is an unofficial API that returns and array of objects containing parts and information from a given pcpartpicker.com parts list.


## Installation

```
$ npm install pcp3 --save
```

## Usage

Load the module via `require`
```
const  pcp3  =  require("pcp3")
```

Then create an asynchronous function to fetch a parts list.

```
async  function  partsList(){

let  results  =  await  pcp3.fetchParts("https://pcpartpicker.com/list/XXXXXX")

console.log(results)

}

partsList() # Call function.
```

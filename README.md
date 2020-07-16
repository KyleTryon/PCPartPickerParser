# PcPartPickerParser

PCP3 is an unofficial API that returns and array of objects containing parts and information from a given pcpartpicker.com parts list.

## Installation

```bash
npm install pcpartpickerparser --save
```

## Install

Load the module via `require`

```js
const  pcp3  =  require("pcpartpickerparser")
```

Load the module via `import`

```js
import { getPartsList } from 'pcpartpickerparser'
```

## Example

```js
import { getPartsList } from 'pcpartpickerparser'

async function returnParts() {
  try {
    const parts = getPartsList('list id')
    console.log(parts)
  } catch (error) {
    console.log(error)
  }
}
```

## API

The tabular data from a standard PC Part Picker list is converted into a JSON array with one object per row.

```json
[
  {
    "type": "CPU",
    "image": "https://example.com",
    "name": "Part name",
    "price": "$9.99"
  }
]
```

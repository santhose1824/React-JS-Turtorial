// import utils from "./utils.mjs";

//! Default Export
// console.log(utils("H.M.Santhose"));

//! Named Export
// import { add } from "./utils.mjs";
// console.log(add(10,20));

//! Mixed Export

// import utils,{add} from "./utils.mjs";

// console.log(utils("Santhose"));
// console.log(add(10,2))

//!Export everything

import * as utils from "./utils.mjs";

console.log(utils.add(2,1));
console.log(utils.sub(2,1));

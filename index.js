'use strict';
module.exports = function (err, result) {
	if (!err) {
		console.log(result);
	} else {
		throw new Error(err);
	}
};

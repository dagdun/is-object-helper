function is(obj, child, val) {
	try {
		return eval((Array.isArray(obj) ? "obj" : "obj.").concat(child)) || val;
	} catch (e) {
		return val;
	}
}

module.exports = is;

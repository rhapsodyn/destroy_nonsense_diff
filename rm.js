var nodes = document.getElementsByClassName('diff-file file-holder'),
	rmCount = 0,
	evilWords = ['.meta/diff', '', '.prefab/diff', '.bytes/diff'];

function isNonsensePath(path) {
	for (var i = 0; i < evilWords.length; i++) {
		if (path.endsWith(evilWords[i])) {
			return true;
		}
	}

	return false;
}

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];
	var path = node.dataset["blobDiffPath"];

	if (isNonsensePath(path)) {
		node.parentElement.removeChild(node);
		rmCount++;
	}
}

console.log("killed: " + rmCount + " diff doms");
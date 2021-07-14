function superbowlWin(record) {
	const win = record.find(isWin => isWin.result === "W")
	if(win) {
		return win.year;
	}
	else {
		return undefined
	}
};

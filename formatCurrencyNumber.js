function formatCurrencyNumber(numb) {
	let indexCount;
	if (numb.toString().indexOf(".") !== -1) {
		indexCount = numb.toString().indexOf(".");
		if (
			numb.toString().substring(indexCount + 1, numb.length).length <= 1
		) {
			numb = numb.toString().replace(".", ",");
			numb =
				numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
				"0 €";
			return numb;
		} else {
			numb = numb.toString().replace(".", ",");
			numb =
				numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") +
				" €";
			return numb;
		}
	} else {
		numb =
			numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + ",00 €";
		return numb;
	}
}

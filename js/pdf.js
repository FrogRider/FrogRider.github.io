var docDefinition = {
	content: [
		{
			text: 'This is a header (whole paragraph uses the same header style)\n\n',
		}
	],	
};

var pdf = function(){
	  pdfMake.createPdf(docDefinition).open();
}
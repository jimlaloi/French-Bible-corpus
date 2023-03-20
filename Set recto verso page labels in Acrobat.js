// set page labels in Acrobat for PDF with recto verso numbering system
// in Acrobat, open the Javascript Debugger, copy code into console, select all, run with ctrl+Enter

// set the number of frontmatter and backmatter pages (pages without a folio number)
frontmatter=8
backmatter=6
// frontmatter numbering (lowercase roman numerals, with prefix)
for (var x=0; x<frontmatter; x++) {
    this.setPageLabels(x, ["r", "frontmatter_", x+1]);
}
// folio number starts at 1, then goes up every other page
// even pages get r (recto) suffix, odds get v (verso) suffix
// Acrobat doesn't allow page label suffixes, so using a workaround :
// the folio number is technically the prefix
// the r/v "suffix" is technically the logical number in lowercase alphabetical format
var folio=1
for (var i=frontmatter; i<this.numPages-backmatter; i++) {
    if (i % 2 === 0) {
        this.setPageLabels(i, ["a", folio, 18]);
    }
    else {
        this.setPageLabels(i, ["a", folio, 22]);
        folio=folio+1
    }
}
//backmatter numbering (lowercase roman numerals, with prefix)
z=1
for (var y=this.numPages-backmatter; y<this.numPages; y++) {
    this.setPageLabels(y, ["r", "backmatter_", z]);
    z=z+1;
}
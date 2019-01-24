"use strict";
exports.__esModule = true;
var NameCombiner = (function () {
    function NameCombiner() {
    }
    NameCombiner.prototype.combine = function (firstName, lastName) {
        this.name = firstName + " " + lastName;
    };
    NameCombiner.prototype.split = function (name) {
        var parts = name.split(" ");
        this.firstName = this.capitaliseLetter(parts[0]);
        if (parts.length === 2) {
            this.lastName = this.capitaliseLetter(parts[1]);
            return this.firstName + this.lastName;
        }
        else if (parts.length === 3) {
            this.middleName = parts[1];
            this.lastName = this.capitaliseLetter(parts[2]);
            return this.firstName + this.middleName + this.lastName;
        }
    };
    NameCombiner.prototype.capitaliseLetter = function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };
    return NameCombiner;
}());
exports.NameCombiner = NameCombiner;
//# sourceMappingURL=index.js.map
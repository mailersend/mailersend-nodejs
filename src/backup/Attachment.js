"use strict";
exports.__esModule = true;
var Attachment = /** @class */ (function () {
    function Attachment(content, filename, disposition) {
        if (disposition === void 0) { disposition = 'attachment'; }
        this.setContent(content);
        this.setFilename(filename);
        this.setDisposition(disposition);
        return this;
    }
    Attachment.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    Attachment.prototype.setFilename = function (filename) {
        this.filename = filename;
        return this;
    };
    Attachment.prototype.setDisposition = function (disposition) {
        this.disposition = disposition;
        return this;
    };
    return Attachment;
}());
;
exports["default"] = Attachment;

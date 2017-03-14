///<reference path='../types.ts'/>
var IDValidator;
(function (IDValidator) {
    var tw;
    (function (tw) {
        function getTWIDFirstCode(c) {
            if (c == 'I') {
                return 34;
            }
            if (c == 'O') {
                return 35;
            }
            if (c <= 'H') {
                return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
            }
            if (c <= 'N') {
                return c.charCodeAt(0) - 'J'.charCodeAt(0) + 18;
            }
            if (c <= 'Z') {
                return c.charCodeAt(0) - 'P'.charCodeAt(0) + 23;
            }
        }
        function validateTWID(ic) {
            if (!ic || ic.length !== 10) {
                return {
                    success: false,
                    reason: 'error_length'
                };
            }
            if (!/^[A-Z]\d{9}$/i.test(ic)) {
                return {
                    success: false,
                    reason: 'error_format'
                };
            }
            var start = ic.charAt(0);
            var mid = ic.substring(1, 9);
            var end = ic.charAt(9);
            var iStart = getTWIDFirstCode(start);
            var sum = Math.floor(iStart / 10) + (iStart % 10) * 9;
            var iflag = 8;
            for (var i = 0; i < mid.length; i++) {
                var c = mid.charAt(i);
                sum += parseInt(c, 10) * iflag;
                iflag--;
            }
            var checksumCorrect = (sum % 10 == 0 ? 0 : (10 - sum % 10)) == parseInt(end, 10);
            if (checksumCorrect) {
                return {
                    success: true
                };
            }
            else {
                return {
                    success: false,
                    reason: 'error_checksum'
                };
            }
        }
        tw.validateTWID = validateTWID;
    })(tw = IDValidator.tw || (IDValidator.tw = {}));
})(IDValidator || (IDValidator = {}));

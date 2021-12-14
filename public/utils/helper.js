const helper = {
    dateTrans: {
        modifiTimeSmall: date => {
            var date = new Date(date);
            return (
                helper.common.twoDigits(date.getDate()) + '.' + helper.common.twoDigits(date.getMonth() + 1) + '.' + date.getFullYear()
            );
        },
        getDate: date => {
            var date = new Date(date);
            return (
                date.getFullYear()
            );
        },
        getHoursMinutes: date => {
            var hours = 0, min = 0
            if (!!date) {
                hours = Math.floor(date / 60)
                min = date - (60 * hours)
            }
            return hours + 'h' + ' ' + min + 'm'
        },
    },
    stringFormat: {
        getArraytoText: text => {
            var data = ""
            text?.map((letter, index) => {
                data += letter.name + ','
            });
            return data.substring(0, data.length - 1)
        }
    },
    common: {
        twoDigits: (value) => {
            value = value.toString()
            if (value.length < 2) {
                value = '0' + value
            }
            return value
        }
    },

}
export default helper;
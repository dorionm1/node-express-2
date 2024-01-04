//Function to convert time `hh:mm` to a word
function timeWord(n) {
    let hh = Number(n.substring(0, 2));
    let mm = Number(n.substring(3, 5));
    let m = Number(n.substring(4, 5));
    // console.log(hh)
    // console.log(mm)
    // console.log(m)
    if (hh < 0 || mm < 0)
      return false;
	 single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
	 double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
	 below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
	if (hh === 0 && mm === 0) {
        console.log('Midnight')
        return 'Midnight'
    }
	function translate(n) {
		let word = ""
		if (hh < 10) {
            if(mm < 10 && hh < 12) {
                word = single_digit[hh] + ' ' + `O'` + ' ' + single_digit[mm] + ' ' + 'AM'
            }
            else if(mm < 20 && hh >= 12) {
                word = single_digit[hh] + ' ' + double_digit[mm - 10] + ' ' + 'PM'
            }
            else if(mm < 100 && hh >= 12) {
			    word = single_digit[hh] + ' ' + below_hundred[(mm - mm % 10) / 10 - 2] + ' ' + single_digit[m] + ' ' + 'PM'
            }
            else if (mm < 100 && hh <= 12) {
                word = single_digit[hh] + ' ' + below_hundred[(mm - mm % 10) / 10 - 2] + ' ' + single_digit[m] + ' ' + 'AM'
            }
		}
        else if(hh < 20) {
            if(mm < 10 && hh < 12) {
                word = double_digit[hh - 10] + ' ' + `O'` + ' ' + single_digit[mm] + ' ' + 'AM'
            }
            else if(mm < 20 && hh >= 12) {
                word = double_digit[hh - 10] + ' ' + double_digit[mm - 10] + ' ' + 'PM'
            }
            else if(mm < 100 && hh >= 12) {
			    word = double_digit[hh - 10] + ' ' + below_hundred[(mm - mm % 10) / 10 - 2] + ' ' + single_digit[m] + ' ' + 'PM'
            }
        }
		return word
	}
	 result = translate(n)
     console.log(result)
	return result.trim()+'.'
}

//testing
timeWord('00:00')
timeWord('01:05')
timeWord('03:09')
timeWord('03:19')
timeWord('09:17')
timeWord('06:52')
timeWord('06:59')
timeWord('12:59')
timeWord('00:00')

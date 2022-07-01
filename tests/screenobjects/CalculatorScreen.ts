import AppScreen from './AppScreen';

class CalculatorScreen extends AppScreen {
    constructor () {
        super('id=id/android_result_text');
    }

    // search for accessibility id == $('~android_result_text')
    private get textViewResult() {return $('id=android_result_text')}
    private get fieldFirstNumber() {return $('id=android_field_first_number')}
    private get fieldSecondNumber() {return $('id=android_field_second_number')}
    private get btnSum() {return $('id=android_button_sum')}
    private get btnSubtract() {return $('id=android_button_sub')}
    private get btnMultiply() {return $('id=android_button_mult')}
    private get btnDivide() {return $('id=android_button_div')}


    async waitForTextViewResult ():Promise<boolean|void> {
        return this.textViewResult.waitForDisplayed({
            timeout: 20000,
        });
    }

    async fillFieldFirstNumber(number:string) {
        await this.fieldFirstNumber.setValue(number)
    }

    async fillFieldSecondtNumber(number:string) {
        await this.fieldSecondNumber.setValue(number)
    }

    async tapOnBtnSum() {
        await this.btnSum.click()
    }

    async tapOnBtnSubtract() {
        await this.btnSubtract.click()
    }

    async tapOnBtnMultiply() {
        await this.btnMultiply.click()
    }

    async tapOnBtnDivide() {
        await this.btnDivide.click()
    }

    async getTextViewResult() {
        return await this.textViewResult.getText()
    }
}

export default new CalculatorScreen();
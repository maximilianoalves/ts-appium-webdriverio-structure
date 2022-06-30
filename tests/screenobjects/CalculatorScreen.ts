import AppScreen from './AppScreen';

class CalculatorScreen extends AppScreen {
    constructor () {
        super('com.example.leonardomenezes.simplecalculatorandroid:id/android_result_text');
    }

    private get textViewResult() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_result_text')}
    private get fieldFirstNumber() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_field_first_number')}
    private get fieldSecondNumber() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_field_second_number')}
    private get btnSum() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_button_sum')}
    private get btnSubtract() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_button_sub')}
    private get btnMultiply() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_button_mult')}
    private get btnDivide() {return $('com.example.leonardomenezes.simplecalculatorandroid:id/android_button_div')}

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
import AppScreen from '../AppScreen';
import androidElements from './calculator.android.elements.json';
import iosElements from './calculator.ios.elements.json';


class CalculatorScreen extends AppScreen {
    constructor () {
        super('id=android_result_text');
    }

    elementsByPlatform() {
        if (process.env.PLATFORM === "android") {
            return androidElements
        } else {
            return iosElements
        }
    }

    // search for accessibility id == $('~android_result_text')
    private get textViewResult() {return $(this.elementsByPlatform().textViewResult)}
    private get fieldFirstNumber() {return $(this.elementsByPlatform().fieldFirstNumber)}
    private get fieldSecondNumber() {return $(this.elementsByPlatform().fieldSecondNumber)}
    private get btnSum() {return $(this.elementsByPlatform().btnSum)}
    private get btnSubtract() {return $(this.elementsByPlatform().btnSub)}
    private get btnMultiply() {return $(this.elementsByPlatform().btnMult)}
    private get btnDivide() {return $(this.elementsByPlatform().btnDiv)}


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
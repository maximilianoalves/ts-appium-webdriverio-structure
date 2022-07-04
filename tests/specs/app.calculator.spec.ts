import CalculatorScreen from '../screenobjects/CalculatorScreen/CalculatorScreen'

describe('Calculator', () => {

    beforeEach(async () => {
        await CalculatorScreen.waitForTextViewResult();
    });

    it('should be validate the result of sum of two different numbers', async () => {
        await CalculatorScreen.fillFieldFirstNumber("2")
        await CalculatorScreen.fillFieldSecondtNumber("2")
        await CalculatorScreen.tapOnBtnSum()
        expect(await CalculatorScreen.getTextViewResult()).toEqual("4")
    })

    it('should be validate the result of substraction of two different numbers', async () => {
        await CalculatorScreen.fillFieldFirstNumber("4")
        await CalculatorScreen.fillFieldSecondtNumber("2")
        await CalculatorScreen.tapOnBtnSubtract()
        expect(await CalculatorScreen.getTextViewResult()).toEqual("2")
    })

    it('should be validate the result of multiply of two different numbers', async () => {
        await CalculatorScreen.fillFieldFirstNumber("4")
        await CalculatorScreen.fillFieldSecondtNumber("2")
        await CalculatorScreen.tapOnBtnMultiply()
        expect(await CalculatorScreen.getTextViewResult()).toEqual("8")
    })

    it('should be validate the result of division of two different numbers', async () => {
        await CalculatorScreen.fillFieldFirstNumber("4")
        await CalculatorScreen.fillFieldSecondtNumber("2")
        await CalculatorScreen.tapOnBtnDivide()
        expect(await CalculatorScreen.getTextViewResult()).toEqual("2")
    })
});
import CalculatorScreen from '../screenobjects/CalculatorScreen'

describe('Calculator', () => {

    beforeEach(async () => {
        await CalculatorScreen.waitForTextViewResult();
    });

    describe('should be validate the result of sum of two different numbers', () => {
        it('should be put the first value', async () => {
            await CalculatorScreen.fillFieldFirstNumber("2")
        });
        it('should be put the second value', async () => {
            await CalculatorScreen.fillFieldSecondtNumber("2")
        });
        it('should be choose the operator', async () => {  
            await CalculatorScreen.tapOnBtnSum()
        });
    
        it('should be show the result', async () => {
            expect(await CalculatorScreen.getTextViewResult()).toEqual("4")
        });
    })

    describe('should be validate the result of substraction of two different numbers', () => {
        it('should be put the first value', async () => {
            await CalculatorScreen.fillFieldFirstNumber("4")
        });
        it('should be put the second value', async () => {
            await CalculatorScreen.fillFieldSecondtNumber("2")
        });
        it('should be choose the operator', async () => {  
            await CalculatorScreen.tapOnBtnSubtract()
        });
    
        it('should be show the result', async () => {
            expect(await CalculatorScreen.getTextViewResult()).toEqual("2")
        });
    })

    describe('should be validate the result of multiply of two different numbers', () => {
        it('should be put the first value', async () => {
            await CalculatorScreen.fillFieldFirstNumber("4")
        });
        it('should be put the second value', async () => {
            await CalculatorScreen.fillFieldSecondtNumber("2")
        });
        it('should be choose the operator', async () => {  
            await CalculatorScreen.tapOnBtnMultiply()
        });
    
        it('should be show the result', async () => {
            expect(await CalculatorScreen.getTextViewResult()).toEqual("8")
        });
    })

    describe('should be validate the result of division of two different numbers', () => {
        it('should be put the first value', async () => {
            await CalculatorScreen.fillFieldFirstNumber("4")
        });
        it('should be put the second value', async () => {
            await CalculatorScreen.fillFieldSecondtNumber("2")
        });
        it('should be choose the operator', async () => {  
            await CalculatorScreen.tapOnBtnDivide()
        });
    
        it('should be show the result', async () => {
            expect(await CalculatorScreen.getTextViewResult()).toEqual("2")
        });
    })
});
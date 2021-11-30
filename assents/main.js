$(document).ready(() => {

    class DomElements {
        elementFirstNum = $('.firstNum')
        elementSecondNum = $('.secondNum')
        elementOperatorNum = $('.userOperator')
        elementResultNum = $('.result')
    }

    class CalculatorApp extends DomElements {
        firstNum = ''
        secondNum = ''
        resultNum = null
        operation = null
        nextNum = false
        clearCalc = false

        constructor() {
            super()
        }

        numberCount(num) {
            
            if(this.resultNum){
                return
            }

            if (!this.nextNum) {
                this.firstNum += num
                this.elementFirstNum.fadeIn()
                this.elementFirstNum.html(this.firstNum)
                return
            }


            this.secondNum += num
            this.elementSecondNum.fadeIn()
            this.elementSecondNum.html(this.secondNum)

        }

        calcOperations(operator) {
            if (this.secondNum) {
                return
            }

            this.operation = operator
            this.elementOperatorNum.fadeIn()
            this.elementOperatorNum.html(this.operation)
            this.nextNum = true

        }

        calcEqual(){
            let firstInt = parseInt(this.firstNum)
            let secondInt = parseInt(this.secondNum)

            switch(this.operation){
                case '+':
                this.resultNum = firstInt + secondInt
                break;
                case '-':
                this.resultNum = firstInt - secondInt
                break;
                case '*':
                this.resultNum = firstInt * secondInt
                break;
                case '/':
                this.resultNum = firstInt / secondInt
                break;
                case '+':
                this.resultNum = firstInt + secondInt
                break;
            }
            this.elementResultNum.fadeIn()
            this.elementResultNum.html(this.resultNum)

        }
        
        logMonitoring(){
            console.log(this.firstNum,this.operation,this.secondNum);
            console.log(this.resultNum);
        }

        calcClear(){
            this.firstNum = ''
            this.secondNum = ''
            this.resultNum = null
            this.operation = null
            this.nextNum = false


            this.elementResultNum.css({display:"none"})
            this.elementOperatorNum.css({display:"none"})
            this.elementFirstNum.css({display:"none"})
            this.elementSecondNum.css({display:"none"})
            
        }

        render(button) {
            let buttonValue = button.val()

            if (button.hasClass('number')) {
                this.numberCount(buttonValue)
            }

            if (button.hasClass('operator')) {
                this.calcOperations(buttonValue)
            }

            if (button.hasClass('equal')){
                this.calcEqual()
            }

            if (button.hasClass('clear')) {
                this.calcClear()
            }
            this.logMonitoring()

        }
    }

    let calculate = new CalculatorApp()

    $(document).on('click', '.btn', function () {calculate.render($(this))})

})
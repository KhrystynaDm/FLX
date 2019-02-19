function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogsArr = [],
        currentOperationTime = new Date().toLocaleString();


    function historyLogs(operationType, credits, operationTime) {
        historyLogsArr.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        });
    }

    let userCardMethods = {

        getCardOptions: function () {
            return {key, balance, transactionLimit, historyLogsArr};
        },

        putCredits: function (amount) {
            balance += amount;
            historyLogs('Received credits', amount, currentOperationTime);
        },

        takeCredits: function (amount) {
            if (amount <= balance && amount <= transactionLimit) {
                balance -= amount;
                historyLogs('Withdrawal of credits', amount, currentOperationTime);
            } else {
                console.log(`Transfer error! Please check balance: ${balance} and trans limit: ${transactionLimit}`);
            }
        },

        setTransactionLimit: function (amount) {
            transactionLimit = amount;
            historyLogs('Transition limit change', amount, currentOperationTime);
        },

        transferCredits: function (amount, userCard) {
            let taxes = 0.005;
            let transferAmount = amount + taxes * amount;

            if (transferAmount <= balance && transferAmount <= transactionLimit) {
                this.putCredits(transferAmount);
                this.takeCredits(amount);
                historyLogs('Withdrawal of credits', amount, currentOperationTime);
            } else {
                console.log(`Transfer error! Please check balance: ${balance} and trans limit: ${transactionLimit}`);
            }
        }

    }
    return userCardMethods;

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let maxCards = 3;
        if (this.cards.length <= maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.error('You reached maximum amount of cards')
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}


/*let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log(user);*/
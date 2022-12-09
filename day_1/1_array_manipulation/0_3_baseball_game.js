// https://leetcode.com/problems/baseball-game/

var calPoints = function(operations) {
    
    const record = [];
    
    for (let operation of operations) {
        
        switch(operation) {
            case '+':
                const num1 = parseInt(record[record.length-1]);
                const num2 = parseInt(record[record.length-2]);
                record.push(num1+num2);
                break;
            case 'D':
                const num = parseInt(record[record.length-1]);
                record.push(2*num);
                break;
            case 'C':
                record.pop();
                break;
            default:
                record.push(parseInt(operation));
                
        }
    }
    
    return record.reduce((num, a) => num+a, 0);
};

// Time: O(n) where n is the number of operations
// Space: O(n) where n is the number of operations
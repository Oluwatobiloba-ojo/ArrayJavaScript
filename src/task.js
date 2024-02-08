function filter_scores(scores){
    let result = scores.filter((x) => x >= 70)
    return result;
}

function increase_scores_by_5(scores){
    let result = scores.map((x)=>x + 5);
    return result;
}

function square_numbers(numbers){
    let result = numbers.map((element)=>Math.pow(element, 2));
    return result;
}

function distribute_books(list_of_member, list_of_book){
    let list_of_member_with_book = new Array;
    
    for(let index in list_of_member){
        name = list_of_member[index];
        book = list_of_book[index];
        let New_member = {name, book};
        list_of_member_with_book.push(New_member);
    }
    return list_of_member_with_book;
}


function scheduling(timing){
    let result = timing.filter((time)=> time.split(" ")[1].toUpperCase() === "PM");
    return result;
};

function calculate_total_expense(expenses){
    let total_of_expenses = 0;
    for(let key in expenses){
        total_of_expenses += expenses[key];
    }
    return total_of_expenses;
};

module.exports = {filter_scores, increase_scores_by_5, square_numbers, distribute_books, scheduling, calculate_total_expense};

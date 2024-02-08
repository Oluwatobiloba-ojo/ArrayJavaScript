const {filter_scores, increase_scores_by_5, square_numbers, distribute_books, scheduling, calculate_total_expense} = require("../src/task");

test("test that you put in to an array of testScores it filter and return scores greater than 70 ", ()=>{
    let testScores = [23, 56, 78, 90, 76, 56, 87, 99, 100];
    let filter_expected = [78, 90, 76, 87, 99, 100];
    let filter_result = filter_scores(testScores);

    expect(filter_result).toEqual(filter_expected);
});

test("test that when tom want to increase a testscores [85, 92, 78, 88, 95] to return [90, 97, 83, 93, 100]",()=>{
    let scores = [85, 92, 78, 88, 95];
    let increase_scores = [90, 97, 83, 93, 100];
    let result = increase_scores_by_5(scores);

    expect(result).toEqual(increase_scores);
});

test("test that when you input an array give you the square of each element in an array", ()=>{
    let numbers = [2, 4, 6, 8, 10];
    let expected = [4, 16, 36, 64, 100];
    let result = square_numbers(numbers);

    expect(result).toEqual(expected);
});

test("test that when sarah distribute list of book to a list of member returns an object of the student and the book", ()=>{
    let list_of_member = ["Emily", "Jack", "Sophia", "Daniel"];
    let list_of_book = ["Sorrowful way", "Heart Breaker", "Gods convenant", "Daniel"]
    let list_of_member_with_book = distribute_books(list_of_member, list_of_book);

    expect(list_of_member_with_book[0].name).toEqual("Emily");
    expect(list_of_member_with_book[0].book).toEqual("Sorrowful way");
    
    expect(list_of_member_with_book[1].book).toEqual("Heart Breaker");
    expect(list_of_member_with_book[1].name).toEqual("Jack");

    expect(list_of_member_with_book[2].book).toEqual("Gods convenant");
    expect(list_of_member_with_book[2].name).toEqual("Sophia");

    expect(list_of_member_with_book[3].book).toEqual("Daniel");
    expect(list_of_member_with_book[3].name).toEqual("Daniel");

});

test("test that having a list of time return the time in afternoon", ()=>{
    let timing = ["9:00 AM", "11:00 AM", "1:00 pm", "3:00 PM", "5:00 PM"];
    let afternoon = ["1:00 pm", "3:00 PM", "5:00 PM"];
    let result = scheduling(timing);

    expect(result).toEqual(afternoon);
});

test("test that if a student give us a key and value pair of his expenses and amount and return the total amount", ()=>{
    let expenses = {groceries : 150, dining_out : 100, transportation : 50, entertainment : 80};
    let total_of_expenses = 380;
    let result = calculate_total_expense(expenses);

    expect(result).toEqual(total_of_expenses);
});


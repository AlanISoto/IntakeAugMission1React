Buying Experience Re-design at Turners Car Insurance The Client Turners Car Auctions is a market leader in the automotive industry in New Zealand, responsible for more than 10% of all used vehicle sales in the country. It has retained its original function as a vehicle auctioneer, operating in 19 branches nationwide, but has become increasingly dependent on a parallel role as a conventional used vehicle dealership. In support of that role, it has established in-house finance and vehicle insurance divisions that allow it to offer buyers a complete “one-stop shop” experience.

The Project Brief Turners is currently undertaking a major re-design of its motor vehicle insurance systems and processes, including an investigation of ways in which the introduction of new technologies can enhance the buyer experience. Here is some information about motor vehicle insurance at Turners [https://www.turners.co.nz/Cars/finance-insurance/car-insurance/]. You have just been assigned to work on this project to help create a new insurance buying experience.

Are you Ready?

Your Tasks

Task 1. Identify Stakeholders Identify a list of stakeholders who may have an interest to the Motor Vehicle Insurance Buying Experience Re-design project.

Task ​​​​​​​​​​​​​​2. Understand Context of a Project Identify 5 things you consider most important to know either before or at the start of a project in order for you to work effectively

Task 3. Familiarise with tool for Task Management Create 3 columns on your Jira board titled "To-do", "Doing" and "Done". Create cards for each of the tasks in this Mission, and tick them off as you go If you would like to get fancy, invite another candidate to your Jira board and assign Cards to him/her or get him/her to assign Cards to you (Free for up to 10 users)

Tasks for Professional Software Developers​​​​​In this Mission, you will be working on the backend and apply an Agile practice of Test-Driven Development (TDD). As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process.

API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"

This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014). And the output is a JSON format with the suggested value for the car, such as "$6,614". Here are the example specifications and business rules of conversion:

INPUT OUTPUT ERROR OUTPUT { model: "Civic"; year: 2014 } { car_value: 6614 } { error: "there is an error"}

BUSINESS RULES

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value. Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1. Z is the last letter, so it is 26). Space and any other signs are ignored. For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614. If input values are not valid, return an error.

API 2. Convert "Claim History" to a "Risk Rating"

This API takes 1 parameters as input in JSON format that has a text field describing the claim history in the last 3 years of a driver requesting for a quote. The output is a JSON format with the suggested rating of the driver from 1 to 5, 5 being a high risk driver and 1 being a low risk driver. Here are the example specifications and business rules of conversion:

INPUT OUTPUT ERROR OUTPUT { claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." } { risk_rating: 3 } { error: "there is an error"}

BUSINESS RULES

Risk rating is calculated by counting the number of occurrences of a list of keywords. Each occurrence (regardless of whether they are repeats) will add 1 to the risk rating. The keyword list is "collide", "crash", "scratch", "bump", "", and "smash". For example, "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." returns a rating of 3 (counting the underlined letters). If input value is not valid, return an error.

API 3. Convert "Car Value" and "Risk Rating" to a "Quote"

This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk). And the output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,". Here are the example specifications and business rules of conversion:

INPUT OUTPUT ERROR OUTPUT { car_value: 6614; risk_rating: 5} { monthly_premium: 27.5; yearly_premium: 330} { error: "there is an error"}

BUSINESS RULES

Yearly premium is calculated by car_value multiplied by driver rating divided by 100. For example, car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 * 5 / 100 = $330. The monthly premium is the yearly premium divided by 12. So the monthly premium in this example will be $300 /12 = $27.5. If input values are not valid, return an error.

Task 4. Learn about Test-Driven Development Let's start by understanding the principles of test-driven development. Watch this video about TDD (12 mins)

Task 5. Create test cases For your chosen API, write test cases to cover all the scenarios. Remember to write test cases for boundaries and negative cases. The end result will be a table that looks like the following API 1 example but with more test cases:

Test Case Number Input (model, year) Expected Output ($ value) Test Description 1 "Civic", 2020 6600 Sunny day scenario 2 "911", 2020 2020 Numbers only is ok 3 "Task-Force", -987 error message Negative year 4 "C200", "twenty twenty" error message Wrong data type

Task 6. Create unit tests Choose at least 5 of the test cases you designed, implement them as a set of automated unit test using one of the unit testing frameworks.

Task 7. Create API Now that you created the unit tests, build your chosen API. Test your API against your unit tests as you go, until you pass all the tests.

Task 8. Code Review Obtain feedback on your code from your team member by allowing them to review your code. Make any necessary changes to the code after the feedback. Similarly, review their code by pointing out the code smells and offering a solution.

Task 9. Present at Show and Tell At the Show and Tell next week, your team will jointly present the tasks it has completed. This presentation should be designed to take around 5 minutes for each team member – so, if you are in a 4-people team you have up 20 minutes in total. The time limit will be strictly enforced. You can use PowerPoint slides, Sway or Prezi to help with your presentation. You are encouraged to demonstrate the live API and tests.

Task 10. Submit your work By the end of Thursday, upload all of your work (screenshots, presentation slides, documents or other files) using the mission submission form.

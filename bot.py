import openai

# Initialize the OpenAI API
openai.api_key = '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'

# Define the treasure hunt questions and answers
questions = {
    1: {'question': 'Question 1: What is the answer to life, the universe, and everything?', 'answer': '42'},
    2: {'question': 'Question 2: How many stars are there on the American flag?', 'answer': '50'},
    3: {'question': 'Question 3: What is the capital of France?', 'answer': 'Paris'}
}

# Initialize a variable to keep track of the current question
current_question = 1

# Function to validate the team's answer
def validate_answer(answer):
    global current_question

    # Check if the answer is correct
    if answer.lower() == questions[current_question]['answer'].lower():
        # Correct answer
        response = "Congratulations! You've answered correctly."
        current_question += 1
        if current_question <= len(questions):
            response += f" Now, here's your next question: {questions[current_question]['question']}"
        else:
            response += "That was the last question. Well done!" 

    else:
        # Incorrect answer
        response = "Oops! That's not the correct answer."

        # Generate a hint using OpenAI API
        prompt = f"Team: {answer}\nHint: "
        completion = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=50,
            temperature=0.5,
            n=1,
            stop=None,
            # log_level="info"
        )
        hint = completion.choices[0].text.strip()

        if hint:
            response += f" Here's a hint: {hint}"
        else:
            response += " Unfortunately, I don't have a hint for you at the moment."

    return response

# Function to handle user input and generate AI bot responses
def handle_user_input(user_input):
    if current_question > len(questions):
        return "The treasure hunt has ended. Thank you for participating!"

    return validate_answer(user_input)

# Main loop to interact with the teams
while True:
    user_input = input("Team: ")
    response = handle_user_input(user_input)
    print("AI Bot:", response)

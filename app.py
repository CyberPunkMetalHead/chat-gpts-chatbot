from flask import Flask, request, jsonify
import openai
import logging


openai.api_key = "API_KEY_HERE"

app = Flask(__name__)

@app.route('/')
def chatbot_page():
    return open('templates/chatbot.html').read()

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.get_json()['message']
    response = chatbot_response(user_message)
    return jsonify({'response': response})


def chatbot_response(user_message):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=user_message,
        max_tokens=1024,
        temperature=0.5
    )
    return response['choices'][0]['text']

if __name__ == '__main__':
    app.run()
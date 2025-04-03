from langchain_ollama.llms import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from vector import retriever

class LLMService:
    def __init__(self):
        self.model = OllamaLLM(model="llama3.2")
        self.template = """
        You are an expert in answering questions about a pizza restaurant

        Here are some relevant reviews: {reviews}

        Here is the question to answer: {question}
        """
        self.prompt = ChatPromptTemplate.from_template(self.template)
        self.chain = self.prompt | self.model

    async def generate_response(self, question: str) -> str:
        reviews = retriever.invoke(question)
        result = self.chain.invoke({"reviews": reviews, "question": question})
        return result

# Initialize the service
llm_service = LLMService()

def init_llm_service():
    return llm_service

def get_llm_service():
    return llm_service
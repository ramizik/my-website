from openai import OpenAI
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self, api_key: str):
        logger.debug("Initializing LLM Service")
        self.client = OpenAI(api_key=api_key)
        logger.debug("OpenAI client initialized")

    async def generate_response(self, message: str) -> str:
        logger.debug(f"Generating response for message: {message}")
        try:
            # Simple completion request
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "user", "content": message}
                ]
            )
            # Log token usage
            prompt_tokens = response.usage.prompt_tokens
            completion_tokens = response.usage.completion_tokens
            total_tokens = response.usage.total_tokens
            
            logger.info(f"Token usage - Prompt: {prompt_tokens}, Completion: {completion_tokens}, Total: {total_tokens}")
            logger.debug("Response received from OpenAI")
            return response.choices[0].message.content
        except Exception as e:
            logger.error(f"Error in generate_response: {str(e)}")
            return f"Error: {str(e)}"

# Global instance
_llm_service = None

def init_llm_service(api_key: str):
    global _llm_service
    logger.debug("Creating new LLM service instance")
    _llm_service = LLMService(api_key)

def get_llm_service() -> LLMService:
    if _llm_service is None:
        logger.error("LLM service not initialized!")
        raise RuntimeError("LLM service not initialized. Call init_llm_service first.")
    return _llm_service 
export function generateResponse(message: string, errorCode?: number, payload?: Record<string, any>)  {
  return {
    timeStamp: Date.now(),
    errorCode: errorCode || 0,
    message,
    payload
  };
}

class SentryIonicErrorHandler extends IonicErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      captureException(error.stack ? error.originalError : new Error(error.message || error));
    } catch (e) {
      console.error(e);
    }
  }
}

export default class Response {
  static get HTTP_CODE_OK() {
    return 200;
  }

  static get HTTP_CODE_CREATED() {
    return 201;
  }

  static get HTTP_CODE_NO_CONTENT() {
    return 204;
  }

  static get HTTP_CODE_ERROR_GET_CONTENT() {
    return 500;
  }

  static create({ res, data = {}, status = this.HTTP_CODE_CREATED }) {
    return res.status(status).json(this.CreatedObject({ data, status }));
  }

  static success({ res, data = {}, status = this.HTTP_CODE_OK }) {
    return res.status(status).json(this.CreatedObject({ data, status }));
  }

  static error({ res, error, status = this.HTTP_CODE_ERROR_GET_CONTENT }) {
    return res.status(status).json(this.CreatedObject({ data: error, status }));
  }

  static CreatedObject({ data, status }) {
    return {
      data,
      status,
    };
  }
}

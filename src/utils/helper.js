import jwt from 'jsonwebtoken';

export const Helper = {
  /**
   * Gnerate Token
   * @param {string} id
   * @returns {string} token
   */
  generateToken(id, name, email) {
    const token = jwt.sign({
      userId: id,
      name,
      email
    },
    process.env.SECRET, { expiresIn: '7d' });
    return token;
  }
};

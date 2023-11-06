function checkEmailIsCorrect(email: string): boolean {
  return /.*@.*\..*/.test(email);
}

export default checkEmailIsCorrect;

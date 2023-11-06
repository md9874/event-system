function checkPhoneIsCorrect(email: string): boolean {
  return /\d\d\d-\d\d\d-\d\d\d/.test(email);
}

export default checkPhoneIsCorrect;

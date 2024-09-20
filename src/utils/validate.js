export const validateForm = (email, password) => {
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateEmail) return "Email id is not valid";
  if (!validatePassword) return "Password id is not valid";

  return null;
};

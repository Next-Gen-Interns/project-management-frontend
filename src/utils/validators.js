import { AUTH_ERRORS } from "@/constants/errors";

export const validateRegister = (formData) => {
  if (!formData.name.trim()) {
    return AUTH_ERRORS.NAME_REQUIRED;
  }

  if (!formData.email.trim()) {
    return AUTH_ERRORS.EMAIL_REQUIRED;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return AUTH_ERRORS.EMAIL_INVALID;
  }
  if (!formData.password) {
    return AUTH_ERRORS.PASSWORD_REQUIRED;
  }
  if (formData.password.length < 6) {
    return AUTH_ERRORS.PASSWORD_MIN_LENGTH;
  }
  return "";
};

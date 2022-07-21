export enum EFields {
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  MESSAGE = "message",
}
export interface IError {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
interface IInputProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export const validateInput = (fields: IInputProps) => {
  const { name, email, phone, message } = fields;
  let errors: IError = {};
  Object.keys({ name, email, phone, message }).map((field) => {
    if (field === EFields.PHONE) return;
    if (!fields[field as EFields] || !fields[field as EFields].trim()) {
      errors[field as EFields] = "Please fill me in";
    }
  });

  if (Object.keys(errors).length) return errors;

  const trimmedEmail = email.trim();
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmail = emailRegex.test(trimmedEmail);
  if (!isEmail) errors["email"] = "This doesn't seem to be an email";
  if (email.length < 6) errors["email"] = "This email is too long";
  if (email.length > 320) errors["email"] = "This email is too long";
  if (name.length > 300) errors["name"] = "This name is too long";
  if (message.length > 1000) errors["message"] = "This message is too long";

  if (Object.keys(errors).length) return errors;
};

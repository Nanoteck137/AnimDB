// DO NOT EDIT THIS: This file was generated by the Pyrin Typescript Generator
import { z } from "zod";

export const Signup = z.object({
  id: z.string(),
  username: z.string(),
});
export type Signup = z.infer<typeof Signup>;

export const SignupBody = z.object({
  username: z.string(),
  password: z.string(),
  passwordConfirm: z.string(),
});
export type SignupBody = z.infer<typeof SignupBody>;

export const Signin = z.object({
  token: z.string(),
});
export type Signin = z.infer<typeof Signin>;

export const SigninBody = z.object({
  username: z.string(),
  password: z.string(),
});
export type SigninBody = z.infer<typeof SigninBody>;

export const ChangePasswordBody = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  newPasswordConfirm: z.string(),
});
export type ChangePasswordBody = z.infer<typeof ChangePasswordBody>;

export const GetMe = z.object({
  id: z.string(),
  username: z.string(),
  role: z.string(),
  displayName: z.string(),
});
export type GetMe = z.infer<typeof GetMe>;

export const GetSystemInfo = z.object({
  version: z.string(),
});
export type GetSystemInfo = z.infer<typeof GetSystemInfo>;

export const UpdateUserSettingsBody = z.object({
  displayName: z.string().nullable().optional(),
});
export type UpdateUserSettingsBody = z.infer<typeof UpdateUserSettingsBody>;

export const CreateApiToken = z.object({
  token: z.string(),
});
export type CreateApiToken = z.infer<typeof CreateApiToken>;

export const CreateApiTokenBody = z.object({
  name: z.string(),
});
export type CreateApiTokenBody = z.infer<typeof CreateApiTokenBody>;

export const ApiToken = z.object({
  id: z.string(),
  name: z.string(),
});
export type ApiToken = z.infer<typeof ApiToken>;

export const GetAllApiTokens = z.object({
  tokens: z.array(ApiToken),
});
export type GetAllApiTokens = z.infer<typeof GetAllApiTokens>;


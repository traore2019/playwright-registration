export type RegistrationCase = {
  id: string;
  description: string;
  username: string;
  password: string;
  confirmPassword: string;
  expected: 'success' | 'validation';
};

const runId = `${Date.now()}_${Math.floor(Math.random() * 10000)}`;

export const registrationCases: RegistrationCase[] = [
  {
    id: 'TC-REG-001',
    description: 'valid credentials',
    username: `pw_user_${runId}_01`,
    password: 'Password123!',
    confirmPassword: 'Password123!',
    expected: 'success'
  },
  {
    id: 'TC-REG-002',
    description: 'password confirmation mismatch',
    username: `pw_user_${runId}_02`,
    password: 'Password123!',
    confirmPassword: 'Different123!',
    expected: 'validation'
  }
];

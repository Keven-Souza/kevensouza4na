// ValidationHelper.ts

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPrice = (price: number): boolean => {
  return price > 0;
};

// Novo helper para validar o título
export const isValidTitle = (title: string): boolean => {
  return title.length >= 3;
};
// frontend/src/utils/formatters.ts

/**
 * Creates a number formatter for Brazilian Portuguese locale.
 * Defaults to decimal style with no fraction digits.
 */
export const brazilianNumberFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// You could add other formatters here later if needed
// export const brazilianCurrencyFormatter = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });
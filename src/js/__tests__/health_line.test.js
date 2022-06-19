import healthLine from '../health_line';

test('Mage with 90 health', () => {
  const result = healthLine({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('Mage with 40 health', () => {
  const result = healthLine({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});

test('Mage with 10 health', () => {
  const result = healthLine({ name: 'Маг', health: 1 });
  expect(result).toBe('critical');
});
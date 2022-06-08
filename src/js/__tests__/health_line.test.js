import healthLine from "../health_line";

test('Mage with 90 health', () => {
    const result = healthLine({name: 'Маг', health: 90});
    expect(result).toBe('healthy');    
});
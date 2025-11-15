export class DexterityScalingTable{
    private static values = [
        { min: 1, max: 9, value: 0.2 },
        { min: 10, max: 19, value: 0.3 },
        { min: 20, max: 29, value: 0.4 },
        { min: 30, max: 39, value: 0.6 },
        { min: 40, max: 59, value: 0.85 },
        { min: 60, max: 89, value: 0.90 },
        { min: 90, max: 98, value: 0.95 },
        { min: 99, max: 99, value: 1 },
    ];

    static getValue(n: number):number {
      return this.values.find(r => n >= r.min && n <= r.max)?.value ?? 0;
    }
}
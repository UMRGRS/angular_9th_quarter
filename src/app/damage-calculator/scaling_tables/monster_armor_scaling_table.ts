export class MonsterArmorScalingTable{
    private static values = [
        { min: 1, max: 9, value: 0.5 },
        { min: 10, max: 19, value: 0.1 },
        { min: 20, max: 29, value: 0.15 },
        { min: 30, max: 39, value: 0.2 },
        { min: 40, max: 49, value: 0.25 },
        { min: 50, max: 59, value: 0.3 },
        { min: 60, max: 69, value: 0.35 },
        { min: 70, max: 79, value: 0.4 },
        { min: 80, max: 89, value: 0.45 },
        { min: 90, max: 98, value: 0.5 },
        { min: 99, max: 100, value: 0.55 },
    ];

    static getValue(n: number):number {
      return this.values.find(r => n >= r.min && n <= r.max)?.value ?? 0;
    }
}
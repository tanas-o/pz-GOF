/**
 * Патерн: Strategy
 * Приклад: Розрахунок вартості доставки.
 * Проблема: Програма має підтримувати різні служби доставки (Нова Пошта, Укрпошта, DHL) з різними формулами розрахунку.
 * Анти-приклад: Гігантський switch-case: `if(type === 'DHL') { ... } else if ...` у головному класі замовлення.
 */

interface DeliveryStrategy {
    calculate(weight: number): number;
}

class NovaPoshtaStrategy implements DeliveryStrategy {
    calculate(weight: number): number { return weight * 10 + 50; }
}

class DHLStrategy implements DeliveryStrategy {
    calculate(weight: number): number { return weight * 50 + 500; }
}

class Order {
    constructor(private delivery: DeliveryStrategy) {}

    setDeliveryMethod(delivery: DeliveryStrategy) {
        this.delivery = delivery;
    }

    processOrder(weight: number) {
        const cost = this.delivery.calculate(weight);
        console.log(`Вартість доставки при вазі ${weight}кг: ${cost} грн.`);
    }
}

export function testStrategy() {
    console.log("--- Strategy (Logistics) ---");
    const order = new Order(new NovaPoshtaStrategy());
    order.processOrder(5);

    console.log("Зміна методу на DHL...");
    order.setDeliveryMethod(new DHLStrategy());
    order.processOrder(5);
    console.log("");
}
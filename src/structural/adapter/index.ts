/**
 * Патерн: Adapter
 * Приклад: Інтеграція застарілого Банківського API.
 * Проблема: Нова система працює з JSON, а стара банківська система повертає дані у форматі XML.
 * Анти-приклад: Переписування коду старого банку (що неможливо) або вбудовування логіки парсингу XML у фронтенд-код.
 */

// Сучасний інтерфейс
interface ModernJsonBank {
    getBalance(): { amount: number, currency: string };
}

// Застаріла система (Legacy)
class LegacyXmlBank {
    public getRawXmlData(): string {
        return "<account><val>5000</val><cur>UAH</cur></account>";
    }
}

// Адаптер
class BankAdapter implements ModernJsonBank {
    constructor(private legacyBank: LegacyXmlBank) {}

    getBalance(): { amount: number; currency: string } {
        const xml = this.legacyBank.getRawXmlData();
        console.log("[Adapter] Конвертація XML в JSON...");
        // Імітація парсингу XML
        const amount = parseInt(xml.match(/<val>(.*)<\/val>/)![1]);
        const currency = xml.match(/<cur>(.*)<\/cur>/)![1];

        return { amount, currency };
    }
}

export function testAdapter() {
    console.log("--- Adapter (Legacy Bank Integration) ---");
    const oldBank = new LegacyXmlBank();
    const adapter = new BankAdapter(oldBank);

    const balance = adapter.getBalance();
    console.log(`Отримано через адаптер: ${balance.amount} ${balance.currency}\n`);
}
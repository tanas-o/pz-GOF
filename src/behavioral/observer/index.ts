/**
 * Патерн: Observer
 * Приклад: Крипто-сповіщення про ціну.
 * Проблема: Користувач хоче знати, коли ціна Bitcoin зміниться, але не хоче постійно оновлювати сторінку (polling).
 * Анти-приклад: Запуск циклу `while(true)` для перевірки ціни кожну секунду, що навантажує мережу.
 */

interface CryptoObserver {
    update(coin: string, price: number): void;
}

class CryptoExchange {
    private observers: CryptoObserver[] = [];

    subscribe(obs: CryptoObserver) { this.observers.push(obs); }

    notify(coin: string, price: number) {
        for (const obs of this.observers) {
            obs.update(coin, price);
        }
    }
}

class MobileApp implements CryptoObserver {
    update(coin: string, price: number): void {
        console.log(`[Mobile Notification] ${coin} тепер коштує $${price}!`);
    }
}

class TradingBot implements CryptoObserver {
    update(coin: string, price: number): void {
        if (price < 60000) console.log(`[Bot] КУПУЄМО ${coin} по $${price}!`);
    }
}

export function testObserver() {
    console.log("--- Observer (Crypto Alerts) ---");
    const binance = new CryptoExchange();
    const userApp = new MobileApp();
    const bot = new TradingBot();

    binance.subscribe(userApp);
    binance.subscribe(bot);

    binance.notify("BTC", 59000);
    console.log("");
}
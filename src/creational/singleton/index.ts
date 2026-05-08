/**
 * Патерн: Singleton
 * Приклад: Глобальний збирач телеметрії для Cloud-додатків.
 * Проблема: Потрібно збирати метрики з усього додатку в один потік, щоб уникнути дублювання даних та конфліктів при записі в хмарне сховище.
 * Анти-приклад: Створення окремого логера в кожному модулі, що призводить до хаотичного розкидання логів та надлишкових мережевих запитів.
 */

class CloudTelemetry {
    private static instance: CloudTelemetry;
    private metrics: string[] = [];

    private constructor() {
        console.log("[System] Підключення до хмарного сервісу телеметрії...");
    }

    public static getInstance(): CloudTelemetry {
        if (!CloudTelemetry.instance) {
            CloudTelemetry.instance = new CloudTelemetry();
        }
        return CloudTelemetry.instance;
    }

    public recordMetric(event: string): void {
        this.metrics.push(event);
        console.log(`[Telemetry] Записано подію: ${event}`);
    }

    public getStatus(): string {
        return `Зібрано метрик: ${this.metrics.length}`;
    }
}

export function testSingleton() {
    console.log("--- Singleton (Cloud Telemetry) ---");
    const appMetrics = CloudTelemetry.getInstance();
    const dbMetrics = CloudTelemetry.getInstance();

    appMetrics.recordMetric("UserLogin");
    dbMetrics.recordMetric("QueryExecuted");

    console.log(`Чи використовується один екземпляр? ${appMetrics === dbMetrics}`);
    console.log(appMetrics.getStatus() + "\n");
}
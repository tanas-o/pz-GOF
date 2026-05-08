/**
 * Патерн: Facade
 * Приклад: Розумний будинок - Режим "Сон".
 * Проблема: Клієнту потрібно вимкнути світло, активувати охорону та знизити температуру. Без фасаду він має вручну звертатися до трьох різних систем.
 * Анти-приклад: Клієнтський код напряму керує Lights, Alarm, Thermostat, створюючи сильну залежність від кожного класу.
 */

class Lighting { off() { console.log("Світло вимкнено в усіх кімнатах."); } }
class SecuritySystem { arm() { console.log("Охорону активовано. Датчики руху активні."); } }
class Thermostat { setTemp(t: number) { console.log(`Термостат встановлено на ${t}°C.`); } }

class SmartHomeFacade {
    constructor(
        private light = new Lighting(),
        private security = new SecuritySystem(),
        private thermo = new Thermostat()
    ) {}

    public activateSleepMode(): void {
        console.log("[Facade] Активація режиму 'Сон'...");
        this.light.off();
        this.thermo.setTemp(18);
        this.security.arm();
        console.log("[Facade] Будинок готовий до ночі.\n");
    }
}

export function testFacade() {
    console.log("--- Facade (Smart Home) ---");
    const myHome = new SmartHomeFacade();
    myHome.activateSleepMode();
}
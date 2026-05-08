/**
 * Патерн: Builder
 * Приклад: Генератор фінансових звітів.
 * Проблема: Звіт може містити багато опціональних секцій (графіки, таблиці, підсумки). Створення такого об'єкта через конструктор призводить до "телескопічного" списку аргументів.
 * Анти-приклад: new Report("Monthly", null, true, null, "PDF", 2024, "USD", false).
 */

class FinancialReport {
    public header: string = "";
    public body: string = "";
    public footer: string = "";
    public charts: string[] = [];

    public print(): void {
        console.log(`ЗВІТ: ${this.header}\nЗМІСТ: ${this.body}\nГРАФІКИ: ${this.charts.join(", ")}\nПІДПИС: ${this.footer}`);
    }
}

interface ReportBuilder {
    setHeader(text: string): this;
    setBody(text: string): this;
    addChart(type: string): this;
    setFooter(text: string): this;
    build(): FinancialReport;
}

class QuarterlyReportBuilder implements ReportBuilder {
    private report = new FinancialReport();

    setHeader(text: string): this { this.report.header = text; return this; }
    setBody(text: string): this { this.report.body = text; return this; }
    addChart(type: string): this { this.report.charts.push(type); return this; }
    setFooter(text: string): this { this.report.footer = text; return this; }

    build(): FinancialReport { return this.report; }
}

export function testBuilder() {
    console.log("--- Builder (Financial Analytics) ---");
    const builder = new QuarterlyReportBuilder();
    const report = builder
        .setHeader("Квартальний звіт Q1")
        .setBody("Прибуток зріс на 15% завдяки оптимізації.")
        .addChart("Pie Chart: Expenses")
        .addChart("Bar Chart: Revenue")
        .setFooter("Затверджено CEO")
        .build();

    report.print();
    console.log("");
}
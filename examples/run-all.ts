import { testSingleton } from "../src/creational/singleton";
import { testBuilder } from "../src/creational/builder";
import { testFacade } from "../src/structural/facade";
import { testAdapter } from "../src/structural/adapter";
import { testObserver } from "../src/behavioral/observer";
import { testStrategy } from "../src/behavioral/strategy";

console.log("==========================================");
console.log("GOF паттерни - демонстрація");
console.log("==========================================\n");

testSingleton();
testBuilder();
testAdapter();
testFacade();
testObserver();
testStrategy();
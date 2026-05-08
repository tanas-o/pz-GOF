import { testSingleton } from "../creational/singleton";
import { testBuilder } from "../creational/builder";
import { testFacade } from "../structural/facade";
import { testAdapter } from "../structural/adapter";
import { testObserver } from "../behavioral/observer";
import { testStrategy } from "../behavioral/strategy";

console.log("==========================================");
console.log("GOF паттерни - демонстрація");
console.log("==========================================\n");

testSingleton();
testBuilder();
testAdapter();
testFacade();
testObserver();
testStrategy();
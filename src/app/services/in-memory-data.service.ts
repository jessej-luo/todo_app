export class InMemoryDataService {
  createDb() {
    let todos = [
      "do the dishes",
      "make food"
    ];
    return {todos};
  }
}
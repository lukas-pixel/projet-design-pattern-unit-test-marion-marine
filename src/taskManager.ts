export interface Task {
    name: string;
}

class taskManager {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }
    addTasks(task: Task) {
        this.tasks.push(task);
    }
    displayTasks() {
        console.log(this.tasks);
    }
}

export const allTask = new taskManager();
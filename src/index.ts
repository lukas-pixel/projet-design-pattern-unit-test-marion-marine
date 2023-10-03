import { Task, allTask } from './taskManager';

interface Factory {
    create(name: string): Task
}

class projectTaskFactory implements Factory {
    public create(name: string): Task {
        return new projectTask(name);
    }
}
class personalTaskFactory implements Factory {
    public create(name: string): Task {
        return new personalTask(name);
    }
}

interface task {
    run(): string;
}

class projectTask implements task {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    public run(): string {
        return '{Task projet}'
    }
}
class personalTask implements task {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    public run(): string {
        return '{Task personnel}'
    }
}

const ProjectTask = new projectTaskFactory();
const PersonalTask = new personalTaskFactory();
const myPersonnal = PersonalTask.create("personnal");
const myProject = ProjectTask.create("project");

allTask.addTasks(myPersonnal);
allTask.addTasks(myProject);
allTask.displayTasks();

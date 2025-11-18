// Task properties: title, description, bg color, deadline
// Task methods: isComplete , onGoing


class Task {
    constructor (title, description, bgColor, deadline, isComplete, isOngoing) { // constructor method to initialize task properties
        this.title = title;
        this.description = description;
        this.bgColor = bgColor;
        this.deadline = deadline; // deadline property to store the task's deadline
        this.isOngoing = isOngoing;  
        this.isComplete = false;
    }
    // methods
    markComplete(){
        this.isComplete = true;
    }
    toggleOngoing(){
        this.isOngoing = !this.isOngoing;
    }
    displayTask(){
        const checkComplete = this.isComplete ? "Completed" : "Pending";
        console.log(`Task: ${this.title}\nDescription: ${this.description}\nStatus: ${checkComplete}`);
    }

}
const newTask = new Task("read books", "read 20 pages of a book", "red", "2025-12-31", true );
newTask.markComplete();
newTask.toggleOngoing();
console.log(newTask);
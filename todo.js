#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
while (true) {
    let selectOperation = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Select the action you want to perform: ",
        choices: ["View List", "Add Task", "Remove Task", "Exit"]
    });
    if (selectOperation.operation == "Exit") {
        console.log("Exited...");
        break;
    }
    else if (selectOperation.operation == "View List") {
        console.log("Here is your todo list: ");
        console.log("----------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------------");
        let again = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: "Want to see options again? ",
        });
        if (!again.confirm) {
            console.log("Exited...");
            break;
        }
    }
    else if (selectOperation.operation === "Add Task") {
        let addTask = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "Enter your task to add: ",
            },
            {
                name: "confirm",
                type: "confirm",
                message: "Want to see options again? ",
            },
        ]);
        todo.push(addTask.add);
        console.log("Todo task added successfully!");
        console.log(todo);
        if (!addTask.confirm) {
            console.log("Exited...");
            break;
        }
    }
    else if (selectOperation.operation === "Remove Task") {
        let removeTask = await inquirer.prompt([
            {
                name: "remove",
                type: "input",
                message: "Enter the index of the todo task you want to remove: ",
            },
            {
                name: "confirm",
                type: "confirm",
                message: "Want to see options again? ",
            }
        ]);
        todo.splice(removeTask.remove, removeTask.confirm);
        console.log("Todo task removed successfully!");
        console.log(todo);
        if (!removeTask.confirm) {
            console.log("Exited...");
            break;
        }
    }
}

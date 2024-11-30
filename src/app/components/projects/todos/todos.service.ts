import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Task } from "./interfaces/task.model";
import { map } from "rxjs";
import { environment } from "../../../../environments/environment.development";
import { ApiPaths } from "../../../enums/api-paths"

const BACKEND_URL = environment.apiUrl + ApiPaths.TODOS;

@Injectable ({providedIn:'root'})
export class TodosService {
    private tasks: Task[] = [];
    private tasksUpdated = signal<Task[]>([]);

    constructor(private http: HttpClient){}

    getTasks() {
        this.http.get<{ message: string; tasks: any;}>(BACKEND_URL).pipe(
            map(tasksData => {
                return {tasks: tasksData.tasks.map((todo: { _id: any; completed: any; title: any; editMode: boolean}) =>{
                    return {
                        id: todo._id,
                        completed: todo.completed,
                        title: todo.title,
                        editMode: false
                    }
                })}
            })
        )
        .subscribe(transformedTasksData => {
                this.tasks = transformedTasksData.tasks;
                this.tasksUpdated.set(this.tasks);
            console.log(JSON.stringify(this.tasksUpdated()));
        });
    }

    getUpdatedTasksListener() {
        return this.tasksUpdated;
    }

    addTask(task: Task) {
        this.http.post<{ task: Task }>(BACKEND_URL, task)
        .subscribe(res => {
            this.getTasks();
        });
    }

    updateTask(task: Task) {
        this.http
            .put(BACKEND_URL + task.id, task)
            .subscribe();
    }

    deleteTask(taskId: string) {
        return this.http.delete(BACKEND_URL + taskId);
    }
}
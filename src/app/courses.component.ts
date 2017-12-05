import {Component} from '@angular/core';
import { CoursesService } from 'app/courses.service';

@Component({
    selector: 'courses',
    template: ` 
                {{ text | summary:4 }}
                <h2> {{ "Title: " + (getTitle() | summary:10) }} </h2> 
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>   
             `
})

export class CoursesComponent {
    text = "asdsadsa sds dsdsdasadsad sdasdsadsadsad asdsadasdasdasd";
    title = "List of Courses sddsfdsf sdfdsfds dsfdsfdsf";   
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }
}
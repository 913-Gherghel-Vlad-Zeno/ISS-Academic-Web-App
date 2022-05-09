import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {DragAndDropComponent} from "./drag-and-drop/drag-and-drop.component";
import {NewCourseComponent} from "./new-course/new-course.component";
import {OptionalsStudentComponent} from "./optionals-student/optionals-student.component";
import {AddGradeComponent} from "./add-grade/add-grade.component";

const routes: Routes = [
  { path: '', component: AddGradeComponent},
  { path: 'dropdown', component: DropdownComponent},
  { path: 'file-upload', component: FileUploadComponent},
  { path: 'drag-and-drop', component: DragAndDropComponent},
  { path: 'new-course', component: NewCourseComponent},
  { path: 'optionals-student', component: OptionalsStudentComponent},
  { path: 'add-grade', component: AddGradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

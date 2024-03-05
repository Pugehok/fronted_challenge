import { Calendar, Todo } from "../Icons";
import { ReactElement } from "react";

interface IDropItem{
    text: string
    icon?: ()=> ReactElement
}





export const FEATURES: Array <IDropItem>  = [
    { text: 'Todo List', icon: Todo},
    { text: 'Calendar', icon: Calendar},
    { text: 'Reminders', icon: Todo},
    { text: 'Planning', icon: Calendar},
];

export const COMPANY = [
    { text: 'History' },
    { text: 'Our team' },
    { text: 'Blog' },
  ]
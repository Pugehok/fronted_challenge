import { ReactNode } from "react";
import { Todo } from "../Icons";
import { ReactElement } from "react";

interface IDropItem{
    text: string
    icon?: ()=> ReactElement
}





export const FEATURES: Array <IDropItem>  = [
    { text: 'Todo List', icon: Todo},
    { text: 'Todo List', icon: Todo},
    { text: 'Todo List', icon: Todo},
    { text: 'Todo List', icon: Todo},
];

export const COMPANY = [
    { text: 'History' },
    { text: 'Our team' },
    { text: 'Blog' },
  ]
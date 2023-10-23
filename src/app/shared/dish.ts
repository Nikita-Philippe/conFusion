export class Dish  {
    id: string = "";
    name: string = "";
    image: string = "";
    category: string = "";
    featured: boolean = false;
    label: string = "";
    price: string = "";
    description: string = "";
    comments: Comment[] = [];
}

class Comment {
    rating: number = 0;
    comment: string = "";
    author: string = "";
    date: string = "";
}
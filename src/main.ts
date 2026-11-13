

class Strong <T>{
   private item :T[] =[]
   public additem(item:T):void{
    this.item.push(item)
   }
   public removeItem(item:T):void{
    this.item =this.item.filter(i=> i !== item)
   }
   public getAllItems():T[]{
    return this.item
   }

}

class User{
    protected id:number
    protected name:string
    protected email:string
    protected password:string
    protected phone:string
    protected age:number
    public notbooks :NoteBook[]=[]
    constructor(id:number,name:string,email:string,password:string,phone:string,age:number){
        if(age<18 || age>60){
         throw new Error("Age must be between 18 and 60 years old.")
        }
        this.id=id
        this.name=name
        this.email=email
        this.password = password
        this.phone=phone
        this.age=age
        
    }
    displayInfo():void{
        console.log(`User:${this.name},Email${this.email},Age${this.age}`)
    }
    public addNotebook(notebook:NoteBook):void{
        this.notbooks.push(notebook)

    }
}
class Admin extends User{
public manageNote():void{
    console.log(`Admin ${this.name} is managing system notes`)
}
}
class Note{
    public id:number
    public tittle:string
    public content:string
    public userId:User
    
    constructor(id:number,tittle:string,content:string,userId:User){
        this.id=id
        this.tittle=tittle
        this.content=content
        this.userId = userId
    }
    preview():string{
     return this.content.length > 20 
        ? this.content.substring(0, 20) + "..." 
        : this.content;

    }
}

class NoteBook{
 public id: number;
 public title: string
 private notes:Note[]
    constructor( id: number,title: string,){
       this.id=id
       this.title=title
       this.notes =[]
    }
    addnote(note:Note):void{
        this.notes.push(note)
        console.log(`Note ${note.tittle} added to notbook ${this.title}`)
    }
    removenote(noteId: number){
    this.notes = this.notes.filter(note => note.id !== noteId)
    console.log(`Note with ID ${noteId} removed from notebook.`)
    }
    getNotes(): Note[] {
        return this.notes
    }
}


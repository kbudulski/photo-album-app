export class Upload {
  createdOn: Date;
  id: string;
  name: string;
  shared: boolean;
  size: number;
  type: string;
  url: string;
  userId: string;
  file: File;

  constructor(file: File) {
    this.file = file;
    this.name = file.name;
    this.type = file.type;
    this.size = file.size;
    this.createdOn = new Date();
  }
}

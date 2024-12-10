import { SaveFile } from "./save-file.use-cases";

export interface CreateTableInterface {
  execute({ }: CreateTableOptions): string;
}

interface CreateTableOptions {
  base: number,
  limit: number,
}



export class CreateTable implements CreateTableInterface {
  constructor() { }

  execute({ base, limit }: CreateTableOptions): string {
    let outputMessage = '';

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${Number(base) * i}\n`;
    }

    return outputMessage;
  }
}
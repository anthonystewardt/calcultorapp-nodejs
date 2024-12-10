import fs from 'fs';

export interface SaveFileI {
  execute({ }: SaveFileOptions): boolean;
}

interface SaveFileOptions {
  fileContent: string,
  fileName: string,
  fileDestination: string
}




export class SaveFile implements SaveFileI {
  constructor() { }

  execute({
    fileContent,
    fileName = "table",
    fileDestination = "outputs"
  }: SaveFileOptions): boolean {
    try {
      // check if fileDestination exists
      if (!fs.existsSync(fileDestination)) {
        fs.mkdirSync(fileDestination, { recursive: true });
      }

      const filePath = `${fileDestination}/${fileName}.txt`;
      fs.writeFileSync(filePath, fileContent);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

}
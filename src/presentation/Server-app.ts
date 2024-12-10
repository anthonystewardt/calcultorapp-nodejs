import { CreateTable } from "../domain/use-cases/create-table.use-cases";
import { SaveFile } from "../domain/use-cases/save-file.use-cases";

interface ServerOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}



export class ServerApp {

  static run(options: ServerOptions) {
    console.log('SeverApp run');

    const { base, limit, showTable, fileDestination, fileName } = options;

    const createTable = new CreateTable().execute({
      base,
      limit
    })

    const wasSave = new SaveFile().execute({
      fileContent: createTable,
      fileName: `tabla-${base}`,
      fileDestination,
    });

    if (showTable) console.log(createTable);

    (wasSave) ? console.log('File created!') : console.log('File not created!');

  }

}





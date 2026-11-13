// imprt XLSX plugin for reading Excel files


import * as XLSX from 'xlsx';
import fs from 'fs';
// This file contains a helper class for reading Excel files using the XLSX library.
// Define xtest Data interface for the structure of the Excel data
export interface ExcelData {
  // Define the structure of your Excel data here
  skill1: string;
  skill2: string;

}
// Create a method to read the Excel file and return the data as an array of objects

//export class ExcelHelper {

  export function readExcel(filePath: string): any[] {
    // Read the Excel file using XLSX library
    //const workbook = XLSX.readFile(filePath);
    const file = fs.readFileSync(filePath);
    // Get the first sheet of the workbook
    const workbook = XLSX.read(file, { type: 'buffer' });
    // Get the sheet object from the workbook using the sheet name
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    // Convert the sheet data to JSON format
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    return data.slice(1).map((column: any) => ({
      skill1: column[0],
      skill2: column[1]
    })) ; // Remove the header row from the data
  }
//}
// pages/api/fetchDirectory.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const appFolderPath = path.join(process.cwd(), 'app');

  const directoryStructure = getDirectoryStructure(appFolderPath);

  res.status(200).json({ directoryStructure });
}

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  children?: FileItem[];
}

function getDirectoryStructure(folderPath: string): FileItem[] {
  const items = fs.readdirSync(folderPath);

  const directoryStructure: FileItem[] = items.map((item) => {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      return {
        name: item,
        type: 'folder',
        children: getDirectoryStructure(itemPath),
      };
    } else {
      return {
        name: item,
        type: 'file',
      };
    }
  });

  return directoryStructure;
}

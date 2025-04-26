import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Plus, Eye } from "../icons";

export const CropMultimedia = () => {
  const multimediaFiles = [
    {
      id: 1,
      name: "Tomates - Crecimiento Semana 5.jpg",
      crop: "Tomates",
      type: "Imagen",
      uploaded: "2025-03-15",
    },
    {
      id: 2,
      name: "Cebollas - Riego.mp4",
      crop: "Cebollas",
      type: "Video",
      uploaded: "2025-04-01",
    },
    {
      id: 3,
      name: "Papas - Floración.png",
      crop: "Papas",
      type: "Imagen",
      uploaded: "2025-04-20",
    },
    {
      id: 4,
      name: "Maíz - Polinización.avi",
      crop: "Maíz",
      type: "Video",
      uploaded: "2025-04-25",
    },
    {
      id: 5,
      name: "Zanahorias - Semillas.jpg",
      crop: "Zanahorias",
      type: "Imagen",
      uploaded: "2025-02-10",
    },
  ];

  return (
    <div className="space-y-4 p-4 bg-green-50 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-green-800">
          Archivos Multimedia
        </h2>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Agregar Archivo
        </Button>
      </div>
      <div className="rounded-lg border border-green-200 bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-100">
              <TableHead className="text-green-900 font-semibold">
                Nombre del Archivo
              </TableHead>
              <TableHead className="text-green-900 font-semibold">
                Cultivo
              </TableHead>
              <TableHead className="text-green-900 font-semibold">
                Tipo
              </TableHead>
              <TableHead className="text-green-900 font-semibold">
                Subido el
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {multimediaFiles.map((file) => (
              <TableRow
                key={file.id}
                className="hover:bg-green-50 transition-colors"
              >
                <TableCell className="font-medium">{file.name}</TableCell>
                <TableCell>{file.crop}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`px-2 py-1 text-sm ${
                      file.type === "Imagen"
                        ? "border-green-500 text-green-600"
                        : "border-purple-500 text-purple-600"
                    }`}
                  >
                    {file.type}
                  </Badge>
                </TableCell>
                <TableCell>{file.uploaded}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

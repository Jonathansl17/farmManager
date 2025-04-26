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

export const CropHarvest = () => {
  const harvestedCrops = [
    {
      id: 1,
      cultivo: "Tomates",
      fechaCosecha: "2024-04-01",
      primera: 1500,
      segunda: 350,
      tercera: 50,
    },
    {
      id: 2,
      cultivo: "Cebollas",
      fechaCosecha: "2024-04-15",
      primera: 2800,
      segunda: 600,
      tercera: 100,
    },
    {
      id: 3,
      cultivo: "Papas",
      fechaCosecha: "2024-05-05",
      primera: 3500,
      segunda: 700,
      tercera: 150,
    },
    {
      id: 4,
      cultivo: "Zanahorias",
      fechaCosecha: "2024-07-20",
      primera: 1200,
      segunda: 250,
      tercera: 30,
    },
    {
      id: 5,
      cultivo: "Maíz",
      fechaCosecha: "2024-07-25",
      primera: 4000,
      segunda: 800,
      tercera: 200,
    },
  ];

  return (
    <div className="rounded-md border border-green-200 shadow-sm overflow-x-auto">
      <Table>
        <TableHeader className="bg-green-50">
          <TableRow>
            <TableHead>Cultivo</TableHead>
            <TableHead>Fecha Cosecha</TableHead>
            <TableHead>Primera (kg)</TableHead>
            <TableHead>Segunda (kg)</TableHead>
            <TableHead>Tercera (kg)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {harvestedCrops.map((cosecha) => (
            <TableRow key={cosecha.id}>
              <TableCell className="font-semibold text-green-800">
                {cosecha.cultivo}
              </TableCell>
              <TableCell>{cosecha.fechaCosecha}</TableCell>
              <TableCell>
                <Badge variant="success">{cosecha.primera} kg</Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="text-yellow-700 border-yellow-300"
                >
                  {cosecha.segunda} kg
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="text-red-700 border-red-300"
                >
                  {cosecha.tercera} kg
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { CropList } from "../crops/crop-list";
import { CropCalendar } from "../crops/crop-calendar";
import { CropPerformance } from "../crops/crop-performance";
import { CropHarvest } from "../crops/crop-harvest";
import { CropMultimedia } from "../crops/crop-multimedia.jsx";
import { Sprout, Calendar, TrendingUp, BarChart3, Plus } from "../icons";

export const CropsView = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Gestión de Cultivos
        </h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Cultivo
        </Button>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="calendar">Calendario</TabsTrigger>
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
          <TabsTrigger value="harvest">Cosecha</TabsTrigger>
          <TabsTrigger value="multimedia">Multimedia</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de Cultivos
                </CardTitle>
                <Sprout className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  3 tipos diferentes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Próxima Cosecha
                </CardTitle>
                <Calendar className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5 Abr</div>
                <p className="text-xs text-muted-foreground">
                  Tomates - Campo 1
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Rendimiento Promedio
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.3 t/ha</div>
                <p className="text-xs text-muted-foreground">
                  +5% vs año anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Calidad</CardTitle>
                <BarChart3 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">Primera calidad</p>
              </CardContent>
            </Card>
          </div>

          <CropList />
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Cultivos</CardTitle>
              <CardDescription>
                Planificación anual de siembras y cosechas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CropCalendar />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Rendimiento de Cultivos</CardTitle>
              <CardDescription>
                Análisis de rendimiento por cultivo y temporada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CropPerformance />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="harvest">
          <Card>
            <CardHeader>
              <CardTitle>Cosecha</CardTitle>
              <CardDescription>
                Información sobre las cosechas actuales y pasadas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CropHarvest />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="multimedia">
          <Card>
            <CardContent>
              <CropMultimedia />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

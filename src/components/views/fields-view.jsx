import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/input"
import { Textarea } from "../ui/input"
import { FieldMap } from "../fields/field-map"
import { FieldList } from "../fields/field-list"
import { MapPin, Ruler, Droplets, Sun, Plus } from "../icons"

export const FieldsView = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Gestión de Campos</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Campo
        </Button>
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map">Mapa</TabsTrigger>
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="details">Detalles</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Campos</CardTitle>
                <MapPin className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">4 activos, 2 en preparación, 2 en descanso</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Área Total</CardTitle>
                <Ruler className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5 ha</div>
                <p className="text-xs text-muted-foreground">18.3 ha en cultivo activo</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Riego Programado</CardTitle>
                <Droplets className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Próximo: Campo 3 - Mañana 6:00 AM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clima</CardTitle>
                <Sun className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24°C</div>
                <p className="text-xs text-muted-foreground">Soleado, 10% prob. de lluvia</p>
              </CardContent>
            </Card>
          </div>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Vista de Campos</CardTitle>
              <CardDescription>Vista geográfica de todos sus campos y parcelas</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <FieldMap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list">
          <FieldList />
        </TabsContent>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Detalles del Campo</CardTitle>
              <CardDescription>Ver y editar información detallada del campo seleccionado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Campo</Label>
                  <Input id="name" defaultValue="Campo 3 - Sector Norte" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Área (hectáreas)</Label>
                  <Input id="area" defaultValue="4.2" type="number" step="0.1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soil-type">Tipo de Suelo</Label>
                  <Input id="soil-type" defaultValue="Franco-arenoso" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="irrigation">Sistema de Riego</Label>
                  <Input id="irrigation" defaultValue="Goteo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-crop">Cultivo Actual</Label>
                  <Input id="current-crop" defaultValue="Cebollas" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="planting-date">Fecha de Siembra</Label>
                  <Input id="planting-date" defaultValue="2023-01-15" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="harvest-date">Fecha de Cosecha Estimada</Label>
                  <Input id="harvest-date" defaultValue="2023-04-10" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" placeholder="Notas adicionales sobre este campo..." />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

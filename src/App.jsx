"use client"

import { useState } from "react"
import "./index.css"
import { MainNav } from "./components/navigation/main-nav"
import { UserNav } from "./components/navigation/user-nav"
import { SearchComponent } from "./components/navigation/search"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Overview } from "./components/dashboard/overview"
import { RecentDeliveries } from "./components/dashboard/recent-deliveries"
import { UpcomingTasks } from "./components/dashboard/upcoming-tasks"
import { CropStatus } from "./components/dashboard/crop-status"
import { FieldsView } from "./components/views/fields-view"
import { CropsView } from "./components/views/crops-view"
import { DeliveriesView } from "./components/views/deliveries-view"
import { Plant, Scissors, Truck, DollarSign, Calendar } from "./components/icons"

const App = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <SearchComponent />
            <UserNav />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="w-[260px] justify-start text-left font-normal">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Abril 2023</span>
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="fields">Campos</TabsTrigger>
            <TabsTrigger value="crops">Cultivos</TabsTrigger>
            <TabsTrigger value="deliveries">Entregas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cultivos Activos</CardTitle>
                  <Plant className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Próximas Cosechas</CardTitle>
                  <Scissors className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">Próxima: Cebollas (Campo 3) - 5 días</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Entregas Pendientes</CardTitle>
                  <Truck className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">Próxima: SuperMarket A - Mañana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,565.00</div>
                  <p className="text-xs text-muted-foreground">+15% desde el mes pasado</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Rendimiento de Cultivos</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Entregas Recientes</CardTitle>
                  <CardDescription>Has realizado 12 entregas este mes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentDeliveries />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Próximas Tareas</CardTitle>
                  <CardDescription>Tareas programadas para los próximos 7 días.</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingTasks />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Estado de Cultivos</CardTitle>
                  <CardDescription>Estado actual de tus cultivos activos.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CropStatus />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fields">
            <FieldsView />
          </TabsContent>

          <TabsContent value="crops">
            <CropsView />
          </TabsContent>

          <TabsContent value="deliveries">
            <DeliveriesView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App

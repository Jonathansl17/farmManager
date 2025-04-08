export const FieldMap = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-b-lg bg-[#E8F4EA]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Campo 1 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 1</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Activo</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Tomates</p>
                <p>Área: 3.2 ha</p>
                <p>Progreso: 95%</p>
              </div>
            </div>
          </div>

          {/* Campo 2 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 2</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Activo</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Papas</p>
                <p>Área: 4.5 ha</p>
                <p>Progreso: 45%</p>
              </div>
            </div>
          </div>

          {/* Campo 3 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 3</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Activo</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Cebollas</p>
                <p>Área: 4.2 ha</p>
                <p>Progreso: 85%</p>
              </div>
            </div>
          </div>

          {/* Campo 4 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#A0D995] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 4</h3>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Activo</span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Cultivo: Cebollas</p>
                <p>Área: 3.8 ha</p>
                <p>Progreso: 25%</p>
              </div>
            </div>
          </div>

          {/* Campo 5 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#D9D9A0] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 5</h3>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                  En preparación
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Próximo: Zanahorias</p>
                <p>Área: 2.8 ha</p>
                <p>Listo en: 5 días</p>
              </div>
            </div>
          </div>

          {/* Campo 6 */}
          <div className="relative h-[200px] w-[250px] rounded-lg bg-[#D9D9A0] p-4 shadow-md">
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Campo 6</h3>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                  En preparación
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p>Próximo: Maíz</p>
                <p>Área: 3.5 ha</p>
                <p>Listo en: 10 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

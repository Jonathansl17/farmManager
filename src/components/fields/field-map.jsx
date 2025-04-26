export const FieldMap = () => {
  return (
    <div className="w-full rounded-b-lg bg-[#E8F4EA] p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {/* Campo 1 */}
        <div className="rounded-lg bg-[#A0D995] p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Campo 1</h3>
            <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-green-800">
              Activo
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-800">Cultivo: Tomates</p>
            <p className="text-gray-800">Área: 3.2 ha</p>
            <p className="text-gray-800">Progreso: 95%</p>
          </div>
        </div>

        {/* Campo 2 */}
        <div className="rounded-lg bg-[#A0D995] p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Campo 2</h3>
            <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-green-800">
              Activo
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-800">Cultivo: Papas</p>
            <p className="text-gray-800">Área: 4.5 ha</p>
            <p className="text-gray-800">Progreso: 45%</p>
          </div>
        </div>

        {/* Campo 3 */}
        <div className="rounded-lg bg-[#A0D995] p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Campo 3</h3>
            <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-green-800">
              Activo
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-800">Cultivo: Cebollas</p>
            <p className="text-gray-800">Área: 4.2 ha</p>
            <p className="text-gray-800">Progreso: 85%</p>
          </div>
        </div>

        {/* Campo 4 */}
        <div className="rounded-lg bg-[#A0D995] p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Campo 4</h3>
            <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-green-800">
              Activo
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-800">Cultivo: Cebollas</p>
            <p className="text-gray-800">Área: 3.8 ha</p>
            <p className="text-gray-800">Progreso: 25%</p>
          </div>
        </div>

        {/* Campo 5 */}
        <div className="rounded-lg bg-[#D9D9A0] p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Campo 5</h3>
            <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-yellow-800">
              En preparación
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-800">Próximo: Zanahorias</p>
            <p className="text-gray-800">Área: 2.8 ha</p>
            <p className="text-gray-800">Listo en: 5 días</p>
          </div>
        </div>

        {/* Campo 6 */}
        <div className="rounded-lg bg-[#D9D9A0] p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Campo 6</h3>
            <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-yellow-800">
              En preparación
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-800">Próximo: Maíz</p>
            <p className="text-gray-800">Área: 3.5 ha</p>
            <p className="text-gray-800">Listo en: 10 días</p>
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

export default function ModalStartType({
    setModalContent,
}: {
    setModalContent: any;
}) {
  return (
    <>
      <p className="text-gray-500 dark:text-gray-400 select-none">
        Selecione o modo de jogo:
      </p>
        <button className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
          <div className="block">
            <div className="text-left w-full text-lg font-semibold select-none">Ranked</div>
            <div className="w-full text-gray-500 dark:text-gray-400 select-none">
              Partidas que valem pontos
            </div>
          </div>
        </button>

        <button className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
          <div className="block">
            <div className="text-left w-full text-lg font-semibold select-none">Normal</div>
            <div className="w-full text-gray-500 dark:text-gray-400 select-none">
              Partidas que não valem pontos
            </div>
          </div>
        </button>

      <button
        className="w-full mt-28 h-20 text-2xl border-b-4 border-red-700 bg-red-600 font-extrabold text-white rounded-lg transition-all focus:scale-98 shadow-md hover:scale-98 hover:red-green-900"
        onClick={() => setModalContent('start')}
      >
        Selecionar
      </button>
    </>
  );
}

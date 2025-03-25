export default function Card({ nombre, edad, codigo }) {
    return (
      <>
        <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-4">
          <div className="max-w-2xl bg-white rounded-xl shadow-xl p-8 space-y-8">
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="https://preview.redd.it/5dqi17duyvvc1.jpeg?width=640&crop=smart&auto=webp&s=2ffc5d947811db7178c68a0c99ea1f1c8ba8a545"
                alt="Foto de perfil"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <h2 className="text-xl md:text-2xl font-bold text-black" ><b>Nombre:</b></h2>
                <p className="text-gray-600 text-sm md:text-base">{nombre}</p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <h2 className="text-xl md:text-2xl font-bold text-black"><b>Edad:</b></h2>
                <p className="text-gray-600 text-sm md:text-base">{edad}</p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <h2 className="text-xl md:text-2xl font-bold text-black"><b>Codigo:</b></h2>
                <p className="text-gray-600 text-sm md:text-base">{codigo}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
import React from "react";

export const VisiMisi = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-8 mx-8 md:mx-32 gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left">Visi</h2>
          <p className="text-md leading-6 mt-4 text-center md:text-left">
            Menjadi jembatan untuk berbagi kebaikan melalui redistribusi pakaian
            bekas, menciptakan masyarakat yang peduli dan berkelanjutan.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left">Misi</h2>
          <p className="text-md leading-loose mt-4 text-center md:text-left">
            <span className="block md:inline">
              1. Mendorong kebaikan seperti menginspirasi untuk berbagi pakaian
              bekas.
            </span>{" "}
            <br />
            <span className="block md:inline">
              2. Mengelola donasi pakaian dengan bijak
            </span>{" "}
            <br />
            <span className="block md:inline">
              3. Sebagai pemberdaya komunitas untuk berpartisipasi dalam proses
              donasi, pengelolaan, dan distribusi pakaian bekas
            </span>
            <br />
            <span className="block md:inline">
              4. Menjamin transparansi dalam pengelolaan donasi
            </span>
            <br />
            <span className="block md:inline">
              5. Memberikan edukasi tentang pentingnya berbagi sumber daya,
              menjaga lingkungan, dan memberi kesadaran atas tanggung jawab
              terhadap pakaian
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

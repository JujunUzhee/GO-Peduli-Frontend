import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PublikasiComponent from "../../components/PublikasiComponent";
import ButtonChatus from "../../components/element/button/buttonChat";
import Footer from "../../components/FooterComponent";
import ScrollToTop from "../../components/scrollTop";
import CardInputBerita from "../../components/Cards/CardInputBerita";
import BeritaComponent from "../../components/BeritaComponent";

const Berita = () => {
  const [choose, setChoose] = useState("Berita");
  const [artikel, setArtikel] = useState("");
  const [filterBerita, setFilterBerita] = useState([])
  // const [allBerita ,setAllBerita] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/berita'); 
  //       const data = await response.json();
  //       setAllBerita(data);
  //       setFilterBerita(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const onSearch = () => {
  //   const filterBeritaData = allBerita.filter((data) => {
  //     data.title.toLowerCase().includes(artikel.toLowerCase());
  //   });
  //   setFilterBerita(filterBeritaData)
  // };
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="w-full">
        <div className="flex justify-center items-center">
          <h2 className="my-4 text-3xl font-bold mt-24">Berita Kami</h2>
        </div>
        <p className="text-center mt-24 mx-72">
          Temukan Lebih Banyak Berita Melalui Artikel-artikel yang Terlampir di
          Bawah Ini, untuk Mendapatkan Wawasan yang Lebih Mendalam dan Lengkap
          tentang Berbagai Topik yang Relevan.
        </p>
        <div className="relative h-[300px] mt-2   flex justify-center items-center">
          <CardInputBerita
            setChoose={setChoose}
            setArtikel={setArtikel}
            // onSearch={onSearch}
          />
        </div>
        <div className="w-full">
          {choose === "Berita" ? (
              <BeritaComponent news="Berita Terbaru" otherNews="Berita Lainnya" data={filterBerita}/>
          ):
          <PublikasiComponent
          publikasi="Publikasi Terbaru"
          otherPublikasi="Publikasi Lainnya"
        />
          }
        </div>
      </div>
      <ButtonChatus />
      <Footer />
    </>
  );
};

export default Berita;

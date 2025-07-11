import { NavLink, SchFeature, StatType } from "@/types";
import {
  RiArrowDownSLine,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

export const Links: NavLink[] = [
  { name: "Beranda", path: "home" },
  { name: "Profil", path: "about", icon: RiArrowDownSLine },
  { name: "PPDB", path: "stats" },
  { name: "Galeri", path: "footer" },
  { name: "Contact", path: "contact" },
];

export const SocialMedia = [
  { icon: RiYoutubeFill, path: "https://www.youtube.com/@SITMUHBIRTV" },
  { icon: RiInstagramFill, path: "https://www.instagram.com/sditmuhbir/" },
];

export const FeaturesSch: SchFeature[] = [
  {
    image: "/assets/img/features/f1.png",
    title: "Terakreditasi A",
    text: "Sejak 2016 mendapatkan akreditasi dari BANSM dengan",
    text2: "No SK : 048/BAP-SM/HK/XI/2016",
  },
  {
    image: "/assets/img/features/f2.png",
    title: "Kurikulum K-13",
    text: "Kurikulum 2013 memiliki empat aspek penilaian, yaitu aspek pengetahuan, aspek keterampilan, aspek sikap, dan perilaku",
  },
  {
    image: "/assets/img/features/f3.png",
    title: "Guru Bersertifikat",
    text: "Guru profesional merupakan syarat mutlak untuk menciptakan sistem dan praktik pendidikan yang berkualitas.",
  },
  {
    image: "/assets/img/features/f4.png",
    title: "Fasilitas Lengkap",
    text: "Dengan tersedianya ruang kelas, lab dan perpustakaan menunjang proses belajar dan mengajar anak di Sekolah",
  },
];

export const statsData: StatType[] = [
  {
    endCountNum: 160,
    image: "/assets/img/stats/funfact-1.png",
    text: "Prestasi",
  },
  {
    endCountNum: 1258,
    image: "/assets/img/stats/funfact-2.png",
    text: "Siswa",
  },
  {
    endCountNum: 56,
    image: "/assets/img/stats/funfact-1.png",
    text: "Pengajar",
  },
  {
    endCountNum: 1567,
    image: "/assets/img/stats/funfact-2.png",
    text: "Alumni",
  },
];

export const imageFooter: string[] = [
  "/assets/img/hero/bg-hero1.png",
  "/assets/img/hero/bg-hero2.webp",
  "/assets/img/hero/bg-hero3.jpeg",
  "/assets/img/hero/bg-hero4.jpg",
];

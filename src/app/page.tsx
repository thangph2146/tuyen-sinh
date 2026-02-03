import Hero from '@/components/Home/Hero/Hero';
import About from '@/components/Home/About/About';
import AdmissionInfo from '@/components/Home/AdmissionInfo/AdmissionInfo';
import Programs from '@/components/Home/Programs/Programs';
import News from '@/components/Home/News/News';
import FAQ from '@/components/Home/FAQ/FAQ';
import StudentLife from '@/components/Home/StudentLife/StudentLife';
import Events from '@/components/Home/Events/Events';
import Registration from '@/components/Home/Registration/Registration';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AdmissionInfo />
      <Programs />
      <News />
      <FAQ />
      <StudentLife />
      <Events />
      <Registration />
    </>
  );
}

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import AdmissionInfo from '@/components/AdmissionInfo/AdmissionInfo';
import Programs from '@/components/Programs/Programs';
import News from '@/components/News/News';
import FAQ from '@/components/FAQ/FAQ';
import StudentLife from '@/components/StudentLife/StudentLife';
import Events from '@/components/Events/Events';
import Registration from '@/components/Registration/Registration';

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

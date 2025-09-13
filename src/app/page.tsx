import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageGeneratorForm from '../components/ImageGeneratorForm'; // 假设这是您之前创建的表单组件
import AboutSection from '../components/AboutSection';
import WhyChooseSeedream from '../components/WhyChooseSeedream'; // 如果您选择独立组件
import Features from '../components/Features';
import HowItWorksSection from '../components/HowItWorksSection'; // 修正导入路径
import FAQSection from '../components/FAQSection'; // 修正导入路径
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ImageGeneratorForm /> {/* 您的图片生成表单 */}
        <AboutSection />
        <WhyChooseSeedream /> {/* 已取消注释 */}
        <Features />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

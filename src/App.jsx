import './index.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import TrackOverview from './components/TrackOverview';
import PhaseDivider from './components/PhaseDivider';
import DaysGrid from './components/DaysGrid';
import TeacherNote from './components/TeacherNote';
import CapstoneSection from './components/CapstoneSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import { sqlDays, pythonDays } from './data/curriculum';

export default function App() {
  return (
    <>
      <Navbar />
      <div id="top"><Cover /></div>
      <div id="overview"><TrackOverview /></div>
      <div id="sql-phase">
        <PhaseDivider phase="SQL" dayRange="Days 1 - 6" />
        <DaysGrid days={sqlDays} type="sql" />
        <TeacherNote />
      </div>
      <div id="python-phase">
        <PhaseDivider phase="Python" dayRange="Days 7 - 12" />
        <DaysGrid days={pythonDays} type="python" />
      </div>
      <div id="capstone"><CapstoneSection /></div>
      <div id="skills"><SkillsSection /></div>
      <Footer />
    </>
  );
}

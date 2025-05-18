import { SvgIconComponent } from "@mui/icons-material";
import { javascript_info_course } from "./СOURSE_DATA/JAVA_SCRIPT/javascript_info_course";
import { react_basic_info_course } from "./СOURSE_DATA/REACT_BASIC/react_basic_info_course";
import { react_advanced_info_course } from "./СOURSE_DATA/REACT_PRO/react_advanced_info_course";
import { typescript_info_course } from "./СOURSE_DATA/TYPES_SCRIPT/typescript_info_course";
import { web_layout_info_course } from "./СOURSE_DATA/WEB_LAYOUT/web_layout_info_course";
import { Mentor } from "../components/MentorProfilePage/mentorsData";

export interface InfroStatsCourse {
  label: string;
  count: number;
}

interface TechnologiesCourse {
  title: string;
  icon: SvgIconComponent;
  titleTooltip: string;
}

interface ProjectsCourse {
  title: string;
  description: string;
}

interface TargetAudienceCourse {
  title: string;
  description: string;
}

interface DescriptionInfoCourse {
  profession: string;
  about: string;
  demand: string;
  activities: string[];
  prospects: string[];
}

interface CourseFeature {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

interface FaqsCourse {
  question: string;
  answer: string;
}

export interface InfoCourse {
  id: number;
  courseId: string[];
  title: string;
  description: string;
  price: number;
  duration: string;
  totalPrice: number;
  paymentMonths: number;
  image: string;
  skills: string[];
  mentors: Mentor[];
  courseType: string; // "Basic" | "Pro"
  infoStats: InfroStatsCourse[];
  descriptionInfo: DescriptionInfoCourse;
  targetAudience: TargetAudienceCourse[];
  learningProcess: CourseFeature[];
  technologies: TechnologiesCourse[];
  projects: ProjectsCourse[];
  faqs: FaqsCourse[];
}

export const courseList: InfoCourse[] = [
  web_layout_info_course,
  // javascript_info_course,
  // typescript_info_course,
  // react_basic_info_course,
  // react_advanced_info_course,
];

export interface Mentor {
  name: string;
  avatarUrl?: string;
  specialization: string;
}

export const mentors: Mentor[] = [
  {
    name: "Митин Олег",
    specialization: "HTML, CSS, SCSS",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Митина Ксения",
    specialization: "JavaScript, TypeScript",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Мухаметшин Роман",
    specialization: "React, Vue",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
];

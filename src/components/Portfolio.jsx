import Project from './Project';

const projects = [
  { title: 'Ecommerce Back End', repo: 'https://github.com/LuisLaplace/e-commerce-back-end.git' },
  { title: 'Nest Cast', img: '/img/NestCast.JPG', live: 'https://mpredelus3.github.io/nest-cast/home.html', repo: 'https://github.com/mpredelus3/nest-cast'},
  { title: 'Task Board', repo: 'https://github.com/LuisLaplace/white-board' },
  { title: 'Employee Payroll Tracker', repo: 'https://github.com/LuisLaplace/employee_rollcall' }
];

const Portfolio = () => (
  <section>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Portfolio;
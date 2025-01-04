import InfoCard from '@/components/custom/card';
import projects from '@/constants/project.info'

export default function Home() {
  return (

    <main className="flex gap-2 justify-center items-center">
      {
        projects.map((project) => (

          <div key={project.id} className="flex flex-col justify-center items-center">
            <InfoCard
              title={project.title}
              description={project.description}
              link={project.link}
              imageUri={project.imageUri}
              githubLink={project.githubLink}
            />
          </div>
        ))
      }
    </main>

  );
}

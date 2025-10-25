import { useParams, Link } from 'react-router-dom';
import ProfileCard from '../compenents/ProflleCard';
import teamMembersData from '../data/data';

const teamMembers = teamMembersData;

export default function TeamMemberPage() {
 const { slug } = useParams();

  const member = teamMembers.find(m => m.slug === slug);

  return (
   
      <div className="">
        
        <ProfileCard
          name={member.name}
          title={member.title}
          bio={member.bio}
          email={member.email}
          phone={member.phone}
          linkedin={member.linkedin}
          imageUrl={member.imageUrl}
        />
      </div>
   
  );
}

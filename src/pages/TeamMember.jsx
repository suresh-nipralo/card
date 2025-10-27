import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../compenents/ProflleCard";
import teamMembersData from "../data/data";

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembersData.find((m) => m.slug === slug);

 
  const formattedTitle =
    slug
      ?.split("-") 
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize
      .join(" ") || "Team Member";

  
  useEffect(() => {
    document.title = `${formattedTitle}`;
  }, [formattedTitle]);

  if (!member) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        <h1>Team Member Not Found</h1>
      </div>
    );
  }

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

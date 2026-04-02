import Avatar from './Avatar';
import './AvatarRow.css';

const TEAM_MEMBERS = [
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', border: '#ff8ec4' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face', border: '#c6f740' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face', border: '#ffe066', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', border: '#7c3aed', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face', border: '#ff6b35' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face', border: '#c6f740', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=300&fit=crop&crop=face', border: '#ff8ec4' },
];

function AvatarRow() {
  return (
    <section className="avatar-row">
      {TEAM_MEMBERS.map((member, index) => (
        <Avatar
          key={index}
          src={member.src}
          alt="Team member"
          size={member.size || 'medium'}
          borderColor={member.border}
        />
      ))}
    </section>
  );
}

export default AvatarRow;

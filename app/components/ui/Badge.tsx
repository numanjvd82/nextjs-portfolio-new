type Props = {
  title: string;
};

const Badge: React.FC<Props> = ({ title }) => {
  return (
    <p className="font-serif text-black p-1 rounded-lg inline-block bg-background text-sm">
      {title}
    </p>
  );
};

export default Badge;

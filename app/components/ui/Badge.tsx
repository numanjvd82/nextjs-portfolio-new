type Props = {
  title: string;
  className?: string;
};

const Badge: React.FC<Props> = ({ title, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
        className ||
        "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20"
      }`}
    >
      {title}
    </span>
  );
};

export default Badge;

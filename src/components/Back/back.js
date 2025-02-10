import Link from 'next/link';

const Back = ({ title, route }) => {
  return (
    <div className="header-container">
      <Link href={`/${route}`} className="header-title">
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default Back;

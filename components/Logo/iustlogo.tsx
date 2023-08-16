import Image from 'next/image';
import Link from 'next/link';
const iustlogo = () => {
  return (
    <div className='logo'>
      <a href='google.com'>
        <Image src='/iustlogo.png' alt='missing' width={200} height={65} />
      </a>
    </div>
  );
};
export default iustlogo;

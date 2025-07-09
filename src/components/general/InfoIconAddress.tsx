import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function InfoIconAddress({title, address, mapLink, className}: {title: string; address: string; mapLink: string, className?: string}) {
  return (
    <div className={`flex items-center text-left w-full px-2.5 p-2.5 ${className}`}>
        <div className="flex justify-center items-center rounded-lg text-primary-dark bg-primary-light w-12 h-12 shrink-0">
            <FontAwesomeIcon icon={faMapLocation} size='lg'/>
        </div>
        {mapLink ?<Link href={ mapLink } className="ms-2.5 text-left">
            <h5 className="text-base font-medium text-text-primary">{title}</h5>
            <div className="text-sm text-text-secondary">{address}</div>
        </Link> :
        <div className="ms-2.5 text-left">
            <h5 className="text-base font-medium text-text-primary">{title}</h5>
            <div className="text-sm text-text-secondary">{address}</div>
        </div>}
    </div>
  )
}
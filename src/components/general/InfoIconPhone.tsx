import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function InfoIconPhone({title, phoneNumber, className}: {title: string; phoneNumber: string, className?: string}){
  return (
    <div className={`flex items-center text-left w-full px-2.5 p-2.5 ${className}`}>
        <div className="flex justify-center items-center rounded-lg text-primary-dark bg-primary-light w-12 h-12 shrink-0">
            <FontAwesomeIcon icon={faPhone} size='lg'/>
        </div>
        <Link href={`tel:${phoneNumber}`} className="ms-2.5 text-left">
            <h5 className="text-base font-medium text-text-primary">{title}</h5>
            <div className="text-sm text-text-secondary">{phoneNumber}</div>
        </Link>
    </div>
  )
}
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InfoIconOpenHours({title, openHours, className}: {title: string; openHours: string, className?: string}) {
  return (
    <div className={`flex items-center text-left w-full px-2.5 p-2.5 ${className}`}>
        <div className="flex justify-center items-center rounded-lg text-primary-dark bg-primary-light w-12 h-12 shrink-0">
            <FontAwesomeIcon icon={faDoorOpen} size='lg'/>
        </div>
        <div className="ms-2.5 text-left">
            <h5 className="text-base font-medium text-text-primary">{title}</h5>
            <div className="text-sm text-text-secondary">{openHours}</div>
        </div>
    </div>
  );
}
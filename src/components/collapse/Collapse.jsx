import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/collapse.scss';

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-header">
                <h2 className="collapse-title">{title}</h2>
                <button className={`collapse-button ${isOpen ? 'rotate' : ''}`} onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faChevronUp}/></button>
            </div>
             <div className={`collapse-content ${isOpen ? 'visible' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Collapse;

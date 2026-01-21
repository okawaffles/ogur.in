import {useTranslation} from "react-i18next";
import './UrlInput.css'

export default function UrlInput({id}: {id: string}) {
    const {t} = useTranslation();

    return (
        <>
            <div className="urlInputContainer">
                <input id={id} type="url" className="urlInput" placeholder={t('url.placeholder')}/>
            </div>
        </>
    )
}
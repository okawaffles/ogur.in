import {useTranslation} from "react-i18next";
import {useRef, useState} from "react";
import UrlInput from "../components/UrlInput.tsx";
import {Turnstile} from "@marsidev/react-turnstile";
import OgurinButton from "../components/OgurinButton.tsx";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import oguri from "../assets/oguri.png";
import LanguageSelect from "../components/LanguageSelect.tsx";

export default function Home() {
    const {t} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [infoIsOpen, setInfoIsOpen] = useState(false);
    const [link, setLink] = useState(t('url.placeholder'));
    const [cf_token, setCfToken] = useState('BAD_TOKEN');

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // @ts-expect-error works fine without an initial value set
    const widget = useRef();

    async function shortenLink() {
        setShowError(false);
        setErrorMessage('');

        const value = (document.getElementById('urlInput') as HTMLInputElement).value;
        const r = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);
        if (!value.match(r)) {
            setShowError(true);
            setErrorMessage(t('error.badUrl'));
            return;
        }

        const response = await fetch('https://api.ogur.in/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: value,
                cf_token
            })
        });

        const result = await response.json();
        if (!result.success) {
            setShowError(true);
            setErrorMessage(t('error.turnstileFail'));
            // @ts-expect-error works fine
            if (widget.current) widget.current.reset();
            return;
        }

        setLink(result.url);
        setIsOpen(true);
    }

    return (
        <>
            <LanguageSelect></LanguageSelect>

            <h1 className={"m-4 text-4xl font-bold"}>ogur.in</h1>
            <h2 className={"text-3xl"}>{t('home.instruction')}</h2>
            <p className={"text-white text-[12px] mb-4"}>{t('misc.affiliation')}</p>

            <UrlInput id={"urlInput"}/>
            <br/>
            { /* @ts-expect-error it works fine */ }
            <Turnstile ref={widget} siteKey={'0x4AAAAAACNgo80bRSrgEKab'} onSuccess={(token) => setCfToken(token)} className={"mt-8"}></Turnstile>
            <br/>
            <OgurinButton onClick={() => shortenLink()} text={t('home.submit')} type={'positive'}></OgurinButton>
            <p className={"text-red-600" + (showError ? '' : 'hidden')}>{errorMessage}</p>


            <Dialog as={"div"} className={"relative z-10 focus:outline-none"} open={isOpen}
                    onClose={() => setIsOpen(false)}>
                <DialogBackdrop className="fixed inset-0 backdrop-blur bg-black bg-opacity-50"/>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition
                                     className={"w-full max-w-md rounded-2xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"}>
                            <DialogTitle as={"h3"}
                                         className={"mt-2 text-3xl text-white font-bold"}>{t('modal.link.title')}</DialogTitle>
                            <p className={"mt-2 text-white"}>{link}</p>
                            <OgurinButton text={t('modal.close')} type={"negative"}
                                          onClick={() => setIsOpen(false)}></OgurinButton>
                            <OgurinButton text={t('modal.link.copy')} type={"positive"}
                                          onClick={() => {
                                              navigator.clipboard.writeText(link)
                                              setIsOpen(false)
                                          }}></OgurinButton>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

            <Dialog as={"div"} className={"relative z-10 focus:outline-none"} open={infoIsOpen}
                    onClose={() => setInfoIsOpen(false)}>
                <DialogBackdrop className="fixed inset-0 backdrop-blur bg-black bg-opacity-50"/>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition
                                     className={"w-full max-w-md rounded-2xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"}>
                            <DialogTitle as={"h3"}
                                         className={"mt-2 text-3xl text-white font-bold"}>{t('modal.info.title')}</DialogTitle>
                            {/* TODO: Figure out how to get git hashes working? */}
                            <p className={"mt-2 text-white"}>ogur.in Version: 1.2.0</p>
                            <OgurinButton text={t('modal.close')} type={"positive"}
                                          onClick={() => setInfoIsOpen(false)}></OgurinButton>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

            <p className="absolute bottom-2 left-2 text-white underline cursor-pointer z-10" onClick={() => setInfoIsOpen(true)}>{t('modal.info.title')}</p>

            <div className="chibi-container">
                <img className={"chibi"} src={oguri} alt="Oguri Cap"/>
            </div>
        </>
    )
}